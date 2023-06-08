import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "@smastrom/react-rating/style.css";

import { RouterProvider } from "react-router-dom";
import router from './Routes/Routes';
import AuthProvider from './providers/AuthProvider';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HelmetProvider } from 'react-helmet-async';



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <ToastContainer></ToastContainer>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
