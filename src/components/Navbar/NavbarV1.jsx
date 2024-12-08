import { Link } from "react-router";

function NavbarV1() {
    return (
        <nav>
            <img src="path-to-logo" alt="Logo" />

            <ul>
                <li>
                    <Link to={"/link-to"}>Link</Link>
                </li>
                <li>
                    <Link to={"/link-to"}>Link</Link>
                </li>
                <li>
                    <Link to={"/link-to"}>Link</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavbarV1;
