import { useEffect, useState } from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import '../App/app.css'

import * as React from 'react'
const Initial = (props) => {
	const { animeName: anime } = props

	console.log(anime)
	const [data, setData] = useState({
		counter: 0,
		apiData: [],
		usingData: [],
	})
	const loadMore = () => {
		let tempSlice = data.apiData?.slice(0, data.counter + 4)
		console.log(tempSlice, data?.counter)
		setData({
			counter: data.counter + 4,
			usingData: tempSlice,
			apiData: data.apiData,
		})
	}
	const slice = data.apiData?.slice(0, data.counter)
	console.log(slice, data)
	useEffect(() => {
		if (!anime) return
		const fetchData = async () => {
			try {
				await fetch(`https://api.jikan.moe/v3/search/anime?q=${anime}&limit=48`)
					.then((data) => {
						return data.json()
					})
					.then((dataObj) => {
						console.log(dataObj, typeof dataObj)
						const { results } = dataObj
						setData({ apiData: results, counter: 4 })
						// for (const a of results) {
						//     console.log(a)
						// }
					})
			} catch (ele) {
				console.log(ele)
			}
		}
		fetchData()
	}, [anime])
	{
		if (!anime) {
			return <div className='message'>Search your favorite anime!</div>
		} else {
			if (data.apiData?.length > 0) {
				return (
					<div className='imageContainer'>
						{slice.map((ele) => {
							return (
								<section className='py-4 container' key={ele.mal_id}>
									<div className='row justify-content-center'>
										<div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
											<div className='card p-0 overflow-hidden h-70 shadow'>
												<img src={ele.image_url} className='card-img-top' />
												<div className='card-body bg-light'>
													<h5 className='card-title'>{ele.title}</h5>
												</div>
											</div>
										</div>
									</div>
								</section>
							)
						})}
						<button
							className='btn btn-dark d-block w-15 adjust'
							onClick={() => {
								loadMore()
							}}
						>
							Load More
						</button>
					</div>
				)
			} else {
				return (
					<ReactBootStrap.Spinner
						animation='border'
						variant='primary'
						className='spinner'
					/>
				)
			}
		}
	}
}

export default Initial
