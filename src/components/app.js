import { h } from 'preact';
import { Router } from 'preact-router';
import { Lesson } from '../logic/lesson.js';

import Header from './header/header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home/home';
// import Profile from '../routes/profile';

// console.log(lesson);

const App = () => (
	<div id="app">
		<Header />
		<Router>
			<Home path="/" />
			{/* <Profile path="/profile/" user="me" />
			<Profile path="/profile/:user" /> */}
		</Router>
	</div>
)

export default App;
