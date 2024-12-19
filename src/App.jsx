import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Movie from "./Movie";
import MovieDetail from "./MovieDetail";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Outlet />,
      children: [
        { path: "/", element: <Movie /> },
        { path: "detail/:id", element: <MovieDetail /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
