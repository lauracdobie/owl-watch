import logo from "../assets/owl-dash-logo.png";

function Header() {
    return (
        <header className="container">
            <img className="logo" src={logo} />
        </header>
    );
}

export default Header;