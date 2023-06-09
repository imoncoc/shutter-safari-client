import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./DashboardNavbar.css";
import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import TestNav from "../TestNav/TestNav";
import useAdmin from "../../../hooks/useAdmin";

const DashboardNavbar = () => {
  const [isAdmin] = useAdmin();
  console.log(isAdmin);

  
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
          <a
            className="navbar-brand me-auto ms-lg-0 ms-3 text-uppercase fw-bold"
            href="#"
          >
            Shutter Safari
          </a>
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
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
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
              <li>
                <div className="text-white small fw-bold text-uppercase px-3">
                  CORE
                </div>
              </li>
              <li>
                <a href="#" className="nav-link px-3">
                  <span className="me-2">
                    <i className="bi bi-speedometer2"></i>
                  </span>
                  <span>Dashboard</span>
                </a>
              </li>
              <li>
                <Link to={"/dashboard/mains"} href="#" className="nav-link px-3">
                  <span className="me-2">
                    <i className="bi bi-speedometer2"></i>
                  </span>
                  <span>Main</span>
                </Link>
              </li>
              <li>
                <Link to={"/dashboard/testing"} href="#" className="nav-link px-3">
                  <span className="me-2">
                    <i className="bi bi-speedometer2"></i>
                  </span>
                  <span>Testing</span>
                </Link>
              </li>
              <li className="my-4">
                <hr className="dropdown-divider bg-light" />
              </li>
              <li>
                <div className="text-white small fw-bold text-uppercase px-3 mb-3">
                  Interface
                </div>
              </li>
              <li>
                <a
                  className="nav-link px-3 sidebar-link"
                  data-bs-toggle="collapse"
                  href="#layouts"
                >
                  <span className="me-2">
                    <i className="bi bi-layout-split"></i>
                  </span>
                  <span>Layouts</span>
                  <span className="ms-auto">
                    <span className="right-icon">
                      <i className="bi bi-chevron-down"></i>
                    </span>
                  </span>
                </a>
                <div className="collapse" id="layouts">
                  <ul className="navbar-nav ps-3">
                    <li>
                      <a href="#" className="nav-link px-3">
                        <span className="me-2">
                          <i className="bi bi-speedometer2"></i>
                        </span>
                        <span>Dashboard</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#" className="nav-link px-3">
                  <span className="me-2">
                    <i className="bi bi-book-fill"></i>
                  </span>
                  <span>Pages</span>
                </a>
              </li>
              <li className="my-4">
                <hr className="dropdown-divider bg-light" />
              </li>
              <li>
                <div className="text-white small fw-bold text-uppercase px-3 mb-3">
                  Addons
                </div>
              </li>
              <li>
                <a href="#" className="nav-link px-3">
                  <span className="me-2">
                    <i className="bi bi-graph-up"></i>
                  </span>
                  <span>Charts</span>
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-3">
                  <span className="me-2">
                    <i className="bi bi-table"></i>
                  </span>
                  <span>Tables</span>
                </a>
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
