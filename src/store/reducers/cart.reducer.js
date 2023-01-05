import { ADD_ITEM, CONFIRM_CART, REMOVE_ITEM } from "../actions/cart.action";

import { CART } from "../../data/cart";

const initialState = {
    items: CART,
    total: 27000,
};

const sumTotal = (list) => {
    list.map ((item) => item.quantity * item.price).reduce(a, (b) => a + b, 0);
};

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case REMOVE_ITEM:
            const cleanCart = [...state.items].filter(
                item => item.id !== action.itemID
            );
            return {...state, items: cleanCart, total: sumTotal(cleanCart)};
            
        case ADD_ITEM:
            const indexItem = state.items.findIndex(
                item => item.id === action.item.id
            );
            if (indexItem === -1){
                const item = {...action.item, quantity: 1};
                const updateCart = [...state.items. item];
                return {...state, items: updateCart, total: sumTotal(updateCart)};
            }
            const items = [...state.items].map((item) => {
                if (item.id === action.item.id) item.quantity++;
                
                return items;
            });
            return {...state, items, total: sumTotal(items)};
            
        case CONFIRM_CART:
            return {...state, items: [], total: 0};
            
        default:
            return state;
    }
};

export default CartReducer