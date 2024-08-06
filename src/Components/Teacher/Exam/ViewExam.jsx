import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import {baseURL} from '../../../api/axiosInstance'

function ViewExam() {
  const { examId } = useParams();
  const [questions, setQuestions] = useState([]);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(`${baseURL}Question/all-in-exam?examId=${examId}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        setQuestions(response.data);
        console.log(questions);
        
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, [examId]);

  return (
    <div className="container" style={{color:"#000"}}>
      <h1>View Exam</h1>
      {questions.length === 0 ? (
        <p>No questions available for this exam.</p>
      ) : (
        <div className="questions-list">
          {questions.map((question) => (
            <div key={question.id} className="question-card">
              <h3>{question.content}</h3>
              {question.answers && question.answers.length > 0 && (
                <ul>
                  {question.answers.map((answer) => (
                    <li key={answer.id}>{answer.content}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ViewExam;
