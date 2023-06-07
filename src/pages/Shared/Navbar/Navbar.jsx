import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import './Navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import ThirdButton from "../../../components/Reuseable/Button/ThirdButton/ThirdButton";
import PrimaryButton from "../../../components/Reuseable/Button/PrimaryButton/PrimaryButton";


const Navbar = () => {
  const [theme, setTheme] = useState(false);
    const { user, logOut } = useContext(AuthContext);

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
      console.log('Clicked', theme)
    };

    const handleLogOut = () => {
      logOut()
        .then(() => {})
        .catch((error) => console.log(error));
    };




    return (
      <nav className="navbar navbar-expand-lg navbar-light px-5 py-3">
        <div className="container">
          <Link to="/" className="navbar-brand my-0 py-0">
            <div className="d-flex align-items-center">
              <h2 style={{ color: "var(--main-lime-600)" }}>
                <FontAwesomeIcon icon={faCameraRetro} />
              </h2>
              <h4
                className="fw-bold text-uppercase ms-3"
                style={{ color: "var(--main-lime-600)" }}
              >
                Shutter Safari
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
                  to="/blogs"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link default"
                  }
                >
                  Blogs
                </NavLink>
              </li>
              <li className="nav-item fw-semibold">
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link default"
                  }
                >
                  DashBoard
                </NavLink>
              </li>
              <li className="me-2">
                {user ? (
                  // <button onClick={handleLogOut} className="btn btn-danger">
                  //   {" "}
                  //   Logout
                  // </button>
                  <span onClick={handleLogOut}>
                    <ThirdButton name={"Logout"}></ThirdButton>
                  </span>
                ) : (
                  <Link to="/login">
                    <PrimaryButton name={"Login"}></PrimaryButton>
                  </Link>
                )}
              </li>
              <li className="my-1">
                <div onClick={handleToggle}>
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
    );
};

export default Navbar;