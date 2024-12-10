import { Link } from "react-router";
import '../../dist/css/NavbarV1.css'

function NavbarV1() {

    const LinkName = 'Sample Link' ;


    return (
        <nav className="navbar">
            <img src="path-to-logo" alt="Logo" className="navbar-logo"/>

            <ul className="navbar-body">
                <li><Link to={"/link-to"}>{LinkName}</Link></li>
                <li><Link to={"/link-to"}>{LinkName}</Link></li>
                <li><Link to={"/link-to"}>{LinkName}</Link></li>
            </ul>
        </nav>
    )
}

export default NavbarV1;
