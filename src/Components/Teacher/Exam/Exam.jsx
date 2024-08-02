import { useState } from 'react';
import ExamCard from './ExamCard';
import data from '../data/courses';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Lecture/Style.css';

function Exam() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [courses, setCourses] = useState(data);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleEdit = (course) => {
    console.log(course.id);
  };

  const handleShowDeleteModal = (course) => {
    setSelectedCourse(course);
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setSelectedCourse(null);
  };

  const handleDelete = () => {
    setCourses(courses.filter(course => course.id !== selectedCourse.id));
    handleCloseDeleteModal();
  };

  return (
    <div className='container'>
      <div className="btnAdd">
        <Link to="/addExam" className='add-button'>
        <i className="fas fa-pencil-alt"></i>  أضافة امتحان 
        </Link>
      </div>
      <div className='text-center bg-light rounded shadow p-5 m-4'>
        <div className="row text-center">
          {courses.map((course, index) => (
            <div className="col-md-12 col-sm-12" key={index}>
              <ExamCard
                LectureName={course.name}
                onEdit={() => handleEdit(course)}
                onDelete={() => handleShowDeleteModal(course)}
              />
            </div>
          ))}
        </div>
      </div>

      <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>تأكيد الحذف</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center'>هل تريد ازالة الامتحان نهائيا ؟</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeleteModal}>
            إلغاء
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            حذف
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Exam