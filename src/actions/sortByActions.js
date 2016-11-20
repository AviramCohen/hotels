import * as types from './actionTypes';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function setSortByValueSuccess(value) {
    return {
        type: types.SET_SORT_BY_VALUE,
        payload: value
    };
}

export function setSortByValue(value) {
    return function (dispatch) {
        dispatch(setSortByValueSuccess(value));
    };
}