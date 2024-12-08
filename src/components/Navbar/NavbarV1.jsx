import { Link } from "react-router";
import { useState } from "react";

function NavbarV1() {

    const [linkName] =  useState([
        { id: 1, linkName: "Sample1"},
        { id: 2, linkName: ""}
    ]);


    return (
        <nav className="container-NavbarV1">
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
