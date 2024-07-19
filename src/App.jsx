import Landing from './Components/Landing/Landing'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProtectedRoutes from './Components/ProtectedRoutes/ProtectedRoutes';
import {JustFirst, LayoutAPP,LayoutAuth} from './Layout/index';
import ErrorPage from './Layout/ErrorPage';
import Store from './Redux/Story';
import { Provider } from 'react-redux';
import Signin from './Components/Auth/signin';
import SignUp from './Components/Auth/signup';
import Teacher from './Components/Auth/Teacher';
import Student from './Components/Auth/Student';
import Deashboard from './Components/Teacher/deashboard';
import CraeteCourse from './Components/Teacher/craeteCourse.jsx';
import EditeCourse from './Components/Teacher/editeCourse.jsx';
import Course from './Components/Teacher/Course.jsx';
import Lecture from './Components/Teacher/Lecture/Lecture.jsx';
import Exam from './Components/Teacher/Exam/Exam.jsx';
import Book from './Components/Teacher/Book/Book.jsx';
import AddLectures from './Components/Teacher/Lecture/AddLectures.jsx';
import ViewLectures from './Components/Teacher/Lecture/ViewLectures.jsx';
import EditeLectures from './Components/Teacher/Lecture/EditeLectures.jsx';
import ViewBook from './Components/Teacher/Book/ViewBook.jsx';
import EditeBook from './Components/Teacher/Book/EditeBook.jsx';
import AddBook from './Components/Teacher/Book/AddBook.jsx';
import EditeExam from './Components/Teacher/Exam/EditeExam.jsx';
import AddExam from './Components/Teacher/Exam/AddExam.jsx';
import ViewExam from './Components/Teacher/Exam/ViewExam.jsx';

const routers = createBrowserRouter([
  {
    path: "/",
    element: (
        <JustFirst />
    ),
    children: [
      {index:true,element: <Landing /> ,errorElement:(<ErrorPage />)},
      { path: "signin", element: <Signin /> ,errorElement:(<ErrorPage />)},
      { path: "signup", element: <SignUp /> ,errorElement:(<ErrorPage />)},
      { path: "teacher", element: <Teacher /> ,errorElement:(<ErrorPage />)},
      { path: "student", element: <Student /> ,errorElement:(<ErrorPage />)},

    ],
    errorElement:(<ErrorPage />)
  },
  {
    path: "/",
    element: (
      // <ProtectedRoutes>
        <LayoutAPP />
      // </ProtectedRoutes>
    ),
    children: [
      {path:"dashboard",element: <Deashboard /> ,errorElement:(<ErrorPage />)},
      {path:"CreateCourse",element: <CraeteCourse /> ,errorElement:(<ErrorPage />)},
      {path:"EditeCourse",element: <EditeCourse /> ,errorElement:(<ErrorPage />)},
      {path:"DetailsCourse",element: <Course /> ,errorElement:(<ErrorPage />)},
      {path:"Lectures",element: <Lecture /> ,errorElement:(<ErrorPage />)},
      {path:"addLecture",element: <AddLectures /> ,errorElement:(<ErrorPage />)},
      {path:"viewLecture",element: <ViewLectures /> ,errorElement:(<ErrorPage />)},
      {path:"editeLecture",element: <EditeLectures /> ,errorElement:(<ErrorPage />)},
      {path:"addLecture",element: <AddLectures /> ,errorElement:(<ErrorPage />)},
      {path:"Exams",element: <Exam /> ,errorElement:(<ErrorPage />)},
      {path:"viewExam",element: <ViewExam /> ,errorElement:(<ErrorPage />)},
      {path:"editeExam",element: <EditeExam /> ,errorElement:(<ErrorPage />)},
      {path:"addExam",element: <AddExam /> ,errorElement:(<ErrorPage />)},
      {path:"Books",element: <Book /> ,errorElement:(<ErrorPage />)},
      {path:"viewBook",element: <ViewBook /> ,errorElement:(<ErrorPage />)},
      {path:"editeBook",element: <EditeBook /> ,errorElement:(<ErrorPage />)},
      {path:"addBook",element: <AddBook /> ,errorElement:(<ErrorPage />)},
    ],
    errorElement:(<ErrorPage />)
  },
  {
    path: "/",
    element: <LayoutAuth />,
    children: [
      // { path: "signin", element: <Signin /> ,errorElement:(<ErrorPage />)},
      // { path: "new-password", element: <ResetPassword /> ,errorElement:(<ErrorPage />)},
      // { path: "forgotpassword", element: <ForgotPassword /> ,errorElement:(<ErrorPage />)},
    ],
    
  },
]);
function App() {

  return (
    <Provider store={Store} >
    <RouterProvider router={routers} />
  </Provider>
  )
}

export default App
