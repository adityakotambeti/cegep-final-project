import React from 'react';
import ReactPlayer from "react-player";
import './VideoComponent.css'

export default function VideoComponent({videoUrl, imageUrl}){
    return(
        <div className="videoC" style={{backgroundImage:`url(${imageUrl})`}}>
            <div className="videoContainer">
                <ReactPlayer url={videoUrl} width="1000px" height="500px"/>
            </div>
        </div>
    )
}