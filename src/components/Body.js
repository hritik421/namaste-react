import RestaurantCards from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Body = () => {
    const [restaurantListThroughAPI, setRestaurantListThroughAPI] = useState([]);
    const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
    const [searchText, setSearchText] = useState();
    const [toggle, setToggle] = useState("Top Rated Restaurants");

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();

        setRestaurantListThroughAPI(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurantList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    
    
   return (<div className="container">
        <div className="mb-4">
            <input type="text" className="p-2 border-solid bg-sky-50 ml-4"  placeholder="Restaurant Name" value={searchText} onChange={(e) => setSearchText(e.target.value)}></input>
            <button className="p-2 ml-2 rounded-md bg-slate-200 hover:bg-slate-300" onClick={() => {
                const filterSearchResult = restaurantListThroughAPI.filter((res) => res.info.name.toLowerCase().includes(searchText?.toLowerCase() ?? ""));
                setFilteredRestaurantList(filterSearchResult);
            }}>search
            </button>

            <button className="mx-2 p-2 rounded-md bg-slate-200 hover:bg-slate-300" onClick={ () =>{
                    if(toggle == "Top Rated Restaurants"){
                        const filteredList = restaurantListThroughAPI.filter((res) => res.info.avgRating > 4);
                        setFilteredRestaurantList(filteredList);
                        setToggle("Show All Restaurants");
                    }else{
                        setFilteredRestaurantList(restaurantListThroughAPI);
                        setToggle("Top Rated Restaurants");
                    }     
                }}>
                    {toggle}
            </button>
        </div>
        <div className="grid grid-cols-4 m-2">
            {filteredRestaurantList.map((restaurant) => (
                <div>
                <Link to={"/restaurant/"+ restaurant?.info?.id} key={restaurant?.info?.id}>
                    <RestaurantCards  resData = {restaurant} />
                </Link>
                </div>
            ))}
        </div>
    </div>
);
};

export default Body;