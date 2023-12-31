import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import './Navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import ThirdButton from "../../../components/Reuseable/Button/ThirdButton/ThirdButton";
import PrimaryButton from "../../../components/Reuseable/Button/PrimaryButton/PrimaryButton";
import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import useUser from "../../../hooks/useUser";


const Navbar = () => {
  const [theme, setTheme] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();
    const [isUser] = useUser();


    useEffect(() => {
      // Attach the event listener on window load
      window.addEventListener("load", handleToggle);

      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener("load", handleToggle);
      };
    }, []);

    const handleToggle = () => {
      // Toggle the theme
      const bodyElement = document.getElementsByTagName("body")[0];
      const currentTheme = bodyElement.getAttribute("data-bs-theme");
      const newTheme = currentTheme === "light" ? "dark" : "light";
      bodyElement.setAttribute("data-bs-theme", newTheme);
      setTheme(!theme)
      // console.log('Clicked', theme)
    };

    const handleLogOut = () => {
      logOut()
        .then(() => {})
        .catch((error) => console.log(error));
    };




    return (
      <>
        <Helmet>
          <title>Shutter Safari | Home</title>
        </Helmet>
        <nav className="navbar navbar-expand-lg navbar-light px-5 py-3 text-center">
          <div className="container">
            <Link to="/" className="navbar-brand my-0 py-0">
              <div className="d-flex align-items-center">
                <h2
                  className="navbar-res-icon"
                  style={{ color: "var(--main-lime-600)" }}
                >
                  <FontAwesomeIcon icon={faCameraRetro} />
                </h2>
                <h4
                  className="fw-bold text-uppercase ms-2 navbar-res-icon"
                  style={{ color: "var(--main-lime-600)" }}
                >
                  Shutter-Safari
                </h4>
              </div>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#myNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item fw-semibold">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link default"
                    }
                  >
                    Home
                  </NavLink>
                </li>

                <li className="nav-item fw-semibold">
                  <NavLink
                    to="/instructors"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link default"
                    }
                  >
                    Instructors
                  </NavLink>
                </li>
                <li className="nav-item fw-semibold">
                  <NavLink
                    to="/classes"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link default"
                    }
                  >
                    Classes
                  </NavLink>
                </li>
                {user && (
                  <li className="nav-item fw-semibold position-relative me-4 margin-t">
                    <NavLink
                      to="/dashboard"
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link default"
                      }
                    >
                      DashBoard
                      {isUser && (
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                          {cart.length}
                        </span>
                      )}
                    </NavLink>
                  </li>
                )}
                <li className="me-2 margin-t">
                  {user ? (
                    <div className="">
                      <img
                        title={user?.displayName}
                        className="img-fluid user-img me-2 mb-2 mb-sm-0"
                        src={user.photoURL}
                        alt=""
                      />
                      <span onClick={handleLogOut}>
                        <ThirdButton name={"Logout"}></ThirdButton>
                      </span>
                    </div>
                  ) : (
                    <Link to="/login">
                      <PrimaryButton name={"Login"}></PrimaryButton>
                    </Link>
                  )}

                  {/* {user ? (
                  <div
                    className="d-flex justify-content-around align-items-center text-center"
                    style={{ width: "20rem" }}
                  >
                    <div className="d-flex align-items-center">
                      {user.photoURL ? (
                        <img
                          src={user?.photoURL}
                          title={
                            user.displayName
                              ? user.displayName
                              : "No Name Found!"
                          }
                          alt=""
                          className="user-img img-fluid"
                        />
                      ) : (
                        <div
                          className="phone-icon"
                          title={
                            user?.displayName
                              ? user.displayName
                              : "No Name Found!"
                          }
                        >
                          <FontAwesomeIcon
                            className="user-icon"
                            icon={faUser}
                          />
                        </div>
                      )}
                      <p className="user-email my-2 ms-1 fw-semibold">
                        {user.email ? (
                          // <span>{user.email.substring(0, 20)}</span>
                          <span>
                            {user.email.substring(0, 3)}....
                            {user.email.substring(user.email.length - 10)}
                          </span>
                        ) : (
                          <span style={{ fontSize: "0.8rem" }}>Mr/Mrs.</span>
                        )}
                      </p>
                    </div>
                    <button
                      className="btn btn-outline-danger"
                      onClick={handleLogOut}
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <Link to="/login">
                    <button className="btn btn-outline-info">Login</button>
                  </Link>
                )} */}
                </li>
                <li className="my-1 mt-3 mt-sm-0">
                  <div className="my-2 mx-3" onClick={handleToggle}>
                    {theme ? (
                      <span className="toggle-icon">
                        <FontAwesomeIcon
                          className="px-1 text-dark"
                          icon={faMoon}
                        />
                      </span>
                    ) : (
                      <span className="toggle-icon">
                        <FontAwesomeIcon
                          className="px-1 text-warning"
                          icon={faSun}
                        />
                      </span>
                    )}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
};

export default Navbar;