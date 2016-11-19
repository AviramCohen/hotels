import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function filtersReducer(state = initialState.filters, action) {
    switch(action.type) {
        case types.SET_FILTER_VALUE:
        {
            const filterNewValue = {
                [action.payload.filter]: {
                    min: state[action.payload.filter].min,
                    max: state[action.payload.filter].max,
                    value: action.payload[action.payload.filter].value.target.value
                }
            };

            console.log(state);
            console.log(action.payload);
            console.log(Object.assign({}, state, filterNewValue));
            return Object.assign({}, state, filterNewValue);
        }

        default:
            return state;
    }
}