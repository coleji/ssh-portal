import { createActionFromAPIResponse } from '../../../core/api-client';

var getServerList = function(dispatch, config) {
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

export {
	getServerList
};
