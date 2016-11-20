import * as types from './actionTypes';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';
import * as actionsHelpers from './actionsHelpers';

export function setFilterValueSuccess(filter, value) {
    return {
        type: types.SET_FILTER_VALUE,
        payload: {
            value: value,
            filter
        }
    };
}

export function setFilters(hotels) {
    const priceMax = actionsHelpers.getHotelsMinMaxRate(hotels, 'max'),
        priceMin = actionsHelpers.getHotelsMinMaxRate(hotels, 'min');

    return {
        type: types.SET_FILTERS_PRICE_MIN_MAX,
        payload: {
            min: priceMin,
            max: priceMax,
            value: priceMax
        }
    };
}

export function setFilterValue(filter, value) {
    return function (dispatch) {
        dispatch(setFilterValueSuccess(filter, value));
    };
}