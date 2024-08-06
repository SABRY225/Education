import './Navbar.css'; // Make sure to import the CSS file
import { Link, useNavigate } from 'react-router-dom';
import userImg from '../../assets/image.png';
import { useSelector, useDispatch } from 'react-redux';
import { signOutUser } from '../../Redux/actions/authActions';
import {baseURL} from '../../api/axiosInstance'

function Navbar() {
    const firstName = useSelector((state) => state.auth.firstName);
    const role = useSelector((state) => state.auth.roles);
    const lastName = useSelector((state) => state.auth.lastName);
    const currentUser = useSelector((state) => state.auth.isAuthenticated);
    const imgUser = useSelector((state) => state.auth.image);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Logout function
    const handleLogout = () => {
        dispatch(signOutUser());
        navigate('/signin'); // Redirect to the sign-in page after logout
    };

    console.log(role);

    return (
        <div className="Nav">
            <div className="container">
                <div className="row align-items-center">
                    <Link to="/" className="col-md-4 logo">
                        <i className="fas fa-graduation-cap"></i>
                        Education
                    </Link>

                    {currentUser ? (
                        <div className="col-md-8 d-flex justify-content-end align-items-center">
                            {role == "Teacher" ? (
                                <>
                                    <div className="col-md-7">
                                        <Link to="/Teacher" className='DashboardLink' >
                                            Dashboard
                                        </Link>
                                    </div>
                                    <div className="NameUser">{firstName} {lastName}</div>
                                    <Link  to="/Teacher/profile">
                                        <img src={imgUser?`${baseURL}${imgUser}`:userImg} alt="User" style={{ width: "60px",height:"50px",borderRadius:"50%", marginLeft: "10px" }} />
                                    </Link>
                                    <div className="logout-link" onClick={handleLogout}>
                                        تسجيل الخروج
                                    </div>
                                </>
                            ) : (
                                <>
                                        <div className="col-md-7">
                                        <Link to="/Student" className='DashboardLink' >
                                            Dashboard
                                        </Link>
                                        <Link to="/Student/myCourse" className='DashboardLink' >
                                           My Courses
                                        </Link>
                                    </div>
                                    <div className="NameUser">{firstName} {lastName}</div>
                                    <Link to="/Teacher/profile">
                                        <img src={`${userImg}`} alt="User" style={{ width: "50px", marginLeft: "10px" }} />
                                    </Link>
                                    <div className="logout-link" onClick={handleLogout}>
                                        تسجيل الخروج
                                    </div>
                                </>
                            )}
                        </div>
                    ) : (
                        <div className="col-md-8 register text-end">
                            <div className="col-6 col-md-3 m-1 mb-md-1">
                                <Link to="/signin" className="btn-login">
                                    <i className="fas fa-sign-in-alt"></i> تسجيل الدخول
                                </Link>
                            </div>
                            <div className="col-6 col-md-3 m-1">
                                <Link to="/signup" className="btn-login">
                                    <i className="fas fa-user-plus"></i> انشاء حساب جديد
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
