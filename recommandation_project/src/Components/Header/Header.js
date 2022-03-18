import React from "react";
import { Router } from "react-router-dom";
import '../../styles/Header/Header.css';
import {HashLink } from "react-router-hash-link";
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
                            <li><HashLink class="dropdown-item" to='#Serv' smooth>Inscrivez-vous</HashLink></li>

                            <li><a class="dropdown-item" href="/auth"> s'identifier</a></li>
                        </ul>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </nav>
        </div>
    );
}
export default Header;