import { useEffect, useState } from "react";
import img1 from ".././media/image.png";
import { Link } from "react-router-dom";





const AllSubjects = () => {
  const [subjects, setSubjects] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Fetch subjects from the API
    fetch('https://localhost:7183/api/Course/all', {
      method: 'GET',
      headers: {
        'accept': '*/*'
      }
    })
    .then(response => response.json())
    .then(data => {
      // Assuming the API returns an array of subjects
      setSubjects(data);
    })
    .catch(error => console.error('Error fetching data:', error));
  }, []);

  const filteredSubjects = subjects.filter(
    (subject) =>
      subject.name.toLowerCase().includes(search.toLowerCase()) ||
      subject.teacher.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="row rtl fw-normal" style={{ height: "100%" }}>
      <div className="row search justify-content-center">
        <input
          type="text"
          id="search"
          placeholder="البحث عن..؟"
          className="col-xl-3 col-md-4 my-4 fs-5 text-center rounded-5 border-5 border-info"
          style={{ height: "40px" }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div
        className="row item-start justify-content-between"
        style={{ alignItems: "start", paddingLeft: "0" }}
      >
        <div
          className={`col-2 mt-5 py-5 p-3 bg-info bg-opacity-10 border border-2 border-info border-start-0 rounded-end-5 ${
            search ? "" : "d-none"
          }`}
          style={{ height: "80vh" }}
        >
          <div className="row justify-content-center">
            <div className="row justify-content-center">
              <p className="fs-4 fw-normal col-10">تحديد المادة</p>
            </div>
            <div>
              <select
                name="subject"
                id="subject"
                className="col-10 rounded-5 border-2 p-1 border-info"
              >
                <option value="">اختر المادة</option>
                {subjects.map((subject, index) => (
                  <option key={index} value={subject.name}>
                    {subject.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="row justify-content-center">
              <p className="fs-4 fw-normal col-10">تحديد المستوي</p>
            </div>
            <div>
              <select
                name="level"
                id="level"
                className="col-10 rounded-5 border-2 p-1 border-info"
              >
                <option value="">اختر المستوي</option>
                <option value="مبتدئ">مبتدئ</option>
                <option value="متوسط">متوسط</option>
                <option value="متقدم">متقدم</option>
              </select>
            </div>
            <div className="row justify-content-center">
              <p className="fs-4 fw-normal col-10">تحديد السعر</p>
            </div>
            <div className="row" style={{ direction: "rtl" }}>
              <span className="col-2">من</span>
              <input
                type="text"
                className="col-4 rounded-5 border-2 border-info"
              />
              <span className="col-2">الي</span>
              <input
                type="text"
                className="col-4 rounded-5 border-2 border-info"
              />
            </div>
            {/* 
            <div className="row justify-content-center mt-3">
              <button className="btn btn-info rounded-5 text-light fs-5 py-2">
                بحث
              </button>
            </div> */}
          </div>
        </div>
        <div className={`row ${search ? "col-10" : "col-12"}`}>
          {filteredSubjects.map((subject, index) => (
            <div
              key={index}
              className={`col-sm-12 col-md-6 col-lg-4 col-xl-3 ${
                search
                  ? "col-sm-12 col-md-6 col-lg-4 col-xl-4"
                  : "col-sm-12 col-md-6 col-lg-4 col-xl-3"
              }`}
            >
              <div className="p-5 border border-4 border-info rounded-3 m-4 BoxShadow">
                <div className="img row">
                  <img
                    src={subject.image || img1}
                    className="w-100"
                    alt={subject.name}
                  />
                </div>
                <p className="subName row justify-content-center py-2 my-2">
                  {subject.name}
                </p>
                <div className="row justify-content-around py-2 my-2">
                  <div className="col-4 fs-md-4 fs-xl-2">{subject.price}</div>
                  <div className="col-8 fs-md-4 fs-xl-2">{subject.teacher}</div>
                </div>
                <div className="row">
                  <Link
                    to="/ShowStuSubject"
                    className="btn btn-info rounded-5 text-light fs-5 py-2 my-2"
                  >
                    اشترك الان
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="row justify-content-center">
        <button className="col-xl-2 col-md-4 bg-info btn bg-dark fs-4 my-3 text-light rounded-5">
          المزيد
        </button>
      </div>
    </div>
  );
};

export default AllSubjects;






















// const subjects = [
//   {
//     name: "تفاضل وتكامل",
//     price: "$311",
//     teacher: "احمد صبري",
//     image: img1,
//   },
//   {
//     name: "فيزياء",
//     price: "$250",
//     teacher: "محمد علي",
//     image: img1,
//   },
//   {
//     name: "كيمياء",
//     price: "$280",
//     teacher: "سارة أحمد",
//     image: img1,
//   },
//   {
//     name: "رياضيات",
//     price: "$200",
//     teacher: "خالد حسن",
//     image: img1,
//   },
//   {
//     name: "علوم الحاسوب",
//     price: "$320",
//     teacher: "ريم عادل",
//     image: img1,
//   },
//   {
//     name: "إحصاء",
//     price: "$180",
//     teacher: "ماجد يوسف",
//     image: img1,
//   },
//   {
//     name: "جبر خطي",
//     price: "$290",
//     teacher: "نورة محمد",
//     image: img1,
//   },
//   {
//     name: "الجيولوجيا",
//     price: "$240",
//     teacher: "محمود حسن",
//     image: img1,
//   },
//   {
//     name: "علم الأحياء",
//     price: "$260",
//     teacher: "هدى عبدالله",
//     image: img1,
//   },
//   {
//     name: "ميكانيكا",
//     price: "$300",
//     teacher: "علي عبد الرحمن",
//     image: img1,
//   },
//   {
//     name: "إلكترونيات",
//     price: "$275",
//     teacher: "فاطمة ناصر",
//     image: img1,
//   },
//   {
//     name: "ديناميكا حرارية",
//     price: "$310",
//     teacher: "ياسر حسن",
//     image: img1,
//   },
//   {
//     name: "تحليل رياضي",
//     price: "$315",
//     teacher: "منى أحمد",
//     image: img1,
//   },
//   {
//     name: "الفيزياء النووية",
//     price: "$340",
//     teacher: "نور الدين محمود",
//     image: img1,
//   },
//   {
//     name: "الكيمياء العضوية",
//     price: "$330",
//     teacher: "أمل خالد",
//     image: img1,
//   },
//   {
//     name: "الفيزياء الكمية",
//     price: "$350",
//     teacher: "ماجد عماد",
//     image: img1,
//   },
//   {
//     name: "البيولوجيا الجزيئية",
//     price: "$370",
//     teacher: "مروة عبد الله",
//     image: img1,
//   },
//   {
//     name: "علم الفلك",
//     price: "$380",
//     teacher: "ليلى حسن",
//     image: img1,
//   },
//   {
//     name: "الهندسة الكهربائية",
//     price: "$360",
//     teacher: "أحمد طارق",
//     image: img1,
//   },
//   {
//     name: "علم الوراثة",
//     price: "$390",
//     teacher: "سامي محمود",
//     image: img1,
//   },
//   {
//     name: "الفيزياء الفلكية",
//     price: "$400",
//     teacher: "سلمى يوسف",
//     image: img1,
//   },
//   {
//     name: "الرياضيات التطبيقية",
//     price: "$410",
//     teacher: "عمر أحمد",
//     image: img1,
//   },
//   {
//     name: "هندسة البرمجيات",
//     price: "$420",
//     teacher: "ندى مصطفى",
//     image: img1,
//   },
//   {
//     name: "الذكاء الاصطناعي",
//     price: "$430",
//     teacher: "زياد علي",
//     image: img1,
//   },
// ];

// function AllSubjects() {
//   const [search, setSearch] = useState("");

//   const filteredSubjects = subjects.filter(
//     (subject) =>
//       subject.name.toLowerCase().includes(search.toLowerCase()) ||
//       subject.teacher.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="row rtl fw-normal" style={{ height: "100%" }}>
//       <div className="row search justify-content-center">
//         <input
//           type="text"
//           id="search"
//           placeholder="البحث عن..؟"
//           className="col-xl-3 col-md-4 my-4 fs-5 text-center rounded-5 border-5 border-info"
//           style={{ height: "40px" }}
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>

//       <div
//         className="row item-start justify-content-between"
//         style={{ alignItems: "start", paddingLeft: "0" }}
//       >
//         <div
//           className={`col-2 mt-5 py-5 p-3 bg-info bg-opacity-10 border border-2 border-info border-start-0 rounded-end-5 ${
//             search ? "" : "d-none"
//           }`}
//           style={{ height: "80vh" }}
//         >
//           <div className="row justify-content-center">
//             <div className="row justify-content-center">
//               <p className="fs-4 fw-normal col-10">تحديد المادة</p>
//             </div>
//             <div>
//               <select
//                 name="subject"
//                 id="subject"
//                 className="col-10 rounded-5 border-2 p-1 border-info"
//               >
//                 <option value="">اختر المادة</option>
//                 {subjects.map((subject, index) => (
//                   <option key={index} value={subject.name}>
//                     {subject.name}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className="row justify-content-center">
//               <p className="fs-4 fw-normal col-10">تحديد المستوي</p>
//             </div>
//             <div>
//               <select
//                 name="level"
//                 id="level"
//                 className="col-10 rounded-5 border-2 p-1 border-info"
//               >
//                 <option value="">اختر المستوي</option>
//                 <option value="مبتدئ">مبتدئ</option>
//                 <option value="متوسط">متوسط</option>
//                 <option value="متقدم">متقدم</option>
//               </select>
//             </div>
//             <div className="row justify-content-center">
//               <p className="fs-4 fw-normal col-10">تحديد السعر</p>
//             </div>
//             <div className="row" style={{ direction: "rtl" }}>
//               <span className="col-2">من</span>
//               <input
//                 type="text"
//                 className="col-4 rounded-5 border-2 border-info"
//               />
//               <span className="col-2">الي</span>
//               <input
//                 type="text"
//                 className="col-4 rounded-5 border-2 border-info"
//               />
//             </div>
//             {/* 
//             <div className="row justify-content-center mt-3">
//               <button className="btn btn-info rounded-5 text-light fs-5 py-2">
//                 بحث
//               </button>
//             </div> */}
//           </div>
//         </div>
//         <div className={`row ${search ? "col-10" : "col-12"}`}>
//           {filteredSubjects.map((subject, index) => (
//             <div
//               key={index}
//               className={`col-sm-12 col-md-6 col-lg-4 col-xl-3 ${
//                 search
//                   ? "col-sm-12 col-md-6 col-lg-4 col-xl-4"
//                   : "col-sm-12 col-md-6 col-lg-4 col-xl-3"
//               }`}
//             >
//               <div className="p-5 border border-4 border-info rounded-3 m-4 BoxShadow">
//                 <div className="img row">
//                   <img
//                     src={subject.image}
//                     className="w-100"
//                     alt={subject.name}
//                   />
//                 </div>
//                 <p className="subName row justify-content-center py-2 my-2">
//                   {subject.name}
//                 </p>
//                 <div className="row justify-content-around py-2 my-2">
//                   <div className="col-4 fs-md-4 fs-xl-2">{subject.price}</div>
//                   <div className="col-8 fs-md-4 fs-xl-2">{subject.teacher}</div>
//                 </div>
//                 <div className="row">
//                   <Link
//                     to="/ShowStuSubject"
//                     className="btn btn-info rounded-5 text-light fs-5 py-2 my-2"
//                   >
//                     اشترك الان
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="row justify-content-center">
//         <button className="col-xl-2 col-md-4 bg-info btn bg-dark fs-4 my-3 text-light rounded-5">
//           المزيد
//         </button>
//       </div>
//     </div>
//   );
// }

// export default AllSubjects;
