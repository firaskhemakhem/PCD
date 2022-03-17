import React from "react";
import "../../styles/Pages/Inscription.css"
import {Link} from "react-router-dom";

class Inscription extends React.Component{ 

  state = {
    credentials: {StudentId: '' , StudentName :''}
  }
  register = event => {
    fetch('http://127.0.0.1:8000/PcdApp/student/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json',
      Authorization: `Token ${this.props.token}`},
      body: JSON.stringify(this.state.credentials)
    })
    .then( data => data.json())
    .then(
      data => {
        console.log(data.token);
      }
    )
    .catch( error => console.error(error))
  }
  inputChanged = event => {
    const cred = this.state.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({credentials: cred});
  }


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
          <input type = "text" name ="StudentName" value = {this.state.credentials.StudentName}
          onChange ={this.inputChanged}/>
        </label>
        <label>
          Email:
          <input />
        </label>
        <label>
          Login:
          <input />
        </label>
        
        <label>
        Numéro De Téléphone:
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
        <Link to ="/Authentification">
        <button className="butt" onClick= {this.register}>
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