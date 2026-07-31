import ResturauntCard from './ResturantCard'
import restaurants from '../utils/constants'
import { useState } from 'react'

const Body = () => {
    const [resList, setResList] = useState(restaurants);
    return (
        <div className="main-body">
            <div className="filter-btn">
                <button className='filterd' onClick={() => {
                    const updatedList = restaurants.filter((data) => data.rating > 4)
                    setResList(updatedList)
                }}>Top Rated Resturaunts</button>
                <button className='filterd' onClick={() => {
                    setResList(restaurants)
                }}>Show All Resturaunts</button>
                <button className='filterd' onClick={() => {
                    setResList([])
                }}>Delete Resturaunts</button>
            </div>

            <div className="res-cards-container">
                <div className="res-cards">
                    {
                        resList.map((data) => (
                            <ResturauntCard key={data.id} resData={data} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Body