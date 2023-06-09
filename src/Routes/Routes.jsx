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
import PrivateRoute from "./PrivateRoute";
import UserHome from "../pages/Dashboard/Users/UserHome/UserHome";
import UserMyClass from "../pages/Dashboard/Users/UserMyClass/UserMyClass";
import UserEnrolledClass from "../pages/Dashboard/Users/UserEnrolledClass/UserEnrolledClass";
import InstructorHome from "../pages/Dashboard/Instructors/InstructorHome/InstructorHome";
import InstructorMyClasses from "../pages/Dashboard/Instructors/InstructorMyClasses/InstructorMyClasses";
import InstructorAddAClass from "../pages/Dashboard/Instructors/InstructorAddAClass/InstructorAddAClass";
import AdminHome from "../pages/Dashboard/Admins/AdminHome/AdminHome";
import AdminManageClasses from "../pages/Dashboard/Admins/AdminManageClasses/AdminManageClasses";
import AdminManageUsers from "../pages/Dashboard/Admins/AdminManageUsers/AdminManageUsers";

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
    element: (
      <PrivateRoute>
        <DashBoard></DashBoard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "user-home",
        element: <UserHome></UserHome>,
      },
      {
        path: "user-myClass",
        element: <UserMyClass></UserMyClass>,
      },
      {
        path: "user-enrolled-class",
        element: <UserEnrolledClass></UserEnrolledClass>,
      },
      {
        path: "instructor-home",
        element: <InstructorHome></InstructorHome>,
      },
      {
        path: "instructor-myClasses",
        element: <InstructorMyClasses></InstructorMyClasses>,
      },
      {
        path: "instructor-addAClass",
        element: <InstructorAddAClass></InstructorAddAClass>,
      },
      {
        path: "admin-home",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "admin-manageClasses",
        element: <AdminManageClasses></AdminManageClasses>,
      },
      {
        path: "admin-manageUsers",
        element: <AdminManageUsers></AdminManageUsers>,
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
