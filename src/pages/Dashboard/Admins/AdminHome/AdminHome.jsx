/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import './AdminHome.css';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { Helmet } from 'react-helmet-async';

const AdminHome = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [axiosSecure] = useAxiosSecure();
  const [payments, setPayments] = useState([]);
    const [classes, setClasses] = useState([]);
    console.log(payments)


    const instructorCount = [...new Set(classes.map((obj) => obj.insEmail))]
      .length;

      const totalEnrolledStudent = [
        ...new Set(payments.map((obj) => obj.email)),
      ].length;
      
      const totalRevenue = Object.values(payments).reduce(
        (sum, item) => sum + item.price,
        0
      );

      


  useEffect(() => {
    axiosSecure("/users").then((res) => {
      setAllUsers(res.data);
    });
  }, [axiosSecure]);

  useEffect(() => {
    axiosSecure("/payments").then((res) => {
      setPayments(res.data);
    });
  }, [axiosSecure]);



  useEffect(() => {
    fetch("https://shutter-safari-imoncoc.vercel.app/classes")
      .then((res) => res.json())
      .then((data) => setClasses(data))
      .catch((error) => console.log(error));
  }, []);







    return (
      <>
        <Helmet>
          <title>Shutter Safari | Dashboard Admin Home</title>
        </Helmet>
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
              <div className="col-md-4 mb-3">
                <div className="card bg-primary text-white h-100">
                  <div className="card-body py-5 text-center">
                    <h5>Total Users</h5>
                    <h2>{allUsers.length}</h2>
                    <p>People's are logged user.</p>
                  </div>
                  <div className="card-footer d-flex">
                    <Link
                      to="/dashboard/admin-manageUsers"
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
              <div className="col-md-4 mb-3">
                <div className="card bg-warning text-dark h-100">
                  <div className="card-body py-5 text-center">
                    <h5>Total Classes</h5>
                    <h2>{classes.length}</h2>
                    <p>Classes</p>
                  </div>
                  <div className="card-footer d-flex">
                    <Link
                      to="/dashboard/admin-manageClasses"
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
              <div className="col-md-4 mb-3">
                <div className="card bg-success text-white h-100">
                  <div className="card-body py-5 text-center">
                    <h5>Total Instructor's</h5>
                    <h2>{instructorCount}</h2>
                    <p>Instructor's Classes</p>
                  </div>
                  <div className="card-footer d-flex">
                    <Link
                      to="/dashboard/admin-manageClasses"
                      className="text-white"
                    >
                      View Classes
                    </Link>
                    <span className="ms-auto">
                      <i className="bi bi-chevron-right"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="card bg-info text-dark h-100">
                  <div className="card-body py-5 text-center">
                    <h5>Total Running Student's</h5>
                    <h2>{totalEnrolledStudent}</h2>
                    <p>Student's enrolled different classes</p>
                  </div>
                  <div className="card-footer d-flex">
                    <Link
                      to="/dashboard/admin-manageClasses"
                      className="text-white"
                    >
                      View Classes
                    </Link>
                    <span className="ms-auto">
                      <i className="bi bi-chevron-right"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="card bg-danger text-white h-100">
                  <div className="card-body py-5 text-center">
                    <h5>Total Revenue</h5>
                    <h2>${totalRevenue.toFixed(2)}</h2>
                    <p>Total Payments by Student's</p>
                  </div>
                  <div className="card-footer d-flex">
                    <Link
                      to="/dashboard/admin-manageClasses"
                      className="text-white"
                    >
                      View Classes
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
      </>
    );
};

export default AdminHome;