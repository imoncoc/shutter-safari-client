import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../../hooks/useAuth';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import './InstructorMyClasses.css';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SecondaryButton from '../../../../components/Reuseable/Button/SecondaryButton/SecondaryButton';

const InstructorMyClasses = () => {

 const { user, loading } = useAuth();
 const [axiosSecure] = useAxiosSecure();
 const { data: myClasses = [] } = useQuery({
   queryKey: ["myClasses", user?.email],
   enabled: !loading,
   queryFn: async () => {
     const res = await axiosSecure(`/my-classes/${user?.email}`);
     // console.log("res from axios", res);
     return res.data;
   },
 });

 console.log(myClasses)


 


    return (
      <>
        <Helmet>
          <title>Shutter Safari | My Classes</title>
        </Helmet>

        <main className="mt-2 pt-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                {!myClasses || myClasses.length === 0 ? (
                  <h2>No Selected Classes</h2>
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
                          Update
                        </th>
                        <th className="text-end" scope="col">
                          Total Enrolled
                        </th>
                        <th className="text-center" scope="col">
                          Status
                        </th>
                        <th className="text-center" scope="col">
                          Feedback
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {myClasses &&
                        myClasses.map((cartItem, indx) => (
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
                              <Link>
                                <span title="pay">
                                  <SecondaryButton name="update"></SecondaryButton>
                                </span>
                              </Link>
                            </td>
                            <td className="text-center">2</td>
                            <td className="text-center">{cartItem.status}</td>
                            {cartItem.feedback ? (
                              <td className="text-center">
                                {cartItem.feedback}
                              </td>
                            ) : (
                              <td className="text-center">
                                
                              </td>
                            )}
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

export default InstructorMyClasses;