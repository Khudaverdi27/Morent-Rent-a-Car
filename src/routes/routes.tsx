import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import Error from "../pages/Error";
import AuthLayout from "../layouts/AuthLayout";
import Auth from "../pages/Auth";
import CarDetail from "../pages/CarDetail/CarDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "car-detail",
        element: <CarDetail />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Auth />,
      },
    ],
  },
]);
