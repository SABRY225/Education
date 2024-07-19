import React, { useState } from 'react';

function EditeBook() {
    const [bookURL, setBookURL] = useState('blob:http://localhost:5173/354416bd-91d7-4dae-b944-81af5a509f99');
    const [bookName, setBookName] = useState('');

    const handleBookUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setBookURL(url);
        }
    };

    const handleBookNameChange = (event) => {
        setBookName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // معالجة تقديم النموذج هنا
        console.log('Book URL:', bookURL);
        console.log('Book Name:', bookName);
    };

    return (
        <div className="container text-center text-black">
            <div className="row justify-content-center align-items-center g-2">
                <div className="col Box-title">
                    <span className="Lname-title">تعديل الكتاب </span>
                    <span className="Icon-title">
                        <i className="fas fa-book"></i>
                    </span>
                </div>
            </div>

            <form className="text-center bg-light rounded shadow p-5 m-4 form-container" onSubmit={handleSubmit}>
                <div className="row justify-content-center align-items-center g-2">
                    <div className="col">
                        {bookURL && (
                            <div className="viewBook">
                                <a href={bookURL} target="_blank" rel="noopener noreferrer">
                                    {bookName ? bookName : 'عرض الكتاب'}
                                </a>
                            </div>
                        )}
                        <label htmlFor="bookURL">الرجاء تحميل الكتاب</label>
                        <input type="file" name="bookURL" id="bookURL" accept=".pdf,.epub" onChange={handleBookUpload} />

                        <label htmlFor="bookName">اسم الكتاب</label>
                        <input type="text" name="bookName" id="bookName" value={bookName} onChange={handleBookNameChange} />
                    </div>
                </div>
                <div className="row justify-content-center align-items-center g-2">
                    <button type="submit" className="btn btn-primary">تعديل الكتاب </button>
                </div>
            </form>
        </div>
    );
}

export default EditeBook;
