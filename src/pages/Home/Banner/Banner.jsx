import './Banner.css'

const Banner = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-6 mx-auto">
            <h2>Hero</h2>
          </div>
          <div className="col-10 col-md-6 mx-auto">
            <div className="bg-hero">
              <img
                src={"https://i.ibb.co/fvhBpSG/shutter-safari-logo.jpg"}
                className='img-fluid' alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;