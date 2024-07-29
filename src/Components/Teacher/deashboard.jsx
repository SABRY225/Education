import { useState, useEffect, useCallback } from 'react';
import CourseCard from './Courses';
import data from "./data/courses";
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GetCourses } from '../../Redux/actions/courseActions';

function Dashboard() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [courses, setCourses] = useState(data);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  
  useEffect(() => {
    dispatch(GetCourses(token));
  }, [dispatch, token]);

  const Courses = useSelector((state) => state.course.courses);
console.log(Courses);
  const handleEdit = useCallback((course) => {
    console.log(course.id);
  }, []);

  const handleShowDeleteModal = useCallback((course) => {
    setSelectedCourse(course);
    setShowDeleteModal(true);
  }, []);

  const handleCloseDeleteModal = useCallback(() => {
    setShowDeleteModal(false);
    setSelectedCourse(null);
  }, []);

  const handleDelete = useCallback(() => {
    setCourses((prevCourses) => prevCourses.filter(course => course.id !== selectedCourse.id));
    handleCloseDeleteModal();
  }, [selectedCourse, handleCloseDeleteModal]);

  return (
    <div className='container'>
      <div className="btnAdd">
        <Link to="./addCourse" className='add-button'>
          <i className="fas fa-graduation-cap"></i>
          أضافة كورس
        </Link>
      </div>
      <div className="row text-center">
        {Courses.map((course, index) => (
          <div className="col-md-4" key={index}>
            <CourseCard
              imgSrc={course.image}
              courseName={course.name}
              onEdit={() => handleEdit(course)}
              onDelete={() => handleShowDeleteModal(course)}
            />
          </div>
        ))}
      </div>
      <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>تأكيد الحذف</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center'>هل تريد ازالة الكنترول نهائيا ؟</Modal.Body>
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

export default Dashboard;
