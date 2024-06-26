import React from 'react';
import './Footer.css'; // Make sure to import the CSS file for Footer styling

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="social-icons">
                    <span className="m-2">
                        <a href="https://www.facebook.com">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                    </span>
                    <span className="m-2">
                        <a href="https://www.youtube.com">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </span>
                    <span className="m-2">
                        <a href="https://www.twitter.com">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </span>
                </div>
                <div className="row about-section">
                    <h3 className="about-title">
                        تم صنع هذه المنصة بهدف تهيئة الطالب لـ كامل جوانب المراحل التعليمية سواء كانت الابتدائية او الاعدادية او الثانوية
                    </h3>
                </div>
                <div className="row copyright">
                    <span>تطوير بواسطة: <a href="">شركة خلف البرجين</a>  - جميع الحقوق محفوظة &copy; 2024</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
