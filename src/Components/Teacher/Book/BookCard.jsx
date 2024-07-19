import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ LectureName, onEdit, onDelete }) => {
  return (
    <div className="Box-card">
      <h3 className="Box-name">{LectureName}</h3>
      <div className="Box-actions">
        <button onClick={onDelete} className="delete-button-box">
          <i className="fas fa-trash-alt"></i> حذف
        </button>
        <Link to="/editeBook" onClick={onEdit} className="edit-button-box">
          <i className="fas fa-edit"></i> تعديل
        </Link>
        <Link to="/viewBook" className="view-button-box">
          <i className="fas fa-eye"></i> عرض
        </Link>
      </div>
    </div>
  );
};

export default BookCard