// CourseCard.js
import './CourseCard.css';
import { Link, useNavigate } from 'react-router-dom';

const CourseCard = ({ imgSrc, courseName, courseId, onEdit, onDelete }) => {
  const navigate = useNavigate();

    const handeledite=()=>{
        navigate(`./${courseId}/editCourse`)
    }
    const handelView=()=>{
        navigate(`./${courseId}`)
    }
    return (
        <>
            <div className="course-image">
                <img src={`http://lms.tryasp.net${imgSrc}`} alt={courseName} />
            </div>
            <h3 className="course-name">{courseName}</h3>
            <div className="course-actions">
                <div className="view-button" onClick={handelView} >
                    <div >عرض الكروس</div>
                </div>
                <div className="edit-button" onClick={handeledite} >
                    <div >تعديل</div>
                </div>
                <div className="delete-button">
                    <div onClick={onDelete} >حذف</div>
                </div>
            </div>

        </>
    );
};

export default CourseCard;
