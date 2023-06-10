import LazyLoad from 'react-lazy-load';
import './SingleInstructor.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../../components/Reuseable/Button/PrimaryButton/PrimaryButton';

const SingleInstructor = ({ instructor }) => {
    console.log(instructor)
    const { insImage, instructorName, name, insEmail, clsImage } = instructor;
  return (
    <div className="col-10 mx-auto my-5 col-md-6 col-lg-4">
      <div className="card shadow">
        <LazyLoad height={"100%"}>
          <img src={clsImage} alt={name} className="card-img-top" />
        </LazyLoad>
        <div className="card-body text-center customer-card-body">
          <LazyLoad height={"100%"}>
            <img
              src={insImage}
              className="customer-img rounded-circle"
              alt="customer image"
            />
          </LazyLoad>
          <div className="card-title">
            <h5 className="customer-name text-capitalize instructor-title">
              {instructorName}
            </h5>
          </div>
          <h6 className="customer-job text-capitalize">{name}</h6>
          <p className="customer-quote text-center mx-auto text-muted">
            A comprehensive{" "}
            <span className="chef-title fw-semibold"> 3 month</span>{" "}
            professional photography training program designed specifically for
            summer camp.
          </p>

          <div className="d-flex justify-content-between">
            <p className="me-4" title="Email">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="me-2 instructor-icon"
              />
              <span className='instructor-email-text mb-2'>{insEmail}</span>
            </p>
            <p title="Classes">
              <FontAwesomeIcon
                icon={faChalkboardUser}
                className="me-2 instructor-icon"
              />
              2
            </p>
          </div>

          <Link>
            <PrimaryButton name="See Classes" width={"w-100"}></PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleInstructor;