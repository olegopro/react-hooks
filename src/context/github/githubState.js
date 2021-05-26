import React, { useReducer } from 'react'
import { CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADING } from '../types'
import { GithubContext } from './githubContext'
import { githubReduser } from './githubReduser'

export const GithubState = ({ children }) => {
	const initialState = {
		user: {},
		users: [],
		loading: false,
		repos: []
	}

	const getUser = async name => {
		setLoading()
		//...state
		dispatch({
			type: GET_USER,
			payload: {}
		})
	}

	const getRepos = async name => {
		setLoading()
		//...state
		dispatch({
			type: GET_REPOS,
			payload: {}
		})
	}

	const [state, dispatch] = useReducer(githubReduser, initialState)

	const search = async value => {
		setLoading()
		//....
		dispatch({
			type: SEARCH_USERS,
			payload: []
		})
	}
	const clearUsers = () => dispatch({ type: CLEAR_USERS })

	const setLoading = () => dispatch({ type: SET_LOADING })

	const { user, users, repos, loading } = state

	return (
		<GithubContext.Provider
			value={{
				setLoading,
				search,
				getUser,
				getRepos,
				clearUsers
			}}
		>
			{children}
		</GithubContext.Provider>
	)
}
