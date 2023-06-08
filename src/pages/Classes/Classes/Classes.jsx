import { useEffect, useState } from 'react';
import Class from '../Class/Class';
import './Classes.css'

const Classes = () => {
    const [classes, setClasses] = useState([]);

    useEffect(()=> {
        fetch("http://localhost:5000/classes")
        .then((res) => res.json())
        .then((data) => setClasses(data))
        .catch((error) => console.log(error))
    }, [])




    return (
      <>
        <div className="container">
          <div className="row">
            <h2>Classes Page</h2>
          </div>
        </div>
        <div className="container">
          <div className="row">
            

              {classes &&
                classes.map((classItem) => (
                  <Class classItem={classItem} key={classItem._id}>{classItem.name}</Class>
                ))}
            </div>
          </div>
        
      </>
    );
};

export default Classes;