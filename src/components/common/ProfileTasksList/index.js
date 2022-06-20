import { connect } from 'react-redux';
import ProfileTaskList from './ProfileTaskList';
import loadTasksData from '../../../store/actions/loadTasksdata/loadTasksData';

const mapStateToProps = (state) => ({
	tasks: state.tasks,
});

const mapDispatchToProps = (dispatch) => ({
	loadTasksData: (id) => dispatch(loadTasksData(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileTaskList);
