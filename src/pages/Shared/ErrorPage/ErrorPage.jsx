import { Link, useRouteError } from 'react-router-dom';
import './ErrorPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import PrimaryButton from '../../../components/Reuseable/Button/PrimaryButton/PrimaryButton';

const ErrorPage = () => {
    const { error } = useRouteError();






    return (
      <div className="error-bg">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto">
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "100vh" }}
              >
                <div className="error-bg-text">
                  <p className="fs-1 text-white">{error?.message}</p>
                  <div className="d-flex justify-content-center text-white">
                    <Link to="/" className="">
                      {/* <FontAwesomeIcon icon={faArrowLeft} className="me-2 " />
                      Back to homepage */}
                      <PrimaryButton
                        icon={<FontAwesomeIcon className='me-2' icon={faArrowLeft} />}
                        name="Back to Homepage"
                      ></PrimaryButton>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ErrorPage;