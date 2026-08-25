
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import About from "./components/About";
import ContactUs from "./components/ContactUs";
import RestaurantDetails from "./components/RestaurantDetails";
import Error from "./components/Error";
import { Outlet } from "react-router";
import { lazy,Suspense } from "react";
import Shimmer from "./components/Shimmer";



const FoodApp = () => (
  <div className="food-app">
    <Header />
    <Outlet/>
  </div>
);
const Grocery = lazy(()=>import("./components/Grocery"))
const About = lazy(()=>import("./components/About"))
const router = createBrowserRouter([
  {
    path: "/",
    element: <FoodApp />,
    children:[
      
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/resturaunt/:resId",
        element: <RestaurantDetails />
      },
      {
        path: "/About",
        element: <Suspense fallback={<Shimmer/>}><About /></Suspense>
        // element: <About />
      },
      {
        path: "/contactus",
        element: <ContactUs />
      },
      {
        path: "/Grocery",
        // custom loading using Lazy , it will group the js file different
        element: <Suspense fallback={<Shimmer/>}><Grocery /></Suspense>
      },
    ],
    errorElement:<Error/>
  },
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);