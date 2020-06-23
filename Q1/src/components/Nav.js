import React from 'react';
import '../App.css';

const nav = () => {
    return (
        <div>
            <nav className="navbar sticky-top navbar-expand-sm navbar-light bg-light">
                <a className="navbar-brand ml-3" href="/">Google</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav  ml-5">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">About <span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Our products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Our commitments</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Our stories</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default nav;
