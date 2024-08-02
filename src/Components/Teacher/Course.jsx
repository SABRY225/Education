import { useEffect, useState } from 'react';
import './Course.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

function Course() {
    const { courseId } = useParams();
    const [numOfStudent, setStudent] = useState(0);
    const [numOfBook, setBook] = useState(0);
    const [numOfExam, setExam] = useState(0);
    const [numOfLesson, setLesson] = useState(0);
    const [nameCours, setNameCours] = useState('');
    const token = useSelector((state) => state.auth.token);

    useEffect(() => {
        const fetchCourseData = async () => {
            try {
                const response = await axios.get(`http://lms.tryasp.net/Course/students-count-in-course?courseId=${courseId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data',
                    }
                });
                setStudent(response.data);

                const response2 = await axios.get(`http://lms.tryasp.net/Book/num-of-books?courseId=${courseId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data',
                    }
                });
                setBook(response2.data);

                const response3 = await axios.get(`http://lms.tryasp.net/Exam/num-of-exams?courseId=${courseId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data',
                    }
                });
                setExam(response3.data);

                const response4 = await axios.get(`http://lms.tryasp.net/Lecture/num-of-Lectures?courseId=${courseId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data',
                    }
                });
                setLesson(response4.data);

                const response5 = await axios.get(`http://lms.tryasp.net/Course/by-id?id=${courseId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data',
                    }
                });
                console.log(response5.data.name);
                setNameCours(response5.data.name);
            } catch (error) {
                console.error('Error fetching course data:', error);
            }
        };

        fetchCourseData();
    }, [courseId, token]);

    return (
        <div className="container my-5">
            <div className='text-center bg-light rounded shadow p-5'>
                <div className="row justify-content-center align-items-center g-4 text-black">
                    <div className="col-md-6 text-center text-md-start">
                        <div className="info-box mb-3">
                            <i className="fas fa-user-graduate info-icon"></i>
                            <span className="info-title">الطلاب</span>
                            <span className="info-value">{numOfStudent}</span>
                        </div>
                        <div className="info-box mb-3">
                            <i className="fas fa-book-open info-icon"></i>
                            <span className="info-title">الدروس</span>
                            <span className="info-value">{numOfLesson}</span>
                        </div>
                        <div className="info-box mb-3">
                            <i className="fas fa-pencil-alt info-icon"></i>
                            <span className="info-title">الامتحانات</span>
                            <span className="info-value">{numOfExam}</span>
                        </div>
                        <div className="info-box">
                            <i className="fas fa-book info-icon"></i>
                            <span className="info-title">الكتب</span>
                            <span className="info-value">{numOfBook}</span>
                        </div>
                    </div>
                    <div className="col-md-6 text-center">
                        <div className="course-name mb-4">{nameCours}</div>
                        <Link to='./Lectures' className="btn btn-primary mx-2 my-2">
                            <i className="fas fa-book-open"></i> الدروس
                        </Link>
                        <Link to='./Exams' className="btn btn-secondary mx-2 my-2">
                            <i className="fas fa-pencil-alt"></i> الامتحانات
                        </Link>
                        <Link to='./Books'  className="btn btn-success mx-2 my-2">
                            <i className="fas fa-book"></i> الكتب
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Course;
