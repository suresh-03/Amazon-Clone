import React from "react";
import Signup from "../components/Signup";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>hello</div>,
  },
  {
    path: "/api/user/signup",
    element: <Signup />,
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
