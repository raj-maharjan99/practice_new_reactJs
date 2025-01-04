import Slider from "./utils/Silder";
import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./utils/RootLayout";
import LoginPage from "./page/login-form";
import { useSelector } from "react-redux";
import SignUp from "./page/signUp-page";

function App() {
  const { user } = useSelector((state) => state.userSlice);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <Slider /> },
        { path: "/signup", element: <SignUp /> },
        {
          path: "/login",
          element: user !== null ? <Navigate to="/" /> : <LoginPage />,
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
