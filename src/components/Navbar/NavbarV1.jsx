import { Link } from "react-router";
import { useState } from "react";

function NavbarV1() {

    const [linkName] =  useState([
        {}
    ]);


    return (
        <nav className="NavbarV1Container">
            <img src="path-to-logo" alt="Logo" />

            <ul className="container-wrapper">
                <li><Link to={"/link-to"}>{linkName}</Link></li>
                <li><Link to={"/link-to"}>{linkName}</Link></li>
                <li><Link to={"/link-to"}>{linkName}</Link></li>
            </ul>
        </nav>
    )
}

export default NavbarV1;
