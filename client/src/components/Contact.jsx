import React from 'react';
import Menu from './Menu'
import Footer from './Footer'
import Header from './Header';

import './Contact.css'

const Contact = () => {
    return (
        <div>
            <Menu />
            <Header title={'Contact us'} imageLink={`/Common/contact.jpg`} />
            <div class="container mt-5">
                <div class="row">
                    <div class="col-sm-12 col-md-6">
                        <div className="card p-4" style={{background: "aliceblue"}}>
                            <form>
                                <div class="form-group">
                                    <label for="name">Name*</label>
                                    <input type="text" class="form-control" id="name" aria-describedby="name" placeholder="Enter Name" required />
                                    <small id="name" class="form-text text-muted">We'll never share your information with anyone else.</small>
                                </div>
                                <div class="form-group">
                                    <label for="phone">Email</label>
                                    <input type="email" class="form-control" id="email" placeholder="Enter Email" />
                                </div>
                                <div class="form-group">
                                    <label for="phone">Phone*</label>
                                    <input type="text" class="form-control" id="phone" placeholder="Enter Phone" required />
                                </div>
                                <div class="form-group">
                                    <label for="subject">Subject</label>
                                    <input type="text" class="form-control" id="subject" placeholder="Enter Subject Title" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Description</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <button type="submit" class="btn btn-secondary">Send</button>
                            </form>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6">
                        <div class="card contact-map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1396.885416553933!2d-73.6684523!3d45.5549354!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9193343284e97%3A0x2942b0cf7a9220a4!2sCegepgim%20montreal%20campus!5e0!3m2!1sen!2sin!4v1626209602747!5m2!1sen!2sin" width="100%" height="100%" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}


export default Contact;
