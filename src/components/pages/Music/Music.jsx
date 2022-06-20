import React, { useCallback, useEffect, Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Header from '../../common/Header';
import Footer from '../../common/Footer';
// import lupa from '../../../img/vector.png';

import './style.css';

import { API_URL } from '../../../constants';

const Music = ({ loadTeamData, team, match }) => (
	<Fragment>
		<Header />
		<div className="music_container">
			<h1 className="music__title">Связаться с нами</h1>
			<form
				className="music__form"
				// method="POST"
				encType="multipart/form-data"
				onSubmit={async (evt) => {
					// evt.preventDefault();

					const formData = new FormData(evt.target);

					const responseData = await axios({
						method: 'POST',
						url: `${API_URL}/music`,
						data: formData,
						withCredentials: true,
					});


					// if (responseData.status == 200) {
					// 	location.reload();
					// }
				}}
			>
				<label className="music__label" htmlFor="name" required="true">
					ФИО
				</label>
				<input className="music__input" id="name" type="text" placeholder="Введите ФИО" name="name" required="true" />
				<label className="music__label" htmlFor="name">
					EMAIL
				</label>
				<input className="music__input" type="email" placeholder="Введите email" name="email" required="true" />
				<label className="music__label" htmlFor="name">
					ПРЕДМЕТ
				</label>
				<input className="music__input" type="text" placeholder="Введите предмет" name="subject" required="true" />
				<label className="music__label" htmlFor="name">
					СООБЩЕНИЕ
				</label>
				<textarea className="music__message" placeholder="Введите сообщение" name="message" required="true" ></textarea>
				<button className="music__btn" type="submit">
					Отправить
				</button>
			</form>
		</div>

		<Footer />
	</Fragment>
);

Music.propTypes = {
	team: PropTypes.object,
	loadTeamData: PropTypes.func,
};

Music.defaultProps = {
	team: {},
	loadTeamData: () => {},
};
export default Music;
