import React from "react";
import "../../styles/Pages/Inscription.css"
import {Link} from "react-router-dom";
class Inscription extends React.Component{ 
  
    render() {
      return ( 
        <div className="row1">
          <div className="colInsc"></div>
          <div className="colInsc1">
      <div className="form-comp cfb">
      <h1>Inscrivez-vous!</h1>
      <form className="sign-up-form cfb">
        <label className="labl">
          Nom & Prénom:
          <input />
        </label>
        <label>
          Email:
          <input />
        </label>
        <label>
          Civilité :
          <select>
            <option selected>...</option>
            <option>Madame</option>
            <option>Monsieur</option>
          </select>
        </label>
        <label>
          Mot de Passe:
          <input type={"password"}/>
        </label>
        <label>
          Confirmer votre mot de passe :
          <input type={"password"}/>
        </label>
        <label>
          Date de Naissance :
          <input type={"date"} />
        </label>
        <label>
          Gouvernorat: 
          <select >
            <option selected>Choose ...</option>
            <option>Sfax</option>
            <option>Sousse</option>
            <option>Djerba</option>
            <option>Monastir</option>
            <option>Mannouba</option>
          </select>
        </label>
        <Link to ="/Auth">
        <button className="butt" >
          Inscription!
        </button>
        </Link>
      </form>
      </div>
      </div>
    </div>
      );
    }
  }

  
      

export default Inscription;