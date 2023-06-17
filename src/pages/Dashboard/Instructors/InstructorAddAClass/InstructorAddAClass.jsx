import { useForm } from "react-hook-form";
import "./InstructorAddAClass.css";
import useAuth from "../../../../hooks/useAuth";
import PrimaryButton from "../../../../components/Reuseable/Button/PrimaryButton/PrimaryButton";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const InstructorAddAClass = () => {
  const {user} = useAuth()
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const newClass = {
      availableSeats: parseFloat(data.availableSeats),
      clsImage: data.clsImage,
      name: data.name,
      price: parseFloat(data.price),
      ratings: parseFloat(data.ratings),
      title: data.title,
      instructorName: user.displayName,
      purchaseCourse: parseFloat(0),
      status: "pending",
      insImage: user.photoURL,
      insEmail: user.email,
      Learn: [
        "Learn how to capture amazing photos that will impress your family and friends.",
        "Learn the inner workings of your camera to master manual settings and enhance your photography skills.",
        "Learn techniques for photographing in various scenarios, including family portraits, landscapes, aerial shots, product photography, wildlife, and more.",
        "Learn the principles of composition to create visually stunning images using basic photography rules.",
        "Learn how to effectively use both flash and natural lighting to illuminate your subjects.",
        "Learn professional photo editing techniques to enhance and refine your images.",
        "Learn how to monetize your photography skills and turn your passion into a source of income.",
        "Learn how to capture better photos using your smartphone, unlocking its full potential as a powerful photography tool.",
      ],
      includes: [
        "27 hours on-demand video",
        "Assignments",
        "66 articles",
        "44 downloadable resources",
        "Access on mobile and TV",
        "Full lifetime access",
        "Certificate of completion",
      ],
    };
    
    fetch(`https://shutter-safari-imoncoc.vercel.app/classes`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newClass),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.acknowledged) {
          Swal.fire({
            icon: "success",
            title: "Successful",
            text: "Successfully added chocolate!",
          });
          reset();
          navigate("/");
        }
      })
      .catch((error) => {
        Swal.error({
          icon: "error",
          title: "Oops!",
          text: `Error, ${error.message}`,
        });
      });
  };

  return (
    <main className="">
      <div className="container">
        <div className="row">
          <div className="col-12 p-5 mx-auto login rounded my-5 bg-white addToys-bg-form">
            <h2 className="text-center mb-2 fw-semibold opacity-75">
              Add a class
            </h2>
            <p className="text-center text-muted">
              Add class is Quick and Easy
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-12 col-md-6 mx-auto">
                  <div className="mb-3">
                    <label className="form-label">Class Name</label>
                    <input
                      type="text"
                      className={`form-control`}
                      id="name"
                      placeholder="Enter Class Name"
                      {...register("name")}
                    />
                    {errors.name && (
                      <p role="alert" className="alert alert-danger my-2 p-2">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className={`col-12 col-md-6 mx-auto`}>
                  <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      placeholder="Title"
                      {...register("title", {
                        required: "required",
                      })}
                    />
                    {errors.title && (
                      <p role="alert" className="alert alert-danger my-2 p-2">
                        {errors.title.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="col-12 mx-auto">
                  <div className="mb-3">
                    <label className="form-label">Class Image URL</label>
                    <input
                      type="text"
                      className="form-control"
                      id="clsImage"
                      placeholder="Class Image"
                      {...register("clsImage", {
                        required: "required",
                      })}
                    />
                    {errors.clsImage && (
                      <p role="alert" className="alert alert-danger my-2 p-2">
                        {errors.clsImage.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="col-6 col-md-4 mx-auto">
                  <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input
                      type="number"
                      className="form-control"
                      id="price"
                      placeholder="Price"
                      {...register("price", {
                        required: "required",
                      })}
                    />
                    {errors.price && (
                      <p role="alert" className="alert alert-danger my-2 p-2">
                        {errors.price.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-6 col-md-4 mx-auto">
                  <div className="mb-3">
                    <label className="form-label">Ratings</label>
                    <select className="form-select" {...register("ratings")}>
                      <option value="5">5</option>
                      <option value="4.5">4.5</option>
                      <option value="4">4</option>
                      <option value="3.5">3.5</option>
                      <option value="3">3</option>
                      <option value="2.5">2.5</option>
                      <option value="2">2</option>
                      <option value="1">1</option>
                    </select>
                    {errors.ratings && (
                      <p role="alert" className="alert alert-danger my-2 p-2">
                        {errors.ratings.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-6 col-md-4 mx-auto">
                  <div className="mb-3">
                    <label className="form-label">Available Seats</label>
                    <input
                      type="number"
                      className="form-control"
                      id="availableSeats"
                      placeholder="Available Seats"
                      {...register("availableSeats", {
                        required: "required",
                      })}
                    />
                    {errors.availableSeats && (
                      <p role="alert" className="alert alert-danger my-2 p-2">
                        {errors.availableSeats.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="text-center my-3">
                <span className="">
                  <PrimaryButton name="Submit" width={"w-50"}></PrimaryButton>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default InstructorAddAClass;
