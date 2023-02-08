import {useState, useEffect} from "react";
import {FETCH_RESTAURANT_URL} from "../../constants";
const useRestaurant = (resId) => {
	const [restaurant, setRestauraunt] = useState(null);
	// get data from API

	useEffect(() => {
		getRestaurantInfo();
	}, []);

	async function getRestaurantInfo() {
		const data = await fetch(FETCH_RESTAURANT_URL + resId);
		const json = await data.json();
		console.log(json.data);
		setRestauraunt(json.data);
	}
	// return restaurant data
	return restaurant;
};

export default useRestaurant;
