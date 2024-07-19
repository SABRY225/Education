import React, { useState } from 'react';
import './AddExam.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

function AddExam() {
    const [examName, setExamName] = useState('');
    const [questions, setQuestions] = useState([
        { question: '', answers: ['', '', '', ''], correctAnswer: -1 }
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
        <div className="exam-container text-center text-dark">
            <form onSubmit={handleSubmit}>
                <div className="row justify-content-center align-items-center g-2">
                    <div className="col">
                        <button type="button"  style={{background:"#0eba36"}} onClick={addQuestion}>
                            <FontAwesomeIcon icon={faPlus} /> اضافة سؤال
                        </button>
                    </div>
                    <div className="col">
                        <label>اسم الاختبار</label>
                        <input type="text" name="ExamName" value={examName} onChange={handleExamNameChange} />
                    </div>
                </div>

                {questions.map((question, qIndex) => (
                    <div key={qIndex} className="question-row row justify-content-center align-items-center g-2">
                        <div className="col">
                            <label>الرجاء كتابة السؤال هنا</label>
                            <input
                                type="text"
                                name={`question_${qIndex}`}
                                value={question.question}
                                onChange={(e) => handleQuestionChange(qIndex, e.target.value)}
                            />
                            {question.answers.map((answer, aIndex) => (
                                <div key={aIndex} className="answer-row">
                                    <input
                                        type="text"
                                        name={`answer_${qIndex}_${aIndex}`}
                                        value={answer}
                                        onChange={(e) => handleAnswerChange(qIndex, aIndex, e.target.value)}
                                    />
                                    <input
                                        type="checkbox"
                                        className="larger-checkbox"
                                        name={`correct_${qIndex}`}
                                        checked={question.correctAnswer === aIndex}
                                        onChange={() => handleCorrectAnswerChange(qIndex, aIndex)}
                                    />
                                </div>
                            ))}
                            <button type="button" style={{background:"#ba220e"}}onClick={() => deleteQuestion(qIndex)}>
                                <FontAwesomeIcon icon={faTrash} /> حذف السؤال
                            </button>
                        </div>
                    </div>
                ))}
                <div className="row">
                    <div className="col m-2">
                        <input type="submit" value={'ارسال الامتحان'} className='btnSendExam' style={{width:"250px"}} />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddExam;
