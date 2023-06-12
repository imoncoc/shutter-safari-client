import { useEffect, useState } from 'react';
import './Instructors.css';
import SingleInstructor from '../SingleInstructor/SingleInstructor';
import { Helmet } from 'react-helmet-async';
import HeadingTitle from '../../Shared/HeadingTitle/HeadingTitle';

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("https://shutter-safari-imoncoc.vercel.app/classes")
      .then((res) => res.json())
      .then((data) => setInstructors(data))
      .catch((error) => console.log(error));
  }, []);
    return (
      <>
        <Helmet>
          <title>Shutter Safari | Instructors</title>
        </Helmet>

        <HeadingTitle
          title={"Our Instructors"}
          description={
            "Our experienced photography instructor offers comprehensive courses for photographers of all levels."
          }
        ></HeadingTitle>

        <div className="container">
          <div className="row">
            {instructors &&
              instructors.map((instructor) => (
                <SingleInstructor
                  instructor={instructor}
                  key={instructor._id}
                ></SingleInstructor>
              ))}
          </div>
        </div>
      </>
    );
};

export default Instructors;