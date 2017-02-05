const serverList = function(state = [], action) {
	switch (action.type) {
	case "GET_SERVER_LIST":
		return action.serverList;
	default:
		return state;
	}
};

const keyList = function(state = [], action) {
	switch (action.type) {
	case "GET_KEY_LIST":
		// create new array of all the keys
		var newState = action.keyList.map(key => ({
			alias : key,
			unlocked : false
		}));
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
