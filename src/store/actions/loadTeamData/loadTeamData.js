import { LOAD_TEAM_DATA, LOAD_TEAM_DATA_FAILED, LOAD_TEAM_DATA_SUCCESS } from '../../constants';

const loadTeamData = (id) => ({
	type: LOAD_TEAM_DATA,
	id
});

export const loadTeamDataFailed = (error) => ({
	type: LOAD_TEAM_DATA_FAILED,
	payload: error,
});

export const loadTeamDataSuccess = (data) => ({
	type: LOAD_TEAM_DATA_SUCCESS,
	payload: data,
});

export default loadTeamData;
