import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <section className="bg-footer" data-aos="flip-down">
        <div className="container-fluid">
          <div className="row mx-4">
            <div className="col-10 col-sm-6 col-md-4 col-lg-3 mx-auto my-5 text-center text-md-start">
              {/* <h3 className="footer-logo fs-1 fw-semibold">LOGO.</h3> */}
              <img
                className="footer-logo"
                src={"https://i.ibb.co/fvhBpSG/shutter-safari-logo.jpg"}
                alt=""
              />
              <p className="footer-logo-description mb-5">
                Be the first who learns about our great promotions!
              </p>
              <p className="footer-follow">FOLLOW US</p>

              <div className="d-flex justify-content-center justify-content-md-start">
                <p className="me-3 footer-icon footer-icon-twitter">
                  {/* <i className="fa-brands fa-twitter fa-2x"></i> */}
                  <FontAwesomeIcon className="fa-2x" icon={faFacebook} />
                </p>
                <p className="me-3 footer-icon footer-icon-facebook px-3">
                  <FontAwesomeIcon className="fa-2x" icon={faTwitter} />
                </p>
                <p className="footer-icon footer-icon-instagram">
                  {/* <i className="fa-brands fa-instagram fa-2x"></i> */}
                  <FontAwesomeIcon className="fa-2x" icon={faInstagram} />
                </p>
              </div>
            </div>

            <div className="col-10 col-sm-6 col-md-4 col-lg-2  mx-auto my-5 text-center text-md-start">
              <h2 className="footer-products fs-3">PRODUCTS</h2>
              <div className="footer-product-items">
                <p className="mb-4">New Arrival</p>
                <p className="mb-4">Best Seller</p>
                <p className="mb-4">On Sale</p>
                <p className="mb-4">All Collection</p>
              </div>
            </div>
            <div className="col-10 col-sm-6 col-md-4 col-lg-2 mx-auto my-5 text-center text-md-start">
              <h2 className="footer-products fs-3">CATEGORY</h2>
              <div className="footer-product-items">
                <p className="mb-4">Barbells</p>
                <p className="mb-4">Plates</p>
                <p className="mb-4">Benches</p>
                <p className="mb-4">Apparel</p>
                <p className="mb-4">Straps & Supports</p>
              </div>
            </div>

            <div className="col-10 col-sm-6 col-md-4 col-lg-2 mx-auto my-5 text-center text-md-start">
              <h2 className="footer-products fs-3">INFO</h2>
              <div className="footer-product-items">
                <p className="mb-4">About</p>
                <p className="mb-4">Blog</p>
                <p className="mb-4">Feature</p>
                <p className="mb-4">Store Location</p>
                <p className="mb-4">Terms & Conditions</p>
                <p className="mb-4">Privacy Policy</p>
              </div>
            </div>
            <div className="col-10 col-md-4 col-lg-3 mx-auto my-5 text-center text-md-start">
              <h2 className="footer-products fs-3">SUBSCRIBE</h2>
              <div className="footer-product-items">
                <h4 className="my-5">
                  Subscribe our Shutter Safari and get discount 30% off
                </h4>

                <div className="input-group mb-3 overflow-hidden">
                  <input
                    type="text"
                    className="form-control footer-input p-3 bg-transparent rounded-0"
                    placeholder="Enter your email..."
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <button className="footer-signup-button input-group-text legal-footer-icon  text-white rounded-0">
                    {" "}
                    Sign Up
                  </button>
                </div>
              </div>
            </div>

            <div className="col-10 mx-auto">
              <div className="mb-5 text-center" style={{ fontSize: "14px" }}>
                <p className="text-white">
                  Copyright ©
                  {new Date().toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}{" "}
                  All rights reserved by{" "}
                  <Link className="footer__link my-name">
                    <span className="">Md Imon Hossain.</span>
                  </Link>{" "}
                  For more information contact with me email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Footer;