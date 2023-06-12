
import { useEffect, useState } from 'react';
import './AdminManageUsers.css';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';

const AdminManageUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [axiosSecure] = useAxiosSecure();
  const [dataChanged, setDataChanged] = useState(false);

  useEffect(() => {
    axiosSecure("/users").then((res) => {
      setAllUsers(res.data);
      // console.log(res.data);
    });
  }, [dataChanged, axiosSecure]);

  const handleAdmin = (cartItem) => {
    const id = cartItem._id;
    const userItem = {
      name: cartItem.name,
      email: cartItem.email,
      photoUrl: cartItem.photoUrl,
      role: "admin",
    };

    fetch(`https://shutter-safari-imoncoc.vercel.app/user/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0 || data.acknowledged === true) {
          toast.success("Successfully make as Admin", {
            position: toast.POSITION.TOP_CENTER,
          });
          setDataChanged(!dataChanged);
        }
      });
  };
  const handleUser = (cartItem) => {
    const id = cartItem._id;
    const userItem = {
      name: cartItem.name,
      email: cartItem.email,
      photoUrl: cartItem.photoUrl,
      role: "user",
    };

    fetch(`https://shutter-safari-imoncoc.vercel.app/user/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0 || data.acknowledged === true) {
          toast.success("Successfully make as user", {
            position: toast.POSITION.TOP_CENTER,
          });
          setDataChanged(!dataChanged);
        }
      });
  };
  const handleInstructor = (cartItem) => {
    const id = cartItem._id
    const userItem = {
      name: cartItem.name,
      email: cartItem.email,
      photoUrl: cartItem.photoUrl,
      role: "instructor"
    };
   
    fetch(`https://shutter-safari-imoncoc.vercel.app/user/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0 || data.acknowledged === true) {
          toast.success("Successfully make as instructor", {
            position: toast.POSITION.TOP_CENTER,
          });
          setDataChanged(!dataChanged)
        }
      });
  };
  
  
    return (
      <>
        <Helmet>
          <title>Shutter Safari | Manage Users</title>
        </Helmet>

        <main className="mt-2 pt-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                {!allUsers || allUsers.length === 0 ? (
                  <h2>No User Found!</h2>
                ) : (
                  <table className="table table-hover table-secondary table-responsive">
                    <thead className="table-dark">
                      <tr>
                        <th className="ps-3" scope="col">
                          No.
                        </th>
                        <th scope="col">Photo</th>
                        <th className="text-center" scope="col">
                          Name
                        </th>
                        <th className="text-center" scope="col">
                          Email
                        </th>
                        <th className="text-center" scope="col">
                          Role
                        </th>
                        <th className="text-center" scope="col">
                          Make Admin
                        </th>
                        <th className="text-center" scope="col">
                          Make Instructor
                        </th>
                        <th className="text-center" scope="col">
                          Make User
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {allUsers &&
                        allUsers.map((cartItem, indx) => (
                          <tr key={cartItem._id}>
                            <th scope="row" className="ps-3">
                              {indx + 1}.
                            </th>
                            <td>
                              <img
                                className="img-fluid table-img"
                                src={cartItem.photoUrl}
                                alt=""
                              />
                            </td>
                            <td className="text-center">{cartItem.name}</td>
                            <td className="text-center">{cartItem.email}</td>
                            <td className="text-center">
                              {cartItem.role === "user"
                                ? "student"
                                : cartItem.role}
                            </td>
                            <td className="text-center">
                              {cartItem.role === "admin"  ? (
                                <button className="btn btn-success" disabled>
                                  Admin
                                </button>
                              ) : (
                                <button
                                  title="Make Admin"
                                  onClick={() => handleAdmin(cartItem)}
                                  className="btn btn-success"
                                >
                                  Admin
                                </button>
                              )}
                            </td>
                            <td className="text-center">
                              {cartItem.role === "instructor" ? (
                                <button className="btn btn-info" disabled>
                                  Instructor
                                </button>
                              ) : (
                                <button
                                  className="btn btn-info"
                                  title="Make Instructor"
                                  onClick={() => handleInstructor(cartItem)}
                                >
                                  Instructor
                                </button>
                              )}
                            </td>
                            <td className="text-center">
                              {cartItem.role === "user" ? (
                                <button className="btn btn-warning" disabled>
                                  User
                                </button>
                              ) : (
                                <button
                                  title="Make User"
                                  className="btn btn-warning"
                                  onClick={() => handleUser(cartItem)}
                                >
                                  User
                                </button>
                              )}
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

export default AdminManageUsers;