import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class NavBar extends Component {
    render() {
        return (
            <nav id="nav-bar">
                <ul>
                    <li>
                        <Link to="/Home"> Home </Link>
                    </li>
                    <li>
                        <Link to="/About"> About </Link>
                    </li>
                    <li>
                        <Link to="/Contact"> Contact </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}
