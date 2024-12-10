import { Link } from "react-router";
import '../../dist/css/NavbarV1.css'

function NavbarV1() {

    const LinkName = 'Link' ;


    return (
        <nav className="navbar-container">
            <img src="path-to-logo" alt="Logo" className="navbar-logo-img"/>

            <ul className="container-wrapper">
                <li><Link to={"/link-to"}>{LinkName}</Link></li>
                <li><Link to={"/link-to"}>{LinkName}</Link></li>
                <li><Link to={"/link-to"}>{LinkName}</Link></li>
            </ul>
        </nav>
    )
}

export default NavbarV1;
