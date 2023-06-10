import { Rating, ThinStar } from '@smastrom/react-rating';
import PrimaryButton from '../../../components/Reuseable/Button/PrimaryButton/PrimaryButton';
import './Class.css';
import SecondaryButton from '../../../components/Reuseable/Button/SecondaryButton/SecondaryButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCartPlus, faCheck, faFileSignature } from '@fortawesome/free-solid-svg-icons';
import LazyLoad from 'react-lazy-load';
import useUser from '../../../hooks/useUser';
import useAuth from '../../../hooks/useAuth';
import { AuthContext } from '../../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useContext } from 'react';


const Class = ({classItem}) => {
  const [isUser] = useUser();
  const {user} = useContext(AuthContext);
  // console.log(Auth)


    const {
      availableSeats,
      clsImage,
      name,
      price,
      ratings,
      purchaseCourse,
      instructorName,
    } = classItem;

    const myStyles = {
      itemShapes: ThinStar,
      activeFillColor: "#84CC16",
      // inactiveFillColor: "hsl(229, 31%, 21%)",
      inactiveFillColor: "#C6F6D5",
    };

    const handleAddToCart = (item) => {
      console.log(item);
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