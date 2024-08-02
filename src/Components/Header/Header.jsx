import './Header.css';
import person from '../../assets/person.png';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Header() {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [student, setStudent] = useState(0);
  const [teacher, setTeacher] = useState(0);
  const [course, setCourse] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const studentResponse = await axios.get(`http://localhost:5177/Student/count`);
        const teacherResponse = await axios.get(`http://localhost:5177/Teacher/count`);
        const courseResponse = await axios.get(`http://localhost:5177/Course/count`);
        console.log(courseResponse.data);
        setStudent(studentResponse.data);
        setTeacher(teacherResponse.data);
        setCourse(courseResponse.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, [dispatch, token]);
  return (
    <div className="header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5 text-center">
            <h1 className='headerText animate-header'>مــــنصة متخــــصــــصــــة في كل شئ</h1>
            <div className='row mt-4'>
              <div className="col-4 text-center stats">
                <i className="fas fa-graduation-cap icon icon-1 animate-icon"></i>
                <div className="stat-value animate-icon">{course}</div>
                <div className="stat-label animate-icon">الكورسات</div>
              </div>
              <div className="col-4 text-center stats">
                <i className="fas fa-users icon icon-2 animate-icon"></i>
                <div className="stat-value animate-icon">{student}</div>
                <div className="stat-label animate-icon">الطلاب</div>
              </div>
              <div className="col-4 text-center stats">
                <i className="fas fa-chalkboard-teacher icon icon-3 animate-icon"></i>
                <div className="stat-value animate-icon">{teacher}</div>
                <div className="stat-label animate-icon">المدرسين</div>
              </div>
            </div>
          </div>
          <div className="col-md-7 text-center text-md-end">
            <img src={person} alt="Person" className='imgPerson animate-img' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
