import React, { useCallback, useEffect, Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import ModalWindow from '../ModalWindow';

import { POPUP_OVERLAY_CLASSNAME, ListName, LISTS_DATA_ARRAY } from '../../../constants';

import './style.css';

const HonorsInfo = ({ loadHonorsData, honors }) => {
	useEffect(() => {
		loadHonorsData();
	}, []);

	const [popupOpen, setPopupOpen] = useState('');

	const handleModalWindowOverlayClick = useCallback((evt) => {
		if (evt.target.classList.contains(POPUP_OVERLAY_CLASSNAME)) {
			setPopupOpen(false);
		}
	});

	const renderListItems = (element) =>
		honors.data &&
		honors.data.map(
			(item) =>
				element.isRewards === item.isRewards && (
					<li className="data__item" key={item.id}>
						<img className="data__image" src={item.image} alt="honor image" />
						<p className="data__text">{item.name}</p>
					</li>
				)
		);
	const renderLists = () =>
		LISTS_DATA_ARRAY.map((element, index) => (
			<div key={index} className="data__block">
				<p className="data__title">{element.name}</p>
				<ul className="data__list">{renderListItems(element)}</ul>

				<button
					className="edit-team__button edit-team__button--width "
					onClick={(evt) => {
						evt.preventDefault();
						setPopupOpen(element.name);
					}}
				>
					{element.buttonTitle}
				</button>
			</div>
		));

	return (
		<Fragment>
			{popupOpen === ListName.REWARDS && (
				<ModalWindow
					title="Add reward"
					onCloseButtonClick={() => setPopupOpen('')}
					onOverlayClick={handleModalWindowOverlayClick}
				>
					<input type="text" placeholder="reward name" />
				</ModalWindow>
			)}

			{popupOpen === ListName.TASKS && (
				<ModalWindow
					title="Add task"
					onCloseButtonClick={() => setPopupOpen('')}
					onOverlayClick={handleModalWindowOverlayClick}
				>
					<input type="text" placeholder="task name" />
					<input type="number" placeholder="0" min="0" max="10" />
					<span>/10</span>
				</ModalWindow>
			)}

			{popupOpen === ListName.ACHIEVEMENTS && (
				<ModalWindow
					title="Add achievement"
					onCloseButtonClick={() => setPopupOpen('')}
					onOverlayClick={handleModalWindowOverlayClick}
				>
					<input type="text" placeholder="achievements name" />
				</ModalWindow>
			)}
			<div className="data__wrapper">{renderLists()}</div>
		</Fragment>
	);
};

HonorsInfo.propTypes = {
	honors: PropTypes.object,
	loadHonorsData: PropTypes.func,
};

HonorsInfo.defaultProps = {
	honors: {},
	loadHonorsData: () => {},
};
export default HonorsInfo;
