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
export default ResturauntCard