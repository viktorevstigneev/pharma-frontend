import initialState from '../initialState';
import { LOAD_HONORS_DATA_SUCCESS } from '../constants';

const tasks = (state = initialState.honors, action) => {
	switch (action.type) {
		case LOAD_HONORS_DATA_SUCCESS:
			return {
				data: action.payload,
			};
		default:
			return state;
	}
};

export default tasks;
