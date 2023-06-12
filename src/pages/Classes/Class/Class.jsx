import { Rating, ThinStar } from '@smastrom/react-rating';
import PrimaryButton from '../../../components/Reuseable/Button/PrimaryButton/PrimaryButton';
import './Class.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCartPlus, faCheck, faFileSignature } from '@fortawesome/free-solid-svg-icons';
import LazyLoad from 'react-lazy-load';
import useUser from '../../../hooks/useUser';
import { AuthContext } from '../../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import useCart from '../../../hooks/useCart';
import Swal from 'sweetalert2';


const Class = ({classItem}) => {
  const [isUser] = useUser();
  const {user} = useContext(AuthContext);
  const [, refetch] = useCart(); 
  const navigate = useNavigate();
  const location = useLocation();



    const {
      _id,
      availableSeats,
      clsImage,
      name,
      price,
      ratings,
      purchaseCourse,
      instructorName,
      Learn,
      includes,
      insEmail,
      title
    } = classItem;

    const myStyles = {
      itemShapes: ThinStar,
      activeFillColor: "#84CC16",
      // inactiveFillColor: "hsl(229, 31%, 21%)",
      inactiveFillColor: "#C6F6D5",
    };

    const handleAddToCart = (classItem) => {
      const cartItem = {
        classId: _id,
        availableSeats,
        clsImage,
        name,
        price,
        ratings,
        purchaseCourse,
        instructorName,
        Learn,
        includes,
        insEmail,
        title,
        email: user.email
      };
      

      if (user && user.email) {
        fetch(`https://shutter-safari-imoncoc.vercel.app/carts`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(cartItem),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              refetch();
              toast.success("Successfully Added into Cart", {
                position: toast.POSITION.TOP_CENTER,
              });
            } else {
              toast.error("Failed to add to cart", {
                position: toast.POSITION.TOP_CENTER,
              });
            }
          })
          .catch((error) => {
            // console.log(error);
            toast.error(`Failed to add to cart, ${error.message}`, {
              position: toast.POSITION.TOP_CENTER,
            });
          });
      } else {
        Swal.fire({
          title: "Please login to order the food",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Login now!",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/login", { state: { from: location } });
          }
        });
      }
    };





    const handleRedirectToLogin = () => {
      toast.warning("You have to login First to select any class", {
        position: toast.POSITION.TOP_CENTER,
      });
    }

    return (
      <div className="col-10 col-md-6 col-lg-4 mx-auto my-5">
        <div className={`class-card ${availableSeats === 0 ? "sit-red" : ""}`}>
          <LazyLoad height={"100%"}>
            <img src={clsImage} alt="" className="img-fluid class-img" />
          </LazyLoad>
          <div>
            <h2 className="card-title">{name}</h2>
            <h3 className="card-price">${price}</h3>
            <div className="d-flex mb-2">
              <Rating
                style={{ maxWidth: 110 }}
                value={ratings}
                itemStyles={myStyles}
                readOnly
              />
              <span className="card-icon-rating">{ratings}</span>
            </div>
            <p className="card-description">
              {" "}
              <span className="me-2 text-lime-600">
                <FontAwesomeIcon icon={faFileSignature} />
              </span>
              {instructorName}
            </p>
            <p className="card-description">
              <span className="me-2 text-lime-600">
                <FontAwesomeIcon icon={faCartPlus} />
              </span>
              More than {purchaseCourse} purchased
            </p>
            <p className="card-description">
              <span className="me-2 text-lime-600">
                <FontAwesomeIcon icon={faCheck} />
              </span>
              Available {availableSeats} sets
            </p>
            {/* <div className="d-flex justify-content-between">
              <PrimaryButton name={"Select"}></PrimaryButton>
              <SecondaryButton
                name={"Details"}
                icon={<FontAwesomeIcon className="ms-2" icon={faArrowRight} />}
              ></SecondaryButton>
            </div> */}
            {user ? (
              <span onClick={() => handleAddToCart(classItem)}>
                <PrimaryButton
                  width={"w-100"}
                  name={"Select"}
                  disabled={!isUser || availableSeats === 0}
                ></PrimaryButton>
              </span>
            ) : (
              <Link to="/login" onClick={handleRedirectToLogin}>
                <PrimaryButton width={"w-100"} name={"Select"}></PrimaryButton>
              </Link>
            )}
          </div>
        </div>
      </div>
    );
};

export default Class;