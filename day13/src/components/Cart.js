import { useSelector } from "react-redux";

import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items); // useSelector is used to subscribe to store,
    const dispatch = useDispatch()
    //store.cart=> subscribe to stores cart
    // store.cart.items=> subscribe to store cart items
    // if u subsctibe to store -- every time store changes cart changes, rerender the component
    // store in large scale prod app - rerender will cause performance issues
    // so always subscribe to specific portion of store like above, as per what is required

    const handleClearCart = () => {
       dispatch(clearCart())
    }
    return (
        <>
            <h1 className="font-bold text-3l">Cart Items -{cartItems.length}
                <button className="" onClick={()=>handleClearCart()}>Clear Cart</button>
        <div className="flex">
        {
        cartItems.map(item => <FoodItem {...item} /> )
        }
        </div>
       
            </h1>
        </>
    ) 
};
export default Cart;
