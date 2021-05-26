import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Alert } from './Components/Alert'
import { Navbar } from './Components/Navbar'
import { AlertState } from './context/alert/alertState'
import { About } from './Pages/About'
import { Home } from './Pages/Home'
import { Profile } from './Pages/Profile'

function App() {
	return (
		<AlertState>
			<BrowserRouter>
				<Navbar />
				<div className="container pt-4">
					<Alert alert={{ text: 'Test Alert' }} />
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/about" component={About} />
						<Route path="/profile/:name" component={Profile} />
					</Switch>
				</div>
			</BrowserRouter>
		</AlertState>
	)
}

export default App
