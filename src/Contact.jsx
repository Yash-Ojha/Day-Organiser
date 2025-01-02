import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faPhone } from '@fortawesome/free-solid-svg-icons'; 
import { faFacebook } from '@fortawesome/free-brands-svg-icons'; 
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; 

library.add(fas);

export default function Contact() {
    return(
        <div className="container">
            <h1>Contact Me</h1>
            <div>
                <h3>Connect with me</h3>
                <ul className='social-media'>
                    <li>
                        <FontAwesomeIcon icon={faPhone} />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faFacebook} />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </li>
                </ul>
            </div>
        </div>
    );
}