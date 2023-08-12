import './MembershipPlans.css'

import HeadingTitle from "../../Shared/HeadingTitle/HeadingTitle";
import membership1 from '../../../../public/membership-01.json';
import membership2 from '../../../../public/membership-02.json';
import membership3 from '../../../../public/membership-03.json';

import Lottie from "lottie-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import SecondaryButton from './../../../components/Reuseable/Button/SecondaryButton/SecondaryButton'

const MembershipPlans = () => {
  return (
    <>
      <HeadingTitle
        title={"Membership Plans"}
        description={
          "Explore our flexible membership plans for accessing our photography courses at your own pace."
        }
      ></HeadingTitle>

      <div className="container">
        <div className="row">
          <div className="col-10 col-md-6 col-lg-4 mx-auto my-5">
            <div
              className="card shadow p-2"
              style={{ width: "20rem", border: "none" }}
            >
              <div>
                <Lottie
                  className="w-75 mx-auto"
                  animationData={membership1}
                  loop={true}
                />
              </div>
              <div className="card-body">
                <h4 className="text-center text-semibold text-main-very-dark-blue">
                  7 Days Free Trails
                </h4>
                <h3 className="text-center text-lime-600">$ 0.00</h3>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <FontAwesomeIcon
                      className="me-2 text-lime-500"
                      icon={faCheck}
                    />
                    <span className="text-muted">
                      Practical projects enhance skills
                    </span>
                  </li>
                  <li className="nav-item">
                    <FontAwesomeIcon
                      className="me-2 text-lime-500"
                      icon={faCheck}
                    />
                    <span className="text-muted">
                      Learn from top photographers
                    </span>
                  </li>
                  <li className="nav-item">
                    <FontAwesomeIcon
                      className="me-2 text-lime-500"
                      icon={faCheck}
                    />
                    <span className="text-muted">
                      Risk-free trial, cancel anytime
                    </span>
                  </li>
                  <li className="nav-item">
                    <FontAwesomeIcon
                      className="me-2 text-main-soft-red"
                      icon={faXmark}
                    />
                    <span className="text-muted ">
                      Unlimited Access All Courses
                    </span>
                  </li>
                  <li className="nav-item">
                    <FontAwesomeIcon
                      className="me-2 text-main-soft-red"
                      icon={faXmark}
                    />
                    <span className="text-muted text-decoration-line-through">
                      Hands-on assignments and projects.
                    </span>
                  </li>
                  <li className="nav-item">
                    <FontAwesomeIcon
                      className="me-2 text-main-soft-red"
                      icon={faXmark}
                    />
                    <span className="text-muted text-decoration-line-through">
                      Live Support and community
                    </span>
                  </li>
                  <li className="nav-item">
                    <FontAwesomeIcon
                      className="me-2 text-main-soft-red"
                      icon={faXmark}
                    />
                    <span className="text-muted text-decoration-line-through">
                      Access all the upcoming courses
                    </span>
                  </li>
                </ul>

                <div className="my-2">
                  <SecondaryButton
                    name="See Classes"
                    width={"w-100"}
                  ></SecondaryButton>
                </div>
              </div>
            </div>
          </div>
          <div className="col-10 col-md-6 col-lg-4 mx-auto my-5">
            <div
              className="card shadow p-2 membership-2 position-relative overflow-hidden"
              style={{
                width: "20rem",
                border: "2px solid var(--main-lime-500)",
              }}
            >
              <span className="popular-label">Popular</span>
              <div>
                <Lottie
                  className="w-75 mx-auto"
                  animationData={membership2}
                  loop={true}
                />
              </div>
              <div className="card-body">
                <h4 className="text-center text-semibold text-main-very-dark-blue">
                  6 Months Membership
                </h4>
                <h3 className="text-center text-lime-600">$ 99.99</h3>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <FontAwesomeIcon
                      className="me-2 text-lime-500"
                      icon={faCheck}
                    />
                    <span className="text-muted">
                      Practical projects enhance skills
                    </span>
                  </li>
                  <li className="nav-item">
                    <FontAwesomeIcon
                      className="me-2 text-lime-500"
                      icon={faCheck}
                    />
                    <span className="text-muted">
                      Learn from top photographers
                    </span>
                  </li>
                  <li className="nav-item">
                    <FontAwesomeIcon
                      className="me-2 text-lime-500"
                      icon={faCheck}
                    />
                    <span className="text-muted">
                      Risk-free trial, cancel anytime
                    </span>
                  </li>
                  <li className="nav-item">
                    <FontAwesomeIcon
                      className="me-2 text-lime-500"
                      icon={faCheck}
                    />
                    <span className="text-muted">
                      Unlimited Access All Courses
                    </span>
                  </li>
                  <li className="nav-item">
                    <FontAwesomeIcon
                      className="me-2 text-lime-500"
                      icon={faCheck}
                    />
                    <span className="text-muted">
                      Hands-on assignments and projects.
                    </span>
                  </li>
                  <li className="nav-item">
                    <FontAwesomeIcon
                      className="me-2 text-lime-500"
                      icon={faCheck}
                    />
                    <span className="text-muted">
                      Live Support and community
                    </span>
                  </li>
                  <li className="nav-item">
                    <FontAwesomeIcon
                      className="me-2 text-main-soft-red"
                      icon={faXmark}
                    />
                    <span className="text-muted text-decoration-line-through">
                      Access all the upcoming courses
                    </span>
                  </li>
                </ul>

                <div className="my-2">
                  <SecondaryButton
                    name="See Classes"
                    width={"w-100"}
                  ></SecondaryButton>
                </div>
              </div>
            </div>
          </div>

          <div className="col-10 col-md-6 col-lg-4 mx-auto my-5">
            <div
              className="card shadow p-2"
              style={{ width: "20rem", border: "none" }}
            >
              <div>
                <Lottie
                  className="w-75 mx-auto"
                  animationData={membership3}
                  loop={true}
                />
              </div>
              <div className="card-body">
                <h4 className="text-center text-semibold text-main-very-dark-blue">
                  1 Year Membership
                </h4>
                <h3 className="text-center text-lime-600">$ 159.99</h3>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <FontAwesomeIcon
                      className="me-2 text-lime-500"
                      icon={faCheck}
                    />
                    <span className="text-muted">
                      Practical projects enhance skills
                    </span>
                  </li>
                  <li className="nav-item">
                    <FontAwesomeIcon
                      className="me-2 text-lime-500"
                      icon={faCheck}
                    />
                    <span className="text-muted">
                      Learn from top photographers
                    </span>
                  </li>
                  <li className="nav-item">
                    <FontAwesomeIcon
                      className="me-2 text-lime-500"
                      icon={faCheck}
                    />
                    <span className="text-muted">
                      Risk-free trial, cancel anytime
                    </span>
                  </li>
                  <li className="nav-item">
                    <FontAwesomeIcon
                      className="me-2 text-lime-500"
                      icon={faCheck}
                    />
                    <span className="text-muted">
                      Unlimited Access All Courses
                    </span>
                  </li>
                  <li className="nav-item">
                    <FontAwesomeIcon
                      className="me-2 text-lime-500"
                      icon={faCheck}
                    />
                    <span className="text-muted ">
                      Hands-on assignments and projects.
                    </span>
                  </li>
                  <li className="nav-item">
                    <FontAwesomeIcon
                      className="me-2 text-lime-500"
                      icon={faCheck}
                    />
                    <span className="text-muted ">
                      Live Support and community
                    </span>
                  </li>
                  <li className="nav-item">
                    <FontAwesomeIcon
                      className="me-2 text-lime-500"
                      icon={faCheck}
                    />
                    <span className="text-muted ">
                      Access all the upcoming courses
                    </span>
                  </li>
                </ul>

                <div className="my-2">
                  <SecondaryButton
                    name="See Classes"
                    width={"w-100"}
                  ></SecondaryButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MembershipPlans;
