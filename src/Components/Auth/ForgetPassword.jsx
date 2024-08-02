import './auth.css'; // Ensure this file exists and has styles
import { useNavigate } from 'react-router-dom';
import photoLogin from '../../assets/11729.jpg';
import { useState } from 'react';
import axios from 'axios';

function ForgetPassword() {
  const email=localStorage.getItem('emailForgetPassword')
  const [otp, setOTP] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();
  console.log(email,newPassword,otp);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await axios.put(`http://localhost:5177/Account/reset-password`,{email,newPassword,otp});
        navigate('/signin')

    } catch (error) {
        alert("email not found")
    }
  };

  return (
    <div className="containerSignin">
      <div className="row text-center align-items-center g-0">
        <div className="col-md-6 signin-form">
          <div className="col-md-12 logoForm">
            <i className="fas fa-graduation-cap"></i>
            <span>Education</span>
          </div>
          <form className="w-100" onSubmit={handleSubmit}>
            <div className="col-md-12 form-group">
              <i className="fas fa-envelope iconForm"></i>
              <input
                type="text"
                name='otp'
                id='otp'
                placeholder="       otp"
                className="form-control"
                value={otp}
                onChange={(e) => setOTP(e.target.value)}
                required
              />
            </div>
            <div className="col-md-12 form-group">
              <i className="fas fa-lock iconForm"></i>
              <input
                type="password"
                name="newPassword"
                id="newPassword"
                placeholder="newPassword"
                className="form-control"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
            <div className="col-md-12 form-group">
              <input
                type="submit"
                value="Submit"
                className="btn btn-primary submit-btn"
              />
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <img src={photoLogin} alt="" className='photoLogin' />
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
