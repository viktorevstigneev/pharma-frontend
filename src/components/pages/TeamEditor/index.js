import { connect } from 'react-redux';
import TeamEditor from './TeamEditor';
import loadTeamData from '../../../store/actions/loadTeamData/loadTeamData';
import loadHonorsData from '../../../store/actions/loadHonorsData/loadHonorsData';

const mapStateToProps = (state) => ({
	team: state.team,
	honors: state.honors,
});

const mapDispatchToProps = (dispatch) => ({
	loadTeamData: (id) => dispatch(loadTeamData(id)),
	loadHonorsData: () => dispatch(loadHonorsData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamEditor);
