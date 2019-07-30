 import React from 'react'
 import { Link } from 'react-router-dom';

const Navbar = () => {
    const  navStyle = {
        display:"flex",
        justifyContent: 'space-evently'
    }
    return (
        <div style={navStyle}>
        <h1> about the world</h1>

        <ul>
            <Link to ="/">
            <li>
                about
            </li>
            </Link>
            <Link to = "/shop">
            <li>
                shop
            </li>
            </Link>
        </ul>
    
    </div>
    )}

export default Navbar