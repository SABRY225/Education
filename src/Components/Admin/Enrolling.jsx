import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';

function Enrolling() {
  const [studentEmail, setStudentEmail] = useState('');
  const [courseCode, setCourseCode] = useState('');
  const token = useSelector((state) => state.auth.token);

  const handleEnroll = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:5177/Course/enroll',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            studentEmail,
            courseCode,
          },
        }
      );
      toast.success('Student has been enrolled successfully!');
    } catch (error) {

      toast.error('Failed to enroll student');

    }
  };

  return (
    <div className="enrolling-container">
      <ToastContainer />
      <h2>تسجيل طالب في دورة</h2>
      <form onSubmit={handleEnroll}>
        <div className="form-group">
          <label htmlFor="studentEmail">البريد الإلكتروني للطالب</label>
          <input
            type="email"
            id="studentEmail"
            value={studentEmail}
            onChange={(e) => setStudentEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="courseCode">رمز الدورة</label>
          <input
            type="text"
            id="courseCode"
            value={courseCode}
            onChange={(e) => setCourseCode(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="enroll-button">تسجيل</button>
      </form>
    </div>
  );
}

export default Enrolling;
