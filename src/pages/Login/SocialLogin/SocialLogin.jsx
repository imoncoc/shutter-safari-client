import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const { googleSignIn, signInWithGithub } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";



    const handleGoogleSignIn = () => {
      googleSignIn()
        .then((result) => {
          const loggedInUser = result.user;
          console.log(loggedInUser);

          const saveUser = {
            name: loggedInUser?.displayName,
            email: loggedInUser?.email,
            photoUrl: loggedInUser?.photoURL,
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
            .then(() => {
              toast.success(
                `Hello! ${result.user.displayName}! Welcome Back!`,
                {
                  position: toast.POSITION.TOP_CENTER,
                }
              );
              navigate(from, { replace: true });
            })
            .catch((error) => {
              toast.success(error.message, {
                position: toast.POSITION.TOP_CENTER,
              });
            });
        })
        .catch((error) => {
          toast.success(error.message, {
            position: toast.POSITION.TOP_CENTER,
          });
        });
    };

    const handleGithubSignIn = () => {
      signInWithGithub()
        .then((result) => {
          const loggedInUser = result.user;
          console.log(loggedInUser);

          const saveUser = {
            name: loggedInUser?.displayName,
            email: loggedInUser?.email,
            photoUrl: loggedInUser?.photoURL,
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
            .then(() => {
              toast.success(
                `Hello! ${result.user.displayName}! Welcome Back!`,
                {
                  position: toast.POSITION.TOP_CENTER,
                }
              );
              navigate(from, { replace: true });
            })
            .catch((error) => {
              toast.success(error.message, {
                position: toast.POSITION.TOP_CENTER,
              });
            });
        })
        .catch((error) => {
          toast.success(error.message, {
            position: toast.POSITION.TOP_CENTER,
          });
        });
    };






    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="d-flex justify-content-center">
              <div className="mx-3 bg-icon bg-danger rounded-circle">
                <FontAwesomeIcon
                  style={{ cursor: "pointer" }}
                  icon={faGoogle}
                  onClick={handleGoogleSignIn}
                  className="text-white"
                />
              </div>
              <div className="bg-icon bg-dark rounded-circle">
                <FontAwesomeIcon
                  style={{ cursor: "pointer" }}
                  icon={faGithub}
                  onClick={handleGithubSignIn}
                  className="text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SocialLogin;