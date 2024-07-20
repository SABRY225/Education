import './Signin.css'; // Make sure to create this CSS file and include styles
import { Link } from 'react-router-dom';
import  photoLogin  from '../../assets/11729.jpg';
import { useState } from 'react';
import { signInUser } from '../../Redux/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
      e.preventDefault();
      await dispatch(signInUser({ email, password }));
  };

  return (
    <div className="containerSignin">
      <div className="row text-center align-items-center g-0 ">
        <div className="col-md-6 signin-form">
        <div className="col-md-12 logoForm">
          <i className="fas fa-graduation-cap"></i>
          <span>Education</span>
        </div>
        <form className="w-100" onSubmit={handleSubmit}>
          <div className="col-md-12 form-group">
            <i className="fas fa-envelope iconForm"></i>
            <input type="email" name='email' id='email' placeholder="Email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          </div>
          <div className="col-md-12 form-group">
            <i className="fas fa-lock iconForm"></i>
            <input type="password" name="password" id="password" placeholder="Password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required/>
          </div>
          <div className="col-md-12 form-group">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
          <div className="col-md-12 form-group">
            <input type="button" value="Submit" className="btn btn-primary submit-btn"/>
          </div>
          <div className="col-md-12 form-group">
            <span>Don't have an account? <Link to="/signup">Sign Up</Link></span>
          </div>
        </form>
        {auth.error && <p>{auth.error}</p>}
        </div>
        <div className="col-md-6">
          <img src={photoLogin} alt="" className='photoLogin'/>
        </div>
      </div>
    </div>
  );
}

export default Signin;
