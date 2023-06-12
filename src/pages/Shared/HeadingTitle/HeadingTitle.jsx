
import './HeadingTitle.css'
import { Zoom } from "react-awesome-reveal";

const HeadingTitle = ({ title, description }) => {
  return (
    <Zoom>
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto my-5 pt-5">
            <h2 className="text-center text-uppercase text-lime-500">
              {" "}
              <span className="border-lime"></span>
              {title}
              <span className="border-lime"></span>
            </h2>
            <p className="text-muted mt-3 text-center">{description}</p>
          </div>
        </div>
      </div>
    </Zoom>
  );
};

export default HeadingTitle;