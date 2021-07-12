import React,{useState,useEffect} from 'react'
import ResponsiveGallery from 'react-responsive-gallery';


export default function UserUploads(props) {

	const [image, setImage] = useState("");
	useEffect(() => {
		let des = props.destination
		fetch('http://localhost:9000/'+des)
		.then(response => response.json())
        .then(data => setImage(data));
		}, 
	[]);
    return (
        <div>
            <ResponsiveGallery images={image}/>
        </div>
    )
}
