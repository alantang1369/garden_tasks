import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div className="App-header">
            <div id="home-bar">
                <Link to="/">
                    <h3>Home</h3>
                </Link>
            </div>
            <h1 id="greeting">Happy Gardening</h1>

        </div>
    )
}
export default Header