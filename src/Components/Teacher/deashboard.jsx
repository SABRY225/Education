import { useState, useEffect, useCallback } from 'react';
import CourseCard from './Courses';
import data from "./data/courses";
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useSelector } from 'react-redux';
import axios from 'axios';

function Dashboard() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [Courses, setCourses] = useState(data);
  const [selectedCourse, setSelectedCourse] = useState(null);
  // const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const teacherId = useSelector((state) => state.auth.id);
  const coursesFromStore = useSelector((state) => state.course.coursesByTeacher);

  useEffect(() => {
    const fetchFun= async()=>{
       const res=await axios.get(`http://localhost:5177/Course/teacher-courses?teacherId=${teacherId}`,{
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
       });
       console.log(res.data);
       setCourses(res.data);
    }
    fetchFun();

  }, [token,teacherId]);

  useEffect(() => {
    setCourses(coursesFromStore);
  }, [coursesFromStore]);

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
    if (!selectedCourse) return;
    console.log(selectedCourse.id);
    setCourses((prevCourses) => prevCourses.filter(course => course.id !== selectedCourse.id));
    const fetchCourseData = async () => {
      try {
        await axios.delete(`http://localhost:5177/http://lms.tryasp.net/Course?id=${selectedCourse.id}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
      } catch (error) {
        console.error('Failed to delete the course', error);
      }
    };
    fetchCourseData();
    handleCloseDeleteModal();
  }, [selectedCourse, token, handleCloseDeleteModal]);

  return (
    <div className='container'>
      <div className="btnAdd">
        <Link to="./addCourse" className='add-button'>
          <i className="fas fa-graduation-cap"></i>
          أضافة كورس
        </Link>
      </div>
      <div className="row justify-content-center">
        {Courses.map((course, index) => (
          <div className="col-sm-12 col-md-4 course-card" key={index}>
            <CourseCard
              imgSrc={course.image}
              courseId={course.id}
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
