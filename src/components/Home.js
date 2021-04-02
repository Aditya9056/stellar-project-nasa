import React from 'react';
import { Link } from 'react-router-dom';

export default function Homde() {
	return (
		<div className='home'>
			<Link className='home-link' to='/nasaphoto'>
				See in to the ultimate galaxy!.
			</Link>
		</div>
	);
}
