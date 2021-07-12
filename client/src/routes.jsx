import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home'
import Contact from './components/Contact'
import UploadPage from './components/UploadPage'
import UserUploads from './components/UserUploads';
import Locations from './components/Locations';
import Location from './components/Location';

const Routes = () => {
    return (
        <Router>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/locations" exact component={() => <Locations />} />
            <Route path="/locations/:location" component={(props) => <Location location={props.location} />} />
            <Route path="/contact" exact component={() => <Contact />} />
            <Route path="/upload" exact component={() => <UploadPage />} />
            <Route path="/uploads" exact component={() => <UserUploads />} />
        </Router>
    );
};

export default Routes;