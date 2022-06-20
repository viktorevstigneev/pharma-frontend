import React, { Fragment, useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

import './style.css';
import { API_URL } from '../../../store/constants';

const Header = ({ loadProfileData, profile, match }) => {
	const [user, setUser] = useState();


	useEffect(() => {
		const getCurrentUser = async () => {
			const responseData = await axios
				.get(`${API_URL}/profile`, { withCredentials: true })
				.then((response) => setUser(response.data));
		};
		getCurrentUser();
	}, []);

	const adminRoute = () => (
		<>
			<li>
				<Link to={`/admin-panel`} className="header__link">
					Панель администратора
				</Link>
			</li>
		</>
	);

	const authorizedRoute = () => (
		<>
			<li className="header__item">
				<Link
					to={`/auth}`}
					className="header__link"
					onClick={async () => {
						const res = await axios.post(`${API_URL}/logout`, { withCredentials: true });
						if (res.status === 200) {
							location.reload();
						}
					}}
				>
					Выйти
				</Link>
			</li>
			<li>
				<Link to={`/profile/${user?._id}`} className="header__link">
					Корзина
				</Link>
			</li>
			<li>
				<Link to={`/music`} className="header__link">
					Контакты
				</Link>
			</li>
			<li>
				<Link to={`/tests`} className="header__link">
					Магазин
				</Link>
			</li>
			<li className="header__item">
				<Link to={`/main`} className="header__link">
					Главная
				</Link>
			</li>
			{user && user.isAdmin === true ? adminRoute() : ''}
		</>
	);

	return (
		<Fragment>
			<div className="header">
				<p className="header__logo">Фармацевтика</p>

				<nav className="header__havbar">
					<ul className="header__menu">
						{user && user._id ? (
							authorizedRoute()
						) : (
							<>
								<li className="header__item">
									<Link to={`/main`} className="header__link">
										Главная
									</Link>
								</li>
								<li className="header__item">
									<Link to={`/auth`} className="header__link">
										Войти
									</Link>
								</li>
							</>
						)}
					</ul>
				</nav>
			</div>
		</Fragment>
	);
};

export default Header;
