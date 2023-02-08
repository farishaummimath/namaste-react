import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {IMG_CDN_URL} from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/hooks/useRestaurant";
import { addItem } from "../utils/cartSlice";
import {useDispatch} from 'react-redux'
const RestaurantMenu = () => {
	// how to read a dynamic URL params

	const {resId} = useParams();

	// Use proper names
	// 		"https://www.swiggy.com/dapi/menu/v4/full?lat=&menuId=" +

	//const [restaurant, setRestauraunt] = useState(null);

    const restaurant = useRestaurant(resId);
    const dispatch = useDispatch()

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
    handleFoodAddItem = (item) => {
        dispatch(addItem(item));
    }

	return !restaurant ? (
		<Shimmer />
	) : (
		<div className="flex">
			<div>
				<h1>Restraunt id: {resId}</h1>
				<h2>{restaurant?.name}</h2>
				<img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
				<h3>{restaurant?.area}</h3>
				<h3>{restaurant?.city}</h3>
				<h3>{restaurant?.avgRating} stars</h3>
				<h3>{restaurant?.costForTwoMsg}</h3>
            </div>
            {/* <div>
                    
                    <button className="p2 m-5 bg-green-100" onClick={()=>handleAddItem()}>Add Item</button>
            </div> */}
            
			<div>
				<h1>Menu</h1>
				<ul>
					{Object.values(restaurant?.menu?.items).map((item) => (
                        <li key={item.id}>{item.name}-{"-"}
                            <button className="p2 m-5 bg-green-100" onClick={()=>handleFoodAddItem(item)}>Add Item</button>
                        </li>                      
					))}
				</ul>
			</div>
		</div>
	);
};

export default RestaurantMenu;
