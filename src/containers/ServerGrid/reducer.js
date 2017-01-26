const DEFAULT_STATE = [];

export default function(state = DEFAULT_STATE, action) {
	switch (action.type) {
	case "GET_SERVER_LIST":
		return action.serverList;
	default:
		return state;
	}
}
