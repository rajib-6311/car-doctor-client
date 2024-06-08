import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import CheckOut from "../Pages/CheckOut/CheckOut";
import ErrorPage from "../ErrorPage/ErrorPage";
import Bookings from "../Pages/Bookings/Bookings";

const router = createBrowserRouter([
    {
      path: "/",
    element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
              path: '/',
              element: <Home></Home>
          },
          {
            path: 'login',
            element: <Login></Login>
          },
          {
            path: 'signup',
            element: <SignUp></SignUp>
          },
          {
            path: 'checkout/:id',
            element: <CheckOut></CheckOut>,
             loader:({params})=>fetch(`http://localhost:5000/Services/${params.id}`)
          },
          {
            path: 'bookings',
            element: <Bookings></Bookings>
          }
      ]
    },
]);
  
export default router;