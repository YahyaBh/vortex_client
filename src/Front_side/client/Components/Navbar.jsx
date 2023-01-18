import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
import Scroll from 'react-scroll-to-element';


const Navbar = () => {
    return (
        <div>
            <nav className='m-navbar'>
                <a href='/'>
                    <img className='navbar-logo' src="./Images/webinai.png" alt="logo" width='80px' />
                </a>

                <ul>
                    <li>
                        <a href='/'>
                            <button>Home</button>
                        </a>
                        {/* <Link to="/websites"></Link> */}
                    </li>
                    <li>
                        <a href='/#about'>
                            <button>About</button>
                        </a>
                    </li>
                    <li>
                        <a href='/#founders'>
                            <button>Founders</button>
                        </a>
                    </li>
                    <li>
                        <a href='/#contact'>
                            <button>Contact</button>
                        </a>
                    </li>

                </ul>

                <ul>
                    <li>
                        <a href="/signin">Sign In</a>
                    </li>
                    <li>
                        <a href="/signup">Sign Up</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar