import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
    return (
        <div>
            <nav className='m-navbar'>
                <div>
                    <img className='navbar-logo' src="./Images/logo.png" alt="logo" width='80px' />
                </div>

                <ul>
                    <li>
                        <Link to="/websites">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>

                </ul>

                <ul>
                    <li>
                        <Link to="/signin">Sign In</Link>
                    </li>
                    <li>
                        <Link to="/signup">Sign Up</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar