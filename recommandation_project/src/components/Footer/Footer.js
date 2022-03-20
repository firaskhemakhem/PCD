import React from "react";
import "../../styles/Footer/Footer.css";
import logo1 from "../../assets/icons/icons_linkedin.png";
import logo2 from "../../assets/icons/icons_twitter.png";
import logo3 from "../../assets/icons/icons_fb.png";
import logo4 from "../../assets/icons/incons_insta.png";
import { Link } from 'react-router-dom';
import Detaille from "../../Components/Detaille/Detaille"

const Footer= () =>  {
  return (
    <nav className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <p className="h">A Propos</p>
            <p className="list-unstyled">
            PIAPE est une application web a comme objectifs principaux
               d'aider l’étudiant à trouver le PFE le plus adéquat,
               ainsi que le recruteur à trouver le candidat adéquat à chaque proposition de PFE.
               <p><Link to ="/Detaille" >Voir Plus de détaille</Link></p>
            </p>
          </div>
          {/* Column2 */}
          <div className="col">
            <p className="h">Services</p>
            <p>Achever votre Parcours Educatif</p>
            <p>Trouver un candidat adéquat aux sujets proposées </p>
            <p>Consulter les catalogues proposées</p>
            <p>Obtenir un rendez-vous</p>
          </div>
          {/*column3*/}
          <div className="col">
            <p className="h" align ="center">Les réseaux sociaux</p>
            <ui className="list-unstyled">
            <img src={logo1} width='28' height='28'/>
            <i className="fa-LinkedeIn">
                <span style={{ marginLeft: "25px" }}>
                  <a href="https://fr.linkedin.com/" >
                  LinkedIn
                  </a>
                </span>
              </i>
             <br/>
             <img src={logo2} width='28' height='28'/>
            <i className="fa-twitter">
                <span style={{ marginLeft: "25px" }}>
                  <a href="https://twitter.com/">
                  Twitter
                  </a>
                </span>
              </i>
              <br/>
              <img src={logo3} width='28' height='28'/>
            <i className="fa-facebook">
                <span style={{ marginLeft: "25px" }}>
                  <a href="https://www.facebook.com/">
                  Facebook
                  </a>
                </span>
              </i>
              <br/>
              <img src={logo4} width='28' height='28'/>
              <i className="fa-instagram">
                <span style={{ marginLeft: "25px" }}>
                  <a href="https://www.instagram.com/">
                  Instagram
                  </a>
                </span>
              </i>
            </ui>
          </div>
        </div>  
        <div >
          <p >
          </p>
        </div>
      </div>
    </nav>
  );
}

export default Footer;