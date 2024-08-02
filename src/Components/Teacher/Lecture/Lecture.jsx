import { useEffect, useState } from 'react';
import LectureCard from './LectureCard';
import { Modal, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './Style.css';
import { useSelector } from 'react-redux';
import axios from 'axios';

function Lecture() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [Lectures, setLectures] = useState([]);
  const { courseId } = useParams();
  const [selectedCourse, setSelectedCourse] = useState(null);
  const token = useSelector((state) => state.auth.token);
  
  useEffect(() => {
    const fetchFun= async()=>{
       const res=await axios.get(`http://lms.tryasp.net/Lecture/all-in-course?courseId=${courseId}`,{
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
       });
       console.log(res.data);
       setLectures(res.data);
    }
    fetchFun();

  }, [token,courseId]);
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
  const handleDelete = async() => {
    setLectures(Lectures.filter(course => course.id !== selectedCourse.id));
    handleCloseDeleteModal();
    const res=await axios.delete(`http://lms.tryasp.net/Lecture?id=${selectedCourse.id}`,{
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
     });
     console.log(res.data);
    
  };

  return (
    <div className='container'>
      <div className="btnAdd">
        <Link to={`/Teacher/${courseId}/addLecture`} className='add-button'>
        <i className="fas fa-book-open"></i> أضافة درس 
        </Link>
      </div>
      <div className='text-center bg-light rounded shadow p-5 m-4'>
        <div className="row text-center">
          {Lectures.map((course, index) => (
            <div className="col-md-12 col-sm-12" key={index}>
              <LectureCard
                LectureName={course.name}
                lectureId={course.id}
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
        <Modal.Body className='text-center'>هل تريد ازالة الدرس نهائيا ؟</Modal.Body>
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

export default Lecture;
