import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';

export default function NasaPhoto() {
	// const apiKey = process.env.NASA_API_KEY;
	const apiKey = 'bZmRreiBaYldauWBOorEyt2tdgG1Y91gQifhALgC';
	const [photoData, setPhotoData] = useState(null);

	useEffect(() => {
		fetchPhoto();

		async function fetchPhoto() {
			const res = await fetch(
				`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
			);
			const data = await res.json();
			setPhotoData(data);
		}
	}, []);

	if (!photoData) return <div />;
	return (
		<React.Fragment>
			<NavBar />
			<div className='nasa-photo'>
				{photoData.media_type === 'image' ? (
					<img src={photoData.url} alt={photoData.title} className='photo' />
				) : (
					<iframe
						title='space-video'
						src={photoData.url}
						frameborder='0'
						gesture='media'
						allow='encrypted-media'
						allowFullScreen
						className='video'
					/>
				)}
				<div>
					<h1>{photoData.title}</h1>
					<p className='date'>{photoData.date}</p>
					<p className='explanation'> {photoData.explanation} </p>
				</div>
			</div>{' '}
		</React.Fragment>
	);
}
