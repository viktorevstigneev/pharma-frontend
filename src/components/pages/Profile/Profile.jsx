import React, { useEffect, useState, useCallback, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Header from '../../common/Header';
import Footer from '../../common/Footer';
import ModalWindow from '../../common/ModalWindow';
import ProfileTaskList from '../../common/ProfileTasksList';
import './style.css';

import { POPUP_OVERLAY_CLASSNAME, API_URL } from '../../../constants';
import ProfileHonorsList from '../../common/ProfileHonorsList/ProfileHonorsList';

const Profile = ({ profile, honors, loadProfileData, loadHonorsData, match }) => {
	const [user, setUser] = useState();
	console.log('user: ', user);
	const [order, setOrder] = useState();
	const [summarySum, setSummaruSum] = useState(0);

	useEffect(() => {
		loadProfileData(match.params.id);
		const getCurrentUser = async () => {
			const responseData = await axios
				.get(`${API_URL}/profile`, { withCredentials: true })
				.then((response) => setUser(response.data));
		};

		getCurrentUser();
	}, [match.params.id]);

	useEffect(() => {
		const getOrder = async () => {
			const responseData = await axios
				.get(`${API_URL}/team`, { withCredentials: true })
				.then((response) => setOrder(response.data));
		};
		getOrder();
	}, []);

	const gotedData =
		order && order.filter((value) => profile.data?.userCart && profile.data?.userCart.includes(value._id));
	console.log('gotedData: ', gotedData);

	const handleOrderPreparats = async () => {
		const responseData = await axios
			.post(`${API_URL}/team/order`, { withCredentials: true, gotedData, user: user.username, userID: user._id })
			.then((response) => response.data);
		console.log('responseData: ', responseData);

		window.location.reload();
		alert('Заказ Отправлен');
	};

	let sum = 0;

	const handleDeleteCartItem = async (evt) => {
		const deleteItemId = evt.target.getAttribute('data-id');

		const responseData = await axios
			.patch(`${API_URL}/profile/order/delete`, { withCredentials: true, deleteItemId, userID: user._id })
			.then((response) => response.data);
		console.log('responseData: ', responseData);

		window.location.reload();
	};

	return (
		<Fragment>
			<Header />
			<div className="profile">
				<p className="profile__top">Корзина пользователя {profile.data?.username}</p>
				{gotedData && gotedData.length ? (
					gotedData &&
					gotedData.map((item) => {
						console.log('item: ', item);
						sum = +sum + +item.price;
						return (
							<div className="flex">
								<div className="" style={{ display: 'flex', alignItems: 'center' }}>
									<img
										className="profile__cart-img"
										src={`${API_URL}/getImage/${item.avatar}`}
										alt="картинка препарата"
									/>
									<p className="profile__top"> {item.name}</p>
								</div>
								<p className="profile__top"> {item.price} BYN</p>
								<p className="prifile__delete-item" data-id={item._id} onClick={handleDeleteCartItem}>
									&times;
								</p>
							</div>
						);
					})
				) : (
					<p className="">Ваша корзина пуста</p>
				)}
				{gotedData && gotedData.length ? (
					<>
						<p className="profile_"> Общая стоимость препаратов : {sum} BYN</p>
						<button className="order__prep" onClick={handleOrderPreparats}>
							Заказать препараты
						</button>
					</>
				) : null}
			</div>

			<Footer />
		</Fragment>
	);
};

Profile.propTypes = {
	profile: PropTypes.object,
	honors: PropTypes.object,
	loadProfileData: PropTypes.func,
	loadHonorsData: PropTypes.func,
	match: PropTypes.object,
};

Profile.defaultProps = {
	profile: {},
	honors: {},
	loadProfileData: () => {},
	loadHonorsData: () => {},
	match: {},
};

export default Profile;
