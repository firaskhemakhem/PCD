import React from 'react';
import { NavLink } from 'react-router-dom';
import'../../styles/Footer/Footer.css';

const Navigation = () => {
    return (
        <ui className="nav">
            <NavLink exact to ="/Insc" ClassName="nav-active">
               <p> S'inscrire</p>
            </NavLink>
            <NavLink exact to ="/Auth" ClassName="nav-active"> 
               <p> S'Authentifier</p>
            </NavLink>
            <NavLink exact to ="/profil" ClassName="nav-active">
                <p>Gérer votre profil</p>
            </NavLink>
           
            <NavLink exact to ="/footer" activeClassName="nav-active">
                <p>Footer</p>
            </NavLink>

        </ui>
    );
};
export default Navigation ;