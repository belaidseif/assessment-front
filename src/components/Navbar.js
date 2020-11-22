import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <ul>
                    <Link to="/home"><li>List of students</li></Link>
                    <Link to="/new"><li>Add</li></Link>
                </ul>
            </div>
        )
    }
}

export default Navbar
