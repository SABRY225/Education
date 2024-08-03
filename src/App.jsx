import Landing from './Components/Landing/Landing'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProtectedRoutes from './Components/ProtectedRoutes/ProtectedRoutes';
import {JustFirst, LayoutAPP,LayoutAuth} from './Layout/index';
import ErrorPage from './Layout/ErrorPage';
import Store from './Redux/store/store';
import { Provider } from 'react-redux';
import {Signin,SignUp,Teacher,Student, VerifyRegister} from './Components/Auth/index';

//Subjects
import ShowQuize from './Components/student/quizes/ShowQuize';

import { SignUpPage, StudentPage, TeacherPage } from './Pages/index';
import {Dashboard,CraeteCourse, EditeCourse, Profile, SendEmail, ForgetPassword, Course, Lecture, Book, Exam, EditeLectures, AddLectures, ViewLectures, AddBook, ViewBook, EditeBook, AllSubjects, AllStuSubjects, AllLessoins, ShowStuSubject, Quize, Books} from './Components/constant/path';
 
const routers = createBrowserRouter([
  {
    path: "/",
    element: (
        <JustFirst />
    ),
    children: [
      {index:true,element: <Landing /> ,errorElement:(<ErrorPage />)},
      { path: "signin", element: <Signin /> ,errorElement:(<ErrorPage />)},
      { path: "sendEmail", element: <SendEmail /> ,errorElement:(<ErrorPage />)},
      { path: "forget-Password", element: <ForgetPassword /> ,errorElement:(<ErrorPage />)},
      { path: "signup", element: <SignUpPage /> ,errorElement:(<ErrorPage />),
        children:[
          { index:true, element: <SignUp /> ,errorElement:(<ErrorPage />)},
          { path: "teacher", element: <Teacher /> ,errorElement:(<ErrorPage />)},
          { path: "student", element: <Student /> ,errorElement:(<ErrorPage />)},
          { path: "verifyRegister", element: <VerifyRegister /> ,errorElement:(<ErrorPage />)},
        ]
      },
      // كل المواد اللي مشترك فيها الطالب
      { path: "ShowQuize", element: <ShowQuize /> ,errorElement:(<ErrorPage />)},
      // كل المواد اللي علي المنصه

    ],
    errorElement:(<ErrorPage />)
  },
  {
    path: "/",
    element: (
      <ProtectedRoutes>
        <LayoutAPP />
      </ProtectedRoutes>
    ),
    children: [
      {
        path: "Student",
        element: <StudentPage />,
        children: [
          // All Student Subjects
          { index:true, element: <AllSubjects /> ,errorElement:(<ErrorPage />)},
          { path:'myCourse', element: <AllStuSubjects /> ,errorElement:(<ErrorPage />)},
          // detiales course
          { path: ":courseId", element: <ShowStuSubject /> ,errorElement:(<ErrorPage />)},
          // All Lessoins in course
          { path: ":courseId/lessoinsOfCourse", element: <AllLessoins /> ,errorElement:(<ErrorPage />)},
          // All quize in course
          { path: ":courseId/quizeOfCourse", element: <Quize /> ,errorElement:(<ErrorPage />)},
          // All books in course
          { path: ":courseId/booksOfCourse", element: <Books /> ,errorElement:(<ErrorPage />)},

        ],
      },
      {
        path: "Teacher",
        element: <TeacherPage />,
        children: [
          { index:true, element: <Dashboard/> ,errorElement:(<ErrorPage />)},
          { path:'addCourse', element: <CraeteCourse/> ,errorElement:(<ErrorPage />)},
          { path:':courseId/Lectures', element: <Lecture/> ,errorElement:(<ErrorPage />)},
          { path:':courseId/Books', element: <Book/> ,errorElement:(<ErrorPage />)},
          { path:':courseId/Exams', element: <Exam/> ,errorElement:(<ErrorPage />)},
          { path:':courseId/editCourse', element: <EditeCourse/> ,errorElement:(<ErrorPage />)},
          { path:':courseId/:lectureId/editLecture', element: <EditeLectures/> ,errorElement:(<ErrorPage />)},
          { path:':courseId/addLecture', element: <AddLectures/> ,errorElement:(<ErrorPage />)},
          { path:':courseId/:lectureId/viewLectures', element: <ViewLectures/> ,errorElement:(<ErrorPage />)},
          { path:':courseId/addBook', element: <AddBook/> ,errorElement:(<ErrorPage />)},
          { path:':courseId/:bookId/viewBook', element: <ViewBook/> ,errorElement:(<ErrorPage />)},
          { path:':courseId/:bookId/editBook', element: <EditeBook/> ,errorElement:(<ErrorPage />)},
          { path:':courseId', element: <Course/> ,errorElement:(<ErrorPage />)},
          { path:'profile', element: <Profile /> ,errorElement:(<ErrorPage />)},
        ],
      },
      {
        path: "/",
        element: <LayoutAuth />,
        children: [
          {index:true,element: <Landing /> ,errorElement:(<ErrorPage />)},
          { path: "signin", element: <Signin /> ,errorElement:(<ErrorPage />)},
          { path: "sendEmail", element: <SendEmail /> ,errorElement:(<ErrorPage />)},
          { path: "signup", element: <SignUpPage /> ,errorElement:(<ErrorPage />),
            children:[
              { index:true, element: <SignUp /> ,errorElement:(<ErrorPage />)},
              { path: "teacher", element: <Teacher /> ,errorElement:(<ErrorPage />)},
              { path: "student", element: <Student /> ,errorElement:(<ErrorPage />)},
              { path: "verifyRegister", element: <VerifyRegister /> ,errorElement:(<ErrorPage />)},
            ]
          },
    
        ],
      },
    ],
    errorElement:(<ErrorPage />)
  },
]);
function App() {

  
  return (
    <Provider store={Store} >
    <RouterProvider router={routers} />
  </Provider>
  )
}
<link rel="stylesheet" href="./tyle.css" />
export default App