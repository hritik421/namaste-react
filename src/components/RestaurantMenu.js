import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_MENU } from "../utils/constant";
import MenuGrid from "./MenuGrid";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const {resid} = useParams();
    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data = await fetch(RESTAURANT_MENU+resid);
        const json = await data.json();

        setResInfo(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card?.itemCards);
        console.log(resInfo);
    }

    if (resInfo){
        return (
            <div className="restaurant-menu">
                <h1>Recommended</h1>
                <ul>
                    {resInfo.map((res) => (
                        <MenuGrid menuData = {res?.card?.info} key={res?.card?.info?.id} />
                    ))}     
                </ul>  
            </div>
        );
    }
    // else return shimmer class   
};

export default RestaurantMenu;