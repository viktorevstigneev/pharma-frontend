import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const ModalWindow = (props) => (
	<div className="modal__window" onClick={props.onOverlayClick}>
		<div className="modal__container">
			<div className="modal__header">
				<h2 className="modal__title">{props.title}</h2>
				<button className="modal__close-button" onClick={props.onCloseButtonClick}>
					&times;
				</button>
				{props.children}
			</div>
		</div>
	</div>
);

ModalWindow.propTypes = {
	onCloseButtonClick: PropTypes.func,
	onOverlayClick: PropTypes.func,
	children: PropTypes.node,
	title: PropTypes.string,
};

ModalWindow.defaultProps = {
	onCloseButtonClick: () => {},
	onOverlayClick: () => {},
	children: null,
	title: '',
};

export default ModalWindow;
