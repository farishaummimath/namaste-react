import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {IMG_CDN_URL} from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/hooks/useRestaurant";
const RestaurantMenu = () => {
	// how to read a dynamic URL params

	const {resId} = useParams();

	// Use proper names
	// 		"https://www.swiggy.com/dapi/menu/v4/full?lat=&menuId=" +

	//const [restaurant, setRestauraunt] = useState(null);

	const restaurant = useRestaurant(resId);

	// useEffect(() => {
	// 	getRestaurantInfo();
	// }, []);

	// async function getRestaurantInfo() {
	// 	const data = await fetch(
	// "https://www.swiggy.com/dapi/menu/v4/full?lat=12.936240184579862&lng=77.72210794469773&menuId=" +
	// 			resId
	// 	);
	// 	const json = await data.json();
	// 	console.log(json.data);
	// 	setRestauraunt(json.data);
	// }

	return !restaurant ? (
		<Shimmer />
	) : (
		<div className="menu">
			<div>
				<h1>Restraunt id: {resId}</h1>
				<h2>{restaurant?.name}</h2>
				<img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
				<h3>{restaurant?.area}</h3>
				<h3>{restaurant?.city}</h3>
				<h3>{restaurant?.avgRating} stars</h3>
				<h3>{restaurant?.costForTwoMsg}</h3>
			</div>
			<div>
				<h1>Menu</h1>
				<ul>
					{Object.values(restaurant?.menu?.items).map((item) => (
						<li key={item.id}>{item.name}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default RestaurantMenu;
