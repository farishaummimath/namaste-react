import {restaurantList} from "../constants";
import RestaurantCard from "./RestaurantCard";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import {filterData} from "../utils/helper";
import useOnline from "../utils/hooks/useOnline.js";
const Body = () => {
	const [allRestaurants, setAllRestaurants] = useState([]);
	const [filteredRestaurants, setFilteredRestaurants] = useState([]);
	const [searchText, setSearchText] = useState("");

	useEffect(() => {
		getRestaurants();
	}, []);

	async function getRestaurants() {
		const data = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.936240184579862&lng=77.72210794469773&page_type=DESKTOP_WEB_LISTING"
		);
		const json = await data.json();
		setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
		setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
	}

	// browser tracks online or offline
	// const offline = true;
	const online = useOnline();
	if (!online) {
		return <h1> ** Please check your internet connection</h1>;
	}
	// not render component (Early return)
    if (!allRestaurants) return null;
    const searchBtnCss = {
        backgroundColor : '#579764'
    }

	return allRestaurants?.length === 0 ? (
		<Shimmer />
	) : (
		<>
			<div className="search-container">
				<input
					type="text"
					className="search-input"
					placeholder="Search"
					value={searchText}
					onChange={(e) => {
						setSearchText(e.target.value);
					}}
				/>
                    <button
                        // style={{
                        //     backgroundColor: 'red'
                        // }}
                        style={searchBtnCss}
					className="search-btn"
					onClick={() => {
						//need to filter the data
						const data = filterData(searchText, allRestaurants);
						// update the state - restaurants
						setFilteredRestaurants(data);
					}}
				>
					Search
				</button>
			</div>
			<div className="restaurant-list">
				{/*  write logic for NO restraunt found here */}
				{filteredRestaurants.map((restaurant) => {
					return (
						<Link to={"/restaurant/" + restaurant.data.id} key={restaurant.data.id}>
							<RestaurantCard {...restaurant.data} />
						</Link>
					);
				})}
			</div>
		</>
	);
};

export default Body;
