import React, { useState } from 'react';

function AddBook() {
    const [BookURL, setBookURL] = useState(null);
    const [BookName, setBookName] = useState('');

    const handleBookUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const bookURL = URL.createObjectURL(file);
            setBookURL(bookURL);
        }
    };

    const handleBookNameChange = (event) => {
        setBookName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // معالجة تقديم النموذج هنا
        console.log('Book URL:', BookURL);
        console.log('Book Name:', BookName);
    };

    return (
        <div className="container text-center text-black">
            <div className="row justify-content-center align-items-center g-2">
                <div className="col Box-title">
                    <span className='Lname-title'>إضافة كتاب للكورس</span>
                    <span className='Icon-title'>
                        <i className="fas fa-book"></i>
                    </span>
                </div>
            </div>

            <form className="text-center bg-light rounded shadow p-5 m-4 form-container" onSubmit={handleSubmit}>
                <div className="row justify-content-center align-items-center g-2">
                    <div className="col">
                        {BookURL && (
                            <div className="viewBook">
                                <a href={BookURL} target="_blank" rel="noopener noreferrer">
                                    {BookName ? BookName : 'عرض الكتاب'}
                                </a>
                            </div>
                        )}
                        <label htmlFor="bookURL">الرجاء تحميل الكتاب</label>
                        <input type="file" name="bookURL" id="bookURL" accept=".pdf,.epub" onChange={handleBookUpload} />

                        <label htmlFor="bookName">اسم الكتاب</label>
                        <input type="text" name="bookName" id="bookName" value={BookName} onChange={handleBookNameChange} />
                    </div>
                </div>
                <div className="row justify-content-center align-items-center g-2">
                    <button type="submit" className="btn btn-primary">إنشاء كتاب جديد</button>
                </div>
            </form>
        </div>
    );
}

export default AddBook;
