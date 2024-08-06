import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faUserTie, faChalkboardTeacher, faBook } from '@fortawesome/free-solid-svg-icons';
import {baseURL} from '../../api/axiosInstance'

function Statistics() {
  const [studentsCount, setStudentsCount] = useState(0);
  const [enrolledStudentsCount, setEnrolledStudentsCount] = useState(0);
  const [coursesCount, setCoursesCount] = useState(0);
  const [teachersCount, setTeachersCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const studentsCountRes = await axios.get(`${baseURL}Student/count`);
        setStudentsCount(studentsCountRes.data);

        const enrolledStudentsCountRes = await axios.get(`${baseURL}Student/enrolled-count`);
        setEnrolledStudentsCount(enrolledStudentsCountRes.data);

        const coursesCountRes = await axios.get(`${baseURL}Course/count`);
        setCoursesCount(coursesCountRes.data);

        const teachersCountRes = await axios.get(`${baseURL}Teacher/count`);
        setTeachersCount(teachersCountRes.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="statistics-container">
      <div className="statistic-card">
        <FontAwesomeIcon icon={faUserGraduate} size="3x" />
        <h3>عدد الطلاب</h3>
        <p>{studentsCount}</p>
      </div>
      <div className="statistic-card">
        <FontAwesomeIcon icon={faUserTie} size="3x" />
        <h3>الطلاب المسجلين</h3>
        <p>{enrolledStudentsCount}</p>
      </div>
      <div className="statistic-card">
        <FontAwesomeIcon icon={faChalkboardTeacher} size="3x" />
        <h3>عدد الدورات</h3>
        <p>{coursesCount}</p>
      </div>
      <div className="statistic-card">
        <FontAwesomeIcon icon={faBook} size="3x" />
        <h3>عدد المعلمين</h3>
        <p>{teachersCount}</p>
      </div>
    </div>
  );
}

export default Statistics;
