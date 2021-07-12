import React, { useState, useEffect } from 'react'
import ResponsiveGallery from 'react-responsive-gallery';
import Menu from './Menu'

export default function UserUploads() {

	const [image, setImage] = useState([]);
	useEffect(() => {
		fetch('http://localhost:9000/')
			.then(response => response.json())
			.then(data => setImage(data));
	},
		[]);
	return (
		<div>
			<Menu />
			<ResponsiveGallery images={image} />
		</div>
	)
}
