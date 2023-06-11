import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useCart from '../../../../hooks/useCart';
import './UserMyClass.css';
import { faMoneyBill, faTrash } from '@fortawesome/free-solid-svg-icons';
import SecondaryButton from '../../../../components/Reuseable/Button/SecondaryButton/SecondaryButton';
import ThirdButton from '../../../../components/Reuseable/Button/ThirdButton/ThirdButton';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const UserMyClass = () => {
  const [cart, refetch] = useCart();

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  



    return (
      <>
        <Helmet>
          <title>Shutter Safari | My Class</title>
        </Helmet>

        <main className="mt-2 pt-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                {!cart || cart.length === 0 ? <h2>No Selected Classes</h2> : <table className="table table-hover table-secondary table-responsive">
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
                        Payment
                      </th>
                      <th className="text-center" scope="col">
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart &&
                      cart.map((cartItem, indx) => (
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
                          <td className="text-end">${cartItem.price}</td>
                          <td className="text-center">
                            {/* <button className="btn myClass-icon-payment rounded-4">
                            <FontAwesomeIcon
                            title='pay'
                              className="myClass-icon-payment"
                              icon={faMoneyBill}
                            />
                          </button> */}
                            <Link to={`/dashboard/user-payment/${cartItem._id}`}>
                              <span title="pay">
                                <SecondaryButton
                                  icon={<FontAwesomeIcon icon={faMoneyBill} />}
                                ></SecondaryButton>
                              </span>
                            </Link>
                          </td>
                          <td className="text-center">
                            <span
                              title="Delete"
                              onClick={() => handleDelete(cartItem)}
                            >
                              <ThirdButton
                                icon={<FontAwesomeIcon icon={faTrash} />}
                              ></ThirdButton>
                            </span>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
                }
              </div>
            </div>
          </div>
        </main>
      </>
    );
};

export default UserMyClass;