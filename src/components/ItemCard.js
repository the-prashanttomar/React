const ItemCard = ({data})=>{
    return(
        <div className="p-2 m-2 border-b-2 border-gray-200">
            <div >
                {data.name} | {data.category}
            </div>
            <div className="font-light text-sm">
                {data.description}
            </div>
        </div>
    )
}
export default ItemCard