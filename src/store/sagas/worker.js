import axios from 'axios';
import { put, call } from 'redux-saga/effects';

import { loadProfileDataFailed, loadProfileDataSuccess } from '../actions/loadProfileData/loadProfileData';
import { loadTeamDataFailed, loadTeamDataSuccess } from '../actions/loadTeamData/loadTeamData';
import { loadTasksDataFailed, loadTasksDataSuccess } from '../actions/loadTasksdata/loadTasksData';
import { loadHonorsDataFailed, loadHonorsDataSuccess } from '../actions/loadHonorsData/loadHonorsData';
import { API_URL } from '../constants';

export function* authorization(action) {
	try {
		const responseData = yield call(() =>
			axios({
				method: 'POST',
				data: {
					username: action.userName,
					password: action.password,
				},
				withCredentials: true,
				url: `${API_URL}/signin`,
			})
		);
		yield put(authorizationSuccess(responseData));
	} catch (error) {
		yield put(authorizationFailed(error));
	}
}
// export function* loadProfileData(action) {
// 	try {
// 		const responseData = yield call(() => axios.get(`${API_URL}/profile`).then((response) => response.data));
// 		yield put(loadProfileDataSuccess(responseData));
// 	} catch (error) {
// 		yield put(loadProfileDataFailed(error));
// 	}
// }

export function* loadProfileData(action) {
	try {
	
		const responseData = yield call(() =>
			axios.get(`${API_URL}/profile/${action.id}`, { withCredentials: true }).then((response) => response.data)
		);
		yield put(loadProfileDataSuccess(responseData));
	} catch (error) {
		yield put(loadProfileDataFailed(error));
	}
}

export function* loadTeamData(action) {
	try {
		const responseData = yield call(() => axios.get(`${API_URL}/team`).then((response) => response.data));
		yield put(loadTeamDataSuccess(responseData));
	} catch (error) {
		yield put(loadTeamDataFailed(error));
	}
}

export function* loadTasksData(action) {
	try {
		const responseData = yield call(() =>
			axios.get(`${API_URL}/person/${action.id}`).then((response) => response.data)
		);
		yield put(loadTasksDataSuccess(responseData));
	} catch (error) {
		yield put(loadTasksDataFailed(error));
	}
}

export function* loadHonorsData() {
	try {
		const responseData = yield call(() => axios.get(`${API_URL}/honors`).then((response) => response.data));
		yield put(loadHonorsDataSuccess(responseData));
	} catch (error) {
		yield put(loadHonorsDataFailed(error));
	}
}
