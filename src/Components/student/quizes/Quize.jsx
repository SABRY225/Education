import React from "react";
import { Link } from "react-router-dom";

const quizzes = [
  { id: 1, title: "الامتحان 1", subject: "تكامل وتفاضل" },
  { id: 2, title: "الامتحان 2", subject: "جبر خطي" },
  { id: 3, title: "الامتحان 3", subject: "فيزياء" },
  { id: 4, title: "الامتحان 4", subject: "كيمياء" },
  { id: 5, title: "الامتحان 5", subject: "علوم الحاسوب" },
];

function Quize() {
  return (
    <>
      <div style={{ direction: "rtl" }} className="m-5">
        <div className="row">
          <p className="col-xl-2 col-md-3 fs-3   fw-bold border border-4 border-secondary text-light bg-info rounded-5 px-5 py-1">
            الدروس
          </p>
        </div>

        <div
          className="col-10 border border-secondary-subtle border-4 rounded-4 my-3 p-4"
          style={{ minHeight: "60vh" }}
        >
          {quizzes.map((quiz) => (
            <div key={quiz.id} className="mt-3">
              <Link
                to="/ShowQuize"
                className="row rounded-4 border-4 btn btn-outline-info"
                style={{ color: "black", marginTop: "10px" }}
              >
                <div className="col-2 fs-4">{quiz.title}:</div>
                <div className="col-10 text-end">{quiz.subject}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Quize;
