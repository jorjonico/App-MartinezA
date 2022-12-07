import { FILTERED_EMULSIONS, SELECTED_EMULSIONS } from '../actions/emulsions.action';

import {EMULSIONS} from '../../data/emulsions'

const initialState = {
    emulsions: EMULSIONS,
    filteredEmulsions: [],
    selected: null,
};

const EmulsionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECTED_EMULSIONS:
            return{
                ...state,
                selected:state.emulsions.find((emulsions) => emulsions.id === action.emulsionsID),
            };
        case FILTERED_EMULSIONS:
            return {
                ...state,
                filteredEmulsions: state.emulsions.filter((emulsions) => emulsions.category === action.categoryID)
            };
        default:
            return state
    }
};

export default EmulsionsReducer;