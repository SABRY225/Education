import './auth.css'; // Ensure this file exists and has styles
import { useNavigate } from 'react-router-dom';
import photoLogin from '../../assets/11729.jpg';
import { useState } from 'react';
import axios from 'axios';

function SendEmail() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
         const res=await axios.post(`http://localhost:5177/Account/forget-password?email=${email}`);
        console.log(res);
        localStorage.setItem('emailForgetPassword',email)
        navigate('/forget-Password');
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
                type="email"
                name='email'
                id='email'
                placeholder="الرجاء كتابة البريد لاعادة كلمة المرور"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

export default SendEmail;