import  { useEffect, useState } from 'react';
import HeadingTitle from '../../Shared/HeadingTitle/HeadingTitle';
import SingleInstructor from '../../Instructors/SingleInstructor/SingleInstructor';

const PopularInstructors = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
      fetch(`https://shutter-safari-imoncoc.vercel.app/popular`)
        .then((res) => res.json())
        .then((data) => setInstructors(data))
        .catch((error) => console.log(error));
    }, []);


    return (
      <>
        <HeadingTitle
          title={"Popular Instructor"}
          description={
            "These highly sought-after professionals have inspired and guided countless learners on their photographic journeys."
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

export default PopularInstructors;