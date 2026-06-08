import React from 'react';
import './index.css';
import { FaInstagramSquare, FaLinkedin, FaGithubSquare, FaPhoneAlt, FaEnvelope  } from "react-icons/fa";

const TopHeader = () => {
    return (
        <div id="topbar" className="d-flex align-items-center fixed-top">
            <div className="container d-flex justify-content-between">
                <div className="contact-info d-flex align-items-center">
                    <FaEnvelope className='contact-icon'/> <a href="mailto:uniquesingh30@gmail.com">uniquesingh30@gmail.com</a>
                    <FaPhoneAlt className='contact-icon'/> <a href="tel:+91 (555) 123-4567">+91 (555) 123-4567</a> 
                </div>
                <div className="d-none d-lg-flex social-links align-items-center">
                    <a href="https://www.linkedin.com/in/unique-raj-823793284" target='_blank' rel="noreferrer" className="linkedin"><FaLinkedin /></a>

                    <a href="https://github.com/uniqueraj123" target='_blank' rel="noreferrer" className=""><FaGithubSquare /></a>
                    <a href="https://www.instagram.com/unique___singh/" target='_blank' rel="noreferrer" className="instagram"><FaInstagramSquare /></a>
                </div>
            </div>
        </div>
    );
};
export default TopHeader;