import initialState from '../initialState';
import { LOAD_TEAM_DATA_SUCCESS } from '../constants';

const team = (state = initialState.team, action) => {
	switch (action.type) {
		case LOAD_TEAM_DATA_SUCCESS:
			return {
				data: action.payload,
			};
		default:
			return state;
	}
};

export default team;
