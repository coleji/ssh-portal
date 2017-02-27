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

const unlockKey = function(dispatch, config, alias, passphrase) {
	console.log("sending " + passphrase);
	createActionFromAPIResponse(config, {
		httpMethod: 'POST',
		apiEndpoint : '/unlock',
		postData: { alias, passphrase }
	}).then(() => {
		getKeyList(dispatch, config);
	}).catch(e => {
		console.log(e);
	});
};

const getUpdates = function(dispatch, config, alias) {
	console.log("getting updates for " + alias);
	createActionFromAPIResponse(config, {
		httpMethod: 'GET',
		apiEndpoint : '/getUpdates/'+ alias,
		stateItemName : 'response'
	}).then((data) => {
		dispatch({
			type: 'SSH_RESPONSE',
			alias,
			response : data.response
		});
	}).catch(e => {
		console.log(e);
	});
};

export {
	getServerList,
	getKeyList,
	unlockKey,
	getUpdates
};
