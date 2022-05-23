import React from 'react';
import {NavLink} from 'react-router-dom'

function CardContent(props) {
  return (
    <div className="styleCardContent">

      <p className="styleDescription"><i className="styleCardTitle">Titre de sujet</i> : {props.Titre}</p>
      <p className="styleDescription"><i className="styleCardTitle">Domaine de sujet</i>: {props.Domaine}</p>
      {/* <p className="styleDescription"><i className="styleCardTitle">Description de sujet</i>: {props.Description}</p><br /> */}
      <p style={{
        paddingTop:'5%',
        color: '#023C59',
        textAlign: 'center',
        textDecorationLine: 'underline'

      }}>Plus d'information</p>
      <p className="styleDescription"><i className="styleCardTitle">Le durée </i> : {props.duree}</p>
      <p className="styleDescription"><i className="styleCardTitle">Les technologies </i> : {props.Tech}</p>
       {/* <button  style={{
        marginLeft:'240px'}} onClick={(e)=>{localStorage.setItem("Visible","true"); localStorage.setItem("IdRech",props.Id_sujet) }}>voir plus</button>  */}
       <NavLink to = {props.LoginRec}> <p style={{
          textAlign:'right'
        }}>Page Entreprise</p></NavLink> 


    </div>
  );
}

export default class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = { bwEffect: false };
    this.toggleEffect = this.toggleEffect.bind(this);

  }

  toggleEffect() {
    this.setState(prevState => ({
      bwEffect: !prevState.bwEffect
    }));
  }

  render() {

    return (
      
      <div style={{
        marginLeft: '20.5%',
        marginTop:'40px'
      }}>

        <div style={{ width: this.props.width+ 4 + "px" }}>

          
          <div className="styledCard" Login={this.props.Id_sujet}>



            <CardContent
              Id_sujet={this.props.Id_sujet}
              Titre={this.props.Titre}
              Description={this.props.Description}
              duree={this.props.duree}
              Domaine={this.props.Domaine}
              Tech={this.props.Tech}
              Att={this.props.Att}
              paye={this.props.paye}
              Bin={this.props.Bin}
              LoginRec={this.props.LoginRec}

            />
          </div>
        </div>
      </div>
    );
  }
}

Card.defaultProps = {
  width: 350,
  Nom: "Template - Card Title",
  Adresse: "Location label",
  Email: "Template description textbox",
  Domaine: "Template description textbox"
};