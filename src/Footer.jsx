import logo from '/Day Organiser - Favicon.png'

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
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </nav>
                    <p>&copy; {new Date().getFullYear()} Day Organiser</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer