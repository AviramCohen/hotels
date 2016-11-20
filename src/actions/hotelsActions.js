import * as types from './actionTypes';
import hotelsApi from '../api/mockHotelsApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';
import * as actionsHelpers from './actionsHelpers';

export function loadHotelsSuccess(hotels) {
    return { type: types.LOAD_HOTELS_SUCCESS, hotels};
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

export function loadHotels() {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return hotelsApi.getAllHotels().then(hotels => {
            window.hotels = hotels;
            dispatch(loadHotelsSuccess(hotels));
            dispatch(setFilters(hotels));
        }).catch(error => {
            throw(error);
        });
    };
}