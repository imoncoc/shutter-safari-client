import './Banner.css'

const Banner = () => {
    return (
      <div className="banner-bg">
        <div className="container">
          <div className="row">
            <div
              className="col-10 col-md-6 mx-auto d-flex align-items-center justify-content-center"
              style={{ height: "95vh" }}
            >
              <div className="banner-section p-4 ">
                {/* <h2 className="fs-1 banner-title">
                  Journey Through the Lens, Shutter Safari
                </h2> */}
                <h2 className="fs-1 banner-title text-uppercase fw-semibold">
                  Exploring Photographic Art, Shutter
                  Safari's Enlightened Journey!
                </h2>
                <a
                  href="#"
                  className="btn btn-primary px-4 py-2 rounded-lg shadow-md hover:text-lime-600 hover:bg-white"
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;