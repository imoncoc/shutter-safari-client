import './Login.css'

const Login = () => {
    return (
      <div className='login-section'>
        <div className="container">
          <div className="row">
            <div className="col-10 col-md-6 mx-auto my-5">
              <img
                src={
                  "https://img.freepik.com/free-vector/fingerprint-concept-illustration_114360-3630.jpg?w=740&t=st=1686114634~exp=1686115234~hmac=253db9b8f99c22083f39d15f7d10bf86213fef4be4580ee2bb1cf6e9c943d625"
                }
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-10 col-md-6 mx-auto my-5"></div>
          </div>
        </div>
      </div>
    );
};

export default Login;