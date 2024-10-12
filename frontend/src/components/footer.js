import React from 'react';
import '../styles/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Main title */}
                <h2 className="footer-title">Hokie Event Sphere</h2>

                {/* Subscription form */}
                <div className="subscribe-section">
                    <input type="email" placeholder="Enter your mail" className="subscribe-input" />
                    <button className="subscribe-button">Subscribe</button>
                </div>

                {/* Footer links */}
                <div className="footer-links">
                    <a href="/home">Home</a>
                    <a href="/about">About</a>
                    <a href="/services">Services</a>
                    <a href="/contact">Get in touch</a>
                    <a href="/faqs">FAQs</a>
                </div>

                {/* Social icons */}
                <div className="footer-social-icons">
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a>
                </div>

                {/* Copyright */}
                <p className="footer-copyright">
                    Non Copyrighted © 2024 Upload by MaVi technologies
                </p>
            </div>
        </footer>
    );
}

export default Footer;
