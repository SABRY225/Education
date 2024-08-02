import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './auth.css';
import axios from 'axios';

function Teacher() {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    govenorate: '',
    accountType: 0
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    // Ensure passwords match before submission
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const res = await axios.post('http://lms.tryasp.net/Account/register', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(res);

      // If the response is successful, navigate to the verifyRegister page
      if (res.status === 200 || res.status === 201) {
       localStorage.setItem('email',formData.email);
        navigate('/signup/verifyRegister');
      } else {
        alert('Registration failed');
      }
    } catch (error) {
      console.error("Error submitting form:", error.message);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="Teacher-container">
      <div className="row text-center align-items-center card-register g-0">
        <div className="col-md-12">
          <div className="col-md-12 logoForm text-center">
            <i className="fas fa-graduation-cap"></i>
            <span>Education</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className='inputRegister'
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className='inputRegister'
              />
            </div>
            <div>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className='inputRegister'
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className='inputRegister'
              />
            </div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className='inputRegister'
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className='inputRegister'
            />
            <input
              type="text"
              name="govenorate"
              placeholder="Governorate"
              value={formData.govenorate}
              onChange={handleChange}
              required
              className='inputRegister'
            />
            <button className='btn' type="submit">Register</button>
          </form>
          <p>
            Already have an account? <Link to="/signin">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Teacher;
