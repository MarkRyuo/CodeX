import { Link } from "react-router";
import { useState } from "react";

function NavbarV1() {

    const [linkName] =  useState([
        { id: 1, imgLogo: '/path-img' ,linkName: "Sample1", path: '/path-to'}
    ]);


    return (

        <>
            {linkName.map((linkNames) => {
                <nav className="container-NavbarV1" key={linkNames.id}>
                    <img src={linkNames.imgLogo} alt="Logo" />

                    <ul className="container-wrapper">
                        <li><Link to={linkNames.path}>{linkName}</Link></li>
                        <li><Link to={linkNames.path}>{linkName}</Link></li>
                        <li><Link to={"/link-to"}>{linkName}</Link></li>
                    </ul>
                </nav>
            })}
        </>
    );
}

export default NavbarV1;
