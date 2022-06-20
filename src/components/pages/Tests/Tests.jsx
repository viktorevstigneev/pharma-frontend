import React, { useCallback, useEffect, Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

import Header from '../../common/Header';
import Footer from '../../common/Footer';
import lupa from '../../../img/vector.png';
import './style.css';

import { API_URL } from '../../../constants';

const Tests = ({ loadTeamData, team, match }) => {
	const [user, setUser] = useState();
	const [searchValue, setSearchValue] = useState('');
	const [filterData, setFilterData] = useState(team.data && team.data.filter((item) => item.typeThing === 'tabletka'));

	useEffect(() => {
		loadTeamData();
	}, []);

	useEffect(() => {
		setFilterData(team.data && team.data.filter((item) => item.typeThing === 'tabletka'));
	}, [team]);

	useEffect(() => {
		const getCurrentUser = async () => {
			const responseData = await axios
				.get(`${API_URL}/profile`, { withCredentials: true })
				.then((response) => setUser(response.data));
		};
		getCurrentUser();
	}, []);

	const handleDeletePerson = async (evt) => {
		evt.preventDefault();
		const id = evt.target.getAttribute('data-id');

		const responseData = await axios
			.delete(`${API_URL}/team/${id}`, { withCredentials: true })
			.then((response) => response);

		if (responseData.status == 200) {
			location.reload();
		}
	};

	const handleSearhChange = (evt) => {
		setSearchValue(evt.target.value);
	};

	const handleFilterChange = (evt) => {
		const filter = team.data && team.data.filter((item) => item.typeThing === evt.target.value);
		setFilterData(filter);
	};

	return (
		<Fragment>
			<Header />
			<div className="test">
				<h1 className="test__title">Каталог продукции</h1>
				<div className="info__con">
					<img className="search__icon" src={lupa} alt="" />
					<input className="info__search" type="text" placeholder="Поиск препарата" onChange={handleSearhChange} />
				</div>
				<h3 className="test__title">Сортировать</h3>
				<select className="admin__text-input" onChange={handleFilterChange} defaultValue="tabletka">
					<option value="maz">Мазь</option>
					<option value="tabletka" selected>
						Таблетки
					</option>
					<option value="rastvor">Раствор</option>
				</select>
				<div className="info__people">
					{filterData &&
						filterData
							.filter((item) => searchValue == '' || _.includes(item.name, searchValue))
							.map((person) => (
								<Link to={`/tasks/${person._id}`} key={person._id}>
									<div className="person">
										<img className="person__img" src={`${API_URL}/getImage/${person.avatar}`} />
										<p className="person__name">{`${person.price} BYN`}</p>
										<p className="person__name">{person.name}</p>
										{user && user.isAdmin && (
											<div className="delete__person" data-id={person._id} onClick={handleDeletePerson}>
												&times;
											</div>
										)}
									</div>
								</Link>
							))}
				</div>
			</div>

			<Footer />
		</Fragment>
	);
};

Tests.propTypes = {
	team: PropTypes.object,
	loadTeamData: PropTypes.func,
};

Tests.defaultProps = {
	team: {},
	loadTeamData: () => {},
};
export default Tests;
