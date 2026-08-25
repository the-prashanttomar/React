
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import ResturantDetails from "./components/ResturantDetails";
import Error from "./components/Error";
import { Outlet } from "react-router";



const FoodApp = () => (
  <div className="food-app">
    <Header />
    <Outlet/>
  </div>
);
const router = createBrowserRouter([
  {
    path: "/",
    element: <FoodApp />,
    children:[
      
      {
        path: "/",
        element: <ResturantDetails />
      },
      {
        path: "/About",
        element: <About />
      },
      {
        path: "/contactus",
        element: <ContactUs />
      },
    ],
    errorElement:<Error/>
  },
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);