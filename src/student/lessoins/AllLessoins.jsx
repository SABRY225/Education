import React from "react";
import { Link } from "react-router-dom";

const lessons = [
  { id: 1, title: "الدرس 1", subject: "تكامل وتفاضل" },
  { id: 2, title: "الدرس 2", subject: "جبر خطي" },
  { id: 3, title: "الدرس 3", subject: "فيزياء" },
  { id: 4, title: "الدرس 4", subject: "كيمياء" },
  { id: 5, title: "الدرس 5", subject: "علوم الحاسوب" },
];

function AllLessoins() {
  return (
    <>
      <div style={{ direction: "rtl" }} className="m-5">
        <div className="row">
          <p className="col-xl-2 col-md-3 fs-3 my-2 fw-bold rounded-4 border-4 border-info">
            الدروس
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
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AllLessoins;
