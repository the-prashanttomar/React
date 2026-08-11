import ResturauntCard from './ResturantCard'
import restaurants from '../utils/constants'
import Shimmer from './Shimmer'
import { useEffect, useState } from 'react'

const Body = () => {
    const [resList, setResList] = useState([]);
    const [filteredRes, setFilteredRes] = useState([]);
    const [searchText, setSearchText] = useState('');
    let psudoData
    useEffect(() => {
        fetchData()
    }, []);
    const fetchData = async () => {
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.1594182&lng=77.9929459&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        const finaldata = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
        setResList(finaldata)
        setFilteredRes(finaldata)
        console.log(json)
    }
    return (resList.length === 0) ? <Shimmer /> : (
        <div className="main-body">
            <div className="filter-btn">
                <div className='search-bar'>
                    <input type='text' className='search-box-input' value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                        // const updatedList = resList.filter((data) => (data.info.name.toLocaleLowerCase()).includes((searchText).toLocaleLowerCase()))
                        // setFilteredRes(updatedList)
                    }}></input>
                </div>
                <button className='search' onClick={() => {
                    const updatedList = resList.filter((data) => (data.info.name.toLocaleLowerCase()).includes((searchText).toLocaleLowerCase()))
                    setFilteredRes(updatedList)
                    console.log(searchText)
                }}>Search</button>
                <button className='filterd' onClick={() => {
                    const updatedList = resList.filter((data) => data.info.avgRating > 4)
                    setFilteredRes(updatedList)
                }}>Top Rated Resturaunts</button>
            </div>

            <div className="res-cards-container">
                <div className="res-cards">
                    {
                        filteredRes.map((data) => (
                            <ResturauntCard key={data.info.id} resData={data.info} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Body