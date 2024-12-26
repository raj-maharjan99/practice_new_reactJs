import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./Home";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Outlet />,
      children: [{ path: "/", element: <Home /> }],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
