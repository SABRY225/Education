import { useEffect, useState } from "react";
import axios from "axios";
import img1 from ".././media/image.png";
import { Link } from "react-router-dom";
import '../Style.css';
import SubjectSection from "./SubjectSection";
import { useSelector } from "react-redux";

const AllSubjects = () => {
  const [subjects, setSubjects] = useState([]);
  const [search, setSearch] = useState("");
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const res = await axios.get('http://localhost:5177/Course/all', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        console.log("Fetched subjects:", res.data); // Check the structure of your data
        setSubjects(res.data);
      } catch (error) {
        console.error("Error fetching subjects:", error);
      }
    };
  
    fetchSubjects();
  }, [token]);
  

  const groupedData = subjects.reduce((acc, course) => {
    const { materialName } = course;
    if (!acc[materialName]) {
      acc[materialName] = [];
    }
    acc[materialName].push(course);
    return acc;
  }, {});

  const filteredSubjects = subjects.filter((subject) => {
    if (typeof subject.name !== 'string' || typeof subject.teacher !== 'string') {
      console.error("Invalid data format:", subject);
      return false;
    }
    
    return subject.name.toLowerCase().includes(search.toLowerCase()) ||
           subject.teacher.toLowerCase().includes(search.toLowerCase());
  });
  
  

  return (
    <div className="row rtl fw-normal justify-content-center" style={{ height: "100%" }}>
      <div className="col-md-7">
        <input
          type="text"
          id="search"
          placeholder="البحث عن..؟"
          className="col-md-4 my-4 fs-5 text-center rounded-5 border-5 border-info"
          style={{ height: "40px" }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {search ? (
        <>
          <div
            className="row item-start justify-content-between"
            style={{ alignItems: "start", paddingLeft: "0" }}
          >
            <div className={`col-md-3 mt-5 py-5 p-3  bg-opacity-10 border border-2 border-info border-start-0 rounded-end-5 ${
                search ? "" : "d-none"
              }`}
              style={{ height: "80vh",marginBottom:"5rem" }}
            >
                <div className="col-md-12">
                  <select
                    name="subject"
                    id="subject"
                    className="col-md-5 m-1 rounded-5 border-2 border-info"
                    
                  >
                    <option value="">اختر المادة</option>
                    {subjects.map((subject, index) => (
                      <option key={index} value={subject.name}>
                        {subject.name}
                      </option>
                    ))}
                  </select>

                  <select
                    name="level"
                    id="level"
                    className="col-md-5 m-1 rounded-5 border-2 border-info"
                  >
                    <option value="">اختر المستوي</option>
                    <option value="مبتدئ">مبتدئ</option>
                    <option value="متوسط">متوسط</option>
                    <option value="متقدم">متقدم</option>
                  </select>
                </div>
                <div className="col-md-12 text-center">
                  <p className="fs-4 fw-normal">تحديد السعر</p>
                </div>
                <div className="col-md-12"style={{ direction: "rtl" }}>
                  <input
                    type="number"
                    placeholder="من"
                    className="col-4 m-2 rounded-5 border-2 border-info"
                  />
                  <input
                    type="number"
                    placeholder="الي"
                    className="col-4 m-2 rounded-5 border-2 border-info"
                  />
                </div>
              </div>

            <div className='col-md-9'>
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
        </>
      ) : (
        <>
          {Object.keys(groupedData).map((materialName) => (
            <SubjectSection
              key={materialName}
              materialName={materialName}
              courses={groupedData[materialName]}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default AllSubjects;
