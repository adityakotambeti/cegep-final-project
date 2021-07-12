import React from 'react';
import Menu from './Menu'
import './Contact.css'
import Footer from './Footer'
import Header from './Header';

const Contact = ({sendRoute})=>{
    const sendHome = (status) => { // the callback. Use a better name
        console.log("home",status);

        sendRoute(status);
        
      };
    return(
        <div>
            <Menu sendHome={sendHome} />
            <Header title={'Contact us'} imageLink={`/Common/contact.jpg`}/>
            <div class="container mt-5">
                <div class="row">
                    <div class="col-sm-12 col-md-6">
                        <div className="card p-4">
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
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.773947234403!2d-73.56822168444084!3d45.514628979101694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a4b508adcab%3A0x9439f187f763ea27!2sC%C3%A9gep%20du%20Vieux%20Montr%C3%A9al!5e0!3m2!1sen!2sca!4v1625110262374!5m2!1sen!2sca" width="100%" height="100%"  allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </div>
                    
                </div>
            </div>

        <Footer />
        </div>
    );
}


export default Contact;