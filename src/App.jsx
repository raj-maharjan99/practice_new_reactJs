import "./App.css";
import {
  createBrowserRouter,
  Link,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./utils/RootLayout";
import LoginPage from "./page/login-form";
import { useSelector } from "react-redux";
import SignUp from "./page/signUp-page";
import Home from "./page/Home";
import { Button } from "./components/ui/button";

import AdminProduct from "./page/Product";
import UserProduct from "./page/UserProduct";
import GithubPage from "./page/GithubPage";

function App() {
  const { user } = useSelector((state) => state.userSlice);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "/github",
          element: <GithubPage />,
        },
        {
          path: "/signup",
          element: user !== null ? <Navigate to="/" /> : <SignUp />,
        },
        {
          path: "/login",
          element: user !== null ? <Navigate to="/" /> : <LoginPage />,
        },
        {
          path: "admin-product",
          element: <AdminProduct />,
        },
        {
          path: "user-product",
          element: <UserProduct />,
        },
        {
          path: "*",
          element: (
            <>
              <h2 className="mt-10">Not Found ....</h2>
              <Button>
                <Link to={-1}>Back </Link>
              </Button>
            </>
          ),
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
