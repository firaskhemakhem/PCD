// function CardImage(props) {
//     const isImageURL = props.image;
//     let listOfClasses = null;
  
//     if (props.effect) {
//       listOfClasses = "styleImage bw";
//     } else {
//       listOfClasses = "styleImage";
//     }
  
//     if (isImageURL) {
//       return (
//         <div className={listOfClasses} onClick={props.onClick}>
//           <img
//             style={{ width: props.width + "px", marginTop: "-8%" }}
//             src={props.image}
//             alt="Seattle"
//           />
//         </div>
//       );
//     }
//     return null;
//   }

import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import { NavLink } from 'react-router-dom';
import CallIcon from '@mui/icons-material/Call';
  function CardContent(props) {
    return (
      <div className="styleCardContent">
 
        <p className="styleDescription"><i className="styleCardTitle">Nom de l'entreprise</i> : {props.Nom}</p>
        <p className="styleDescription"><i className="styleCardTitle">Domaine de l'entreprise</i>: {props.Domaine}</p><br/>
        <p style={{
          color:'#023C59',
          textAlign:'center',
          textDecorationLine:'underline'
          
        }}>CONTACT</p>
       <p className="styleLocationLabel"> <LocationOnIcon/>{props.Adresse}</p>
       <p className="styleDescription"><EmailIcon/>{props.Email}</p>
       <p className="styleDescription"><CallIcon/>{props.Tel}</p>
  
        <NavLink to = {props.Login}> <p style={{
          textAlign:'right'
        }}>voir plus</p></NavLink>
         
       
      </div>
    );
  }
  
  export default class Card extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = { bwEffect: false };
      this.toggleEffect = this.toggleEffect.bind(this);
    //  localStorage.setItem('Login',this.props.Login);
    }
  
    toggleEffect() {
      this.setState(prevState => ({
        bwEffect: !prevState.bwEffect
      }));
    }
  
    render() {
      const log = this.props.Login;
      return (
    <div style={{
        marginLeft:'37.5%'
    }}>
     {localStorage.setItem('Login',log)}
        <div style={{ width: this.props.width + "px" }}>
       
          <div className="styleCard" Login={this.props.Login}>
            {/* <CardImage
              image={this.props.image}
              width={this.props.width}
              effect={this.state.bwEffect}
              onClick={this.toggleEffect}
            /> */}
           
            
            <CardContent
              Login ={this.props.Login}
              Nom={this.props.Nom}
              Adresse={this.props.Adresse}
              Email={this.props.Email}
              Domaine ={this.props.Domaine}
              Tel ={this.props.Tel}
         
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
    Domaine:"Template description textbox"
  };