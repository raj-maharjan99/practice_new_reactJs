import React from "react";
import Home from "./Home";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RootLayout from "./RootLayout";
import Details from "./Details";
import Full from "./Full";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      { path: "/", element: <Home /> },
      { path: "detail/:id", element: <Details /> },
      { path: "full/:i", element: <Full /> },
      { path: "*", element: <h2>error page</h2> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
