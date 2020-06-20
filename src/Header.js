import React from 'react';
import {Link} from 'react-router-dom'
function Header() {
    return (
        <nav className="navbar navbar-expand-lg header navbar-dark">
            <Link className="navbar-brand" to="#">SYNote</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/notelist">NOTELIST</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/gallery">GALLERY</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">USER MENU</a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="/login">LOGIN</Link>
                            <Link className="dropdown-item" to="/profile">PROFILE</Link>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;