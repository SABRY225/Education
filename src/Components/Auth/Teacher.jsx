import { useState } from 'react';
import { Link } from 'react-router-dom';
import './TeacherSignUp.css';
// import photoLogin from '../../assets/9829626.jpg';
import axios from 'axios';

function Teacher() {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword:'',
    govenorate: '',
    accountType: 2
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formData);

    // Ensure passwords match before submission
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log(formData);
    const jsonData=JSON.stringify(formData)
    console.log(jsonData);

    try {
    const response=await axios.post('http://localhost:5177/api/Account/register',jsonData)
      console.log(response);
    } catch (error) {
      console.log(error);
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
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className='inputRegister'
              />
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
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

export default Teacher;
