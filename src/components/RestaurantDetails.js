import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestaurantDetails = () => {
    const [resDetails, setResDetails] = useState(null);
    const { resId } = useParams()
    return (
        <div className="Res-details">
            <h1>{resId}</h1>

        </div>
    );
};

export default RestaurantDetails;