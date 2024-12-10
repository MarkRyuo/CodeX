import { Link } from "react-router";
import '../../dist/css/NavbarV1.css'

function NavbarV1() {

    const LinkName = 'Sample Link' ;


    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <img src="https://i.pinimg.com/736x/4a/2c/16/4a2c16becbbacb385df793548a619e2a.jpg" alt="Logo" className="navbar-logo"/>
            </div>

            <ul className="navbar-body">
                <li><Link to={"/link-to"}>{LinkName}</Link></li>
                <li><Link to={"/link-to"}>{LinkName}</Link></li>
                <li><Link to={"/link-to"}>{LinkName}</Link></li>
            </ul>
        </nav>
    )
}

export default NavbarV1;
