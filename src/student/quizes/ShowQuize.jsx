import React, { useState } from "react";

const quistions = [
  {
    id: 2,
    title: "الامتحان 2",
    subject: "تكامل وتفاضل",
    quistion: "ما هو تكامل الدالة f(x) = x^2؟",
    chose1: "x^3 / 3 + C",
    chose2: "2x + C",
    chose3: "x^2 + C",
    chose4: "x^3 + C",
    correctChose: "x^3 / 3 + C",
  },
  {
    id: 3,
    title: "الامتحان 3",
    subject: "تكامل وتفاضل",
    quistion: "ما هو مشتق الدالة f(x) = sin(x)؟",
    chose1: "cos(x)",
    chose2: "sin(x)",
    chose3: "-sin(x)",
    chose4: "-cos(x)",
    correctChose: "cos(x)",
  },
  {
    id: 4,
    title: "الامتحان 4",
    subject: "تكامل وتفاضل",
    quistion: "ما هو حد x عندما تقترب الدالة f(x) = 1/x من الصفر؟",
    chose1: "صفر",
    chose2: "لانهاية",
    chose3: "1",
    chose4: "-1",
    correctChose: "لانهاية",
  },
  {
    id: 5,
    title: "الامتحان 5",
    subject: "تكامل وتفاضل",
    quistion: "ما هو تكامل الدالة f(x) = e^x؟",
    chose1: "e^x + C",
    chose2: "x * e^x + C",
    chose3: "ln(x) + C",
    chose4: "1/x + C",
    correctChose: "e^x + C",
  },
];

function ShowQuize() {
  const [answers, setAnswers] = useState({});

  const handleAnswerClick = (questionId, chosenAnswer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: chosenAnswer,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Selected answers:", answers);
    // هنا يمكنك إرسال البيانات إلى الخادم باستخدام fetch أو أي طريقة أخرى
  };

  return (
    <>
      <div style={{ direction: "rtl" }} className="m-5">
        <div className="row">
          <div className="col-xl-4 col-md-3 fs-3 my-2 fw-bold border border-4 border-secondary text-light bg-info rounded-5 px-4 py-1">
            {`${quistions[1].title} ${quistions[1].subject}`}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="col-10 border border-secondary-subtle border-4 rounded-4 my-3 p-4"
          style={{ minHeight: "60vh" }}
        >
          {quistions.map((quiz) => (
            <div key={quiz.id} className="mt-3">
              <div
                className="row fw-bold"
                style={{ color: "black", marginTop: "10px" }}
              >
                <div className="col-12 fs-4">{quiz.quistion} :</div>
              </div>
              <div className="row justify-content-around py-1">
                <button
                  type="button"
                  value={quiz.chose1}
                  onClick={() => handleAnswerClick(quiz.id, quiz.chose1)}
                  className={`col-xl-2 fs-5 rounded-5 border-4 btn ${
                    answers[quiz.id] === quiz.chose1
                      ? "btn-info text-light"
                      : "btn-outline-info"
                  }`}
                >
                  {quiz.chose1}
                </button>
                <button
                  type="button"
                  value={quiz.chose2}
                  onClick={() => handleAnswerClick(quiz.id, quiz.chose2)}
                  className={`col-xl-2 fs-5 rounded-5 border-4 btn ${
                    answers[quiz.id] === quiz.chose2
                      ? "btn-info text-light"
                      : "btn-outline-info"
                  }`}
                >
                  {quiz.chose2}
                </button>
              </div>
              <div className="row justify-content-around py-1">
                <button
                  type="button"
                  value={quiz.chose3}
                  onClick={() => handleAnswerClick(quiz.id, quiz.chose3)}
                  className={`col-xl-2 fs-5 rounded-5 border-4 btn ${
                    answers[quiz.id] === quiz.chose3
                      ? "btn-info text-light"
                      : "btn-outline-info"
                  }`}
                >
                  {quiz.chose3}
                </button>
                <button
                  type="button"
                  value={quiz.chose4}
                  onClick={() => handleAnswerClick(quiz.id, quiz.chose4)}
                  className={`col-xl-2 fs-5 rounded-5 border-4 btn ${
                    answers[quiz.id] === quiz.chose4
                      ? "btn-info text-light"
                      : "btn-outline-info"
                  }`}
                >
                  {quiz.chose4}
                </button>
              </div>
            </div>
          ))}
          <div className="row justify-content-center">
            <input
              type="submit"
              value="انهاء"
              className="col-xl-2 col-md-2 fs-4 my-2 fw-bold border border-4 border-secondary text-light bg-info rounded-5"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default ShowQuize;
