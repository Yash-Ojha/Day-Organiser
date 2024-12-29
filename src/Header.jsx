import logo from '/Day Organiser Logo.png'

function Header(){
    return(
        <header>
            <div className="container">
                <div className="header-wrap">
                    <div className="logo-wrap">
                        <img src={logo} alt="Website Logo" />
                    </div>
                    <div className="page-title">  
                        <h1>Day Organiser</h1>
                        <p>A to-do list to organise your day better</p>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header