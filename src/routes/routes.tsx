import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import Error from "../pages/Error";
import AuthLayout from "../layouts/AuthLayout";
import CarDetail from "../pages/CarDetail/CarDetail";
import PaymentPage from "../pages/Payment/PaymentPage";
import Auth from "../pages/Auth/Index";

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
        path: "car-detail/payment",
        element: <PaymentPage />,
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
      {
        path: "/auth/register",
        element: <Auth />,
      },
    ],
  },
]);
