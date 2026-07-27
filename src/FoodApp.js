import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => (
  <div className="nav-bar">
    <div className="logo-container">
      <img className="logo" src='./assets/cartBtn.png' alt="Logo" />
    </div>

    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Sign in</li>
        <li>
          <img className="logo" src='./assets/cartBtn.png' alt="Cart" />
        </li>
      </ul>
    </div>
  </div>
);
const restaurants = [
  { id: 1 ,resName: "Sagar Ratna", cuisine: "South Indian", rating: "4.2⭐", time: "15 Mins" },
  { id: 2 ,resName: "Biryani Blues", cuisine: "Biryani", rating: "4.5⭐", time: "25 Mins" },
  { id: 3 ,resName: "Pizza Hut", cuisine: "Pizza", rating: "4.1⭐", time: "30 Mins" },
  { id: 4 ,resName: "Domino's", cuisine: "Pizza", rating: "4.3⭐", time: "20 Mins" },
  { id: 5 ,resName: "Burger King", cuisine: "Burgers", rating: "4.0⭐", time: "18 Mins" },
  { id: 6 ,resName: "KFC", cuisine: "Fried Chicken", rating: "4.4⭐", time: "22 Mins" },
  { id: 7 ,resName: "Haldiram's", cuisine: "North Indian", rating: "4.6⭐", time: "28 Mins" },
  { id: 8 ,resName: "Wow! Momo", cuisine: "Momos", rating: "4.1⭐", time: "17 Mins" },
  { id: 9 ,resName: "Behrouz Biryani", cuisine: "Mughlai", rating: "4.7⭐", time: "35 Mins" },
  { id: 10 ,resName: "Subway", cuisine: "Healthy", rating: "4.2⭐", time: "16 Mins" },
  { id: 12 ,resName: "McDonald's", cuisine: "Fast Food", rating: "4.3⭐", time: "19 Mins" },
  { id: 13 ,resName: "The Belgian Waffle Co.", cuisine: "Desserts", rating: "4.5⭐", time: "21 Mins" },
  { id: 14 ,resName: "La Pino'z Pizza", cuisine: "Italian", rating: "4.4⭐", time: "27 Mins" },
  { id: 15 ,resName: "Chinese Wok", cuisine: "Chinese", rating: "4.0⭐", time: "24 Mins" },
  { id: 16 ,resName: "Barbeque Nation", cuisine: "BBQ", rating: "4.8⭐", time: "40 Mins" }
];
const ResturauntCard = (props) => {
  const { resData } = props;
  return <div className="resturant-details">
    <img className="logo" src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/9/23/2262d4c9-2d5b-4c8f-9b46-d885401390a0_1214669.jpg' alt="food-img" />
    <h1>{resData.resName}</h1>
    <ul className="card-details">
      <li >{resData.cuisine}</li>
      <li>{resData.rating}</li>
      <li>{resData.time}</li>
    </ul>
  </div>
}
const Body = () => (
  <div className="main-body">
    <div className="search-container">
      <div className="input-container">
        <input ></input>
      </div>
      <div className="search-btn">
        🔍
      </div>
    </div>

    <div className="res-cards-container">
      <div className="res-cards">
        {
          restaurants.map((data )=>(
             <ResturauntCard key={data.id} resData = {data} />
          ))
        }
      </div>
    </div>
  </div>
)

const FoodApp = () => (
  <div className="food-app">
    <Header />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FoodApp />);