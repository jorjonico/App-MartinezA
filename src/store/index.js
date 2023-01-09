import { applyMiddleware, combineReducers, createStore } from "redux";

import CartReducer from "./reducers/cart.reducer";
import Categoryreducer from "./reducers/category.reducer";
import EmulsionsReducer from "./reducers/emulsions.reducer";
import OrderReducer from "./reducers/order.reducer";
import thunk from "redux-thunk";

const RootReducer = combineReducers({
    categories: Categoryreducer,
    emulsions: EmulsionsReducer,
    cart: CartReducer,
    orders: OrderReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));