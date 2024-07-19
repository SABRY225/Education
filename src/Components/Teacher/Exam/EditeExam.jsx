import React, { useState } from 'react';
// import './styleExam.css'; // Ensure the path is correct

function AddExam() {
    const [examName, setExamName] = useState('');
    const [questions, setQuestions] = useState([
        { question: '', answers: ['', '', '', ''], correctAnswer: -1 } // Initialize correctAnswer with -1 instead of null
    ]);

    const handleExamNameChange = (e) => {
        setExamName(e.target.value);
    };

    const handleQuestionChange = (index, value) => {
        const newQuestions = [...questions];
        newQuestions[index].question = value;
        setQuestions(newQuestions);
    };

    const handleAnswerChange = (qIndex, aIndex, value) => {
        const newQuestions = [...questions];
        newQuestions[qIndex].answers[aIndex] = value;
        setQuestions(newQuestions);
    };

    const handleCorrectAnswerChange = (qIndex, aIndex) => {
        const newQuestions = [...questions];
        newQuestions[qIndex].correctAnswer = aIndex;
        setQuestions(newQuestions);
    };

    const addQuestion = () => {
        setQuestions([...questions, { question: '', answers: ['', '', '', ''], correctAnswer: -1 }]);
    };

    const deleteQuestion = (index) => {
        const newQuestions = questions.filter((_, qIndex) => qIndex !== index);
        setQuestions(newQuestions);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const examData = {
            examName,
            questions,
        };
        console.log('Exam Data Submitted:', examData);
        // You can send examData to the server or handle it as needed
    };

    return (
        <div className="container text-center text-dark">
            <form onSubmit={handleSubmit}>
                <div className="row justify-content-center align-items-center g-2">
                    <div className="col">
                        <button type="button" onClick={addQuestion}>اضافة سؤال</button>
                    </div>
                    <div className="col">
                        <label>اسم الاختبار</label>
                        <input type="text" name="ExamName" value={examName} onChange={handleExamNameChange} />
                    </div>
                </div>

                {questions.map((question, qIndex) => (
                    <div key={qIndex} className="row justify-content-center align-items-center g-2">
                        <div className="col">
                            <label>ماهو السؤال</label>
                            <input
                                type="text"
                                name={`question_${qIndex}`}
                                value={question.question}
                                onChange={(e) => handleQuestionChange(qIndex, e.target.value)}
                            />
                            {question.answers.map((answer, aIndex) => (
                                <div key={aIndex}>
                                    <input
                                        type="text"
                                        name={`answer_${qIndex}_${aIndex}`}
                                        value={answer}
                                        onChange={(e) => handleAnswerChange(qIndex, aIndex, e.target.value)}
                                    />
                                    <input
                                        type="checkbox"
                                        name={`correct_${qIndex}`}
                                        checked={question.correctAnswer === aIndex}
                                        onChange={() => handleCorrectAnswerChange(qIndex, aIndex)}
                                    />
                                </div>
                            ))}
                            <button type="button" onClick={() => deleteQuestion(qIndex)}>حذف السؤال</button>
                        </div>
                    </div>
                ))}
                <div className="row justify-content-center align-items-center g-2">
                    <div className="col">
                        <button type="submit">إرسال الامتحان</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddExam;
