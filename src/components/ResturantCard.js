const ResturauntCard = (props) => {
    const { resData } = props;
    return <div className="resturant-details">
        <img className="logo" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.cloudinaryImageId}`} alt="food-img" />
        <h1>{resData.name}</h1>
        <ul className="card-details">
            <li >{resData.cuisines.join(", ")}</li>
            <li>{resData.avgRating}</li>
        </ul>
    </div>
}
export default ResturauntCard