import { useParams } from "react-router";
import { cardData } from "../utils/dataFetch";
import RestaurantAccordion from './RestaurantAccordion'
const RestaurantDetails = () => {
    const { resId } = useParams();
    const cardDetails = cardData.cards[cardData.cards.length - 1].groupedCard.cardGroupMap.REGULAR.cards
    const accordionCards = cardDetails.filter((data) => data.card.card?.["@type"].includes("ItemCategory"))

    return (
        <div className="Res-details">
            <h1>{resId}</h1>
            {
            accordionCards.map((data) => {
                return <RestaurantAccordion key={data.card.card.title} data={data.card.card} />
                
            })}
        </div>
    );
};

export default RestaurantDetails;