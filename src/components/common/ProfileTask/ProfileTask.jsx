import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import './style.css';

const ProfileTask = ({ task }) => {
	const [isDescriptionShowed, setDescriptionShowed] = useState(false);

	const handleTaskOpenButtonClick = useCallback(() => {
		setDescriptionShowed((state) => !state);
	}, []);

	return (
		<li className="task" key={task.taskId._id}>
			<div className="task__header">
				<p className="task__name">{task.taskId.name}</p>
				<button className="task__button" onClick={handleTaskOpenButtonClick} data-number={task.taskId._id}>
					{isDescriptionShowed ? <>&#9660;</> : <>&#9668;</>}
				</button>
			</div>
			{isDescriptionShowed ? (
				<div>
					<p>{task.taskId.description}</p>
					<p className="task__progress">{task.progress < 100 ? 'In procces' : 'Done'}</p>
				</div>
			) : (
				''
			)}
		</li>
	);
};

ProfileTask.propTypes = {
	task: PropTypes.object,
	loadTasksData: PropTypes.func,
	match: PropTypes.object,
};

ProfileTask.defaultProps = {
	tasks: {},
	loadTasksData: () => {},
	match: {},
};

export default ProfileTask;
