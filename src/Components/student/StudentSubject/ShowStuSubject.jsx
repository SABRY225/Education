import React from "react";
import img1 from ".././media/image.png";
import { Link } from "react-router-dom";

export default function ShowStuSubject(props) {
  // props coming from AllStuSubject component

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
            <img src={img1} alt="Subject" className="w-100 m-4 rounded-4" />
          </div>
          {/* Side info for subject */}
          <div className="col-sm-12 col-md-12 col-xl-8 text-end">
            <div className="row justify-content-end p-4">
              <div className="col-8">كورس تفاضل وتكامل</div>
              <div className="col-3 btn btn-dark rounded-5">الماده</div>
            </div>
            <div className="row justify-content-end p-4">
              <div className="col-8">رياضيات</div>
              <div className="col-3 btn btn-dark rounded-5">المدرس</div>
            </div>
            <div className="row justify-content-end p-4">
              <div className="col-8">احمد صبري</div>
              <div className="col-3 btn btn-dark rounded-5">المستوي</div>
            </div>
            <div className="row justify-content-end p-4">
              <div className="col-8">الفصل الثاني الثانوي</div>
              <div className="col-3 btn btn-dark rounded-5">التقييم</div>
            </div>
            <div className="row justify-content-end p-4">
              <div className="col-8 row justify-content-end">
                <button className="btn btn-info col-xl-4 col-lg-6 col-md-6">
                  التقييم عالي
                </button>
              </div>
              <div className="col-3 btn btn-dark rounded-5">التقييم</div>
            </div>
            <div className="row justify-content-end p-4">
              <div className="col-8">312$</div>
              <div className="col-3 btn btn-dark rounded-5">السعر</div>
            </div>
          </div>
        </div>

        {/* Links for books, tests, and lessons */}
        <div className="row p-5 justify-content-around">
          <Link
            to="/Books"
            className="col-xl-3 col-md-8 fs-3 my-2  fw-bold rounded-4 border-4 btn btn-outline-info"
          >
            الكتب والملفات
          </Link>
          <Link
            to="/Quize"
            className="col-xl-3 col-md-8 fs-3  my-2 fw-bold rounded-4 border-4 btn btn-outline-info"
          >
            الاختبارات
          </Link>
          <Link
            to="/"
            className="col-xl-3 col-md-8 fs-3 my-2  fw-bold rounded-4 border-4 btn btn-outline-info"
          >
            الدروسي
          </Link>
        </div>

        {/* Your evaluation for the course */}
        <div className="row justify-content-end">
          <div className="col-2 fs-3 p-4" style={{ color: "red" }}>
            تقييمك للكورس
          </div>
        </div>
        <div className="row justify-content-end">
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
  