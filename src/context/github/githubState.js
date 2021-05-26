import React, { useReducer } from 'react'
import { GithubContext } from './githubContext'
import { githubReduser } from './githubReduser'

export const GithubState = ({ children }) => {
	const initialState = {
		user: {},
		users: [],
		loading: false,
		repos: []
	}

	const [state, dispatch] = useReducer(githubReduser, initialState)

	return <GithubContext.Provider value={{}}>{children}</GithubContext.Provider>
}
