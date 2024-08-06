import { useState, useEffect } from 'react';
import axios from 'axios';
import ExamCard from './ExamCard';
import { Modal, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import '../Lecture/Style.css';
import { useSelector } from 'react-redux';
import {baseURL} from '../../../api/axiosInstance'

function Exam() {
  const { courseId } = useParams();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [exams, setExams] = useState([]);
  const [selectedExam, setSelectedExam] = useState(null);
  const token = useSelector((state) => state.auth.token);

  // Fetch exams when component mounts or courseId changes
  useEffect(() => {
    const fetchExams = async () => {
      try {
        const response = await axios.get(`${baseURL}Exam/all-in-course?courseId=${courseId}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        setExams(response.data);
      } catch (error) {
        console.error('Error fetching exams:', error);
      }
    };

    fetchExams();
  }, [courseId, token]);

  const handleEdit = (exam) => {
    console.log(exam.id);
    // Implement editing logic here
  };

  const handleShowDeleteModal = (exam) => {
    setSelectedExam(exam);
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setSelectedExam(null);
  };

  const handleDelete = async () => {
    if (selectedExam) {
      try {
        await axios.delete(`${baseURL}Exam?id=${selectedExam.id}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        setExams(exams.filter(exam => exam.id !== selectedExam.id));
        handleCloseDeleteModal();
      } catch (error) {
        console.error('Error deleting exam:', error);
        // Optionally show an error message
      }
    }
  };

  return (
    <div className='container'>
      <div className="btnAdd">
        <Link to={`/Teacher/${courseId}/addExam`} className='add-button'>
          <i className="fas fa-pencil-alt"></i> أضافة امتحان 
        </Link>
      </div>
      <div className='text-center bg-light rounded shadow p-5 m-4'>
        <div className="row text-center">
          {exams.map((exam) => (
            <div className="col-md-12 col-sm-12" key={exam.id}>
              <ExamCard
                examId={exam.id}
                LectureName={exam.name}
                onEdit={() => handleEdit(exam)}
                onDelete={() => handleShowDeleteModal(exam)}
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

export default Exam;
