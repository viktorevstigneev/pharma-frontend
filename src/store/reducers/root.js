import { combineReducers } from 'redux';
import profile from './profile';
import team from './team';
import tasks from './tasks';
import honors from './honors';

const rootReducer = combineReducers({
	profile,
	team,
	tasks,
	honors,
});

export default rootReducer;
