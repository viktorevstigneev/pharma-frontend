import { LOAD_PROFILE_DATA, LOAD_PROFILE_DATA_FAILED, LOAD_PROFILE_DATA_SUCCESS } from '../../constants';

const loadProfileData = (id) => ({
	type: LOAD_PROFILE_DATA,
	id,
});

export const loadProfileDataFailed = (error) => ({
	type: LOAD_PROFILE_DATA_FAILED,
	payload: error,
});

export const loadProfileDataSuccess = (data) => ({
	type: LOAD_PROFILE_DATA_SUCCESS,
	payload: data,
});

export default loadProfileData;
