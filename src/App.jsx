import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Product from "./pages/product";
import Cart from "./pages/cart";
import ProductsDetail from "./pages/product-details";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Outlet />,
      children: [
        { path: "/", element: <div>Home</div> },
        {
          path: "/product",
          element: <Product />,
        },
        { path: "/cart", element: <Cart /> },
        { path: "/product/details/:id", element: <ProductsDetail /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
