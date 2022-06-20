import { takeEvery } from 'redux-saga/effects';

import { LOAD_PROFILE_DATA, LOAD_TEAM_DATA, LOAD_TASKS_DATA, LOAD_HONORS_DATA } from '../constants';
import { loadProfileData, loadTeamData, loadTasksData, loadHonorsData } from './worker';

export default function* sagaWatcher() {
	yield takeEvery(LOAD_PROFILE_DATA, loadProfileData);
	yield takeEvery(LOAD_TEAM_DATA, loadTeamData);
	yield takeEvery(LOAD_TASKS_DATA, loadTasksData);
	yield takeEvery(LOAD_HONORS_DATA, loadHonorsData);
}
