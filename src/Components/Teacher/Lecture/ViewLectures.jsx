import { useState } from 'react';

function ViewLectures() {
    const [videoSrc, setVideoSrc] = useState('https://www.youtube.com/embed/p3F0IqMQQpg');
    const [lectureName, setLectureName] = useState('تفاضل وتكامل');

    return (
        <div className="container text-center text-black">
            <div className="text-center bg-light rounded shadow p-5 m-4 form-container">
                <div className="row justify-content-center align-items-center g-2">
                    <div className="col">
                        <div className='Box-title'>
                            <span className='Lname-title'>
                                {lectureName}
                            </span>
                            <span className='Icon-title'>
                                <i className="fas fa-book-open"></i>
                            </span>
                        </div>
                        {videoSrc && (
                            <div className="viewVideo-2">
                                <iframe
                                    src={videoSrc}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title="YouTube video player"
                                ></iframe>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewLectures;
