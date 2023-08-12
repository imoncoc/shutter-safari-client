import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadingTitle from '../../Shared/HeadingTitle/HeadingTitle';
import './SnapshotSafaris.css';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Fade } from 'react-awesome-reveal';
import LazyLoad from 'react-lazy-load';

const SnapshotSafaris = () => {
  return (
    <>
      <HeadingTitle
        title={"Snapshot Safaris"}
        description={
          "Weekly photographic tours for hands-on learning and creative inspiration"
        }
      ></HeadingTitle>

      <div className="container-fluid">
          <Fade>
        <div className="row">
            <div className="col-12 col-md-6 my-5 ps-5">
              <h3 className="snapshot-safari-header">
                Explore the art of photography through our weekly guided tours.
                Join us as we embark on visual adventures, mastering techniques
                and capturing moments that tell extraordinary stories.
              </h3>
              <ul className="navbar-nav">
                <li className="nav-item text-muted">
                  <FontAwesomeIcon
                    className="me-2 text-lime-500"
                    icon={faCheck}
                  />{" "}
                  Engage in captivating weekly photography tours.
                </li>
                <li className="nav-item text-muted">
                  <FontAwesomeIcon
                    className="me-2 text-lime-500"
                    icon={faCheck}
                  />{" "}
                  Gain practical experience and refine your skills.
                </li>
                <li className="nav-item text-muted">
                  <FontAwesomeIcon
                    className="me-2 text-lime-500"
                    icon={faCheck}
                  />{" "}
                  Find inspiration and unlock your artistic vision.
                </li>
                <li className="nav-item text-muted">
                  <FontAwesomeIcon
                    className="me-2 text-lime-500"
                    icon={faCheck}
                  />{" "}
                  Explore varied locations for unique photo opportunities.
                </li>
                <li className="nav-item text-muted">
                  <FontAwesomeIcon
                    className="me-2 text-lime-500"
                    icon={faCheck}
                  />{" "}
                  Freeze time with your lens and create lasting memories.
                </li>
                <li className="nav-item text-muted">
                  <FontAwesomeIcon
                    className="me-2 text-lime-500"
                    icon={faCheck}
                  />{" "}
                  Discover hidden gems and off-the-beaten-path spots.
                </li>
                <li className="nav-item text-muted">
                  <FontAwesomeIcon
                    className="me-2 text-lime-500"
                    icon={faCheck}
                  />{" "}
                  Forge unforgettable experiences while capturing the world
                  through your lens.
                </li>
              </ul>
            </div>
          

          
            <div className="col-12 col-md-6 my-5">
              <LazyLoad height={"100%"}>
                <img
                  className="img-fluid"
                  src="https://i.ibb.co/Q8SNPbt/snapshorts-safari.jpg"
                  alt=""
                  />
                  </LazyLoad>
            </div>
        </div>
          </Fade>
      </div>
    </>
  );
}

export default SnapshotSafaris