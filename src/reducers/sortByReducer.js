import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function sortByReducer(state = initialState.sortBy, action) {
    switch(action.type) {
        case types.SET_SORT_BY_VALUE:
        {
            return action.payload;
        }

        default:
            return state;
    }
}