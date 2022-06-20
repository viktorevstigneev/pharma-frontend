import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import ProfileTask from '../ProfileTask';
import './style.css';

const ProfileTasksList = ({ tasks, loadTasksData, memberId }) => {
	useEffect(() => {
		loadTasksData(memberId);
	}, [memberId]);

	const renderTaskList = useCallback(() => {
		const userTasks = tasks.data.filter((item) => item.userId === memberId);
		return userTasks && userTasks.map((task, index) => <ProfileTask task={task} key={index} />);
	}, [tasks]);

	return <ul className="task__list">{renderTaskList()}</ul>;
};

ProfileTasksList.propTypes = {
	tasks: PropTypes.object,
	loadTasksData: PropTypes.func,
	memberId: PropTypes.string,
};

ProfileTasksList.defaultProps = {
	tasks: {},
	loadTasksData: () => {},
	memberId: '',
};

export default ProfileTasksList;
