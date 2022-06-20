import initialState from '../initialState';
import { LOAD_TASKS_DATA_SUCCESS } from '../constants';

const tasks = (state = initialState.tasks, action) => {
	switch (action.type) {
		case LOAD_TASKS_DATA_SUCCESS:
			return {
				data: action.payload,
			};
		default:
			return state;
	}
};

export default tasks;
