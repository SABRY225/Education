// CourseCard.js
import './CourseCard.css';
import { Link } from 'react-router-dom';

const CourseCard = ({ imgSrc, courseName,courseId, onEdit, onDelete }) => {
    return (
        
        <div className="course-card">
            <img src={imgSrc} alt={courseName} className="course-image" />
            <Link to={`./${courseId}`}><h3 className="course-name ">{courseName}</h3></Link>
        <div className="course-actions">
                <Link to={`./${courseId}/editCourse`} onClick={onEdit} className="edit-button">تعديل</Link>
                <button onClick={onDelete} className="delete-button">حذف</button>
            </div>
        </div>

    );
};

export default CourseCard;
