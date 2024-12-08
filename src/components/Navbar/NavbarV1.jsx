import { Link } from "react-router";
import { useState } from "react";

function NavbarV1() {

    const [linkName, setLinkName] =  ;


    return (
        <nav className="NavbarV1Container">
            <img src="path-to-logo" alt="Logo" />

            <ul className="container-wrapper">
                <li><Link to={"/link-to"}>{LinkName}</Link></li>
                <li><Link to={"/link-to"}>{LinkName}</Link></li>
                <li><Link to={"/link-to"}>{LinkName}</Link></li>
            </ul>
        </nav>
    )
}

export default NavbarV1;
