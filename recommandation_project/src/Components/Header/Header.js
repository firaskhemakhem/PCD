import React from "react";
import '../../styles/Header/Header.css';
const Header=()=>{
    return(
        <div className="header">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">PIAPE</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">A Propos</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Contatez Vous</a>
                        </li>
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Nos Services
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">Inscrivez-vous</a></li>

                            <li><a class="dropdown-item" href="#"> s'identifier</a></li>
                        </ul>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Recherche.." aria-label="Search"/>
                        <span class="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Connectez-Vous">
                            <button class="btn btn-outline-dark" type="button" disabled> Recherche</button>
                        </span>
                    </form>
                </div>
            </div>
        </nav>
        </div>
    );
}
export default Header;