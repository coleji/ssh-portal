import { createActionFromAPIResponse } from '../../../core/api-client';

const getServerList = function(dispatch, config) {
	createActionFromAPIResponse(config, {
		httpMethod: 'GET',
		apiEndpoint : '/serverlist',
		stateItemName : 'serverList'
	}).then((data) => {
		dispatch({
			type: 'GET_SERVER_LIST',
			serverList : data.serverList
		});
	}).catch(e => {
		console.log(e);
	});
};

const getKeyList = function(dispatch, config) {
	createActionFromAPIResponse(config, {
		httpMethod: 'GET',
		apiEndpoint : '/keyList',
		stateItemName : 'keyList'
	}).then((data) => {
		dispatch({
			type: 'GET_KEY_LIST',
			keyList : data.keyList
		});
	}).catch(e => {
		console.log(e);
	});
};

export {
	getServerList,
	getKeyList
};
