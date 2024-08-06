import { useEffect, useState } from 'react';
import BookCard from './BookCard';
import { Modal, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import '../Lecture/Style.css';
import axios from 'axios';
import { useSelector } from 'react-redux';
import {baseURL} from '../../../api/axiosInstance'

function Book() {
  const { courseId } = useParams();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [Books, setBooks] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const fetchFun= async()=>{
       const res=await axios.get(`${baseURL}Book/all-in-course?courseId=${courseId}`,{
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
       });
       console.log(res.data);
       setBooks(res.data);
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
    setBooks(Books.filter(course => course.id !== selectedCourse.id));
    handleCloseDeleteModal();
    const res=await axios.delete(`${baseURL}Book?id=${selectedCourse.id}`,{
      headers: {
        'Authorization': `Bearer ${token}`,
      },
     });
     console.log(res.data);
  };

  return (
    <div className='container'>
      <div className="btnAdd">
        <Link to={`/Teacher/${courseId}/addBook`} className='add-button'>
        <i className="fas fa-book"></i> أضافة كتاب 
        </Link>
      </div>
      <div className='text-center bg-light rounded shadow p-5 m-4'>
        <div className="row text-center">
          {Books.map((book, index) => (
            <div className="col-md-12 col-sm-12" key={index}>
              <BookCard
                bookTitle={book.title}
                bookId={book.id}
                onEdit={() => handleEdit(book)}
                onDelete={() => handleShowDeleteModal(book)}
              />
            </div>
          ))}
        </div>
      </div>

      <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>تأكيد الحذف</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center'>هل تريد ازالة الكتاب نهائيا ؟</Modal.Body>
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
export default Book