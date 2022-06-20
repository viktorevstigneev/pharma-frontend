import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Header from '../../common/Header';
import Footer from '../../common/Footer';
import './style.css';
import { API_URL } from '../../../constants';
import { Link } from 'react-router-dom';

const Tasks = ({ loadTasksData, match, tasks }) => {
	useEffect(() => {
		loadTasksData(match.params.id);
	}, []);

	const [user, setUser] = useState();

	useEffect(() => {
		const getCurrentUser = async () => {
			const responseData = await axios
				.get(`${API_URL}/profile`, { withCredentials: true })
				.then((response) => setUser(response.data));
		};
		getCurrentUser();
	}, []);

	const handleAddToCart = async () => {
		const responseData = await axios
			.patch(`${API_URL}/profile`, { withCredentials: true, productID: match.params.id, userID: user._id })
			.then((response) => response);
		console.log('responseData.status: ', responseData);

		if (responseData.status === 200) {
			alert('Добавлено в корзину успешно');
		}
	};

	return (
		<Fragment>
			<Header />
			<div className="man">
				<img className="man__avatar" src={`${API_URL}/getImage/${tasks.data?.avatar}`} alt="" />
				<div className="man__info">
					<p className="man__fullname">{tasks.data?.name}</p>
					<p className="man__description">{tasks.data?.description}</p>
				</div>
				<div className="">
					{user && user.isAdmin && (
						<Link className="man__edit" to={`/edit-person/${match.params.id}`}>
							Редактировать
						</Link>
					)}
					<div className="man__edit man__add" onClick={handleAddToCart}>
						Добавить в корзину
					</div>
				</div>
			</div>
			<Footer />
		</Fragment>
	);
};

Tasks.propTypes = {
	tasks: PropTypes.object,
	loadTasksData: PropTypes.func,
	match: PropTypes.object,
};

Tasks.defaultProps = {
	tasks: {},
	loadTasksData: () => {},
	match: {},
};

export default Tasks;
