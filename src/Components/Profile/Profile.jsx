import './Profile.css'; // Import the CSS file
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserInfo } from '../../Redux/actions/authActions'; // Make sure to define these actions
import { setInfoProfile } from '../../Redux/reducers/authSlice';
import userImg from '../../assets/image.png';

function Profile() {
    const [firstName, setFirstName] = useState(useSelector((state) => state.auth.firstName));
    const [lastName, setLastName] = useState(useSelector((state) => state.auth.lastName));
    const [govenorate, setGovenorate] = useState(useSelector((state) => state.auth.govenorate));
    const [phoneNumber, setPhoneNumber] = useState(useSelector((state) => state.auth.phoneNumber));

    const [isEditing, setIsEditing] = useState(false);
    const token = useSelector((state) => state.auth.token)
    const dispatch = useDispatch();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const res=await dispatch(updateUserInfo({ firstName, lastName, govenorate, phoneNumber,token }));
        console.log(res);

        dispatch(setInfoProfile({firstName, lastName, govenorate, phoneNumber}))
        setIsEditing(false);
    };

    return (
        <div className="profile-container">
            <h1><img src={userImg} alt="User" style={{ width: "250px", marginLeft: "10px" }} /></h1>
            <div>
                {isEditing ? (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>First Name:</label>
                            <input 
                                type="text" 
                                value={firstName} 
                                onChange={(e) => setFirstName(e.target.value)} 
                            />
                        </div>
                                                <div>
                            <label>First Name:</label>
                            <input 
                                type="text" 
                                value={firstName} 
                                onChange={(e) => setFirstName(e.target.value)} 
                            />
                        </div>
                        <div>
                            <label>Last Name:</label>
                            <input 
                                type="text" 
                                value={lastName} 
                                onChange={(e) => setLastName(e.target.value)} 
                            />
                        </div>
                        <div>
                            <label>Govenorate:</label>
                            <input 
                                type="text" 
                                value={govenorate} 
                                onChange={(e) => setGovenorate(e.target.value)} 
                            />
                        </div>
                        <div>
                            <label>Phone:</label>
                            <input 
                                type="number" 
                                value={phoneNumber} 
                                onChange={(e) => setPhoneNumber(e.target.value)} 
                            />
                        </div>
                        <button type="submit">Save</button>
                        <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
                    </form>
                ) : (
                    <div>
                        <p><strong>First Name:</strong> {firstName}</p>
                        <p><strong>Last Name:</strong> {lastName}</p>
                        <p><strong>Govenorate:</strong> {govenorate}</p>
                        <p><strong>Phone:</strong> {phoneNumber}</p>
                        <button onClick={() => setIsEditing(true)}>Edit Profile</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Profile;
