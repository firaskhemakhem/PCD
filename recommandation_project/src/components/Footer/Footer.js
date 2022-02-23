import React from "react";
import "../../styles/Footer/Footer.css";
import logo1 from "../../assets/icons/icons_linkedin.png";
import logo2 from "../../assets/icons/icons_twitter.png";
import logo3 from "../../assets/icons/icons_fb.png";
import logo4 from "../../assets/icons/incons_insta.png";

const Footer= () =>  {
  return (
    <nav className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <p className="h">A Propos</p>
            <p className="list-unstyled">
              PIAPE est une application qui facilite la recherche d'un PFE aux Etudiants 
            </p>
          </div>
          {/* Column2 */}
          <div className="col">
            <p className="h">Services</p>
            <ui className="list-unstyled">
             <p>S'inscrire</p>
              <p> S'authentifier</p>
              <p>Gérer votre Profil</p>
              <p>Prener un rendez-vous</p>
              <p>Deposer votre CV</p>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <br/><br/>
            <p > ** Pour plus d'informations ** </p>
            <ui className="list-unstyled">
            <button  style={{
              backgroundColor: '#023C59',
               bordercolor: 'white',
               color:'white',
               borderRadius: 25,
               padding: '10px 10px',
               whiteSpace: 'nowrap',
               width: 120 }}> Contatez-nous</button>
            </ui>
          </div>
          {/*column4*/}
          <div className="col">
            <p className="h">Social Media</p>
            <ui className="list-unstyled">
            <img src={logo1} width='28' height='28'/>
            <i className="fa-LinkedeIn">
                <span style={{ marginLeft: "15px" }}>
                  <a href="https://fr.linkedin.com/" >
                  LinkedIn
                  </a>
                </span>
              </i>
             <br/>
             <img src={logo2} width='28' height='28'/>
            <i className="fa-twitter">
                <span style={{ marginLeft: "15px" }}>
                  <a href="https://twitter.com/">
                  Twitter
                  </a>
                </span>
              </i>
              <br/>
              <img src={logo3} width='28' height='28'/>
            <i className="fa-facebook">
                <span style={{ marginLeft: "15px" }}>
                  <a href="https://www.facebook.com/">
                  Facebook
                  </a>
                </span>
              </i>
              <br/>
              <img src={logo4} width='28' height='28'/>
              <i className="fa-instagram">
                <span style={{ marginLeft: "15px" }}>
                  <a href="https://www.instagram.com/">
                  Instagram
                  </a>
                </span>
              </i>
            </ui>
          </div>
        </div>
       <hr style={{
             color: 'grey',
            backgroundColor: 'grey',
            width:1000,
            height: 0.5,
           borderColor : 'grey'}}/>
        <div >
          <p >
          </p>
        </div>
      </div>
    </nav>
  );
}

export default Footer;