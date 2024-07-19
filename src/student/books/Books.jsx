import React from "react";
import { Link } from "react-router-dom";



const Books = () => {
  const [lessons, setLessons] = useState([]);
  const [booksAndFiles, setBooksAndFiles] = useState([]);

  useEffect(() => {
    // Fetch lessons and booksAndFiles from the API
    fetch('https://localhost:7183/api/Book/all-in-course?courseId=21', {
      method: 'GET',
      headers: {
        'accept': '*/*'
      }
    })
    .then(response => response.json())
    .then(data => {
      // Assuming the API returns an object with lessons and booksAndFiles arrays
      setLessons(data.lessons);
      setBooksAndFiles(data.booksAndFiles);
    })
    .catch(error => console.error('Error fetching data:', error));
  }, []);

  const getBooksAndFilesForLesson = (lessonId) => {
    return booksAndFiles.filter(item => item.lessonId === lessonId);
  };

  return (
    <div style={{ direction: "rtl" }} className="m-5">
      <div className="row">
        <p className="col-xl-2 col-md-3 fs-3 my-2 fw-bold rounded-4 border-4 border-info">
          كتب وملفات
        </p>
      </div>

      <div
        className="col-10 border border-secondary-subtle border-4 rounded-4 my-3 p-4"
        style={{ minHeight: "60vh" }}
      >
        {lessons.map((lesson) => (
          <div key={lesson.id} className="mt-3">
            <Link
              to="/"
              className="row rounded-4 border-4 btn btn-outline-info"
              style={{ color: "black", marginTop: "10px" }}
            >
              <div className="col-2 fs-4">{lesson.title}:</div>
              <div className="col-10 text-end">{lesson.subject}</div>
            </Link>
            <BooksAndFiles lessonId={lesson.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

const BooksAndFiles = ({ lessonId }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Assuming booksAndFiles is in the same format as before
    fetch('https://localhost:7183/api/Book/all-in-course?courseId=21', {
      method: 'GET',
      headers: {
        'accept': '*/*'
      }
    })
    .then(response => response.json())
    .then(data => {
      // Assuming the API returns an object with lessons and booksAndFiles arrays
      const filesForLesson = data.booksAndFiles.filter(item => item.lessonId === lessonId);
      setItems(filesForLesson);
    })
    .catch(error => console.error('Error fetching data:', error));
  }, [lessonId]);

  return (
    <>
      {items.length > 0 ? (
        items.map((item, index) => (
          <div key={index} className="mt-3">
            <Link
              to="/"
              className="row rounded-4 border-4 btn btn-outline-info"
              style={{ color: "black", marginTop: "10px" }}
            >
              <div className="col-6 fs-4">{item.title}</div>
              <div className="col-6 text-end">{item.type}</div>
            </Link>
          </div>
        ))
      ) : (
        <div className="mt-3 fs-4">لا توجد كتب أو ملفات لهذا الدرس.</div>
      )}
    </>
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
