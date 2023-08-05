import { Restaurant_IMG } from "../utils/constant";


const RestaurantCards = (props) => {
    const {name, avgRating, costForTwo, cloudinaryImageId} = props?.resData?.info;
    
    return (
    <div className="restaurant-card-container">
        <img className="res-logo"
        src={Restaurant_IMG+ cloudinaryImageId}
        alt={Restaurant_IMG + "akajgetevooghwtznw56"}>
        </img>
        <h3>{name}</h3>
        <h3>{props.resData.info.cuisines.join(", ")}</h3>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
    </div>
    );
};

export default RestaurantCards;