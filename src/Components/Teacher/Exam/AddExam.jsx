import React, { useState } from 'react';
import axios from 'axios';
import './AddExam.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function AddExam() {
    const { courseId } = useParams();
    const [examName, setExamName] = useState('');
    const [questions, setQuestions] = useState([
        { question: '', answers: ['', '', '', ''], correctAnswer: -1 }
    ]);
    const token = useSelector((state) => state.auth.token);
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const examData = {
            name: examName,
            courseId: courseId
        };
    
        try {
            const examResponse = await axios.post('http://localhost:5177/Exam', examData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            });
    
            if (examResponse.status !== 200) {
                alert('Failed to create exam');
                return;
            }
    
            const examId = examResponse.data;
            console.log(examId);
            
            for (const question of questions) {
                if (question.question.trim() === '') continue;
    
                const questionData = {
                    content: question.question,
                    examId: examId
                };
    console.log(questionData);
    
                const questionResponse = await axios.post('http://localhost:5177/Question', questionData, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    }
                });
    
                if (questionResponse.status !== 200) {
                    alert('Failed to create question');
                    return;
                }
    
                const questionId = questionResponse.data;
    
                for (let i = 0; i < question.answers.length; i++) {
                    const answerContent = question.answers[i].trim();
                    if (answerContent === '') continue;
    
                    const isCorrect = i === question.correctAnswer;
    
                    const answerData = {
                        content: answerContent,
                        isCorrect: isCorrect,
                        questionId: questionId
                    };
    
                    const answerResponse = await axios.post('http://localhost:5177/Answer', answerData, {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json',
                        }
                    });
    
                    if (answerResponse.status !== 200) {
                        alert('Failed to create answer');
                        return;
                    }
                }
            }
    
            alert('Exam created successfully');
        } catch (error) {
            console.error('There was an error creating the exam!', error);
            alert(`An error occurred while creating the exam: ${error.response?.data?.message || error.message}`);
        }
    };
    
    

    return (
        <div className="exam-container text-center text-dark">
            <form onSubmit={handleSubmit}>
                <div className="row justify-content-center align-items-center g-2">
                    <div className="col">
                        <button type="button" style={{background:"#0eba36"}} onClick={addQuestion}>
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
                            <button type="button" style={{background:"#ba220e"}} onClick={() => deleteQuestion(qIndex)}>
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
