import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import './style.css';

const ProfileHonor = ({ honor, className }) => {
	const [isDescriptionShowed, setDescriptionShowed] = useState(false);

	const handleHonorsButtonClick = useCallback(() => {
		setDescriptionShowed((state) => !state);
	}, [isDescriptionShowed]);

	return (
		<li className={className}>
			<div className="honors__header">
				<img className="honors__logo" src={honor.image} />
				<p className="honors__name">{honor.name}</p>
				<button className="honors__button" onClick={handleHonorsButtonClick}>
					{isDescriptionShowed ? <>&#9660;</> : <>&#9668;</>}
				</button>
			</div>
			{isDescriptionShowed ? <p className="honors__description">{honor.description}</p> : ''}
		</li>
	);
};

ProfileHonor.propTypes = {
	honor: PropTypes.object,
	className: PropTypes.string,
};

ProfileHonor.defaultProps = {
	honor: {},
	className: '',
};

export default ProfileHonor;
