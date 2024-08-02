import './Profile.css'; // Import the CSS file
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCurrentUser, updateUserImg, updateUserInfo } from '../../Redux/actions/authActions'; // Make sure to define these actions
import { setInfoProfile } from '../../Redux/reducers/authSlice';
import userImg from '../../assets/image.png';

function Profile() {
    const firstNameFromState = useSelector((state) => state.auth.firstName);
    const lastNameFromState = useSelector((state) => state.auth.lastName);
    const govenorateFromState = useSelector((state) => state.auth.govenorate);
    const phoneNumberFromState = useSelector((state) => state.auth.phoneNumber);
    const userImage = useSelector((state) => state.auth.image);
    const token = useSelector((state) => state.auth.token);

    const [firstName, setFirstName] = useState(firstNameFromState);
    const [lastName, setLastName] = useState(lastNameFromState);
    const [govenorate, setGovenorate] = useState(govenorateFromState);
    const [phoneNumber, setPhoneNumber] = useState(phoneNumberFromState);
    const [profileImage, setProfileImage] = useState(userImg);
    const [profileImageFile, setProfileImageFile] = useState();
    const [isEditing, setIsEditing] = useState(false);
    const [isEditingImage, setIsEditingImage] = useState(false);
    const [error, setError] = useState('');
    const [imageError, setImageError] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const res = await dispatch(updateUserInfo({ firstName, lastName, govenorate, phoneNumber, token }));
            console.log(res);
            dispatch(setInfoProfile({ firstName, lastName, govenorate, phoneNumber }));
            setIsEditing(false);
        } catch (error) {
            setError('Failed to update user info. Please try again.');
        }
    };

    const handleImageSubmit = async (e) => {
        e.preventDefault();
        setImageError('');
        try {
            const res = await dispatch(updateUserImg({ profileImageFile, token }));
            console.log(res);
            dispatch(fetchCurrentUser(token));
            setIsEditingImage(false);
        } catch (error) {
            setImageError('Failed to update profile image. Please try again.');
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setProfileImage(imageUrl);
            setProfileImageFile(file);
        }
    };

    return (
        <div className="container profile-container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div>
                        {isEditing ? (
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label>الأسم الأول :</label>
                                    <input
                                        type="text"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label>الأسم الأخير :</label>
                                    <input
                                        type="text"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label>المحافظة :</label>
                                    <input
                                        type="text"
                                        value={govenorate}
                                        onChange={(e) => setGovenorate(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label>رقم الهاتف :</label>
                                    <input
                                        type="number"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                    />
                                </div>
                                {error && <p className="alert alert-danger">{error}</p>}
                                <button className='btn' type="submit">
                                    <i className="fas fa-save"></i> Save
                                </button>
                                <button className='btn' type="button" onClick={() => setIsEditing(false)}>
                                    <i className="fas fa-times"></i> Cancel
                                </button>
                            </form>
                        ) : (
                            <div>
                                <p><strong>الأسم الأول:</strong> {firstName}</p>
                                <p><strong>الاسم الأخير:</strong> {lastName}</p>
                                <p><strong>المدينة:</strong> {govenorate}</p>
                                <p><strong>رقم الهاتف:</strong> {phoneNumber}</p>
                                <button className='btn btnChangeData' onClick={() => setIsEditing(true)}>
                                    <i className="fas fa-edit"></i> تغير البيانات الأساسية
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="col-md-12">
                        <img src={userImage?`http://lms.tryasp.net${userImage}`:profileImage} alt="User" className="profile-image" />
                    </div>

                    {isEditingImage ? (
                        <div>
                            <form onSubmit={handleImageSubmit}>
                                <input type="file" onChange={handleImageChange} className='form-control animated-input' />
                                {imageError && <p className="alert alert-danger">{imageError}</p>}
                                <div className="col-md-12">
                                    <button style={{ width: "10vw" }} className='m-2 btn' type="submit">
                                        <i className="fas fa-save"></i> Save
                                    </button>
                                </div>
                                <div className="col-md-12">
                                    <button onClick={() => setIsEditingImage(false)} style={{ width: "10vw" }} className='m-2 btn' type="button">
                                        <i className="fas fa-times"></i> Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    ) : (
                        <div className="col-md-12 btnImg">
                            <button onClick={() => setIsEditingImage(true)} className='btn btnChange'>
                                <i className="fas fa-camera"></i> تغير الصورة الشخصية
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Profile;
