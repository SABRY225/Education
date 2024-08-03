import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faQuestionCircle, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';

export default function ShowStuSubject() {
  // props coming from AllStuSubject component
  const { courseId } = useParams();
  console.log(courseId);
  const token = useSelector((state) => state.auth.token);
  const [course,setCourse]=useState([]);
  const [teacher,setTeacher]=useState([]);
  console.log(course);
  useEffect(() => {
    const fetchCourseData = async () => {
        try {
            const response5 = await axios.get(`http://lms.tryasp.net/Course/by-id?id=${courseId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                }
            });
            console.log(response5.data);
            setCourse(response5.data);
            setTeacher(response5.data.teacher)
        } catch (error) {
            console.error('Error fetching course data:', error);
        }
    };

    fetchCourseData();
}, [courseId, token]);

  return (
    <>
      {/* Show subject info for student */}
      <div className="row justify-content-center py-4">
        {/* Info */}
        <div
          className="row border border-4 rounded-4 border-info fs-3"
          style={{ width: "68vw" }}
        >
          {/* Subject photo */}
          <div className="col-sm-12 col-md-12 col-xl-4">
            <img src={`http://lms.tryasp.net${course.image}`} alt="Subject" className="w-100 m-4 rounded-4" />
          </div>
          {/* Side info for subject */}
          <div className="col-sm-12 col-md-12 col-xl-8 text-end">
            <div className="row justify-content-end p-4">
              <div className="col-8">{course.materialName}</div>
              <div className="btnTitleSectionCourse col-3 btn btn-dark text-light rounded-5">الماده</div>
            </div>
            <div className="row justify-content-end p-4">
              <div className="col-8">{teacher.firstName} {teacher.lastName}</div>
              <div className="btnTitleSectionCourse col-3 btn btn-dark text-light rounded-5">المدرس</div>
            </div>
            <div className="row justify-content-end p-4">
              <div className="col-8">{course.level}</div>
              <div className="btnTitleSectionCourse col-3 btn btn-dark text-light rounded-5">المستوي</div>
            </div>
            <div className="row justify-content-end p-4">
              <div className="col-8">{course.semester} </div>
              <div className="btnTitleSectionCourse col-3 btn btn-dark text-light rounded-5 ">الفصل الدراسي</div>
            </div>
            <div className="row justify-content-end p-4">
              <div className="col-8 row justify-content-end">
                {course.evaluation===0? <span>&#9734;&#9734;&#9734;&#9734;&#9734;</span>:" "}
                {course.evaluation===1? <span>&#9734;&#9734;&#9734;&#9734;&#9733;</span>:" "}
                {course.evaluation===2? <span>&#9734;&#9734;&#9734;&#9733;&#9733;</span>:" "}
                {course.evaluation===3? <span>&#9734;&#9734;&#9733;&#9733;&#9733;</span>:" "}
                {course.evaluation===4? <span>&#9734;&#9733;&#9733;&#9733;&#9733;</span>:" "}
                {course.evaluation===5? <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>:" "}
              </div>
              <div className="btnTitleSectionCourse col-3 btn btn-dark text-light rounded-5 ">التقييم</div>
            </div>
            <div className="row justify-content-end p-4">
              <div className="col-8">{course.code}</div>
              <div className="btnTitleSectionCourse col-3 btn btn-dark text-light rounded-5 ">الكود</div>
            </div>
            <div className="row justify-content-end p-4">
              <div className="col-8">{course.price}</div>
              <div className="btnTitleSectionCourse col-3 btn btn-dark text-light rounded-5 ">السعر</div>
            </div>
          </div>
        </div>
        <div className="row p-5 justify-content-around">
      <Link
        to={`./booksOfCourse`}
        className="btnLinkSectionCourse col-xl-3 col-md-8 fs-3 my-2 fw-bold rounded-4 border-4 btn "
      >
        <FontAwesomeIcon icon={faBook} className="me-2" /> الكتب والملفات
      </Link>
      <Link
        to={`./quizeOfCourse`}
        className="btnLinkSectionCourse col-xl-3 col-md-8 fs-3 my-2 fw-bold rounded-4 border-4 btn "
      >
        <FontAwesomeIcon icon={faQuestionCircle} className="me-2" /> الاختبارات
      </Link>
      <Link
        to={`./lessoinsOfCourse`}
        className="btnLinkSectionCourse col-xl-3 col-md-8 fs-3 my-2 fw-bold rounded-4 border-4 btn "
      >
        <FontAwesomeIcon icon={faChalkboardTeacher} className="me-2" /> الدروسي
      </Link>
    </div>

        {/* Your evaluation for the course */}
        <div className="row justify-content-end">
          <div className="col-2 fs-3 p-4" style={{ color: "red" }}>
            تقييمك للكورس
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-6 px-5 col-md-12 justify-content-evenly row">
            <button className="btn  my-1 btn-danger    col-md-4  col-sm-5   col-xl-2 py-2 fs-5  rounded-5">
              مقبول
            </button>
            <button className="btn my-1  btn-secondary col-md-4 col-sm-5   col-xl-2 py-2 fs-5  rounded-5">
              جيد
            </button>
            <button className="btn  my-1 btn-warning   col-md-4 col-sm-5   col-xl-2 py-2 fs-5  rounded-5">
              جيد جدا
            </button>
            <button className="btn my-1   btn-success    col-md-4  col-sm-5  col-xl-2 py-2 fs-5  rounded-5">
              ممتاز
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
  