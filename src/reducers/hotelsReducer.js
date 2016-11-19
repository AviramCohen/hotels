import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function hotelsReducer(state = initialState.hotels, action) {
    switch(action.type) {
        case types.LOAD_HOTELS_SUCCESS:
            return action.hotels;

        default:
            return state;
    }
}