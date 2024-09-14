import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar (props) {

    return (
        <nav className={`navbar navbar-expand-lg navbar-dark bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand text-black" to="/"> {props.title} </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active text-black" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-black" to='/about' aria-disabled="true">About</Link>
                        </li>
                    </ul>

                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <div className="form-check form-switch">
                        <input className="form-check-input" onClick={props.ToggleMode}type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarMode</label>
                    </div>

                </div>
            </div>
        </nav>
    )
}


Navbar.propTypes = {
    title: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
    title: '"Set title here"'
}