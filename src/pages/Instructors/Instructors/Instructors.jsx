import { useEffect, useState } from 'react';
import './Instructors.css';
import SingleInstructor from '../SingleInstructor/SingleInstructor';

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("https://shutter-safari.vercel.app/classes")
      .then((res) => res.json())
      .then((data) => setInstructors(data))
      .catch((error) => console.log(error));
  }, []);
    return (
      <>
        <div className="container">
          <div className="row">
            <h2>Instructors Page</h2>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {instructors &&
              instructors.map((instructor) => (
                <SingleInstructor instructor={instructor} key={instructor._id}>
                  
                </SingleInstructor>
              ))}
          </div>
        </div>
      </>
    );
};

export default Instructors;