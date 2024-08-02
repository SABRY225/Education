import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { verifyOtpCode } from '../../Redux/actions/authActions';
import './auth.css';
import { useNavigate } from 'react-router-dom';

function VerifyRegister() {
  const dispatch = useDispatch();
  const email = localStorage.getItem('email');
  const [otp, setOtp] = useState("");
  const { loading, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res=await dispatch(verifyOtpCode({ email, otp }));
    console.log(res);
    if (res) 
    navigate('/signin');
    
  };

  return (
    <div className="Otp-container">
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
                name="otp"
                placeholder="OTP"
                value={otp}
                onChange={handleOtpChange}
                required
                className="inputRegister"
              />
            </div>
            {loading ? (
              <button type="submit" disabled>
                Verifying...
              </button>
            ) : (
              <button type="submit">Verify</button>
            )}
          </form>
          {error && <div className="error">{error}</div>}
        </div>
      </div>
    </div>
  );
}

export default VerifyRegister;
