import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "../../../styles/Pages/Inscription.css";
import {NavLink} from "react-router-dom";


const theme = createTheme();
const handleSubmit = (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  console.log({
    email: data.get('email'),
    password: data.get('password'),
  });
};

const regtel = RegExp( /^(\d{8})+$/)
const regExp = RegExp(
  /^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[A-Za-z]+$/
)
const regDDN = RegExp(
  /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})+$/

)
const formValid = ( {isError, ...rest }) => {
    let isValid = false;

   Object.values(isError).forEach=(val=> {
        if (val.length > 0) {
            isValid = false;}
         else 
            {isValid = true;}
    });

    Object.values(rest).forEach(val =>{
        if (val === null) {
            isValid = false;}


            
         else {
            isValid = true;}});
    return isValid;
    };


class InscEtu extends React.Component{


  constructor(props) {
    super(props)
  this.state = {
    Id_Utilisateur:'',Login:'',MDP:'',Nom:'',Email:'',Gouvernorat:'',Adresse:'',Civ:'',DDN:'',Tel:'' , Image:'',
    isError: {Id_Utilisateur:'',Login:'',MDP:'',Nom:'',Email:'',Gouvernorat:'',Adresse:'',Civ:'',DDN:'',Tel:'' },
  
  }}


  onSubmit = e => {
    e.preventDefault();
    if (formValid(this.state)) {
        console.log(this.state)}
     else 
       { console.log("Form is invalid!");}}
  
    formValChange = e=> {
         e.preventDefault();
          const {value,name}  = e.target;
          let isError ={ ...this.state.isError} ;
          switch (name) {
              case "Nom": 
                  isError.Nom =
                      value.length < 4 ? " Attention doit comprendre au minimum 4 caractéres" : "";
                  break;
              case "Email":
                  isError.Email = regExp.test(value)
                      ? ""
                      : "l'adresse email est invalid";
                  break;
              case "Login":
                isError.Login=
                     value.length <4 ? "Login doit comprendre au minimum 4 caractéres" :"";
                  break;
              case "MDP":
                  isError.MDP =
                      value.length < 6 ? "Le mot de passe doit comprendre au minimum 6 caractéres" : "";
                  break;
              case "Adresse":
                isError.Adresse=
                    value.length < 5 ? "L'adresse doit comprendre au minimum 5 caractéres" :"";
                  break;
                  case "Tel":
                    isError.Tel =regtel.test(value) ?"":"Votre numéro de téléphone doit contient exactement 8 chiffres";
                    break;
              case "DDN":
                isError.DDN = regDDN.test(value)?"": "Attension format incorrecte";
                  break;
              case "Civ":
                isError.Civ = value.length== 0 ? "Sélectionner votre civilité" :"";
                 
              case "Gouvernorate":
                isError.Gouvernorat  = value == "" ? "Sélectionner votre Gouvernorat":"";
              default:
                  break;}
                  const cred = this.state;
                  console.log(e.target.value);
                  cred[e.target.name] = e.target.value;
  
                  this.setState(
                    {
                    isError,
                    [name]: value
                })}

  register = event => {
    fetch('http://127.0.0.1:8000/PcdApp/student/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({Nom:this.state.Nom,Email:this.state.Email,Adresse:this.state.Adresse,Civ:this.state.Civ,DDN:this.state.DDN,Gouvernorat:this.state.Gouvernorat,Id_Utilisateur:this.state.Id_Utilisateur,Login:this.state.Login,MDP:this.state.MDP,Tel:this.state.Tel})
    })
    .then(data =>{ data.json()})
    .then((result)=>{
      this.setState({state:result});
      this.state.Id_Utilisateur=result.Id_Utilisateur;
      console.log(result);
      console.log(this.state.Id_Utilisateur);
      localStorage.setItem("Id_Utilisateur",this.state.Id_Utilisateur)
    
    })
    .catch( error => console.error(error));

  } 
render(){
  const  {isError}  = this.state;
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://i.pinimg.com/564x/9d/1a/fa/9d1afa1d746c6bb3877b7415edc0384e.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <h1 className='Titre'>Inscrivez-vous!</h1>
            {/* <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}> */}
            <form onSubmit={this.onSubmit} noValidate>
                    <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          id="nom"
                          label="Nom & Prénom"
                          name="Nom"
                          autoComplete="nom"
                          value = {this.state.Nom}
                          onChange ={this.formValChange}
                          className= {isError.Nom.length > 0 ? "is-invalid form-control" : "form-control"}
                        />
                            { isError.Nom.length > 0 && (
                        <span className="invalid-feedback">{isError.Nom}</span>
                    )}
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          id="email"
                          label="Addresse Email"
                          name="Email"
                          autoComplete="email"
                          value = {this.state.Email}
                          onChange ={this.formValChange}
                          className= {isError.Email.length > 0 ? "is-invalid form-control" : "form-control"}
                        />
                          { isError.Email.length > 0 && (
                        <span className="invalid-feedback">{isError.Email}</span>
                    )}
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          name="Login"
                          fullWidth
                          id="login"
                          label="Login"
                          autoFocus
                          value = {this.state.Login}
                          onChange ={this.formValChange}
                          className= {isError.Login.length > 0 ? "is-invalid form-control" : "form-control"}
                        />
                        { isError.Login.length > 0 && (
                        <span className="invalid-feedback">{isError.Login}</span>
                    )}
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          fullWidth
                          id="Tel"
                          label="Numéro de Teléphone"
                          name="Tel"
                          value = {this.state.Tel}
                          onChange ={this.formValChange}
                          className= {isError.Tel.length > 0 ? "is-invalid form-control" : "form-control"}
                        />
                         { isError.Tel.length > 0 && (
                        <span className="invalid-feedback">{isError.Tel}</span>
                    )}
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          name="MDP"
                          label="Mot de Passe"
                          type="password"
                          id="password"
                          autoComplete="new-password"
                          value = {this.state.MDP}
                          onChange ={this.formValChange}
                          className= {isError.MDP.length > 0 ? "is-invalid form-control" : "form-control"}
                        />
                        { isError.MDP.length > 0 && (
                        <span className="invalid-feedback">{isError.MDP}</span>
                    )}
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          name="MDP"
                          label="Confirmer votre Mot de Passe"
                          type="password"
                          id="password"
                          autoComplete="new-password"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          name="Adresse"
                          label="Adresse"
                          value = {this.state.Adresse}
                          onChange ={this.formValChange}
                          className= {isError.Adresse.length > 0 ? "is-invalid form-control" : "form-control"}
                        />
                            {isError.Adresse.length > 0 && (
                        <span className="invalid-feedback">{isError.Adresse}</span>
                    )}
                      </Grid>
                      <Grid item xs={12}>  
                      <TextField
                          required
                          fullWidth
                          name="DDN"
                          label="DDN" 
                          value = {this.state.DDN}
                          onChange ={this.formValChange}
                          className= {isError.DDN.length > 0 ? "is-invalid form-control" : "form-control"}
                        />
                           {isError.DDN.length > 0 && (
                        <span className="invalid-feedback">{isError.DDN}</span>
                    )}
                      </Grid>
                      
                      <Grid item xs={12} sm={4} >
                        
                        <FormControl required sx={{sm: 4, minWidth: 150 }}>
                          <InputLabel id="demo-simple-select-required-label">Civilité</InputLabel>
                          <Select
                            labelId="demo-simple-select-required-label"
                            id="demo-simple-select-required"
                            label="Civilité"
                            name="Civ"
                            value = {this.state.Civ}
                            onChange ={this.formValChange}
                          >
                          <MenuItem value={"Madame"} >Madame</MenuItem>
                          <MenuItem value={"Monsieur"}>Monsieur</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={5} >
                        <FormControl required sx={{sm:4, minWidth: 300 }}>
                          <InputLabel id="demo-simple-select-required-label">Gouvernorat</InputLabel>
                          <Select
                            labelId="demo-simple-select-required-label"
                            id="demo-simple-select-required"
                            label="Civilité"
                            name="Gouvernorat"
                            value = {this.state.Gouvernorat}
                            onChange ={this.formValChange}
                          >
                          <MenuItem value={"Sfax"}>Sfax</MenuItem>
                                                <MenuItem value={"Sousse"}>Sousse</MenuItem>
                                                

                                                <MenuItem value={"Ariana"}>Ariana</MenuItem>
                                                <MenuItem value={"Béja"}>Béja</MenuItem>
                                                <MenuItem value={"Ben Arous"}>Ben Arous</MenuItem>
                                                <MenuItem value={"Bizerte"}>Bizerte</MenuItem>
                                                <MenuItem value={"Gabès"}>Gabès</MenuItem>
                                                <MenuItem value={"Gafsa"}>Gafsa</MenuItem>
                                                <MenuItem value={"Jendouba"}>Jendouba</MenuItem>
                                                <MenuItem value={"Kairouan"}>Kairouan</MenuItem>
                                                <MenuItem value={"Kasserine"}>Kasserine</MenuItem>
                                                <MenuItem value={"Kébili"}>Kébili</MenuItem>

                                                <MenuItem value={"Le Kef"}>Le Kef</MenuItem>
                                                <MenuItem value={"Mahdia"}>Mahdia</MenuItem>
                                                <MenuItem value={"La Manouba"}>La Manouba</MenuItem>
                                                <MenuItem value={"Médenine"}>Médenine</MenuItem>
                                                <MenuItem value={"Monastir"}>Monastir</MenuItem>
                                                <MenuItem value={"Nabeul"}>Nabeul</MenuItem>
                                                <MenuItem value={"Sidi Bouzid"}>Sidi Bouzid</MenuItem>
                                                <MenuItem value={"Siliana"}>Siliana</MenuItem>
                                                <MenuItem value={"Tataouine"}>Tataouine</MenuItem>
                                                <MenuItem value={"Tozeur"}>Tozeur</MenuItem>
                                                <MenuItem value={"Tunis"}>Tunis</MenuItem>
                                                <MenuItem value={"Zaghouan"}>Zaghouan</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                    </Grid>
                    <br/>
                   <NavLink to ={'/EspCand/'+localStorage.getItem('Id_Utilisateur')}> 
                    <button
                      type="button" 
                      class="btn btn-outline-secondary"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 10, mb:2 }}
                      onClick={this.register}
                    >
                      Sign Up
                    </button>
                   </NavLink> 
                    <Grid container justifyContent="flex-end">
                      <Grid item>
                        <Link href="/Auth" variant="body2">
                          Vous avez déjà un compte ? Se connecter
                        </Link>
                      </Grid>
                    </Grid>
                    </form>
                  </Box>
                  
         { /*</Box>*/}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}}
export default InscEtu;