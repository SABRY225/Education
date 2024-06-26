import React from 'react';
import aboutimg from '../../assets/image0.png';
import './About.css';

function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <img src={aboutimg} alt="About" className="img-about animate-img" />
          </div>
          <div className="col-md-6">
            <h1 className="about-title animate-header text-end">
              <i className="fas fa-info-circle icon-title "></i>من نحن 
            </h1>
            <p className="about-text animate-text">
              منصة تعلم هي منصة تعليمية تستهدف جميع الفئات من الصف الأول الابتدائي إلى الصف الثالث الثانوي وتقديم محتوى تعليمي يليق بالطالب وتحقيق حلم الوصول إلى مبتغاه في المستقبل.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
