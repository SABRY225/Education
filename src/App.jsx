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

export default App
