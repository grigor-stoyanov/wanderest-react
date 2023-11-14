import { createBrowserRouter, redirect } from "react-router-dom";
import Landing from "./Layouts/Landing/Landing";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import Home from "./Layouts/Home/Home";
import LoginPage from "./pages/Auth/Login/LoginPage";
import RegisterPage from "./pages/Auth/Register/RegisterPage";
import AuthLayout from "./Layouts/Auth/Auth";
import Profile from "./pages/Auth/Profile/ProfilePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

export default router;
