import { Rating, ThinStar } from '@smastrom/react-rating';
import PrimaryButton from '../../../components/Reuseable/Button/PrimaryButton/PrimaryButton';
import './Class.css';
import SecondaryButton from '../../../components/Reuseable/Button/SecondaryButton/SecondaryButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Class = ({classItem}) => {
    const {
      availableSeats,
      clsImage,
      name,
      price,
      ratings,
      title,
      purchaseCourse,
    } = classItem;

    const myStyles = {
      itemShapes: ThinStar,
      activeFillColor: "#84CC16",
      inactiveFillColor: "rgba(64, 172, 241, 0.4)",
    };

    return (
      <div className="col-10 col-md-6 col-lg-4 mx-auto my-5">
        <div className={`class-card ${availableSeats === 0? "sit-red" : ""}`}>
          <img src={clsImage} alt="" className="img-fluid" />
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
            <p className="card-description">{title}</p>
            <p className="card-description">
              More than {purchaseCourse} purchased
            </p>
            <p className="card-description">Available {availableSeats} sets</p>
            <div className="d-flex justify-content-between">
              <PrimaryButton name={"Buy Now"}></PrimaryButton>
              <SecondaryButton
                name={"Details"}
                icon={<FontAwesomeIcon className="ms-2" icon={faArrowRight} />}
              ></SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Class;