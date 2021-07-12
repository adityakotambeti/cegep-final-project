import React from 'react';
import './Header.css'

export default function Header({ title, imageLink }) {
    return (
        <div className="banner" style={{ backgroundImage: `url(${imageLink})` }}>
            <div class="container">
                <div class="d-flex justify-content-center align-item-center ">
                    <h1 className="titleText">{title}</h1>
                </div>
            </div>
        </div>
    )
}