import React, { useEffect, useState, useCallback, Fragment } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Header from '../../common/Header';
import Footer from '../../common/Footer';
import './style.css';
import { API_URL } from '../../../constants';

const ProfileEditor = ({ profile, loadProfileData, match }) => {
	useEffect(() => {
		loadProfileData(match.params.id);
	}, [match.params.id]);

	const [file, setFile] = useState('');
	const [name, setName] = useState(profile.data.name ? profile.data.name : '');
	const [surname, setSurname] = useState(profile.data.surname ? profile.data.surname : '');
	const [birthday, setBirthday] = useState(profile.data.birthday ? profile.data.birthday : '');
	const [englishLevel, setEnglishLevel] = useState(profile.data.englishLevel ? profile.data.englishLevel : '');
	const [office, setOffice] = useState(profile.data.office ? profile.data.office : '');
	const [room, setRoom] = useState(profile.data.room ? profile.data.room : '');

	return (
		<Fragment>
			<Header />
			<div className="profile-editor">
				<form
					encType="multipart/form-data"
					method="POST"
					onSubmit={async (evt) => {
						evt.preventDefault();
						const formData = new FormData(evt.target);
					
						const responseData = await axios({
							method: 'POST',
							url: `${API_URL}/upload?id=${match.params.id}`,
							data: formData,
							withCredentials: true,
						});
					}}
				>
					<label className="profile-editor__label" htmlFor="avatar">
						<img
							className="profile-editor__avatar"
							src={file ? URL.createObjectURL(file) : `${API_URL}/getImage/${profile.data.avatar}`}
							alt="profile avatar"
						/>
					</label>
					<input
						className="profile-editor__input profile-editor__input--type-file"
						id="avatar"
						name="avatar"
						type="file"
						onChange={(evt) => setFile(evt.target.files[0])}
					/>
					<button className="profile-editor__buttton" type="submit">
						Change Avatar
					</button>
				</form>

				<form
					className="profile-editor__form"
					onSubmit={async (evt) => {
						evt.preventDefault();
						const responseData = await axios.patch(`${API_URL}/profile`, {
							id: match.params.id,
							name: name,
							surname: surname,
							birthday: birthday,
							englishLevel: englishLevel,
						});
					
					}}
				>
					<input
						className="profile-editor__input"
						type="text"
						placeholder="Name"
						value={name}
						onChange={(evt) => {
							setName(evt.target.value);
						}}
					/>

					<input
						className="profile-editor__input"
						type="text"
						placeholder="Surname"
						value={surname}
						onChange={(evt) => {
							setSurname(evt.target.value);
						}}
					/>

					<input
						className="profile-editor__input"
						type="date"
						placeholder="Birthday"
						value={birthday.slice(0, 10)}
						onChange={(evt) => {
							setBirthday(evt.target.value);
						}}
					/>

					<select
						className="profile-editor__input"
						value={englishLevel}
						onChange={(evt) => {
							setEnglishLevel(evt.target.value);
						}}
					>
						<option>BEGGINER</option>
						<option>PRE_INTERMEDIATE</option>
						<option>INTERMEDIATE</option>
						<option>UPPER_INTERMEDIATE</option>
						<option>ADVANCED</option>
						<option>PROFICIENCY</option>
						<option>NATIVE</option>
					</select>

					<input
						className="profile-editor__input"
						type="text"
						placeholder="Office"
						value={office}
						onChange={(evt) => {
							setOffice(evt.target.value);
						}}
					/>

					<input
						className="profile-editor__input"
						type="text"
						placeholder="Room"
						value={room}
						onChange={(evt) => {
							setRoom(evt.target.value);
						}}
					/>

					<button className="profile-editor__buttton" type="submit">
						Save changes
					</button>
				</form>
			</div>
			<Footer />
		</Fragment>
	);
};

ProfileEditor.propTypes = {
	profile: PropTypes.object,
	honors: PropTypes.object,
	loadProfileData: PropTypes.func,
	loadHonorsData: PropTypes.func,
	match: PropTypes.object,
};

ProfileEditor.defaultProps = {
	profile: {},
	loadProfileData: () => {},
	match: {},
};

export default ProfileEditor;
