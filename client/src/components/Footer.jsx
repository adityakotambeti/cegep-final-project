import React from 'react';
import './Footer.css'

export default function Footer() {
    return (
        <div className="footerClass">
            <div class="footer-basic">
                <footer>
                    <div class="social">
                        <a href="/"><i class="icon ion-social-instagram"></i></a>
                        <a href="/"><i class="icon ion-social-snapchat"></i></a>
                        <a href="/"><i class="icon ion-social-twitter"></i></a>
                    </div>
                    <ul class="list-inline">
                        <li class="list-inline-item"><a href="/">Home</a></li>
                        <li class="list-inline-item" ><a href="/locations">Locations</a></li>
                        <li class="list-inline-item"><a href="/contact">Contact us</a></li>
                    </ul>
                    <p class="copyright">By : Aditya | Akhila | Archita © 2021</p>
                </footer>
            </div>
        </div>
    )
}