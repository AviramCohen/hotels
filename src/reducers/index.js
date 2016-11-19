import { combineReducers } from 'redux';
import hotels from './hotelsReducer';
import filters from './filtersReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    hotels,
    filters,
    ajaxCallsInProgress
});

export default rootReducer;