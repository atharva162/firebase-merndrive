import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <h1>File Upload and Download</h1>
            <nav>
                <NavLink activeClassName="active" to="/" exact={true}>
                  Home
                </NavLink>
                <NavLink activeClassName="active" to="/lists">
                  Files List
                </NavLink>
            </nav>
        </div>
    )
}

export default Header
