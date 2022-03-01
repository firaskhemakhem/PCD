import React from "react";
import "../../styles/Pages/Authentification.css"
import {Link} from 'react-router-dom';

class Authentification extends React.Component{ 
    render() {
      return (
        <div className="row1">
        <div className="colAuth"></div>
        <div className="colAuth1">
        <div className="form-comp cfb">
          <h1>Authentifier!</h1>
            <form className="sign-up-form cfb">
              <label>
                Email:
                <br/>
                <input />
              </label>
              <label>
                Mot de Passe:
                <br/>
                <input />
              </label>
              <br/>
              <p className="mdpoublie">mot de passe oublié</p>
              <button className="butt">
              Authentifier!
              </button>
            </form>
            </div>
            </div>
        </div>
            );
          }
        }

        
            
  
export default Authentification;