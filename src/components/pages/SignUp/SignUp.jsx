import React, { Fragment, useCallback, useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';


import Header from '../../common/Header';
import Footer from '../../common/Footer';

import { signup } from './utils';

import './style.css';
import { API_URL } from '../../../store/constants';

const SignUp = () => {
	const [user, setUser] = useState({});

	const handleFormSubmit = useCallback((evt) => {
		evt.preventDefault();
		const formData = Object.fromEntries(new FormData(evt.target));

		signup({ formData, setUser });
	});
	return user._id ? (
		<Redirect push to={`/main`} />
	) : (
		<Fragment>
			<Header />
			<div className="sign-in">
				<h3 className="sign-in__title">Регистрация</h3>
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
						зарегистрироваться
					</button>
					<Link className="auth" to="/auth" >уже есть аккаует? войти</Link>
				</form>
			</div>
			<Footer />
		</Fragment>
	);
};

export default SignUp;
;
