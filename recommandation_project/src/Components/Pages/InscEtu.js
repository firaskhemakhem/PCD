import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
//import FormControlLabel from '@mui/material/FormControlLabel';
//import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
//import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import Stack from '@mui/material/Stack';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import "../../styles/Pages/Inscription.css";
import {NavLink} from "react-router-dom";

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  
const theme = createTheme();


class InscEtu extends React.Component{
  state = {
    credentials: {Id_Utilisateur:'',Login:'',MDP:'',Nom:'',Email:'',Gouvernorat:'',Adresse:'',Civ:'',DDN:'',Tel:''}
  }
  register = event => {
    fetch('http://127.0.0.1:8000/PcdApp/student/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state.credentials)
    })
    .then( data => data.json())
    .catch( error => console.error(error))
  }
  inputChanged = (event) => {
    const cred = this.state.credentials;
    console.log(event.target.value);
    cred[event.target.name] = event.target.value;
    this.setState({credentials: cred});
    
  }
     render(){
        return ( 
          
            <ThemeProvider theme={theme} >
              <div className='backg'>
              <Container component="main" maxWidth="xs" className='Border'>
                <CssBaseline />
                <Box
                  sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
              >
          
                <Typography component="h1" variant="h5">
                <i class="unlock alternate icon"></i>
                  Inscrivez-vous!
                </Typography>
                  <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          id="lastName"
                          label="Nom & Prénom"
                          name="Nom"
                          autoComplete="family-name"
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
                          label="Mot de passe"
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
                          label="Adresse"
                          name="Adresse"
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
                     
                        />
                        </Grid>
                        <Grid item xs={12} sm={5} >
                        
                        <FormControl required sx={{sm: 2, minWidth: 160 }}>
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
                        <FormControl required sx={{sm:2, minWidth: 210 }}>
                          <InputLabel id="demo-simple-select-required-label">Gouvernorat</InputLabel>
                          <Select
                            labelId="demo-simple-select-required-label"
                            id="demo-simple-select-required"
                            label="Civilité"
                            name="Gouvernorat"
                            value = {this.state.credentials.Gouvernorat}
                            onChange ={this.inputChanged}
                          >
                          <MenuItem value={"Sfax"} >Sfax</MenuItem>
                          <MenuItem value={"Sousse"}>Sousse</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                    </Grid>
                    <br/>
                    <NavLink to ="/Auth">
                    <button
                      type="button" 
                      class="btn btn-outline-secondary"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 4, mb:2 }}
                      onClick= {this.register} >
                      Sign Up
                    </button>
                    </NavLink>
                    <Grid container justifyContent="flex-end">
                      <Grid item>
                        <Link href="#" variant="body2">
                          Vous avez déjà un compte ? Se connecter
                        </Link>
                      </Grid>
                    </Grid>
                  </Box>
              </Box>
          </Container>
          </div>
        </ThemeProvider>
      );
}}
export default InscEtu;