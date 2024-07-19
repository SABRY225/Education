import React from 'react';
import './Navbar.css'; // Make sure to import the CSS file
import { Link } from 'react-router-dom';
import userImg from '../../assets/image.png';

function Navbar() {
    const currentUser = 0; // Assuming currentUser as a boolean value for simplicity
    return (
        <div className="Nav">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-3 logo">
                        <i className="fas fa-graduation-cap"></i>
                        Education
                    </div>
                    {currentUser ? (
                        <div className="col-md-9 d-flex justify-content-end align-items-center">
                            <div className="NameUser">Ahmed Sabry</div>
                            <img src={userImg} alt="User" style={{ width: "50px", marginLeft: "10px" }} />
                        </div>
                    ) : (
                        <div className="col-md-9 register text-end">
                            <div className="col-6 col-md-3 m-1 mb-md-1">
                                <Link to="./signin" className="btn-login">
                                    <i className="fas fa-sign-in-alt"></i> تسجيل الدخول
                                </Link>
                            </div>
                            <div className="col-6 col-md-3 m-1">
                                <Link to="./signup" className="btn-login">
                                    <i className="fas fa-user-plus"></i> انشاء حساب جديد
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
