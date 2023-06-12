import { useEffect, useState } from 'react';
import './UserEnrolledClass.css';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../../../hooks/useAuth';

const UserEnrolledClass = () => {
  const [payments, setPayments] = useState([]);
  const [axiosSecure] = useAxiosSecure();
  const {user} = useAuth();
  
  const newPayments = payments?.filter((item) => item.email === user.email)
  // console.log('newPayments', newPayments);

   

  // const formattedDateTime = new Date(payments?.date).toLocaleString("en-US", {
  //   dateStyle: "long",
  //   timeStyle: "medium",
  // });
  // console.log(formattedDateTime)

  useEffect(()=> {
    axiosSecure('/payments')
    .then((res) => {
      setPayments(res.data)
      // console.log(res.data)
    })
  },[axiosSecure])




    return (
      <>
        <Helmet>
          <title>Shutter Safari | My Class</title>
        </Helmet>

        <main className="mt-2 pt-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                {!newPayments || newPayments.length === 0 ? (
                  <h2>No Items to Show.</h2>
                ) : (
                  <table className="table table-hover table-secondary table-responsive">
                    <thead className="table-dark">
                      <tr>
                        <th className="ps-3" scope="col">
                          No.
                        </th>
                        <th scope="col">Photo</th>
                        <th className="text-center" scope="col">
                          Class Name
                        </th>
                        <th className="text-end" scope="col">
                          Price
                        </th>
                        <th className="text-center" scope="col">
                          Date
                        </th>
                        <th className="text-center" scope="col">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {newPayments &&
                        newPayments.map((cartItem, indx) => (
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
                            <td className="text-center">
                              {cartItem.itemNames}
                            </td>
                            <td className="text-end">${cartItem.price}</td>
                            {/* <td className="text-end">${cartItem.date}</td> */}
                            <td className="text-center">
                              {new Date(cartItem?.date).toLocaleString(
                                "en-US",
                                {
                                  dateStyle: "long",
                                  timeStyle: "medium",
                                }
                              )}
                            </td>
                            <td className="text-center text-lime-600">
                              Enrolled
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

export default UserEnrolledClass;