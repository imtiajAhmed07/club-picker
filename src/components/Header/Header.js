import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="headerContainer sticky-top">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid ml-5 mr-5">
                    {/* logo */}
                    <Link to="/" className="navbar-brand" href="#">Club Picker</Link>
                    <div className="float-end">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li classNameName="nav-item">
                                    <Link to="/" className="nav-link" aria-current="page">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className="nav-link" >About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/service" className="nav-link" >Service</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className="nav-link"  tabindex="-1" aria-disabled="true">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;