import { Bars } from "react-loader-spinner";
import "./LoaderSpinner.css";

const LoaderSpinner = () => {
  return (
    <div className="container">
      <div className="row" style={{ height: "100vh" }}>
        <div className="col-10 mx-auto d-flex justify-content-center align-items-center">
          {/* <Bars
            height="80"
            width="80"
            color="#84CC16"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          /> */}

          <Bars
            height="80"
            width="80"
            color="#84CC16"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      </div>
    </div>
  );
};

export default LoaderSpinner;
