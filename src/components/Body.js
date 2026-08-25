import ResturauntCard from './ResturantCard'
import Shimmer from './Shimmer'
import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { useInternetStatus } from '../utils/useInternetStatus'
import { cardData } from '../utils/constants'
import { dataFetch } from '../utils/dataFetch'

const Body = () => {
    const [resList, setResList] = useState([]);
    const [filteredRes, setFilteredRes] = useState([]);
    const [searchText, setSearchText] = useState('');
    let psudoData
    useEffect(() => {
        fetchData()
    }, []);
    const fetchData = async () => {
        // const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.1594182&lng=77.9929459&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        // const json = await data.json();
        let finaldata
        // if (json.data) {

        //     finaldata = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
        // } else {
                finaldata = dataFetch.cards[1].card.card.gridElements.infoWithStyle.restaurants
        // }
        setResList(finaldata)
        setFilteredRes(finaldata)
    }

    // custom hook
    if (!useInternetStatus()) return (<h1>Oops Bro You are offline</h1>)


    return (resList.length === 0) ? <Shimmer /> : (
        <div className="main-body">
            <div className="flex justify-center p-4 m-4">
                <div className='px-4 py-2 m-4 border rounded-2xl'>
                    <input type='text'  value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }}></input>
                </div>
                <button className='bg-blue-200 px-4 py-2 m-4 rounded-xl hover:cursor-pointer' onClick={() => {
                    const updatedList = resList.filter((data) => (data.info.name.toLocaleLowerCase()).includes((searchText).toLocaleLowerCase()))
                    setFilteredRes(updatedList)
                }}>Search</button>
                <button className='bg-blue-50 px-4 py-2 m-4 rounded-xl hover:cursor-pointer' onClick={() => {
                    const updatedList = resList.filter((data) => data.info.avgRating > 4)
                    setFilteredRes(updatedList)
                }}>Top Rated Resturaunts</button>
            </div>

                <div className="flex flex-wrap justify-center">
                    {
                        filteredRes.map((data) => {
                            cardData.push([{ id: data.info.id, name: data.info.name }])
                            return <Link key={data.info.id} to={"/resturaunt/" + data.info.id}><ResturauntCard key={data.info.id} resData={data.info} /></Link>
                        })
                    }
            </div>
        </div>
    )
}

export default Body