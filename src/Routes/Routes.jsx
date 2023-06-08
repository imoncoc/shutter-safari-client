import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import SignUp from "../pages/Login/SignUp/SignUp";
import Login from "../pages/Login/Login/Login";
import Instructors from "../pages/Instructors/Instructors/Instructors";
import Classes from "../pages/Classes/Classes/Classes";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import DashBoard from "../Layout/DashBoard";
import Testing from "../pages/Dashboard/Testing/Testing";
import Mains from "../pages/Dashboard/Mains/main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "classes",
        element: <Classes></Classes>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: "testing",
        element: <Testing></Testing>,
      },
      {
        path: "mains",
        element: <Mains></Mains>,
      },
    ],
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "signUp",
    element: <SignUp></SignUp>,
  },
]);

export default router;
