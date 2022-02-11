import { combineReducers } from "redux";
import products from "./products";
import cartItems from "./cartItems";

const rootReducer = combineReducers({ products, cartItems });

export default rootReducer;
