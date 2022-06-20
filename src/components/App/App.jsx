import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Profile from '../pages/Profile';
import SignIn from '../pages/SignIn';
import Team from '../pages/Team';
import TeamEditor from '../pages/TeamEditor';
import Tasks from '../pages/Tasks';
import ProfileEditor from '../pages/ProfileEditor';
import Music from '../pages/Music';
import Tests from '../pages/Tests';
import AdminPanel from '../pages/AdminPanel';
import EditPerson from '../pages/EditPerson';
import SignUp from '../pages/SignUp/SignUp';
import './App.css';

const App = () => (
	<Switch>
		<Route path="/signup" component={SignUp} />
		<Route path="/auth" component={SignIn} />
		<Route path="/main" component={Team} />
		<Route path="/music" component={Music} />
		<Route path="/tests" component={Tests} />
		<Route path="/admin-panel" component={AdminPanel} />
		<Route path="/profile/:id" component={Profile} />
		<Route path="/edit-profile/:id" component={ProfileEditor} />
		<Route path="/edit-team/:id" component={TeamEditor} />
		<Route path="/tasks/:id" component={Tasks} />
		<Route path="/edit-person/:id" component={EditPerson} />
		<Redirect to="/main" />
	</Switch>
);

export default App;
