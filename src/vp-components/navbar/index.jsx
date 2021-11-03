import React from 'react'
import { Link } from "react-router-dom";
import s from './navbar.module.css'

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <h1>Gartner Digital Markets</h1>
            <ul>
                <li>
                    <Link to="/">Dashboard</Link>
                </li>
                <li>
                    <Link to="/vp/ppl">PPL</Link>
                </li>
                <li>
                    <Link to="/vp/listings">Listings</Link>
                </li>
                <li>
                    <Link to="/">Reviews</Link>
                </li>
                <li>
                    <Link to="/">Accounts</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
