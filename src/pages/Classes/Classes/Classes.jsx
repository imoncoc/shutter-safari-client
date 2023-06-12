import { useEffect, useState } from 'react';
import Class from '../Class/Class';
import './Classes.css'
import { Helmet } from 'react-helmet-async';
import HeadingTitle from '../../Shared/HeadingTitle/HeadingTitle';

const Classes = () => {
    const [classes, setClasses] = useState([]);

    useEffect(()=> {
        fetch("https://shutter-safari-imoncoc.vercel.app/classes")
          .then((res) => res.json())
          .then((data) => setClasses(data))
          .catch((error) => console.log(error));
    }, [])




    return (
      <>
        <Helmet>
          <title>Shutter Safari | Classes</title>
        </Helmet>

        <HeadingTitle
          title={"Our Classes"}
          description={
            "Join us to capture stunning images and unleash your creativity under expert guidance."
          }
        ></HeadingTitle>

        <div className="container">
          <div className="row">
            {classes &&
              classes.map((classItem) => (
                <Class classItem={classItem} key={classItem._id}>
                  {classItem.name}
                </Class>
              ))}
          </div>
        </div>
      </>
    );
};

export default Classes;