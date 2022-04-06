import { Users } from './users'
import { useEffect, useState } from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import { usePromiseTracker } from 'react-promise-tracker'
import { trackPromise } from 'react-promise-tracker'
import './app.css'
import Initial from '../pages/Initial'

const App = () => {
	const [query, setQuery] = useState('')

	// useEffect(() => {
	// console.log(".................inside useEffect")
	// const getData = async () => {

	// trackPromise(
	//     // if(query === "") return;
	//     fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&limit=16`).then(data => {
	//         return data.json()
	//     }).then(data => {
	//         console.log(data.results)
	//         const reqData = data.results
	//         console.log("inside changing state................")
	//         setState({
	//             data: [...reqData],
	//             loading: false
	//         })
	//     })
	// )
	// getData()
	// }, [query])
	return (
		<div>
			<div className='inputFeild'>
				<input
					type='text'
					className='search'
					placeholder='search for an anime,e.g Naruto      GO'
					onChange={(e) => {
						setQuery(e.target.value)
					}}
				/>
			</div>
			<div>
				<Initial animeName={query} />
			</div>
		</div>
	)
}

export default App
