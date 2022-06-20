import React, { useCallback, useEffect, Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';
import axios from 'axios';

import Header from '../../common/Header';
import Footer from '../../common/Footer';
import aspirinAdvert from '../../../img/4948574_original.jpeg';
import './style.css';

import { API_URL } from '../../../constants';

const Team = ({ loadTeamData, team, match }) => {
	useEffect(() => {
		loadTeamData(match.params.id);
	}, [match.params.id]);

	const [user, setUser] = useState();

	useEffect(() => {
		const getCurrentUser = async () => {
			const responseData = await axios
				.get(`${API_URL}/profile`, { withCredentials: true })
				.then((response) => setUser(response.data));
		};
		getCurrentUser();
	}, []);

	const newProduction = team.data && team.data.filter((item, index) => index <= 6);
	return (
		<Fragment>
			<Header />
			<div className="container">
				<h1 className="info__title">Фармацевтика</h1>
				<h2 className="info__text">
					Добро пожаловать в интернет-аптеку(г.Гродно). Здесь вы можете купить лекарства в Гродно с доставкой в любой
					регион Беларуси. Каталог лекарств обновляется с каждым выходом нового лекарства. Мы регулярно осуществляем
					доставку заказов по всей Гродненской области, включая такие города,как: Минск, Лида, Гомель, Витебск, Могилёв,
					Брест, Барановичи, Бобруйск, Солигорск. Мы продаем только качественную продукцию, напрямую с
					заводом-производителей.
				</h2>
				<img src={aspirinAdvert} alt="" className="info__image" />
				<h1 className="info__caption">Новая продукция</h1>
				<div className="info__famous">
					{newProduction &&
						newProduction.map((person) => (
							<Link to={`/tasks/${person._id}`} key={person._id} className="a">
								<div className="info__card">
									<img className="card__img" src={`${API_URL}/getImage/${person.avatar}`} />
									<p className="card__name">{`${person.price} BYN`}</p>
									<p className="card__name">{person.name}</p>
								</div>
							</Link>
						))}
				</div>
			</div>
			<Footer />
		</Fragment>
	);
};

Team.propTypes = {
	team: PropTypes.object,
	loadTeamData: PropTypes.func,
};

Team.defaultProps = {
	team: {},
	loadTeamData: () => {},
};
export default Team;
