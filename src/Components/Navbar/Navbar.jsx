import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Navbar.module.scss'

export const Navbar = () => (
	<nav className="navbar navbar-dark bg-primary navbar-expand-lg px-3">
		<div className="navbar-brand">Github поиск</div>
		<div className="navbar-nav">
			<li className="nav-item">
				<NavLink exact to="/" className="nav-link">
					Главная
				</NavLink>
			</li>
			<li className="nav-item">
				<NavLink to="/about" className="nav-link">
					Информация
				</NavLink>
			</li>
		</div>
	</nav>
)
