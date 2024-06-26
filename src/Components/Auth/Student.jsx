import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TeacherSignUp.css';
import photoLogin from '../../assets/image3.png';

function Student() {
  const [formData, setFormData] = useState({
    lastname: '',
    firstname: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    governorate: '',
    userImg: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      userImg: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ensure passwords match before submission
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Here you can submit formData to your backend or perform further actions
    console.log(formData);
    // Example: You might use fetch or axios to send this data to your backend
    // fetch('/api/teachers/register', {
    //   method: 'POST',
    //   body: formData
    // })
    // .then(response => response.json())
    // .then(data => console.log('Success:', data))
    // .catch(error => console.error('Error:', error));
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
                name="lastname"
                placeholder="Last Name"
                value={formData.lastname}
                onChange={handleChange}
                required
                className='inputRegister'
              />
              <input
                type="text"
                name="firstname"
                placeholder="First Name"
                value={formData.firstname}
                onChange={handleChange}
                className='inputRegister'
                required
              />
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
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
              name="governorate"
              placeholder="Governorate"
              value={formData.governorate}
              onChange={handleChange}
              required
              className='inputRegister'
              />
            <button type="submit">Register</button>
          </form>
          <p>
            Already have an account? <Link to="/signin">Login</Link>
          </p>
        </div>
        {/* <div className="col-md-6">
          <img src={photoLogin} alt="" className="photoLogin" />
        </div> */}
      </div>
    </div>
  );
}

export default Student;
