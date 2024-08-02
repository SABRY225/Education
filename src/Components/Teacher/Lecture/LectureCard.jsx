import { Link, useParams } from 'react-router-dom';

const LectureCard = ({ LectureName,lectureId, onEdit, onDelete }) => {
  const { courseId } = useParams();
  console.log(courseId);
  return (
    <div className="Box-card">
      <h3 className="Box-name">{LectureName}</h3>
      <div className="Box-actions">
        <button onClick={onDelete} className="delete-button-box">
          <i className="fas fa-trash-alt"></i> حذف
        </button>
        <Link to={`/Teacher/${courseId}/${lectureId}/editLecture`} onClick={onEdit} className="edit-button-box">
          <i className="fas fa-edit"></i> تعديل
        </Link>
        <Link to={`/Teacher/${courseId}/${lectureId}/viewLectures`} className="view-button-box">
          <i className="fas fa-eye"></i> عرض
        </Link>
      </div>
    </div>
  );
};

export default LectureCard;
