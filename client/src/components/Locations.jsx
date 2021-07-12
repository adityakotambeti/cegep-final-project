import React from 'react';
import BannerComponent from './Header';
import FooterComponent from './Footer';
import Menu from './Menu';
import PlaceCards from './PlaceCards';


export default function Locations() {
    return (
        <div>
            <Menu />
            <BannerComponent title={'Locations in Greece'} imageLink={`/Common/athens.webp`} />
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-md-4 d-flex justify-content-center">
                        <PlaceCards imagePath={`/Common/halkidiki.webp`} title={'Halkidiki'} cardLink={`/locations/halkidiki`} />
                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                        <PlaceCards imagePath={`/Common/tinos.webp`} title={'Tinos'} cardLink={`/locations/tinos`} />
                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                        <PlaceCards imagePath={`/Common/athens.webp`} title={'Athens'} cardLink={`/locations/athens`} />
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-4 d-flex justify-content-center">
                        <PlaceCards imagePath={`/Common/samos.webp`} title={'Samos'} cardLink={`/locations/samos`} />
                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                        <PlaceCards imagePath={`/Common/thessaloniki.webp`} title={'Thessaloniki'} cardLink={`/locations/thessaloniki`} />
                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                        <PlaceCards imagePath={`/Common/xanthi.webp`} title={'Xanthi'} cardLink={`/locations/xanthi`} />
                    </div>
                </div>
            </div>
            <FooterComponent />
        </div>
    )
}