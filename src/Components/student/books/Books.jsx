import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";


const Books = () => {
  const { courseId } = useParams();
  const [lessons,setlessons]=useState([])
  const token = useSelector((state) => state.auth.token);

   useEffect(()=>{

    const fetchData=async()=>{
     const res=await axios.get(`http://lms.tryasp.net/Book/all-in-course?courseId=${courseId}`, {
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
          الكتب و الملفات
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
              to={`/Student/${courseId}/${lesson.id}/viewBook`}
              className="row rounded-4 border-4 btn btn-outline-info"
              style={{ color: "black", marginTop: "10px" }}
            >
              <div className="col-2 fs-4">
              <FontAwesomeIcon icon={faChalkboardTeacher} className="me-2" />&nbsp;&nbsp;  
              </div>
              <div className="col-10 text-end">{lesson.title}</div>
            </Link>
          </div>
        ))}
      </div>        
       </div>

    </div>
  );
};

export default Books;



































// const lessons = [
//   { id: 1, title: "الدرس 1", subject: "تكامل وتفاضل" },
//   { id: 2, title: "الدرس 2", subject: "تكامل وتفاضل" },
//   { id: 3, title: "الدرس 3", subject: "تكامل وتفاضل" },
//   { id: 4, title: "الدرس 4", subject: "تكامل وتفاضل" },
//   { id: 5, title: "الدرس 5", subject: "تكامل وتفاضل" },
//   { id: 6, title: "الدرس 6", subject: "تكامل وتفاضل" },
//   { id: 7, title: "الدرس 7", subject: "تكامل وتفاضل" },
//   { id: 8, title: "الدرس 8", subject: "تكامل وتفاضل" },
// ];

// const booksAndFiles = [
//   { lessonId: 1, title: "كتاب 1", type: "PDF" },
//   { lessonId: 1, title: "ملف 1", type: "DOCX" },
//   { lessonId: 2, title: "كتاب 2", type: "PDF" },
//   { lessonId: 3, title: "ملف 2", type: "PPT" },
//   { lessonId: 4, title: "كتاب 3", type: "PDF" },
//   { lessonId: 5, title: "ملف 3", type: "XLSX" },
// ];

// function BooksAndFiles({ lessonId }) {
//   const items = booksAndFiles.filter((item) => item.lessonId === lessonId);
//   return (
//     <>
//       {items.length > 0 ? (
//         items.map((item, index) => (
//           <div key={index} className="mt-3">
//             <Link
//               to="/"
//               className="row rounded-4 border-4 btn btn-outline-info"
//               style={{ color: "black", marginTop: "10px" }}
//             >
//               <div className="col-6 fs-4">{item.title}</div>
//               <div className="col-6 text-end">{item.type}</div>
//             </Link>
//           </div>
//         ))
//       ) : (
//         <div className="mt-3 fs-4">لا توجد كتب أو ملفات لهذا الدرس.</div>
//       )}
//     </>
//   );
// }

// function Books() {
//   return (
//     <>
//       <div style={{ direction: "rtl" }} className="m-5">
//         <div className="row">
//           <p className="col-xl-2 col-md-3 fs-3 my-2 fw-bold rounded-4 border-4 border-info">
//             كتب وملفات
//           </p>
//         </div>

//         <div
//           className="col-10 border border-secondary-subtle border-4 rounded-4 my-3 p-4"
//           style={{ minHeight: "60vh" }}
//         >
//           {lessons.map((lesson) => (
//             <div key={lesson.id} className="mt-3">
//               <Link
//                 to="/"
//                 className="row rounded-4 border-4 btn btn-outline-info"
//                 style={{ color: "black", marginTop: "10px" }}
//               >
//                 <div className="col-2 fs-4">{lesson.title}:</div>
//                 <div className="col-10 text-end">{lesson.subject}</div>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Books;
