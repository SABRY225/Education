import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import "../Lecture/Style.css"
function AddBook() {
  const { courseId } = useParams();
  const [BookURL, setBookURL] = useState(null);
  const [BookName, setBookName] = useState('');
  const [formData, setFormData] = useState({
    Book: null,
    Title: '',
  });
  const token = useSelector((state) => state.auth.token);

  const handleBookUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const bookURL = URL.createObjectURL(file);
      setBookURL(bookURL);
      setFormData({ ...formData, Book: file });
    }
  };

  const handleBookNameChange = (event) => {
    setBookName(event.target.value);
    setFormData({ ...formData, Title: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('CourseId', courseId);
    formDataToSend.append('Book', formData.Book);
    formDataToSend.append('Title', formData.Title);

    try {
      const res = await axios.post('http://lms.tryasp.net/Book', formDataToSend, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      if (res.status === 200) {
        alert(res.data);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit the lecture. Please try again.');
    }
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

      <form className="text-center bg-light rounded shadow p-5 form-container sectionBook" onSubmit={handleSubmit}>
        <div className="row justify-content-center align-items-center g-2 ">
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
