import { combineReducers } from 'redux';
import hotels from './hotelsReducer';
import filters from './filtersReducer';
import sortBy from './sortByReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    hotels,
    filters,
    sortBy,
    ajaxCallsInProgress
});

export default rootReducer;