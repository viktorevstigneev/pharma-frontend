import { LOAD_HONORS_DATA, LOAD_HONORS_DATA_FAILED, LOAD_HONORS_DATA_SUCCESS } from '../../constants';

const loadHonorsData = () => ({
	type: LOAD_HONORS_DATA,
});

export const loadHonorsDataFailed = (error) => ({
	type: LOAD_HONORS_DATA_FAILED,
	payload: error,
});

export const loadHonorsDataSuccess = (data) => ({
	type: LOAD_HONORS_DATA_SUCCESS,
	payload: data,
});

export default loadHonorsData;
