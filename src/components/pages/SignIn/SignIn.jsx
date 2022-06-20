import React, { Fragment, useCallback, useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';

import Header from '../../common/Header';
import Footer from '../../common/Footer';

import { signIn } from './utils';

import './style.css';
import { API_URL } from '../../../store/constants';

const SignIn = () => {
	const [user, setUser] = useState({});

	const handleFormSubmit = useCallback((evt) => {
		evt.preventDefault();
		const formData = Object.fromEntries(new FormData(evt.target));

		signIn({ formData, setUser });
	});
	return user._id ? (
		<Redirect push to={`/main`} />
	) : (
		<Fragment>
			<Header />
			<div className="sign-in">
				<h3 className="sign-in__title">Авторизация</h3>
				<form className="sign-in__form" action={API_URL} method="POST" onSubmit={handleFormSubmit}>
					<label htmlFor="username">Login</label>
					<input
						className="sign-in__input"
						name="username"
						id="username"
						placeholder="Логин"
						type="text"
						required={true}
					/>
					<label htmlFor="password">Пароль</label>
					<input
						className="sign-in__input"
						name="password"
						id="password"
						placeholder="Пароль"
						type="password"
						required={true}
					/>
					<button type="submit" className="sign-in__button">
						Войти
					</button>
					<Link className="auth" to="/signup" >нет аккаунта? зарегистрироваться</Link>
				</form>
			</div>
			<Footer />
		</Fragment>
	);
};

export default SignIn;
