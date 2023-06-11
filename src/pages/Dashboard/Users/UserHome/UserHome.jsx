import { Link } from 'react-router-dom';
import './UserHome.css';

const UserHome = () => {
    return (
      <main className="mt-2 pt-3">
        {/* <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h2 className="text-dark">This is UserHome</h2>
            </div>
          </div>
        </div> */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12"></div>
          </div>
          <div className="row">
            <div className="col-md-3 mb-3">
              <div className="card bg-primary text-white h-100">
                <div className="card-body py-5">
                  <h5>Total Classes</h5>
                  <p>Check View Details</p>
                </div>
                <div className="card-footer d-flex">
                  <Link to="/dashboard/user-myClass" className="text-white">
                    View Details
                  </Link>
                  <span className="ms-auto">
                    <i className="bi bi-chevron-right"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card bg-warning text-dark h-100">
                <div className="card-body py-5">
                  <h5>Total Enrolled Classes</h5>
                  <p>Check View Details</p>
                </div>
                <div className="card-footer d-flex">
                  <Link
                    to="/dashboard/user-enrolled-class"
                    className="text-white"
                  >
                    View Details
                  </Link>
                  <span className="ms-auto">
                    <i className="bi bi-chevron-right"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card bg-success text-white h-100">
                <div className="card-body py-5">
                  <h5>User&rsquo;s Home</h5>
                  <p>Check View Details</p>
                </div>
                <div className="card-footer d-flex">
                  <Link to="/" className="text-white">
                    View Details
                  </Link>
                  <span className="ms-auto">
                    <i className="bi bi-chevron-right"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
};

export default UserHome;