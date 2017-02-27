const serverList = function(state = [], action) {
	switch (action.type) {
	case "GET_SERVER_LIST":
		return action.serverList;
	case "SSH_RESPONSE":
		var newState = [];
		state.forEach((row, i) => {
			newState.push([]);
			row.forEach((col, j) => {
				newState[i].push({
					alias : state[i][j].alias,
					response : (col.alias == action.alias) ? action.response : state[i][j].response
				});
			});
		});
		return newState;
	default:
		return state;
	}
};

const keyList = function(state = [], action) {
	switch (action.type) {
	case "GET_KEY_LIST":
		// create new array of all the keys
		var newState = action.keyList;
		// if any keys were unlocked in the old state, unlock them in the new state
		state.filter(keyObj => keyObj.unlocked).forEach(keyObj => {
			newState.filter(newKeyObj => (newKeyObj.alias == keyObj.alias))[0].unlocked = true;
		});
		return newState;
	default:
		return state;
	}
};

export {
	serverList,
	keyList
};
