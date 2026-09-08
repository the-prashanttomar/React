const ResturauntCard = (props) => {
    const { resData } = props;
    return <div className="flex-wrap w-48 p-2 m-2 bg-gray-200 hover:shadow-2xl hover:bg-gray-400 rounded-md">
        <img className="rounded-md" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.cloudinaryImageId}`} alt="food-img" />
        <h1 className="font-bold">{resData.name}</h1>
        <ul className="card-details">
            <li >{resData.cuisines.join(", ")}</li>
            <li>{resData.avgRating}</li>
        </ul>
    </div>
}

export const PromotedResturauntCard = (ResturauntCard) => {
    return (props) => {
        return (
            <div>

                <label className="m-2 p-2 bg-pink-200 rounded-xl">Promoted</label>
                <ResturauntCard {...props} />
            </div>
        )
    }
}
export default ResturauntCard