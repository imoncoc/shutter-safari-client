import { Link } from 'react-router-dom';
import './InstructorHome.css';
import useAuth from '../../../../hooks/useAuth';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const InstructorHome = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: myClasses = [] } = useQuery({
    queryKey: ["myClasses", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/my-classes/${user?.email}`);
      // console.log("res from axios", res);
      return res.data;
    },
  });

  console.log("myClasses", myClasses)

  const pendingClasses = myClasses
    .filter((course) => course.status === "pending");

    const approveClasses = myClasses.filter(
      (course) => course.status === "approve"
    );

  console.log(pendingClasses, approveClasses);



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
                <div className="card-body py-5 text-center">
                  <h5>My Total Classes</h5>
                  <h2>{myClasses.length}</h2>
                  <p>Check View Details</p>
                </div>
                <div className="card-footer d-flex">
                  <Link
                    to="/dashboard/instructor-myClasses"
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
              <div className="card bg-warning text-dark h-100">
                <div className="card-body py-5 text-center">
                  <h5>Total Approved Classes</h5>
                  <h2>{approveClasses.length}</h2>
                  <p>Check View Details</p>
                </div>
                <div className="card-footer d-flex">
                  <Link
                    to="/dashboard/instructor-myClasses"
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
                <div className="card-body py-5 text-center">
                  <h5>Total Pending Classes</h5>
                  <h2>{pendingClasses.length}</h2>
                  <p>Check View Details</p>
                </div>
                <div className="card-footer d-flex">
                  <Link
                    to="/dashboard/instructor-myClasses"
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
          </div>
        </div>
      </main>
    );
};

export default InstructorHome;