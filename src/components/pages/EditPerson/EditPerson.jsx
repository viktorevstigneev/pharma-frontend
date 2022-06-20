import React, { useCallback, useEffect, Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

import Header from '../../common/Header';
import Footer from '../../common/Footer';
import './style.css';

import { API_URL } from '../../../constants';

const AdminPanel = ({ loadTasksData, tasks, match, history }) => {
	useEffect(() => {
		loadTasksData(match.params.id);
	}, [match.params.id]);

	const [file, setFile] = useState('');

	const [personName, setPersonName] = useState();

	const [personDescription, setPersonDescription] = useState();
	const [personAvatar, setPersonAvatar] = useState();

	useEffect(() => {
		setPersonAvatar(tasks.data.avatar);
		setPersonDescription(tasks.data.description);
		setPersonName(tasks.data.name);
	}, [tasks.data]);

	return (
		<Fragment>
			<Header />
			<h1 className="admin__title">Редактирование</h1>
			<form
				style={{ marginTop: '0' }}
				className="admin__person"
				encType="multipart/form-data"
				method="POST"
				onSubmit={async (evt) => {
					evt.preventDefault();
					// location.reload();
					const formData = new FormData(evt.target);
					formData.append('avatar', file ? file.name : personAvatar);

					const responseData = await axios({
						method: 'PATCH',
						url: `${API_URL}/team/${match.params.id}`,
						data: formData,
						withCredentials: true,
					});

					if(responseData.status === 200) {
						history.push(`/tasks/${match.params.id}`)
					}
				}}
			>
				<div className="admin__block">
					<label className="admin__label" htmlFor="avatar">
						<img
							className="admin__avatar"
							src={file ? URL.createObjectURL(file) : `${API_URL}/getImage/${personAvatar}`}
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
					<input
						className="admin__text-input"
						type="text"
						placeholder="введите полное имя композитора"
						name="name"
						value={personName}
						onChange={(evt) => {
							setPersonName(evt.target.value);
						}}
					/>
					<textarea
						className="admin__textarea"
						id="description"
						name="description"
						type="text"
						placeholder="введите информацию о композиторе"
						value={personDescription}
						onChange={(evt) => {
							setPersonDescription(evt.target.value);
						}}
					/>
					{/* <input type="radio" name="isMostFanous" placeholder="fanickoe"/> */}
					<button className="admin__button" type="submit">
						Сохранить
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
