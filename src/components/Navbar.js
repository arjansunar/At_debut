import React from 'react'
import { Link } from "react-router-dom";
import "./styles/navbar.css";
function Navbar() {
    return (
        <div className="home__navbar">
            <nav className="home__nav">
                <Link to="/" style={{}}> <img alt="Logo" /></Link>
                <form className="nav__form">
                    <input type="input" name="input" className="nav__input" />
                </form>
                <div className="nav__iconList">
                    <div className="nav__icon">
                        WishList
                    </div>

                    <div className="nav__icon">
                        Cart (0)
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
