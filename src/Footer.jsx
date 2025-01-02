import logo from '/Day Organiser - Favicon.png'
import React from 'react'
import { BrowserRouter,Link } from 'react-router-dom'

function Footer(){
    return(
        <footer>
            <div className="container">
                <div className="footer-wrap">
                    <div className="logo-wrap">
                        <img src={logo} alt="Website Logo" />
                    </div>
                    <nav>
                        <ul>
                            <li><Link to="/Day-Organiser/" >Home</Link></li>
                            <li><Link to="/Day-Organiser/contact/" >Contact Us</Link></li>
                        </ul>
                    </nav>
                    <p>&copy; {new Date().getFullYear()} Day Organiser | Yash Ojha</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer