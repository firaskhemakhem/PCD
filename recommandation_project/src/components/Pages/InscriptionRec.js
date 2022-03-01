import React from "react";
import "../../styles/Pages/Authentification.css"
class InscriptionRec extends React.Component{ 
    render() {
      return (
        
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
          Titre :
          <input type={"text"}/>
        </label>
        <label>
          Fonction dans l'entreprise :
          <select>
            <option selected>...</option>
            <option>Commercial</option>
            <option>Comptabilité</option>
            <option>Informatique</option>
          </select>
        </label>
        <label>
          Code Postal :
          <input type={"text"} />
        </label>
        <label>
          ville: 
          <select >
            <option selected>Choose ...</option>
            <option>Sfax</option>
            <option>Sousse</option>
            <option>Djerba</option>
            <option>Monastir</option>
            <option>Mannouba</option>
          </select>
        </label>
        
        <button className="butt">
          Inscription!
        </button>
      </form>
    </div>
      );
    }
  }

  export default InscriptionRec;