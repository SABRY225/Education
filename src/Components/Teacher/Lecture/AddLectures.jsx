import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function AddLectures() {
  const { courseId } = useParams();
  const [formData, setFormData] = useState({
    Lecture: null,
    Name: '',
  });
  const [error, setError] = useState('');
  const token = useSelector((state) => state.auth.token);

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const videoURL = URL.createObjectURL(file);
      setFormData((prevData) => ({ ...prevData, Lecture: file, videoURL }));
    }
  };

  const handleNameChange = (event) => {
    setFormData((prevData) => ({ ...prevData, Name: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    const formDataToSend = new FormData();
    formDataToSend.append('CourseId', courseId);
    formDataToSend.append('Lecture', formData.Lecture);
    formDataToSend.append('Name', formData.Name);

    try {
      const res = await axios.post('http://lms.tryasp.net/Lecture', formDataToSend, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
     
      if (res.status === 200) {
        alert(res.data);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError('Failed to submit the lecture. Please try again.');
    }
  };

  return (
    <div className="container text-center text-black">
      <div className="row justify-content-center align-items-center g-2">
        <div className="col Box-title">
          <span className='Lname-title'>اضافة درس للكورس</span>
          <span className='Icon-title'>
            <i className="fas fa-book-open"></i>
          </span>
        </div>
      </div>

      <form className="text-center bg-light rounded shadow p-5 m-4 form-container" onSubmit={handleSubmit}>
        <div className="row justify-content-center align-items-center g-2">
          <div className="col">
            {formData.videoURL && (
              <div>
                <video className="viewVideo" src={formData.videoURL} controls></video>
              </div>
            )}
            <label htmlFor="videoURL">الرجاء تحميل الفيديو</label>
            <input type="file" name="videoURL" id="videoURL"onChange={handleVideoUpload} />

            <label htmlFor="Name">اسم الدرس</label>
            <input type="text" name="Name" id="Name" value={formData.Name} onChange={handleNameChange} />
          </div>
        </div>
        <div className="row justify-content-center align-items-center g-2">
          <button type="submit" className="btn btn-primary">انشاء درس جديد</button>
        </div>
        {error && (
          <div className="row justify-content-center align-items-center g-2">
            <div className="col">
              <p className="text-danger">{error}</p>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default AddLectures;
