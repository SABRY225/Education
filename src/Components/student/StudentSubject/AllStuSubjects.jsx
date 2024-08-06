import React, { useState, useEffect } from 'react';
import axios from 'axios';
import img1 from '.././media/image.png';  
import { useSelector } from 'react-redux';
import {baseURL} from '../../../api/axiosInstance'
function AllStuSubjects() {
  const [subjects, setSubjects] = useState([]);
  const token = useSelector((state) => state.auth.token);
  useEffect(() => {
    axios.get(`${baseURL}Course/all`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        const enrolledCourses = response.data.filter(course => course.isEnrolled);
        setSubjects(enrolledCourses);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [token]);

  return (
    <div className="row rtl fw-normal" style={{ height: '100%' }}>
      {subjects.map((subject, index) => (
        <div key={index} className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
          <div className="p-5 border border-4 border-info rounded m-4">
            <div className="img row">
              <img 
                src={subject.image ? `${baseURL}${subject.image}` : img1} 
                className="w-100" 
                alt={subject.name} 
              />
            </div>
            <p className="subName row justify-content-center py-2 my-2">{subject.name}</p>
            <div className="row justify-content-around py-2 my-2">
              <div className="col-4 fs-md-4 fs-xl-2">{`$${subject.price}`}</div>
              <div className="col-8 fs-md-4 fs-xl-2">{subject.teacher.firstName + ' ' + subject.teacher.lastName}</div>
            </div>
            <div className="row">
              <button className="btn btn-success rounded-5 py-2 my-2">متاح|ادفع</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllStuSubjects;
