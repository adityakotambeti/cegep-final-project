import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Destinations from '../pages/Destinations/Destinations.page';
import Home from '../pages/Home/Home.page'
import Contact from '../pages/Contact/Contact.page'
import Barcelona from '../pages/places/Barcelona/Barcelona.page'
import Bilbao from '../pages/places/Bilbao/Bilbao.page'
import Valencia from '../pages/places/Valencia/Valencia.page'
import Seville from '../pages/places/Seville/Seville.page'
import Madrid from '../pages/places/Madrid/Madrid.page'
import Mallorca from '../pages/places/Mallorca/Mallorca.page'
import  UploadPage from '../pages/Upload/UploadPage.page'
import Gallary  from '../pages/Gallary/Gallary.page';
const Routes = ({sendMain}) => {
    const sendRoute = (status) => { // the callback. Use a better name
        console.log("route",status);
        sendMain(status)
        // sendRoute(status);
        
      };
 
    
    return (
        <Router>
            <Route path="/" exact component={() => <Home sendRoute={sendRoute} />} />
            <Route path="/Home" exact component={() => <Home sendRoute={sendRoute}/>} />
            <Route path="/destinations" exact component={() => <Destinations  sendRoute={sendRoute}/>} />
            <Route path="/destinations/barcelona" exact component={() => <Barcelona sendRoute={sendRoute}/>} />
            <Route path="/destinations/bilbao" exact component={() => <Bilbao sendRoute={sendRoute}/>} />
            <Route path="/destinations/madrid" exact component={() => <Madrid sendRoute={sendRoute}/>} />
            <Route path="/destinations/mallorca" exact component={() => <Mallorca sendRoute={sendRoute}/>} />
            <Route path="/destinations/seville" exact component={() => <Seville sendRoute={sendRoute}/>} />
            <Route path="/destinations/valencia" exact component={() => <Valencia sendRoute={sendRoute}/>} />
            <Route path="/contact" exact component={() => <Contact sendRoute={sendRoute}/>} />
            <Route path="/upload" exact component={() => <UploadPage sendRoute={sendRoute}/>} />
            <Route path="/gallary" exact component={() => <Gallary sendRoute={sendRoute}/>} />

            

        </Router>
    );
};

export default Routes;