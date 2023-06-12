import { useEffect, useState } from 'react';
import './AdminManageClasses.css';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const AdminManageClasses = () => {
  const [classes, setClasses] = useState([]);
  const [dataChanged, setDataChanged] = useState(false);


  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setClasses(data);
      })
      .catch((error) => console.log(error));
  }, [dataChanged]);


  const handleApproved = (cartItem) => {
    const id = cartItem._id;
    const userItem = {
      status: "approved",
      feedback: ""
    };

    fetch(`http://localhost:5000/class/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0 || data.acknowledged === true) {
          toast.success("Successfully Approve the Class", {
            position: toast.POSITION.TOP_CENTER,
          });
          setDataChanged(!dataChanged);
        }
      });
  }

  const handleDenied = (cartItem) => {
    const id = cartItem._id;
    const userItem = {
      status: "denied",
      feedback: "",
    };

    fetch(`http://localhost:5000/class/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0 || data.acknowledged === true) {
          toast.warning("You Denied the Class, Please send a feedback. Why you denied.", {
            position: toast.POSITION.TOP_CENTER,
          });
          setDataChanged(!dataChanged);
        }
      });
  };

  const handleFeedback = async (cartItem) => {
    const { value: text } = await Swal.fire({
  input: 'textarea',
  inputValue: cartItem.feedback,
  inputLabel: 'Message',
  inputPlaceholder: 'Type your message here...',
  inputAttributes: {
    'aria-label': 'Type your message here'
  },
  showCancelButton: true
})

if (text) {
  Swal.fire(text)
}

const userItem = {
  feedback: text,
  status: cartItem.status
};

fetch(`http://localhost:5000/class/${cartItem._id}`, {
  method: "PUT",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify(userItem),
})
  .then((res) => res.json())
  .then((data) => {
    if (data.modifiedCount > 0 || data.acknowledged === true) {
      toast.success(
        "Your feedback successfully updated",
        {
          position: toast.POSITION.TOP_CENTER,
        }
      );
      setDataChanged(!dataChanged);
    }
  });

  }




    return (
      <>
        <Helmet>
          <title>Shutter Safari | Manage Users</title>
        </Helmet>

        <main className="mt-2 pt-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                {!classes || classes.length === 0 ? (
                  <h2>No Classes Found!</h2>
                ) : (
                  <table className="table table-hover table-secondary table-responsive">
                    <thead className="table-dark">
                      <tr>
                        <th className="ps-3" scope="col">
                          No.
                        </th>
                        <th scope="col">Class Image</th>
                        <th className="text-center" scope="col">
                          Class Name
                        </th>
                        <th className="text-center" scope="col">
                          Instructor Name
                        </th>
                        <th className="text-center" scope="col">
                          Instructor Email
                        </th>
                        <th className="text-center" scope="col">
                          Available Seats
                        </th>
                        <th className="text-center" scope="col">
                          Price
                        </th>
                        <th className="text-center" scope="col">
                          Status
                        </th>
                        <th className="text-center" scope="col">
                          Approve
                        </th>
                        <th className="text-center" scope="col">
                          Deny
                        </th>
                        <th className="text-center" scope="col">
                          Feedback
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {classes &&
                        classes.map((cartItem, indx) => (
                          <tr key={cartItem._id}>
                            <th scope="row" className="ps-3">
                              {indx + 1}.
                            </th>
                            <td>
                              <img
                                className="img-fluid table-img"
                                src={cartItem.clsImage}
                                alt=""
                              />
                            </td>
                            <td className="text-center">{cartItem.name}</td>
                            <td className="text-center">
                              {cartItem.instructorName}
                            </td>
                            <td className="text-center">{cartItem.insEmail}</td>
                            <td className="text-center">
                              {cartItem.availableSeats}
                            </td>
                            <td className="text-center">{cartItem.price}</td>
                            <td className={`text-center`}>{cartItem.status}</td>
                            <td className="text-center">
                              {cartItem.status === "approved" ||
                              cartItem.status === "denied" ? (
                                <button className="btn btn-success" disabled>
                                  Approve
                                </button>
                              ) : (
                                <button
                                  title="Make Admin"
                                  onClick={() => handleApproved(cartItem)}
                                  className="btn btn-success"
                                >
                                  Approve
                                </button>
                              )}
                            </td>
                            <td className="text-center">
                              {cartItem.status === "denied" ||
                              cartItem.status === "approved" ? (
                                <button className="btn btn-danger" disabled>
                                  Denied
                                </button>
                              ) : (
                                <button
                                  title="Make Admin"
                                  onClick={() => handleDenied(cartItem)}
                                  className="btn btn-danger"
                                >
                                  Denied
                                </button>
                              )}
                            </td>
                            <td className="text-center">
                              <button
                                className="btn btn-warning"
                                onClick={()=>handleFeedback(cartItem)}
                              >
                                Feedback
                              </button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </main>
      </>
    );
};

export default AdminManageClasses;