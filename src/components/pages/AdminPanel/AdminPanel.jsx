import React, { useCallback, useEffect, Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

import Header from '../../common/Header';
import Footer from '../../common/Footer';
import './style.css';

import { API_URL } from '../../../constants';

const AdminPanel = ({ loadTeamData, team, match }) => {
	useEffect(() => {
		loadTeamData(match.params.id);
	}, [match.params.id]);

	const [file, setFile] = useState('');

	return (
		<Fragment>
			<Header />
			<h1 className="admin__title">Страница администратора</h1>
			<form
				className="admin__person"
				encType="multipart/form-data"
				// method="POST"
				onSubmit={async (evt) => {
					evt.preventDefault();
					location.reload();
					const formData = new FormData(evt.target);

					const responseData = await axios({
						method: 'POST',
						url: `${API_URL}/team`,
						data: formData,
						withCredentials: true,
					});
				}}
			>
				<div className="admin__block">
					<label className="admin__label" htmlFor="avatar">
						<img
							className="admin__avatar"
							src={file ? URL.createObjectURL(file) : `${API_URL}/getImage/default.jpeg`}
							alt="person picture"
						/>
						<div className="admin__icon">&#128194;</div>
					</label>
					<input
						className="admin__input"
						id="avatar"
						name="avatar"
						type="file"
						onChange={(evt) => setFile(evt.target.files[0])}
					/>
				</div>

				<div className="admin__right">
					<label className="music__label" htmlFor="name">
						Название
					</label>
					<input
						className="admin__text-input"
						type="text"
						placeholder="Введите название препарата"
						name="name"
						required="true"
					/>
					<label className="music__label" htmlFor="type">
						Тип препарата
					</label>
					<select className="admin__text-input" name="typeThing" id="type">
						<option value="maz">Мазь</option>
						<option value="tabletka" selected>
							Таблетки
						</option>
						<option value="rastvor">Раствор</option>
					</select>
					<label className="music__label" htmlFor="price">
						Цена
					</label>
					<input className="admin__text-input" type="number" placeholder="Введите цену в BYN" name="price" required="true" />
					<label />
					<label className="music__label" htmlFor="description">
						Инструкция
					</label>
					<textarea
						className="admin__textarea"
						id="description"
						name="description"
						type="text"
						required="true"
						placeholder="Введите инструкцию"
					/>
					<button className="admin__button" type="submit">
						Добавить препарат
					</button>
				</div>
			</form>

			<Footer />
		</Fragment>
	);
};

AdminPanel.propTypes = {
	team: PropTypes.object,
	loadTeamData: PropTypes.func,
};

AdminPanel.defaultProps = {
	team: {},
	loadTeamData: () => {},
};
export default AdminPanel;
