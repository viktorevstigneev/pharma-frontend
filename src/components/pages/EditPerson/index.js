import { connect } from 'react-redux';
import EditPerson from './EditPerson';
import loadTasksData from '../../../store/actions/loadTasksdata/loadTasksData';

const mapStateToProps = (state) => ({
	tasks: state.tasks,
});

const mapDispatchToProps = (dispatch) => ({
	loadTasksData: (id) => dispatch(loadTasksData(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPerson);
