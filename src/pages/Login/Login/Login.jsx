import { useContext, useState } from 'react';
import './Login.css'
import { AuthContext } from '../../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import PrimaryButton from '../../../components/Reuseable/Button/PrimaryButton/PrimaryButton';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { signIn } =
      useContext(AuthContext);




    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const {
      register,
      formState: { errors },
      handleSubmit,
      reset,
    } = useForm();

    const onSubmit = (data) => {
      const { email, password } = data;
      console.log(email, password);

      signIn(email, password)
        .then((result) => {
          const loggedUser = result.user;
          console.log(loggedUser);
          Swal.fire("Success!", "Successfully Login into account!", "success");
          reset();
          navigate(from, { replace: true });
        })
        .catch((error) => {
          // console.log(error)
          Swal.fire("Oops...!", `${error.message}`, "error");
        });
    };


    

    return (
      <>
      <Helmet>
        <title>Shutter Safari | Login</title>
      </Helmet>
      <Navbar></Navbar>
        <div className="login-section">
          <div className="container">
            <div className="row">
              <div className="col-10 col-md-6 mx-auto my-5">
                <img
                  src={
                    "https://img.freepik.com/free-vector/fingerprint-concept-illustration_114360-3630.jpg?w=740&t=st=1686114634~exp=1686115234~hmac=253db9b8f99c22083f39d15f7d10bf86213fef4be4580ee2bb1cf6e9c943d625"
                  }
                  className="img-fluid rounded"
                  alt=""
                />
              </div>

              <div className="col-10 col-md-6 p-5 mx-auto login rounded my-5 bg-white">
                <h2 className="text-center mb-2 fw-semibold opacity-75">
                  Login
                </h2>
                <p className="text-center text-muted">Quick and Easy Login</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      {...register("email", {
                        required: "required",
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: "Entered value does not match email format",
                        },
                      })}
                    />

                    {errors.email && (
                      <p role="alert" className="alert alert-danger my-2 p-2">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <div className="input-group mb-3">
                      <input
                        type={showPassword ? "text" : "password"}
                        className="form-control border-end-0"
                        aria-label="Text input with checkbox"
                        {...register("password", {
                          required: "required",
                        })}
                      />
                      <div className="input-group-text bg-white border-start-0">
                        {showPassword ? (
                          <FontAwesomeIcon
                            icon={faEye}
                            style={{ cursor: "pointer" }}
                            onClick={() => setShowPassword(!showPassword)}
                          />
                        ) : (
                          <FontAwesomeIcon
                            style={{ cursor: "pointer" }}
                            icon={faEyeSlash}
                            onClick={() => setShowPassword(!showPassword)}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  {errors.password && (
                    <p role="alert" className="alert alert-danger my-2 p-2">
                      {errors.password.message}
                    </p>
                  )}
                  <div className="">
                    <p className="">
                      New to this website?{" "}
                      <Link
                        to="/signUp"
                        className="link-opacity-75-hover text-success"
                      >
                        Please SignUp
                      </Link>
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-100">
                      <PrimaryButton
                        name="Submit"
                        width={"w-100"}
                      ></PrimaryButton>
                    </div>
                  </div>
                </form>

                <div className="or-divider">
                  <span className="text-muted">Or login with</span>
                </div>
                <SocialLogin></SocialLogin>
              </div>
            </div>
          </div>
        </div>

        <Footer></Footer>
      </>
    );
};

export default Login;