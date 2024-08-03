import React, { useState } from 'react';
import './AdminPage.css';
import Statistics from './Statistics';
import Enrolling from './Enrolling';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function AdminPage() {
  const [activeComponent, setActiveComponent] = useState('statistics');

  const dispatch = useDispatch();
    const navigate = useNavigate();

    // Logout function
    const handleLogout = () => {
        dispatch(signOutUser());
        navigate('/signin'); // Redirect to the sign-in page after logout
    };
  const handleComponentChange = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="admin-page">
      <div className="sidebar">
        <div className="logo">
          {/* يمكنك استبدال هذا النص بالصورة الخاصة بالشعار */}
          <img src="/path/to/logo.png" alt="Logo" />
        </div>
        <button onClick={() => handleComponentChange('statistics')}>الإحصائيات</button>
        <button onClick={() => handleComponentChange('enrolling')}>تسجيل طلاب</button>
        <button className="logout-button" onClick={handleLogout}>تسجيل خروج</button>
      </div>
      <div className="content">
        {activeComponent === 'statistics' && <Statistics />}
        {activeComponent === 'enrolling' && <Enrolling />}
      </div>
    </div>
  );
}

export default AdminPage;
