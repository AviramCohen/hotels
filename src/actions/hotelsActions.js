import * as types from './actionTypes';
import hotelsApi from '../api/mockHotelsApi';
import * as filtersActions from './filtersActions';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function loadHotelsSuccess(hotels) {
    return { type: types.LOAD_HOTELS_SUCCESS, hotels};
}

export function loadHotels() {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return hotelsApi.getAllHotels().then(hotels => {
            dispatch(loadHotelsSuccess(hotels));
            dispatch(filtersActions.setFilters(hotels));
        }).catch(error => {
            throw(error);
        });
    };
}