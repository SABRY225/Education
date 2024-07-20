import { Link } from 'react-router-dom';
import './auth.css';

function SignUp() {
  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-option">
          <Link to="./teacher" className="signup-link">
            <i className="fas fa-chalkboard-teacher signup-icon"></i>
            معلم
          </Link>
        </div>
        <div className="signup-option">
          <Link to="./student" className="signup-link">
            <i className="fas fa-user-graduate signup-icon"></i>
            طالب
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
