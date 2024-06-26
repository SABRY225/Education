import React from 'react';
import './Navbar.css'; // Make sure to import the CSS file
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="Nav">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-3 logo">
                        <i className="fas fa-graduation-cap"></i> 
                        Education
                    </div>
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
                </div>
            </div>
        </div>
    );
}

export default Navbar;
