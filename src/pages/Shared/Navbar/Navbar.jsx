import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import './Navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import ThirdButton from "../../../components/Reuseable/Button/ThirdButton/ThirdButton";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
      logOut()
        .then(() => {})
        .catch((error) => console.log(error));
    };



    return (
      <nav className="navbar navbar-expand-lg navbar-light  px-5 py-3 ">
        <div className="container">
          <Link to="/" className="navbar-brand my-0 py-0">
            <div className="d-flex align-items-center">
              <h2 style={{ color: "var(--main-very-dark-blue)" }}>
                <FontAwesomeIcon icon={faCameraRetro} />
              </h2>
              <h4
                className="fw-bold text-uppercase ms-3"
                style={{ color: "var(--main-very-dark-blue)" }}
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
              {user ? (
                <button onClick={handleLogOut} className="btn btn-danger">
                  {" "}
                  Logout
                </button>
              ) : (
                <Link to="/login">
                  <ThirdButton name={"Login"}></ThirdButton>
                </Link>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;