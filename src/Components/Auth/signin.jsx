import React from 'react';
import './Signin.css'; // Make sure to create this CSS file and include styles
import { Link } from 'react-router-dom';
import  photoLogin  from '../../assets/11729.jpg';

function Signin() {
  return (
    <div className="containerSignin">
      <div className="row text-center align-items-center g-0 ">
        <div className="col-md-6 signin-form">
        <div className="col-md-12 logoForm">
          <i className="fas fa-graduation-cap"></i>
          <span>Education</span>
        </div>
        <form className="w-100">
          <div className="col-md-12 form-group">
            <i className="fas fa-envelope iconForm"></i>
            <input type="email" name='email' id='email' placeholder="Email" className="form-control"/>
          </div>
          <div className="col-md-12 form-group">
            <i className="fas fa-lock iconForm"></i>
            <input type="password" name="password" id="password" placeholder="Password" className="form-control"/>
          </div>
          <div className="col-md-12 form-group">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
          <div className="col-md-12 form-group">
            <input type="button" value="Submit" className="btn btn-primary submit-btn"/>
          </div>
          <div className="col-md-12 form-group">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </div>
        </form>
        </div>
        <div className="col-md-6">
          <img src={photoLogin} alt="" className='photoLogin'/>
        </div>
      </div>
    </div>
  );
}

export default Signin;
