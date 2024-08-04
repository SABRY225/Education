import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

// const lessons = [
//   { id: 1, title: "الدرس 1", subject: "تكامل وتفاضل" },
//   { id: 2, title: "الدرس 2", subject: "جبر خطي" },
//   { id: 3, title: "الدرس 3", subject: "فيزياء" },
//   { id: 4, title: "الدرس 4", subject: "كيمياء" },
//   { id: 5, title: "الدرس 5", subject: "علوم الحاسوب" },
// ];

function AllLessoins() {
  const { courseId } = useParams();
  const [lessons,setlessons]=useState([])
  const token = useSelector((state) => state.auth.token);

   useEffect(()=>{

    const fetchData=async()=>{
     const res=await axios.get(`http://lms.tryasp.net/Lecture/all-in-course?courseId=${courseId}`, {
      headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
      }
  });
  console.log(res.data);
  setlessons(res.data)
    }
    fetchData();
   },[token,courseId])
  return (
    <div style={{ direction: "rtl" }} className="m-5">
      <div className="row text-center" >
        <p className="sectionLessoin w-100 col-xl-2 col-md-3 fs-3 my-2 fw-bold rounded-4 border-4 border-info">
        <FontAwesomeIcon icon={faChalkboardTeacher} className="me-2" />&nbsp;&nbsp;
          الدروس
        </p>
      </div>
       <div className="row justify-content-center">
      <div
        className="col-10 border border-secondary-subtle border-4 rounded-4 my-3 p-4 "
        style={{ minHeight: "60vh" }}
      >
        {lessons.map((lesson,index) => (
          <div key={index} className="mt-3">
            <Link
              to={`/Student/${courseId}/${lesson.id}`}
              className="row rounded-4 border-4 btn btn-outline-info"
              style={{ color: "black", marginTop: "10px" }}
            >
              <div className="col-2 fs-4">
              <FontAwesomeIcon icon={faChalkboardTeacher} className="me-2" />&nbsp;&nbsp;  
              </div>
              <div className="col-10 text-end">{lesson.name}</div>
            </Link>
          </div>
        ))}
      </div>        
       </div>

    </div>
  );
}

export default AllLessoins;
