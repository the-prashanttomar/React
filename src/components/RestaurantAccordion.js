import { useState } from 'react'
import ItemCard from './ItemCard'
const RestaurantAccordion = ({ data }) => {
    const [arrowDirection, setArrowDirection] = useState("⌃")
    const [isCollapsed, setIsCollapsed] = useState(false)
    const updateAccordion = () => {
        if (arrowDirection === "⌃") {
            setArrowDirection("˅")

        } else {
            setArrowDirection("⌃")
        }
        setIsCollapsed(!isCollapsed)
    }
    return (
        <div>

            <div className="w-1/2 mx-auto bg-gray-50 shadow-lg m-8">
                <div className="p-2 m-2 text-center justify-between flex text font-bold cursor-pointer"
                    onClick={updateAccordion}>
                    <h3>{data.title}</h3>
                    <div>{arrowDirection}</div>
                </div>
                {isCollapsed && (
                    (data.itemCards || data.categories[0].itemCards).map((data) => (
                        <ItemCard
                            key={data.card?.info?.id}
                            data={data.card?.info}
                        />
                    ))
                )}
            </div>
        </div>
    )
}
export default RestaurantAccordion