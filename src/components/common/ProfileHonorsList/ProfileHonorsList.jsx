import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { ListName } from '../../../constants';
import Honor from '../ProfileHonor';
import './style.css';

const ProfileHonorsList = ({ profile, honorsList }) => {
	const listName = honorsList[0]?.isRewards ? ListName.REWARDS : ListName.ACHIEVEMENTS;

	const renderHonorList = useCallback(() => {
		const receivedList =
			profile.data[listName] &&
			honorsList.filter((honor) => profile.data[listName].some((achieve) => honor.id === String(achieve)));

		const notReceivedList = receivedList && honorsList.filter((item) => !receivedList.includes(item));
		const commonList = receivedList && receivedList.concat(notReceivedList);

		return (
			commonList &&
			commonList.map((item, index) => (
				<Honor
					honor={item}
					key={index}
					className={`honors__item ${index < receivedList.length ? 'honors__item--received' : 'honors__item'}`}
				/>
			))
		);
	}, []);

	return <ul className="honors__list">{renderHonorList()}</ul>;
};

ProfileHonorsList.propTypes = {
	profile: PropTypes.object,
	honorsList: PropTypes.array,
};

ProfileHonorsList.defaultProps = {
	profile: {},
	honorsList: [],
};

export default ProfileHonorsList;
