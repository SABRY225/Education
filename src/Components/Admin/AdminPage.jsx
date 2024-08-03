import React, { useState } from 'react';
import './AdminPage.css';
import Statistics from './Statistics';
import Enrolling from './Enrolling';

function AdminPage() {
  const [activeComponent, setActiveComponent] = useState('statistics');

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
        <button className="logout-button">تسجيل خروج</button>
      </div>
      <div className="content">
        {activeComponent === 'statistics' && <Statistics />}
        {activeComponent === 'enrolling' && <Enrolling />}
      </div>
    </div>
  );
}

export default AdminPage;
