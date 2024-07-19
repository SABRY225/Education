import React, { useState } from 'react';

function ViewBook() {
    const [BookSrc, setBookSrc] = useState('blob:http://localhost:5173/6eaac059-d487-412f-8959-60cdda9a9cd9');
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
                                <i className="fas fa-book"></i>
                            </span>
                        </div>
                        {BookSrc && (
                            <div className="viewBook">
                                <iframe
                                    src={BookSrc}
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title="Embedded Book"
                                    style={{
                                        width: '100%',
                                        height: '500px',
                                        border: 'none'
                                    }}
                                    sandbox="allow-same-origin allow-scripts"
                                ></iframe>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewBook;
