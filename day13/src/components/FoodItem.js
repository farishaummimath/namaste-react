import { IMG_CDN_URL } from "../constants";
import { useContext } from "react";
import UserContext from "../utils/hooks/userContext";

const FoodItem = ({
  name,
  description,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  const { user } = useContext(UserContext);
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
          <h2 className="font-bold text-xl">{name}</h2>
                 <div>{  description}</div>
      {/* <h3>{cuisines.join(", ")}</h3>
      <h5 className="font-bold">
        {user.name} - {user.email}
      </h5> */}
    </div>
  );
};

export default FoodItem;
