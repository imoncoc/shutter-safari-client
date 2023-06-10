import { useContext, useState } from "react";
import "./SignUp.css";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import PrimaryButton from "../../../components/Reuseable/Button/PrimaryButton/PrimaryButton";
import SocialLogin from "../SocialLogin/SocialLogin";
import { Helmet } from "react-helmet-async";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { createUser,  updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const { email, password, name } = data;
    console.log(data);
    
    
    const image = data.photoUrl[0];
    const formData = new FormData();
    formData.append("image", image)

    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_KEY}`;

      fetch(url, {
        method: "POST",
        body: formData,
      })
      .then((res) => res.json())
      .then((imageData) => {
        const photoURLs = imageData.data.display_url;

        createUser(email, password)
          .then((result) => {
            const createdUser = result.user;
            console.log(createdUser);
            updateUserProfile(name, photoURLs).then(() => {
              const saveUser = {
                name: name,
                email: createdUser?.email,
                photoUrl: photoURLs,
                role: "user"
              };
              fetch("https://shutter-safari.vercel.app/users", {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(saveUser),
              })
                .then((res) => res.json())
                .then((data) => {
                  if (data.insertId) {
                    reset();
                    Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: "User created successfully.",
                      showConfirmButton: false,
                      timer: 1500,
                    });
                    navigate("/");
                  }
                });
            });
            Swal.fire(
              "Success!",
              "Successfully Register into account!",
              "success"
            );
            reset();
            navigate(from, { replace: true });
          })
          .catch((error) => {
            // console.log(error)
            Swal.fire("Oops...!", `${error.message}`, "error");
          });
      })

    
  };

  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");





  return (
    <>
      <Helmet>
        <title>Shutter Safari | Sign Up</title>
      </Helmet>
      <Navbar></Navbar>
      <div className="signUp-section">
        <div className="container">
          <div className="row">
            <div className="col-10 col-md-6 mx-auto d-flex align-items-center">
              <img
                src={
                  "https://img.freepik.com/free-vector/sign-concept-illustration_114360-5475.jpg?w=740&t=st=1686122556~exp=1686123156~hmac=5008244cc8e34cf6d98b5706bc3116ae11d2a2beb40adb47c89057393e5144d8"
                }
                className="img-fluid"
                alt=""
              />
            </div>

            <div className="col-10 col-md-6 p-5 mx-auto">
              <h2 className="text-center mb-2 fw-semibold opacity-75">
                Register
              </h2>
              <p className="text-center text-muted">
                It`s free and takes a minute
              </p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Name"
                    {...register("name", {
                      required: "required",
                    })}
                  />
                  {errors.name && (
                    <p role="alert" className="alert alert-danger my-2 p-2">
                      {errors.name.message}
                    </p>
                  )}
                </div>
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
                  <label className="form-label">Photo Url</label>
                  <input
                    type="file"
                    className="form-control"
                    id="photoUrl"
                    accept="image/*"
                    {...register("photoUrl", {
                      required: "required",
                    })}
                  />
                  {errors.photoUrl && (
                    <p role="alert" className="alert alert-danger my-2 p-2">
                      {errors.photoUrl.message}
                    </p>
                  )}
                </div>

                <div className="d-flex justify-content-between">
                  <div className="w-50">
                    <label className="form-label">Gender</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      {...register("gender")}
                    >
                      <option disabled>Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>

                  <div className="mb-3 ms-3 w-100">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="number"
                      className="form-control"
                      id="phone"
                      {...register("phone", {
                        required: "required",
                      })}
                    />
                    {errors.phone && (
                      <p role="alert" className="alert alert-danger my-2 p-2">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Your Address</label>
                  <textarea
                    type="number"
                    className="form-control"
                    id="address"
                    placeholder="Your Address"
                    {...register("address", {
                      required: "required",
                    })}
                  />
                  {errors.address && (
                    <p role="alert" className="alert alert-danger my-2 p-2">
                      {errors.address.message}
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
                        minLength: {
                          value: 8,
                          message: "min length is 8",
                        },
                        pattern: {
                          value: passwordRegex,
                          message:
                            "Password must contain at least one uppercase letter and lowercase, one number, and one special character",
                        },
                      })}
                    />
                    <div className="input-group-text bg-white border-start-0">
                      {/* <input
                      className="form-check-input mt-0"
                      type="checkbox"
                      value="password"
                      aria-label="Checkbox for following text input"
                      onClick={() => setShowPassword(!showPassword)}
                    /> */}
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

                <div className="mb-3">
                  <label className="form-label">Confirm Password</label>
                  <div className="input-group mb-3">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      className="form-control border-end-0"
                      aria-label="Text input with checkbox"
                      {...register("confirmPassword", {
                        required: "required",
                      })}
                    />
                    <div className="input-group-text bg-white border-start-0">
                      {/* <input
                      className="form-check-input mt-0"
                      type="checkbox"
                      value="password"
                      aria-label="Checkbox for following text input"
                      onClick={() => setShowPassword(!showPassword)}
                    /> */}
                      {showConfirmPassword ? (
                        <FontAwesomeIcon
                          icon={faEye}
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                        />
                      ) : (
                        <FontAwesomeIcon
                          style={{ cursor: "pointer" }}
                          icon={faEyeSlash}
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                        />
                      )}
                    </div>
                  </div>
                </div>
                {password !== confirmPassword && (
                  <p role="alert" className="alert alert-danger my-2 p-2">
                    {"Password do not match"}
                  </p>
                )}

                <div className="text-center">
                  {/* <button type="submit" className="btn login-btn w-100 fw-bold">
                  Submit
                </button> */}
                  <PrimaryButton
                    name={"Submit"}
                    width={"w-100"}
                  ></PrimaryButton>
                </div>
              </form>

              <div className="my-3">
                <p className="">
                  Already a account?{" "}
                  <Link
                    to="/login"
                    className="link-opacity-75-hover text-success"
                  >
                    Please Login
                  </Link>
                </p>
              </div>

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

export default SignUp;
