import logo from '/Day Organiser - Favicon.png'

function Footer(){
    return(
        <footer>
            <div className="container">
                <div className="footer-wrap">
                    <div className="logo-wrap">
                        <img src={logo} alt="Website Logo" />
                    </div>
                    <p>&copy; {new Date().getFullYear()} Day Organiser</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer