import { useEffect, useState } from "react";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import LoaderSpinner from "../pages/Shared/LoaderSpinner/LoaderSpinner";


const DashBoard = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);





    return (
      <>
        {!isLoading? (<Dashboard></Dashboard>) : (
          <LoaderSpinner></LoaderSpinner>
        )}
      </>
    );
};

export default DashBoard;