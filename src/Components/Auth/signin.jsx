import './auth.css'; // Ensure this file exists and has styles
import { Link, useNavigate } from 'react-router-dom';
import photoLogin from '../../assets/11729.jpg';
import { useState, useEffect } from 'react';
import { fetchCurrentUser, signInUser } from '../../Redux/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const roles = useSelector((state) => state.auth.roles);
  // const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();
  useEffect(() => {
    if (auth.isAuthenticated) {
      if (roles == "Student") {
        navigate('/Student');
      } else if (roles == "Teacher"){
        navigate('/Teacher'); // Adjust as needed
      } else {
        navigate('/Admin'); // Adjust as needed
      }
    }
  }, [auth, roles, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await dispatch(signInUser({ email, password }));
    console.log(email, password);
    console.log('res : ', res.payload.token);
    const res2 = await dispatch(fetchCurrentUser(res.payload.token));
    if (signInUser.fulfilled.match(res)) {
      console.log('res2 : ', res2);
    } else {
      console.error('Login failed: ', res);
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
                placeholder="Email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="col-md-12 form-group">
              <i className="fas fa-lock iconForm"></i>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="col-md-12 form-group">
              <Link to="/sendEmail">Forgot Password?</Link>
            </div>
            <div className="col-md-12 form-group">
              <input
                type="submit"
                value="Submit"
                className="btn btn-primary submit-btn"
              />
            </div>
            <div className="col-md-12 form-group">
              <span>Not have an account? <Link to="/signup">Sign Up</Link></span>
            </div>
          </form>
          {auth.error && <p>{auth.error}</p>}
        </div>
        <div className="col-md-6">
          <img src={photoLogin} alt="" className='photoLogin' />
        </div>
      </div>
    </div>
  );
}

export default Signin;
