/*import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import PopUpMessage from '../../PopUpMessage/PopUpFile';

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

class InscEtu extends React.Component{
  state = {
    credentials: {Login:'',MDP:'',Nom:'',Email:'',Gouvernorat:'',Adresse:'',Civ:'',DDN:'',Tel:''},
    isOpenSucceed:false,
    isOpenFailed:false
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
/*  .then(data => data.json())
  .then((result)=>{
    this.setState({credentials:result});
    this.state.credentials.Login=result.Login;
    console.log(result);
    console.log(this.state.credentials.Login);
    localStorage.setItem("LoginUser",this.state.credentials.Login);
    this.togglePopup();
  })
  .catch( error => console.error(error));

}

togglePopup =event=> {
  this.setState({isOpenSucceed:true});
  console.log(this.state.isOpenSucceed);
}
togglePopupFailed =event=> {
  this.setState({isOpenFailed:true});
  console.log(this.state.isOpenFailed);
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
                  <Grid item xs={12} >
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
                        value = {this.state.credentials.DDN}
                        onChange ={this.inputChanged}
                   
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
            <NavLink to ={'/EspCand/'+localStorage.getItem('LoginUser')}> 
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
export default InscEtu;*/
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "../../../styles/Pages/Inscription.css";
import { useNavigate } from 'react-router';


const theme = createTheme();
const regtel = RegExp(/^(\d{8})+$/)
const regPostal = RegExp(/^(\d{4})+$/)
const regExp = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[A-Za-z]+$/)

function InscEtu() {
  const formValid = ({
    isError,
    ...rest
  }) => {
    let isValid = false;

    Object.values(isError).forEach = (val => {
      if (val.length > 0) {
        isValid = false;
      } else {
        isValid = true;
      }
    });

    Object.values(rest).forEach(val => {
      if (val === null) {
        isValid = false;
      } else {
        isValid = true;
      }
    });
    return isValid;
  };
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    Login: '',
    MDP: '',
    Nom: '',
    Email: '',
    Gouvernorat: '',
    Adresse: '',
    Civ: '',
    DDN: '',
    Tel: '',
    isError: {
      Login: '',
      MDP: '',
      Nom: '',
      Email: '',
      Gouvernorat: '',
      Adresse: '',
      Civ: '',
      DDN: '',
      ConfMDP: '',
      Tel: ''
    }
  });
  const [ConfMDP, setConfMDP] = React.useState('')
  const onSubmit = e => {
    e.preventDefault();
    if (formValid(state)) {
      console.log(state)
    } else {
      console.log("Form is invalid!");
    }
  }
  const formValChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let isError = {
      ...state.isError
    };
    switch (name) {
      case "Nom": isError.Nom = value.length < 4 ? " Attention doit comprendre au minimum 4 caractéres" : "";

        break;
      case "Email": isError.Email = regExp.test(value) ? "" : "l'adresse email est invalide";

        break;
      case "Login": isError.Login = value.length < 4 ? "Login doit comprendre au minimum 4 caractéres" : "";
        break;
      case "MDP": isError.MDP = value.length < 6 ? "Le mot de passe doit comprendre au minimum 6 caractéres" : "";
        break;
      case "Adresse": isError.Adresse = value.length < 4 ? "L'adresse doit comprendre au minimum 4 caractéres" : "";
        break;
      case "Tel": isError.Tel = regtel.test(value) ? "" : "Votre numéro de téléphone doit contient exactement 8 chiffres";
        break;
      /*case "Civ": isError.Civ = regPostal.test(value) ? "" : "Code Postal doit contient exactement 4 chiffres";
          break;*/
      case "ConfMDP": isError.ConfMDP = value !== state.MDP ? "MDP et ConfMDP does not match" : "";
        break;
      case "DDN": isError.DDN = value.length < 4 ? "Attention doit comprendre au minimum 4 caractéres" : "";
        break;
      default:
        break;
    }
    const cred = state;
    console.log(e.target.name);
    cred[e.target.name] = e.target.value;
    setState({
      ...state,
      "Nom": e.target.value,
      ...state,
      "Login": e.target.value,
      ...state,
      "Tel": e.target.value,
      ...state,
      "Adresse": e.target.value,
      ...state,
      "Email": e.target.value,
      ...state,
      "CodePostal": e.target.value,
      ...state,
      "Civ": e.target.value,
      ...state,
      "MDP": e.target.value,
      ...state,
      "DDN": e.target.value,
      ...state,
      isError
    })
    setConfMDP(e.target.value)
  }
  const register = event => {
    fetch('http://127.0.0.1:8000/PcdApp/student/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          "Nom": state.Nom,
          "Email": state.Email,
          "Adresse": state.Adresse,
          "Gouvernorat": state.Gouvernorat,
          "Login": state.Login,
          "MDP": state.MDP,
          "Tel": state.Tel,
          "DDN": state.DDN,
          "Civ": state.Civ
        }
      )
    }).then(data => data.json()).then((res) => {
      console.log(res);
      localStorage.setItem("LoginUser", state.Login);
      if (res.Nom == "recruteurs with this Email already exists.") {
        alert("Nom d'entreprise déjà existe");
      };
      if (res.Email == "recruteurs with this Email already exists.") {
        alert("Email déjà existe");
      };
      if (res.Login == "recruteurs with this Login already exists.") {
        alert("Login déjà existe");
      };
      if (res.Tel == "recruteurs with this Tel already exists.") {
        alert("Numéro de Téléphone déjà existe");
      };
      if (res.Nom == "This field is required." || res.Email == "This field is required." || res.Login == "This field may not be blank." || res.CodePostal == "This field may not be blank." || res.MDP == "This field may not be blank." || res.Tel == "This field may not be blank." || res.Adresse == "This field may not be blank." || res.Gouvernorat == "This field may not be blank.") {
        alert("Il existe un ou des champs vides");
      };
      if (res.Nom == state.Nom && res.Email == state.Email && res.Login == state.Login && res.Civ == state.Civ && res.MDP == state.MDP && res.Tel == state.Tel && res.Adresse == state.Adresse && res.Gouvernorat == state.Gouvernorat && res.DDN == state.DDN) {
        navigate('/EspCand/' + localStorage.getItem('LoginUser'))
      }
    }).catch((error) => console.error(error))
  }


  const { isError } = state;
  return (

    <ThemeProvider theme={theme}>
      <Grid container component="main"
        sx={
          { height: '100vh' }
        }>
        <CssBaseline />
        <Grid item
          xs={false}
          sm={4}
          md={7}
          sx={
            {
              backgroundImage: 'url(https://i.pinimg.com/564x/9d/1a/fa/9d1afa1d746c6bb3877b7415edc0384e.jpg)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) => t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }
          } />
        <Grid item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square>
          <Box sx={
            {
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }
          }>
            <h1 className='Titre'>Inscrivez-vous!</h1>
            <form onSubmit={onSubmit}
              noValidate>
              <Grid container
                spacing={2}>
                <Grid item
                  xs={12}>
                  <TextField required fullWidth id="nom" label="Nom" name="Nom" autoComplete="Nom"
                    value={
                      state.Nom
                    }
                    onChange={formValChange}
                    className={
                      (isError.Nom.length) > 0 ? "is-invalid form-control" : "form-control"
                    } /> {
                    isError.Nom.length > 0 && (
                      <span className="invalid-feedback">
                        {
                          isError.Nom
                        }</span>

                    )
                  } </Grid>
                <Grid item
                  xs={12}>
                  <TextField required fullWidth id="email" label="Adresse Email" name="Email" autoComplete="email"
                    value={
                      state.Email
                    }

                    onChange={formValChange}
                    className={
                      (isError.Email.length) > 0 ? "is-invalid form-control" : "form-control"
                    } /> {
                    isError.Email.length > 0 && (
                      <span className="invalid-feedback">
                        {
                          isError.Email
                        }</span>

                    )
                  } </Grid>
                <Grid item
                  xs={12}
                  sm={6}>
                  <TextField required name="Login" fullWidth id="login" label="Login" autoFocus
                    value={
                      state.Login
                    }
                    onChange={formValChange}
                    className={
                      (isError.Login.length) > 0 ? "is-invalid form-control" : "form-control"
                    } /> {
                    isError.Login.length > 0 && (
                      <span className="invalid-feedback">
                        {
                          isError.Login
                        }</span>

                    )
                  } </Grid>
                <Grid item
                  xs={12}
                  sm={6}>
                  <TextField required fullWidth id="tel" label="Numéro de Teléphone" name="Tel"
                    value={
                      state.Tel
                    }
                    onChange={formValChange}
                    className={
                      (isError.Tel.length) > 0 ? "is-invalid form-control" : "form-control"
                    } /> {
                    isError.Tel.length > 0 && (
                      <span className="invalid-feedback">
                        {
                          isError.Tel
                        }</span>

                    )
                  } </Grid>
                <Grid item
                  xs={12}>
                  <TextField required fullWidth name="MDP" label="Mot de Passe" type='password' id="password" autoComplete="new-password"
                    value={
                      state.MDP
                    }
                    onChange={formValChange}
                    className={
                      (isError.MDP.length) > 0 ? "is-invalid form-control" : "form-control"
                    }
                  /> {
                    isError.MDP.length > 0 && (
                      <span className="invalid-feedback">
                        {
                          isError.MDP
                        }</span>
                    )
                  } </Grid>
                <Grid item
                  xs={12}>
                  <TextField required fullWidth name="ConfMDP" label="Confirmer votre Mot de passe" type="password" id="ConfMDP"
                    //autoComplete="new-password"
                    //pattern="values.MDP"
                    value={
                      ConfMDP.ConfMDP
                    }
                    onChange={formValChange}
                    className={
                      (isError.ConfMDP.length) > 0 ? "is-invalid form-control" : "form-control"
                    } /> {
                    isError.ConfMDP.length > 0 && (
                      <span className="invalid-feedback">
                        {
                          isError.ConfMDP
                        }</span>
                    )
                  } </Grid>
                {/* //////////////////////////////////////////// */}

                <Grid item
                  xs={12}>
                  <TextField required fullWidth id="adresse" label="Adresse" name="Adresse"
                    value={
                      state.Adresse
                    }
                    onChange={formValChange}
                    className={
                      (isError.Adresse.length) > 0 ? "is-invalid form-control" : "form-control"
                    } /> {
                    isError.Adresse.length > 0 && (
                      <span className="invalid-feedback">
                        {
                          isError.Adresse
                        }</span>

                    )
                  } </Grid>
                  <Grid item
                  xs={12}>
                  <TextField required name="DDN" fullWidth id="DDN" label="DDN" autoFocus
                                        value={
                                            state.DDN
                                        }
                                        onChange={formValChange}
                                        className={
                                            (isError.DDN.length) > 0 ? "is-invalid form-control" : "form-control"
                                        }/> {
                                    isError.DDN.length > 0 && (
                                        <span className="invalid-feedback">
                                            {
                                            isError.DDN
                                        }</span>

                                    )
                                }
                          </Grid>
                <Grid item
                  xs={12}
                  sm={6}>
                  <FormControl required sx={{ sm: 4, minWidth: 240 }}>
                    <InputLabel id="demo-simple-select-required-label">Civilité</InputLabel>
                    <Select
                      labelId="demo-simple-select-required-label"
                      id="demo-simple-select-required"
                      label="Civilité"
                      name="Civ"
                      value={state.Civ}
                      onChange={formValChange}
                    >
                      <MenuItem value={"Madame"} >Madame</MenuItem>
                      <MenuItem value={"Monsieur"}>Monsieur</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item
                  xs={12}
                  sm={6}>
                  <FormControl required
                    sx={
                      {
                        sm: 4,
                        minWidth: 240
                      }
                    }>
                    <InputLabel id="demo-simple-select-required-label">Gouvernorat</InputLabel>
                    <Select labelId="demo-simple-select-required-label" id="demo-simple-select-required" label="Gouvernorat" name="Gouvernorat"
                      value={
                        state.Gouvernorat
                      }
                      onChange={formValChange}

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
              <br />

              <button type="button" class="btn btn-outline-secondary" fullWidth variant="contained"
                sx={
                  {
                    mt: 4,
                    mb: 2
                  }
                }
                onClick={
                  () => {
                    register();
                    console.log(state)
                  }
                }>
                S'inscrire
              </button>

              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/Auth" variant="body2">
                    Vous avez déjà un compte ? Se connecter
                  </Link>
                </Grid>
              </Grid>

            </form>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
export default InscEtu;
