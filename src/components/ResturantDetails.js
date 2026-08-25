import { useState ,useEffect} from "react";
import { innerLink } from "../utils/constants";
import Shimmer from "./Shimmer";
const ResturantDetails = () => {
    const [resDetails, setResDetails] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5010274&lng=77.4257319&restaurantId=61111&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        const finaldata = json.data.cards[2].card.card.info
        setResDetails(finaldata);
    }
    if (resDetails === null) return <Shimmer />
    return (
        <div className="Res-details">
            {
                resDetails.map((data) => (
                    <div className="res-menue" key={data.id}> 
                        <h1>{data.name}</h1>
                        <ul className="menu-details">
                            <li >{data.cuisines.join(", ")}</li>
                            <li>{data.costForTwoMessage}</li>
                        </ul>
                    </div>
                ))
            }
        </div>
    );
}
export default ResturantDetails