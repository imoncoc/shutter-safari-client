import PrimaryButton from '../../../components/Reuseable/Button/PrimaryButton/PrimaryButton';
import './Banner.css'

const Banner = () => {
    return (
      // <div className="banner-bg">
      //   <div className="container">
      //     <div className="row">
      //       <div
      //         className="col-10 col-md-6 mx-auto d-flex align-items-center justify-content-center"
      //         style={{ height: "95vh" }}
      //       >
      //         <div className="banner-section p-4 ">
      //           {/* <h2 className="fs-1 banner-title">
      //             Journey Through the Lens, Shutter Safari
      //           </h2> */}
      //           <h2 className="fs-1 banner-title text-uppercase fw-semibold">
      //             Exploring Photographic Art, Shutter Safari`s Enlightened
      //             Journey!
      //           </h2>
      //           <div className=''>
      //             <PrimaryButton name={"Explore"}></PrimaryButton>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>

      <header className="container-fluid">
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={"https://i.ibb.co/GMjwJFv/img-02.jpg"}
                className="d-block w-100 img-fluid height-vh-80 object-fit-cover"
                alt="..."
              />
              <div className="carousel-caption">
                <h5 className="fs-1">A Complete Guide to Photography</h5>
                <p className="">
                  The Best Online Professional Photography Class: How to Take
                  Amazing Photos for Beginners & Advanced Photographers
                </p>
                <PrimaryButton name={"Explore Now"}></PrimaryButton>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={"https://i.ibb.co/HVbZ8rs/img-01.jpg"}
                className="d-block w-100 height-vh-80 img-fluid object-fit-cover"
                alt="..."
              />
              <div className="carousel-caption">
                <h5 className="fs-1">Creative Camera Confidence</h5>
                <p className="">
                  Five camera settings, use of light & composition are all you
                  need for awesome images. I promise it`s easy
                </p>
                <PrimaryButton name={"Explore Now"}></PrimaryButton>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={"https://i.ibb.co/1M2Ng4d/img-03.jpg"}
                className="d-block w-100 height-vh-80 img-fluid object-fit-cover"
                alt="..."
              />
              <div className="carousel-caption">
                <h5 className="fs-1">
                  Take Professional Photos On Your iPhone
                </h5>
                <p className="">
                  Your Online Guide to Taking Stunning iPhone Photography Like a
                  Professional Digital Photographer
                </p>
                <PrimaryButton name={"Explore Now"}></PrimaryButton>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </header>
    );
};

export default Banner;