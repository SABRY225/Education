import React, { useState } from 'react';

function EditeLectures() {
    const [videoSrc, setVideoSrc] = useState('https://youtu.be/p3F0IqMQQpg?si=wR1DEylwsbZuaRSx');
    const [lectureName, setLectureName] = useState('تفاضل وتكامل');

    const handleVideoUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const videoURL = URL.createObjectURL(file);
            setVideoSrc(videoURL);
        }
    };

    const handleLectureNameChange = (event) => {
        setLectureName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // معالجة تقديم النموذج هنا
        console.log('Video URL:', videoSrc);
        console.log('Lecture Name:', lectureName);
    };

    // Helper function to determine if the video is a YouTube URL
    const isYouTubeUrl = (url) => {
        return url.includes('youtube.com') || url.includes('youtu.be');
    };

    // Convert YouTube URL to embeddable URL
    const getYouTubeEmbedUrl = (url) => {
        const videoIdMatch = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i);
        const videoId = videoIdMatch ? videoIdMatch[1] : null;
        return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
    };

    return (
        <div className="container text-center text-black">
            <div className="row justify-content-center align-items-center g-2">
                <div className="col Box-title">
                    <i className="fas fa-book-open"></i>
                    <span> تعديل الدرس</span>
                </div>
            </div>

            <form className="text-center bg-light rounded shadow p-5 m-4 form-container" onSubmit={handleSubmit}>
                <div className="row justify-content-center align-items-center g-2">
                    <div className="col">
                        {videoSrc && (
                            <div className="viewVideo">
                                {isYouTubeUrl(videoSrc) ? (
                                    <iframe
                                        src={getYouTubeEmbedUrl(videoSrc)}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                ) : (
                                    <video src={videoSrc} controls width="600"></video>
                                )}
                            </div>
                        )}
                        <label htmlFor="videoURL">الرجاء تحميل الفيديو</label>
                        <input type="file" name="videoURL" id="videoURL" accept="video/*" onChange={handleVideoUpload} />
                    </div>
                    <div className="col">
                        <label htmlFor="lectureName">اسم الدرس</label>
                        <input type="text" name="lectureName" id="lectureName" value={lectureName} onChange={handleLectureNameChange} />
                    </div>
                </div>
                <div className="row justify-content-center align-items-center g-2">
                    <button type="submit" className="btn btn-primary">تعديل الدرس</button>
                </div>
            </form>
        </div>
    );
}

export default EditeLectures;
