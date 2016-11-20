import * as types from './actionTypes';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function setFilterValueSuccess(filter, value) {
    return {
        type: types.SET_FILTER_VALUE,
        payload: {
            value: value,
            filter
        }
    };
}

export function setFilterValue(filter, value) {
    return function (dispatch) {
        dispatch(setFilterValueSuccess(filter, value));
    };
}