import { connect } from 'react-redux';
import TaskInfo from './TaskInfo';

const mapStateToProps = (state) => ({
	tasks: state.tasks,
});

export default connect(mapStateToProps)(TaskInfo);
