import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../components/Home'
import Contact from '../components/Contact'
import UploadPage from '../components/UploadPage'
import UserUploads  from '../components/UserUploads';
import Locations  from '../components/Locations';
import Location  from '../components/Location';
const Routes = ({sendMain}) => {
    const sendRoute = (status) => { 
        sendMain(status)
      };
 
    
    return (
        <Router>
            <Route path="/" exact component={() => <Home sendRoute={sendRoute} />} />
            <Route path="/locations" exact component={() => <Locations sendRoute={sendRoute} />} />
            <Route path="/locations/:location" component={(props) => <Location location={props.location} sendRoute={sendRoute} />} />
            <Route path="/contact" exact component={() => <Contact sendRoute={sendRoute}/>} />
            <Route path="/upload" exact component={() => <UploadPage sendRoute={sendRoute}/>} />
            <Route path="/uploads" exact component={() => <UserUploads sendRoute={sendRoute}/>} />
        </Router>
    );
};

export default Routes;