import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { verifyOtpCode } from '../../Redux/actions/authActions';
import './auth.css';

function VerifyRegister() {
  const dispatch = useDispatch();
  const email = localStorage.getItem('email');
  const [otp, setOtp] = useState("");

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(verifyOtpCode({ email, otp }));
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
            <button type="submit">Verify</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default VerifyRegister;
