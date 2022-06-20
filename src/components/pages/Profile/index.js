import { connect } from 'react-redux';
import Profile from './Profile';
import loadProfileData from '../../../store/actions/loadProfileData/loadProfileData';
import loadHonorsData from '../../../store/actions/loadHonorsData/loadHonorsData';

const mapStateToProps = (state) => ({
	profile: state.profile,
	honors: state.honors,
});

const mapDispatchToProps = (dispatch) => ({
	loadProfileData: (id) => dispatch(loadProfileData(id)),
	loadHonorsData: () => dispatch(loadHonorsData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
