import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadingTitle from '../../Shared/HeadingTitle/HeadingTitle';
import './Features.css';
import { faCertificate, faChalkboard, faCommentDots, faLaptopCode, faNetworkWired, faPersonChalkboard, faPhotoFilm } from '@fortawesome/free-solid-svg-icons';
import { faDiscourse } from '@fortawesome/free-brands-svg-icons';
import { Fade } from 'react-awesome-reveal';

const Features = () => {
  return (
    <>
      <HeadingTitle
        title={"Features"}
        description={
          "Empower your photography journey with expert-led courses, interactive assignments, and a thriving community"
        }
      ></HeadingTitle>

      <Fade>
        <div className="container">
          <div className="row">
            <div className="col-10 col-md-6 my-5 mx-auto">
              <h4 className="text-main-very-dark-blue  mb-3 text-start">
                Cultivate your photography skills through interactive lessons,
                hands-on assignments, and personalized feedback from industry
                experts.
              </h4>
              <img
                className="img-fluid shadow-lg"
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
                alt=""
              />
            </div>
            <div className="col-10 col-md-6 my-5 mx-auto">
              <div className="row">
                <div className="col-6">
                  <p className="feature-icon">
                    <FontAwesomeIcon className="fa-3x" icon={faChalkboard} />
                  </p>
                  <p className="feature-title">Interactive Learning</p>
                  <p className="feature-description">
                    Engage with dynamic lessons that blend theory and practice,
                    ensuring an immersive and effective learning journey.
                  </p>
                </div>

                <div className="col-6">
                  <p className="feature-icon">
                    <FontAwesomeIcon className="fa-3x" icon={faDiscourse} />
                  </p>
                  <p className="feature-title">Comprehensive Courses</p>
                  <p className="feature-description">
                    Dive into a diverse range of photography courses, from
                    basics to advanced, designed to elevate your skills.
                  </p>
                </div>
                <div className="col-6">
                  <p className="feature-icon">
                    <FontAwesomeIcon
                      className="fa-3x"
                      icon={faPersonChalkboard}
                    />
                  </p>
                  <p className="feature-title">Expert Instructors</p>
                  <p className="feature-description">
                    Learn from industry pros, gaining insights and techniques
                    from experienced photographers.
                  </p>
                </div>
                <div className="col-6">
                  <p className="feature-icon">
                    <FontAwesomeIcon className="fa-3x" icon={faLaptopCode} />
                  </p>
                  <p className="feature-title">Hands-On Assignments</p>
                  <p className="feature-description">
                    Apply your knowledge through real-world assignments,
                    refining your abilities through practical experience.
                  </p>
                </div>
                <div className="col-6">
                  <p className="feature-icon">
                    <FontAwesomeIcon className="fa-3x" icon={faCommentDots} />
                  </p>
                  <p className="feature-title">Personalized Feedback</p>
                  <p className="feature-description">
                    Receive tailored feedback on your work, guiding you towards
                    improvement with constructive insights.
                  </p>
                </div>
                <div className="col-6">
                  <p className="feature-icon">
                    <FontAwesomeIcon className="fa-3x" icon={faPhotoFilm} />
                  </p>
                  <p className="feature-title">Resource Library</p>
                  <p className="feature-description">
                    Access a wealth of supplementary materials – e-books,
                    guides, and downloadable resources – enriching your
                    education.
                  </p>
                </div>
                <div className="col-6">
                  <p className="feature-icon">
                    <FontAwesomeIcon className="fa-3x" icon={faNetworkWired} />
                  </p>
                  <p className="feature-title">Networking</p>
                  <p className="feature-description">
                    Connect with fellow learners and professionals, expanding
                    your photography circle and opportunities.
                  </p>
                </div>
                <div className="col-6">
                  <p className="feature-icon">
                    <FontAwesomeIcon className="fa-3x" icon={faCertificate} />
                  </p>
                  <p className="feature-title">Certification</p>
                  <p className="feature-description">
                    Earn certificates upon course completion, validating your
                    expertise and dedication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
}

export default Features