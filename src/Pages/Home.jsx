import React, { useContext } from 'react'
import { Card } from '../Components/Card'
import { Search } from '../Components/Search'
import { GithubContext } from '../context/github/githubContext'

export const Home = () => {
	const { loading, users } = useContext(GithubContext)

	return (
		<>
			<Search />

			<div className="row mt-4">
				{loading ? (
					<p className="text-center">Загрузка...</p>
				) : (
					users.map(user => (
						<div className="col-sm-4 mb-4" key={user.id}>
							<Card user={user} />
						</div>
					))
				)}
			</div>
		</>
	)
}
