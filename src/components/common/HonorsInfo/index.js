import { connect } from 'react-redux';
import HonorsInfo from './HonorsInfo';
import loadHonorsData from '../../../store/actions/loadHonorsData/loadHonorsData';

const mapStateToProps = (state) => ({
	honors: state.honors,
});

const mapDispatchToProps = (dispatch) => ({
	loadHonorsData: () => dispatch(loadHonorsData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HonorsInfo);
