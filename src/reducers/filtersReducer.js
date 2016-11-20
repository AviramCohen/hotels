import * as types from '../actions/actionTypes';
import initialState from './initialState';
import _ from 'lodash';

export default function filtersReducer(state = initialState.filters, action) {
    switch(action.type) {
        case types.SET_FILTER_VALUE:
        {
            const newData = _.cloneDeep(state[action.payload.filter], true);
            newData.value = action.payload.value.target.value;

            return Object.assign({}, state, {[action.payload.filter]: newData});
        }

        case types.SET_FILTERS_PRICE_MIN_MAX:
        {
            const { min, max, value } = action.payload;

            return Object.assign({}, state, { price: { min, max, value } });
        }

        default:
            return state;
    }
}