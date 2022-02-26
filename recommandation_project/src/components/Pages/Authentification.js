import React from "react";
import "../../styles/Pages/Authentification.css"


class Authentification extends React.Component{ 
    render() {
      return (
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
              <button>
              Authentifier!
              </button>
            </form>
        </div>
            );
          }
        }

        
            
  
export default Authentification;