import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./DashboardNavbar.css";
import {
  faHouse,
  faMagnifyingGlass,
  faUser,
  faCalendarDays,
  faCartShopping,
  faPersonChalkboard,
  faChalkboardUser,
  faCartPlus,
  faUsers,
  faListCheck,
  faCameraRetro,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import TestNav from "../TestNav/TestNav";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";
import useUser from "../../../hooks/useUser";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import ThirdButton from "../../../components/Reuseable/Button/ThirdButton/ThirdButton";

const DashboardNavbar = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [isUser] = useUser();
  const { user, logOut } = useContext(AuthContext);
  // console.log('isAdmin', isAdmin);
  // console.log("isInstructor", isInstructor);
  //  console.log("isUser", isUser);

   const handleLogOut = () => {
     logOut()
       .then(() => {})
       .catch((error) => console.log(error));
   };


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#sidebar"
            aria-controls="offcanvasExample"
          >
            <span
              className="navbar-toggler-icon"
              data-bs-target="#sidebar"
            ></span>
          </button>
          <Link
            to={"/"}
            className="navbar-brand me-auto ms-lg-0 ms-3 text-uppercase fw-bold"
            href="#"
          >
            <span className="me-2 text-lime-500">
              <FontAwesomeIcon icon={faCameraRetro} />
            </span>
            <span className="text-lime-500">Shutter Safari</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#topNavBar"
            aria-controls="topNavBar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="topNavBar">
            <form className="d-flex ms-auto my-3 my-lg-0">
              <div className="input-group">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-primary" type="submit">
                  <i className="bi bi-search"></i>
                  <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                </button>
              </div>
            </form>
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle ms-2"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a className="dropdown-item" href="#">
                      {user?.displayName}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      {user.email}
                    </a>
                  </li>
                  <li>
                    <Link to="/" className="dropdown-item" onClick={handleLogOut}>
                      <ThirdButton width="w-100" name="Logout"></ThirdButton>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- top navigation bar -->
    <!-- offcanvas --> */}
      <div
        className="offcanvas offcanvas-start sidebar-nav bg-dark"
        tabIndex="-1"
        id="sidebar"
      >
        <div className="offcanvas-body p-0">
          <nav className="navbar-dark">
            <ul className="navbar-nav">
              {/* <li>
                <div className="text-white small fw-bold text-uppercase px-3">
                  {isAdmin? "Admin": isInstructor? "Instructor" : "User" }
                </div>
              </li> */}

              {isUser && (
                <>
                  <li>
                    <div className="text-white small fw-bold text-uppercase px-3">
                      User
                    </div>
                  </li>

                  <li>
                    <Link
                      to={"/dashboard/user-home"}
                      href="#"
                      className="nav-link px-3"
                    >
                      <span className="me-2">
                        <FontAwesomeIcon icon={faHouse} />
                      </span>
                      <span>Home</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/dashboard/user-myClass"}
                      href="#"
                      className="nav-link px-3"
                    >
                      <span className="me-2">
                        <FontAwesomeIcon icon={faCalendarDays} />
                      </span>
                      <span>My Class</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/dashboard/user-enrolled-class"}
                      href="#"
                      className="nav-link px-3"
                    >
                      <span className="me-2">
                        <FontAwesomeIcon icon={faCartShopping} />
                      </span>
                      <span>My Enrolled Class</span>
                    </Link>
                  </li>
                </>
              )}

              {isInstructor && (
                <>
                  <li>
                    <div className="text-white small fw-bold text-uppercase px-3">
                      Instructor
                    </div>
                  </li>

                  <li>
                    <Link
                      to={"/dashboard/instructor-home"}
                      href="#"
                      className="nav-link px-3"
                    >
                      <span className="me-2">
                        <FontAwesomeIcon icon={faHouse} />
                      </span>
                      <span>Home</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/dashboard/instructor-myClasses"}
                      href="#"
                      className="nav-link px-3"
                    >
                      <span className="me-2">
                        <FontAwesomeIcon icon={faCalendarDays} />
                      </span>
                      <span>My Classes</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/dashboard/instructor-addAClass"}
                      href="#"
                      className="nav-link px-3"
                    >
                      <span className="me-2">
                        <FontAwesomeIcon icon={faCartPlus} />
                      </span>
                      <span>Add A Class</span>
                    </Link>
                  </li>
                </>
              )}

              {isAdmin && (
                <>
                  <li>
                    <div className="text-white small fw-bold text-uppercase px-3">
                      Admin
                    </div>
                  </li>

                  <li>
                    <Link
                      to={"/dashboard/admin-home"}
                      href="#"
                      className="nav-link px-3"
                    >
                      <span className="me-2">
                        <FontAwesomeIcon icon={faHouse} />
                      </span>
                      <span>Home</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/dashboard/admin-manageClasses"}
                      href="#"
                      className="nav-link px-3"
                    >
                      <span className="me-2">
                        <FontAwesomeIcon icon={faListCheck} />
                      </span>
                      <span>Manage Classes</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/dashboard/admin-manageUsers"}
                      href="#"
                      className="nav-link px-3"
                    >
                      <span className="me-2">
                        <FontAwesomeIcon icon={faUsers} />
                      </span>
                      <span>Manage Users</span>
                    </Link>
                  </li>
                </>
              )}

              {/* <li>
                <a href="#" className="nav-link px-3">
                  <span className="me-2">
                    <i className="bi bi-speedometer2"></i>
                  </span>
                  <span>Dashboard</span>
                </a>
              </li>
              <li>
                <Link
                  to={"/dashboard/mains"}
                  href="#"
                  className="nav-link px-3"
                >
                  <span className="me-2">
                    <i className="bi bi-speedometer2"></i>
                  </span>
                  <span>Main</span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/dashboard/testing"}
                  href="#"
                  className="nav-link px-3"
                >
                  <span className="me-2">
                    <i className="bi bi-speedometer2"></i>
                  </span>
                  <span>Testing</span>
                </Link>
              </li>
              <li className="my-4">
                <hr className="dropdown-divider bg-light" />
              </li> */}

              <li className="mt-5">
                <div className="text-white small fw-bold text-uppercase px-3 mb-1">
                  Main
                </div>
              </li>

              <li>
                <Link to={"/"} href="#" className="nav-link px-3">
                  <span className="me-2">
                    <FontAwesomeIcon icon={faHouse} />
                  </span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to={"/instructors"} href="#" className="nav-link px-3">
                  <span className="me-2">
                    <FontAwesomeIcon icon={faPersonChalkboard} />
                  </span>
                  <span>Instructors</span>
                </Link>
              </li>
              <li>
                <Link to={"/classes"} href="#" className="nav-link px-3">
                  <span className="me-2">
                    <FontAwesomeIcon icon={faChalkboardUser} />
                  </span>
                  <span>Classes</span>
                </Link>
              </li>

              <li className="my-4">
                <hr className="dropdown-divider bg-light" />
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* <!-- offcanvas --> */}
      <TestNav></TestNav>
      
    </>
  );
};

export default DashboardNavbar;
