import React, { useState } from 'react';

function AddLectures() {
    const [videoSrc, setVideoSrc] = useState(null);
    const [lectureName, setLectureName] = useState('');

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

    return (
        <div className="container text-center text-black">
            .<div
                class="row justify-content-center align-items-center g-2"
            >
                <div class="col Box-title">
                    <span className='Lname-title'>
                        اضافة درس  للكورس
                    </span>
                    <span className='Icon-title'>
                    <i className="fas fa-book-open"></i>
                    </span>
                </div>
            </div>

            <form className="text-center bg-light rounded shadow p-5 m-4 form-container" onSubmit={handleSubmit}>
                <div className="row justify-content-center align-items-center g-2">
                    <div className="col">
                        {videoSrc && (
                            <div className="viewVideo">
                                <video src={videoSrc} controls></video>
                            </div>
                        )}
                        <label htmlFor="videoURL">الرجاء تحميل الفيديو</label>
                        <input type="file" name="videoURL" id="videoURL" accept="video/*" onChange={handleVideoUpload} />

                        <label htmlFor="lectureName">اسم الدرس</label>
                        <input type="text" name="lectureName" id="lectureName" value={lectureName} onChange={handleLectureNameChange} />
                    </div>
                </div>
                <div className="row justify-content-center align-items-center g-2">
                    <button type="submit" className="btn btn-primary">انشاء درس جديد</button>
                </div>
            </form>
        </div>
    );
}

export default AddLectures;
