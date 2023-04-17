import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark shadow-md " id='home'>
                <div class="container-fluid">
                    <h2 class="navbar-text">Notes</h2>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse  justify-content-sm-end me-3" id="collapsibleNavbar">
                        <ul class="navbar-nav text-center ">
                            <li class="nav-item">
                                <Link to="/" class="nav-link">Home</Link>
                            </li>

                            <li class="nav-item">
                                <Link to="/courses" class="nav-link">Courses</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar; 