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
import AllStuSubjexts from './student/StudentSubject/AllStuSubjexts';
import ShowStuSubject from './student/StudentSubject/ShowStuSubject';
import AllLessoins from './student/lessoins/AllLessoins';
import Quize from './student/quizes/Quize';
import ShowQuize from './student/quizes/ShowQuize';
import Books from './student/books/Books';
 import AllSubjects from './student/AllSubject/AllSubject';
 
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
      // كل المواد اللي مشترك فيها الطالب
      { path: "AllStuSubjexts", element: <AllStuSubjexts /> ,errorElement:(<ErrorPage />)},
      { path: "ShowStuSubject", element: <ShowStuSubject /> ,errorElement:(<ErrorPage />)},
      { path: "AllLessoins", element: <AllLessoins /> ,errorElement:(<ErrorPage />)},
      { path: "Quize", element: <Quize /> ,errorElement:(<ErrorPage />)},
      { path: "ShowQuize", element: <ShowQuize /> ,errorElement:(<ErrorPage />)},
      { path: "Books", element: <Books /> ,errorElement:(<ErrorPage />)},
      // كل المواد اللي علي المنصه
      
      { path: "AllSubjects", element: <AllSubjects /> ,errorElement:(<ErrorPage />)},

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
    children: [],
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
<link rel="stylesheet" href="./tyle.css" />
export default App