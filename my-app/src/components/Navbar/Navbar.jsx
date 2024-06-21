import React, { useState } from "react"
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"

import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import Logo from '../../assets/image/Quamon.png'
import { FaUser } from "react-icons/fa";

import './Navbar.css'


export const NavbarLinks = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "Tour",
        link: "/tour",
    },
    {
        name: "Partnership",
        link: "/partnership",
    },
    {
        name: "Blog",
        link: "/blog",
    },
    {
        name: "About",
        link: "/about",
    },
    {
        name: "Page",
        link: "/page",
    },

];



const Navbar = ({ handleOrderPopup }) => {
    const [showMenu, setShowMenu] = useState(false);


    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };


    return (


        <nav className="navbar navbar-expand-lg   fixed-top shadow-sm" >
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" onClick={() => window.scrollTo(0, 0)}>
                    <img src={Logo} alt="" className="img-fluid h-16" style={{ width: 'auto', height: '50px' }} />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    aria-label="Toggle navigation"
                    onClick={toggleMenu}
                >
                    {showMenu ? (
                        <HiMenuAlt1 size={30} />
                    ) : (
                        <HiMenuAlt3 size={30} />
                    )}
                </button>

                <div className={`collapse navbar-collapse ${showMenu ? "show" : ""}`}>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center w-100">
                        {NavbarLinks.map((link) => (
                            <li key={link.name} className="nav-item">
                                <NavLink to={link.link} className="nav-link text-white   m-3 " activeClassName="active-link">
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}

                    </ul>
                    <div className="d-flex">
                        <Link to="/login" className="btn" title="Login" activeClassName="active-link">

                            <FaUser className="userr" size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;