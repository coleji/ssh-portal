import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import {reducer as reduxAsyncConnect} from 'redux-async-connect';
import {reducer as form} from 'redux-form';

import {serverList, keyList} from './containers/ServerGrid/reducer.js';

export default combineReducers({
	routing: routeReducer,
	reduxAsyncConnect,
	form,
	serverList,
	keyList,
	config : (state = {}) => state
});
