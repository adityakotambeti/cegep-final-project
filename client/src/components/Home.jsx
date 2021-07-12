import React from 'react'
import FooterC from '../Footer'
import Menu from '../Menu'
import PlaceCards from '../PlaceCards'
import './Home.css'
import { SliderData } from '../SliderComponent/SliderData'
import SliderComponent from '../SliderComponent/SliderComponent'
import Button from '@material-ui/core/Button';
import ReactPlayer from "react-player";

export default function Home( ) {
    const slides = [
		{
			image:
				'/Assets/Common/halkidiki.webp'
		},
		{
			image:
				'/Assets/Common/tinos.webp'
		},
		{
			image:
				'/Assets/Common/athens.webp'
		},
		{
			image:
				'/Assets/Common/skopelos.webp'
		},
	];
    return (
        <div>
            <Menu />
            <div className="ImageCarousel">
                <SliderComponent slides={SliderData} />
            </div>
            <div class="container">
                <h1 className="d-flex justify-content-center">Why travel with us ?</h1>
                <div class="row imageintravel">
                    <div class="col-md-4 d-flex justify-content-center">
                        <div className="container">
                            <div className="row">
                                <img src="/Assets/Common/romance.jpeg" alt="worldclass" /><br />
                            </div>
                            <div className="row">
                                <h3>Romantic Holidays</h3><br />
                            </div>
                            <div className="row">
                                <p>Greece; a place to fall in love with.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 d-flex justify-content-center">
                        <div className="container">
                            <div className="row">
                                <img src="/Assets/Common/luxury.jpeg" alt="worldclass" />
                            </div>
                            <div className="row">
                                <h3>Family holidays</h3>
                            </div>
                            <div className="row">
                                <p>Greece , A unique family destination all year round.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 d-flex justify-content-center">
                    <div className="container">
                            <div className="row">
                                <img src="/Assets/Common/luxury.jpeg" alt="worldclass" />   
                            </div>
                            <div className="row">
                                <h3>Amazing Destinations</h3>
                            </div>
                            <div className="row">
                                <p>Greece , officially the Hellenic Republic, is a country located in Southeast Europe.</p>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <img className="img-fluid" src="/Assets/Common/athens.webp" alt="demo" />
                        </div>
                        <div className="col">
                            <h1>Bienvenida a españa</h1>
                            <br />
                            <p style={{ textAlign: "justify" }}>Greece has a Mediterranean climate with plenty of sunshine, mild temperatures and a limited amount of rainfall. The sun is shining over Greece all year round.</p>
                        </div>
                    </div>
                </div>
            <div className="why">
                <h1><b>Why Greece?</b></h1><br />
                <p>Greece has a Mediterranean climate with plenty of sunshine, mild temperatures and a limited amount of rainfall. The sun is shining over Greece all year round. The climate is one of the best in Europe, with mild winters and very hot summers, ideal for tourism. So you can Visit Greece whenever you like and it's convenient to you to discover its history and culture and visit its beauties!</p>
            </div>
            <div className="cards">
            <h1><b>Destinations</b></h1><br />
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 d-flex justify-content-center">
                        <PlaceCards 
                        description={`Shaped like Poseidon’s trident, Halkidiki’s prongs jut out into the Aegean Sea. Lush green forests extend all the way to the beachfront where reflections of golden sunlight add sparkling hues to turquoise waters. Long stretches of beautiful ever-changing shoreline, unique archaeological sites, world-renowned Christian monuments, lesser-known natural wonders and man-made masterpieces have all helped shape the region’s diverse identity, made even more interesting by the rich local culinary and cultural heritage.`}
                        imagePath={`/Assets/Common/halkidiki.webp`}
                        title={'Halkidiki'}
                        cardLink ={`/destinations/halkidiki`}/>
                        </div>
                        <div className="col-md-4 d-flex justify-content-center">
                        <PlaceCards 
                        description={`Enchanting yet still unknown to the majority of travellers, Tinos is one of the most interesting cycladic islands to visit. One can enjoy its unspoiled architecture, its picturesque 40 villages, its exquisite beaches and its traditional culture and mouthwatering gastronomy as well as the way of living that has been going on through the years.`}
                        imagePath={`/Assets/Common/tinos.webp`}
                        title={'Tinos'}
                        cardLink ={`/destinations/tinos`}/>
                        </div>
                        <div className="col-md-4 d-flex justify-content-center">
                        <PlaceCards 
                        description={`Wellcome to Athens, the historical capital of Europe. Welcome to the birthplace of democracy, arts, science and philosophy of western civilisation.  Home of Plato, Socrates, Pericles, Euripides, Sophocles, Aeschylus.  Athens is one of the world’s oldest cities. It’s recorded history spanning around 3.400 years and it is being inhabited since the 11th millennium B.C. E.  Today, under the shadow of Parthenon, the contemporary urban scenery of the sprawling city reflects its exciting history, its multi- cultural modern personality as well as the infrastructure and facilities.`}
                        imagePath={`/Assets/Common/athens.webp`}
                        title={'Athens'}
                        cardLink ={`/destinations/athens`}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="moreClass">
            <Button href="/destinations" variant="contained" >More Destinations</Button>
            </div>

            <div className="videoContent" style={{backgroundImage:"url('/Assets/Common/athens.webp')"}}>
                <div className="container-fluid">
                    <div className="row">
                    <div className="col for-two-div"> 
                        <h3>Why to visit Greece?</h3>
                        <hr className="line"/>
                        <span>Beauty in Greece is exquisite; timeless; unspoiled. It was in this sacred landscape that love was born. Greece is the birthplace of the winged God Eros, the son of Aphrodite; the God that with his quiver and arrows inspired artists and writers over the centuries to praise the virtues of love. Whether you are looking for an ideal honeymoon destination or just a romantic escape, the beauty and diversity of the Greek landscape forms the most romantic backdrop to celebrate your love..</span>
                    </div>
                    <div className="col"> 
                        <ReactPlayer url="https://www.youtube.com/watch?v=IftfIk-pRwI&ab_channel=RyanShirley" />
                    </div>
                    </div>
                </div>
                
            </div>

            <FooterC />
        </div>

    )
}


