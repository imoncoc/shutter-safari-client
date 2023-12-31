
import { useContext } from 'react';
import DashboardNavbar from '../DashboardNavbar/DashboardNavbar';
import './Dashboard.css'
import { AuthContext } from '../../../providers/AuthProvider';
import { Helmet } from 'react-helmet-async';

const Dashboard = () => {
  const {user} = useContext(AuthContext);
  // console.log(user)

    return (
      <>
      <Helmet>
        <title>Shutter Safari || Dashboard</title>
      </Helmet>
        <main className='mt-5 pt-3'>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2>Hello, {user.displayName}.</h2>
              </div>
            </div>
          </div>
        </main>
        <DashboardNavbar></DashboardNavbar>
      </>
    );
};

export default Dashboard;