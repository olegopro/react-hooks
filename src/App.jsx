import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Navbar } from './Components/Navbar/Navbar'
import { About } from './Components/Pages/About'
import { Home } from './Components/Pages/Home'
import { Profile } from './Components/Pages/Profile'

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<div className="container pt-4">
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/about" component={About} />
					<Route path="/profile/:name" component={Profile} />
				</Switch>
			</div>
		</BrowserRouter>
	)
}

export default App
