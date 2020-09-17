import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/pricing">Pricing</Link>
        </li>
        <li>
            <Link to="/contactPage">Contact Page</Link>
        </li>
    </ul>








);

export default NavBar;

