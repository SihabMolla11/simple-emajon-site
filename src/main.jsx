import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Layout/Home";
import Shop from "./components/Shop/Shop";
import Order from "./components/Order/Order";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import cartProductLoader from "./Loaders/cartProductLoader";
import Checkout from "./components/Shop/Checkout/Checkout";
import SignUP from "./components/SignUP/SignUP";
import AuthProvider from "./components/AuthProvider";
import PrivateRoute from "./routs/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
      },
      {
        path: "/order",
        element: <Order></Order>,
        loader: cartProductLoader,
      },
      {
        path: "/inventory",
        element: <PrivateRoute><Inventory></Inventory></PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/checkout",
        element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUP></SignUP>,
      },
    ],
  },
  {
    path: "*",
    element: (
      <div>
        <h1>Vai tumi ki kj tik korco vul val type korco</h1>
      </div>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
