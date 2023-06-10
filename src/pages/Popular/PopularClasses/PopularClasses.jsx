import  { useEffect, useState } from 'react';
import HeadingTitle from '../../Shared/HeadingTitle/HeadingTitle';
import Class from '../../Classes/Class/Class';

const PopularClasses = () => {
    const [classes, setClasses] = useState([]);

    useEffect(()=> {
        fetch(`https://shutter-safari-imoncoc.vercel.app/popular`)
        .then((res) => res.json())
        .then((data) => setClasses(data))
        .catch((error) => console.log(error))
    }, [])


    return (
      <>
        <HeadingTitle
          title={"Popular Classes"}
          description={
            "Whether you're a beginner or a seasoned enthusiast, our top-rated courses offer a captivating learning experience tailored to photographers of all levels."
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

export default PopularClasses;