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
import "../../styles/Pages/Inscription.css";
import {NavLink} from "react-router-dom";
import PopUpMessage from '../PopUpMessage/PopUpFile'
import Button from '@mui/material/Button';


const theme = createTheme();
const handleSubmit = (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  console.log({
    email: data.get('email'),
    password: data.get('password'),
  });
};

class InscEtu extends React.Component{
  state = {
    credentials: {Id_Utilisateur:'',Login:'',MDP:'',Nom:'',Email:'',Gouvernorat:'',Adresse:'',Civ:'',DDN:'',Tel:''},
    isOpenSucceed:false,
    isOpenFailed:false
  }
  togglePopup =event=> {
    this.setState({isOpenSucceed:true});
    console.log(this.state.isOpenSucceed);
  }
  togglePopupFailed =event=> {
    this.setState({isOpenFailed:true});
    console.log(this.state.isOpenFailed);
  }
  register = event => {
    fetch('http://127.0.0.1:8000/PcdApp/student/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state.credentials)
    })
    /*.then( data => data.json())
    .catch( error => console.error(error))
    console.log(this.state.credentials)*/
    .then(data => data.json())
    .then((result)=>{
      this.setState({credentials:result});
      this.state.credentials.Id_Utilisateur=result.Id_Utilisateur;
      console.log(result);
      console.log(this.state.credentials.Id_Utilisateur);
      localStorage.setItem("LoginUser",this.state.credentials.Login);
      localStorage.setItem("IdUser",this.state.credentials.Id_Utilisateur);
      this.togglePopup();
    })
    .catch( error => console.error(error));

  }

  getId(){
    
  }

  inputChanged = (event) => {
    const cred = this.state.credentials;
    console.log(event.target.value);
    cred[event.target.name] = event.target.value;
    this.setState({credentials: cred});
    
  }
render(){
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
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          id="nom"
                          label="Nom & Prénom"
                          name="Nom"
                          autoComplete="nom"
                          value = {this.state.credentials.Nom}
                          onChange ={this.inputChanged}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          id="email"
                          label="Addresse Email"
                          name="Email"
                          autoComplete="email"
                          value = {this.state.credentials.Email}
                          onChange ={this.inputChanged}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          name="Login"
                          fullWidth
                          id="login"
                          label="Login"
                          autoFocus
                          value = {this.state.credentials.Login}
                          onChange ={this.inputChanged}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          fullWidth
                          id="Tel"
                          label="Numéro de Teléphone"
                          name="Tel"
                          value = {this.state.credentials.Tel}
                          onChange ={this.inputChanged}
                        />
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
                          value = {this.state.credentials.MDP}
                          onChange ={this.inputChanged}
                        />
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
                          value = {this.state.credentials.Adresse}
                          onChange ={this.inputChanged}
                        />
                      </Grid>
                      <Grid item xs={12}>  
                      <TextField
                          required
                          fullWidth
                          name="DDN"
                          label="DDN" 
                          type="date"
                          value = {this.state.credentials.DDN}
                          onChange ={this.inputChanged}
                          InputLabelProps={{
                            style: { color: "grey" },
                          }}
                          inputProps={{
                            style: { color: "black" },
                          }}
                     
                        />
                      </Grid>
                      
                      <Grid item xs={12} sm={4} >
                        
                        <FormControl required sx={{sm: 4, minWidth: 150 }}>
                          <InputLabel id="demo-simple-select-required-label">Civilité</InputLabel>
                          <Select
                            labelId="demo-simple-select-required-label"
                            id="demo-simple-select-required"
                            label="Civilité"
                            name="Civ"
                            value = {this.state.credentials.Civ}
                            onChange ={this.inputChanged}
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
                            value = {this.state.credentials.Gouvernorat}
                            onChange ={this.inputChanged}
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
                    <button
                      type="button" 
                      class="btn btn-outline-secondary"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 10, mb:2 }}
                      onClick= {this.register}
                    >
                      Sign Up
                    </button>
                 
                    <Grid container justifyContent="flex-end">
                      <Grid item>
                        <Link href="/Auth" variant="body2">
                          Vous avez déjà un compte ? Se connecter
                        </Link>
                      </Grid>
                    </Grid>
                  </Box>
          </Box>
        </Grid>
      </Grid>
      <div align="center">
          {this.state.isOpenSucceed && <PopUpMessage
            dataFromParent ={<>
              <h3><b>félicitations !</b></h3><br/>
              <p>Maintenant c'est le moment de commancer votre aventure</p>
              
              <NavLink to ={'/EspCand/'+localStorage.getItem('IdUser')}> 
              <Button variant="contained" >
                Ok
                </Button>
              </NavLink>
            </>}
          />}
        </div>
    </ThemeProvider>
  );
}}
export default InscEtu;