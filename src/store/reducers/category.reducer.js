import {CATEGORIES} from '../../data/categories'
import { SELECTED_CATEGORY } from '../actions/category.action';

const initialState = {
    categories: CATEGORIES,
    selected: null,
};

const Categoryreducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECTED_CATEGORY:
            const IndexCategory = state.categories.findIndex(
                (cat) => cat.id === action.categoryID
            );
            if(IndexCategory === -1) return state;
            return { ...state, selected: state.categories[IndexCategory]};
        default:
            return state;
    }
};

export default Categoryreducer;