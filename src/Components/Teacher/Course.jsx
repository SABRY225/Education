import React from 'react';
import './Course.css';
import { Link } from 'react-router-dom';

function Course() {
    return (
        <div className="container my-5">
            <div className='text-center bg-light rounded shadow p-5'>
                <div className="row justify-content-center align-items-center g-4 text-black">
                    <div className="col-md-6 text-center text-md-start">
                        <div className="info-box mb-3">
                            <i className="fas fa-user-graduate info-icon"></i>
                            <span className="info-title">الطلاب</span>
                            <span className="info-value">100</span>
                        </div>
                        <div className="info-box mb-3">
                            <i className="fas fa-book-open info-icon"></i>
                            <span className="info-title">الدروس</span>
                            <span className="info-value">10</span>
                        </div>
                        <div className="info-box mb-3">
                            <i className="fas fa-pencil-alt info-icon"></i>
                            <span className="info-title">الامتحانات</span>
                            <span className="info-value">10</span>
                        </div>
                        <div className="info-box">
                            <i className="fas fa-book info-icon"></i>
                            <span className="info-title">الكتب</span>
                            <span className="info-value">10</span>
                        </div>
                    </div>
                    <div className="col-md-6 text-center">
                        <div className="course-name mb-4">اسم الكورس</div>
                        <Link to="/Lectures"  className="btn btn-primary mx-2 my-2">
                            <i className="fas fa-book-open"></i> الدروس
                        </Link>
                        <Link to="/Exams" className="btn btn-secondary mx-2 my-2">
                            <i className="fas fa-pencil-alt"></i> الامتحانات
                        </Link>
                        <Link to="/Books" className="btn btn-success mx-2 my-2">
                            <i className="fas fa-book"></i> الكتب
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Course;
