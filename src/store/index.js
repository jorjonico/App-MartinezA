import { combineReducers, createStore } from "redux";

import Categoryreducer from "./reducers/category.reducer";
import EmulsionsReducer from "./reducers/emulsions.reducer";

const RootReducer = combineReducers({
    categories: Categoryreducer,
    emulsions: EmulsionsReducer,
});

export default createStore(RootReducer);