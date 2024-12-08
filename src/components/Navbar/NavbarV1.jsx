import { Link } from "react-router";

function NavbarV1() {
    return (
        <nav className="NavbarV1Container">
            <img src="path-to-logo" alt="Logo" />

            <ul className="container-wrapper">
                <li><Link to={"/link-to"}>Link</Link></li>
                <li><Link to={"/link-to"}>Link</Link></li>
                <li><Link to={"/link-to"}>Link</Link></li>
            </ul>
        </nav>
    )
}

export default NavbarV1;
