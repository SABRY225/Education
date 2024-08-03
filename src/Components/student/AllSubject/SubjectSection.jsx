import { useNavigate } from "react-router-dom";
import "../Style.css";

const SubjectSection = ({ materialName, courses }) => {
  const navigate = useNavigate();

  const handelSubscribe = (courseId) => {
    navigate(`./${courseId}`);
  };

  return (
    <div className="container material-section">
      <h2 className="row text-black text-center justify-content-end">
        <div className="col-md-12 titleSection">{materialName}</div>
      </h2>
      <div className="slider-container">
        {courses.map((course) => (
          <div key={course.id} className="CardCourseSection">
            <img src={`http://lms.tryasp.net/${course.image}`} alt={`Image of ${course.name}`} />
            <h3>{course.name}</h3>
            <div className="teacher-info">
              <p>{course.teacher.firstName} {course.teacher.lastName}</p>
            </div>
            <div className="row">
              <div className="col-md-6 Year">
                <p className="level">{course.level}</p>
                <p className="semester">{course.semester}</p>
              </div>
              <div className="col-md-6 Price">
                <p>{course.price} EGP</p>
              </div>
            </div>
            <div className="row">
              <button className="btnCard" onClick={() => handelSubscribe(course.id)}>
                الاشتراك في الكورس
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectSection;
