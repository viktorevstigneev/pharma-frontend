import { connect } from 'react-redux';
import Header from './Header';
import loadProfileData from '../../../store/actions/loadProfileData/loadProfileData';

const mapStateToProps = (state) => ({
	profile: state.profile,
});

const mapDispatchToProps = (dispatch) => ({
	loadProfileData: (id) => dispatch(loadProfileData(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
