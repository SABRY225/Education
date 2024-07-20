import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducers/authSlice';
import bookReducer from '../reducers/bookSlice';
import answerReducer from '../reducers/answerSlice';
import courseReducer from '../reducers/courseSlice';
import evaluationReducer from '../reducers/evaluationSlice'
import examReducer from '../reducers/examSlice'
import lectureReducer from '../reducers/lectureSlice'
import questionReducer from '../reducers/questionSlice'
import studentReducer from '../reducers/studentSlice'
import teacherReducer from '../reducers/teacherSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        book: bookReducer,
        answer: answerReducer,
        course:courseReducer,
        evaluations: evaluationReducer,
        exams: examReducer,
        lectures: lectureReducer,
        questions: questionReducer,
        students: studentReducer,
        teachers: teacherReducer,
    },
});

export default store;
