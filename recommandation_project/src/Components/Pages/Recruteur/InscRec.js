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
const regtel = RegExp( /^(\d{8})+$/)
const regPostal = RegExp( /^(\d{4})+$/)
const regExp = RegExp(
  /^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[A-Za-z]+$/
)

function InscRec() {
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
  const navigate = useNavigate();
  const [state, setState] = React.useState({ Login:'',MDP:'',Nom:'',Email:'',Gouvernorat:'',Adresse:'',CodePostal:'',Tel:'',
  isError: {Login:'',MDP:'',Nom:'',Email:'',Gouvernorat:'',Adresse:'',CodePostal:'',Tel:'' },});
  const onSubmit = e => {
    e.preventDefault();
    if (formValid(state)) {
        console.log(state)}
     else 
       { console.log("Form is invalid!");}}
  const  formValChange = e=> {
    e.preventDefault();
    const {name,value} = e.target;
     let isError ={ ...state.isError} ;
     switch (name) {
         case "Nom": 
             isError.Nom =
                 value.length < 4 ? " Attention doit comprendre au minimum 4 caractéres" : "";
       
             break;
         case "Email":
             isError.Email = regExp.test(value)
                 ? ""
                 : "l'adresse email est invalide";
           
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
            case "CodePostal":
                isError.CodePostal =regPostal.test(value) ?"":"Code Postal doit contient exactement 4 chiffres";
                break;
         default:
             break;}
                 const cred = state;
                  console.log(e.target.value);
                  cred[e.target.name] = e.target.value;
             setState({
               ...state, "Nom": e.target.value,
               ...state, "Login": e.target.value ,
               ...state, "Tel": e.target.value ,
               ...state, "Adresse": e.target.value ,
               ...state, "Email": e.target.value ,
               ...state,"CodePostal":e.target.value,
               ...state,"Gouvernorat":e.target.value,
               ...state,"MDP":e.target.value,
               ...state,
               isError,
              })
            }
  const register = event => {
    fetch('http://127.0.0.1:8000/PcdApp/recruteur/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        {"Nom":state.Nom,
        "Email":state.Email,
        "Adresse":state.Adresse,
        "Gouvernorat":state.Gouvernorat,
        "Login":state.Login,
        "MDP":state.MDP,
        "Tel":state.Tel,
        "CodePostal":state.CodePostal}
      )
    })
      .then(data => data.json())
      .then((res) => {
        console.log(res);
        localStorage.setItem("LoginUser",state.Login);
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
        if (res.Nom == "This field is required."|| res.Email == "This field is required."|| res.Login == "This field may not be blank."|| res.CodePostal == "This field may not be blank."|| res.MDP == "This field may not be blank."|| res.Tel == "This field may not be blank."||res.Adresse == "This field may not be blank."|| res.Gouvernorat == "This field may not be blank.")
         { alert("Il existe un ou des champs vides"); };
        if ( res.Nom == state.Nom  && res.Email == state.Email && res.Login == state.Login && res.CodePostal == state.CodePostal && res.MDP == state.MDP && res.Tel == state.Tel && res.Adresse == state.Adresse && res.Gouvernorat==state.Gouvernorat  ) {
          navigate('/EspRec/'+localStorage.getItem('LoginUser'))
        }
      })
      .catch((error) => console.error(error))
  }

 
  const  {isError}  =state;
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
            backgroundImage: 'url(https://i.pinimg.com/564x/d1/7e/cd/d17ecd832199a2e388c71d6ef93888f1.jpg)',
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
           <form onSubmit={onSubmit} noValidate>
              <Grid container
                spacing={2}>
                <Grid item
                  xs={12}>
                  <TextField required fullWidth id="nom"
                    label="Nom De L'Entreprise"
                    name="Nom"
                    autoComplete="Nom De L'Entreprise"
                    value={state.Nom}
                   onChange={formValChange} 
                    className= {(isError.Nom.length)>0 ? "is-invalid form-control" : "form-control"} />
                     
                     {isError.Nom.length > 0 && (
                        <span className="invalid-feedback">{isError.Nom}</span>
                       
                    )}
                 
                </Grid>
                <Grid item
                  xs={12}>
                  <TextField required fullWidth id="email"
                    label="Adresse Email"
                    name="Email"
                    autoComplete="email"
                    value={state.Email}
  
                    onChange={formValChange}
                    className= {(isError.Email.length)>0 ? "is-invalid form-control" : "form-control"} /> 
                     {isError.Email.length > 0 && (
                        <span className="invalid-feedback">{isError.Email}</span>
                       
                    )}
                </Grid>
                <Grid item
                  xs={12}
                  sm={6}>
                  <TextField required name="Login"
                    fullWidth id="login"
                    label="Login" autoFocus
                    value={state.Login} 
                   onChange={formValChange}
                  className= {(isError.Login.length)>0 ? "is-invalid form-control" : "form-control"} 
                   />
                      {isError.Login.length > 0 && (
                        <span className="invalid-feedback">{isError.Login}</span>
                       
                    )}
                </Grid>
                <Grid item
                  xs={12}
                  sm={6}>
                  <TextField required fullWidth id="Code Postal"
                    label="Code Postal" name="CodePostal"
                    autoComplete="Code-Postal"
                    value={state.CodePostal}
                    onChange={formValChange}
                    className= {(isError.CodePostal.length)>0 ? "is-invalid form-control" : "form-control"} 
                    />

                  {isError.CodePostal.length > 0 && (
                        <span className="invalid-feedback">{isError.CodePostal}</span>
                       
                    )}
                </Grid>

                <Grid item
                  xs={12}>
                  <TextField required fullWidth name="MDP"
                    label="Mot de Passe" type="password"
                    id="password"
                    autoComplete="new-password"
                    value={state.MDP}
                   onChange={formValChange}
                   className= {(isError.MDP.length)>0 ? "is-invalid form-control" : "form-control"} 
                   
                   />
                   {isError.MDP.length > 0 && (
                        <span className="invalid-feedback">{isError.MDP}</span>
                       
                    )}
                </Grid>
                <Grid item
                  xs={12}>
                  <TextField required fullWidth name="ConfMDP"
                    label="Confirmer votre Mot de passe"
                    type="password" id="password"
                    autoComplete="new-password"
                    pattern="values.MDP" />
                </Grid>
                <Grid item
                  xs={12}>
                  <TextField required fullWidth id="tel"
                    label="Numéro de Teléphone"
                    name="Tel"
                    value={state.Tel}
                   onChange={formValChange}
                   className= {(isError.Tel.length)>0 ? "is-invalid form-control" : "form-control"} 
                    />
                    {isError.Tel.length > 0 && (
                        <span className="invalid-feedback">{isError.Tel}</span>
                       
                    )}
                </Grid>
                <Grid item
                  xs={12}>
                  <TextField required fullWidth id="adresse"
                    label="Adresse"
                    name="Adresse"
                    value={state.Adresse}
                    onChange={formValChange}
                    className= {(isError.Adresse.length)>0 ? "is-invalid form-control" : "form-control"} 
                    />
                       {isError.Adresse.length > 0 && (
                        <span className="invalid-feedback">{isError.Adresse}</span>
                       
                    )}
                </Grid>
                <Grid item
                  xs={12}>
                  <FormControl required
                    sx={
                      {
                        sm: 4,
                        minWidth: 460
                      }
                    }>
                    <InputLabel id="demo-simple-select-required-label">Gouvernorat</InputLabel>
                    <Select labelId="demo-simple-select-required-label"
                      id="demo-simple-select-required"
                      label="Gouvernorat"
                      name="Gouvernorat"
                      value={state.Gouvernorat}
                     onChange={formValChange}
                     className= {(isError.Gouvernorat.length)>0 ? "is-invalid form-control" : "form-control"} 
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
                  {isError.Gouvernorat.length > 0 && (
                        <span className="invalid-feedback">{isError.Gouvernorat}</span>
                       
                    )}
                </Grid>
              </Grid>
              <br />

              <button type="button" class="btn btn-outline-secondary"
                fullWidth variant="contained"
                sx={
                  {
                    mt: 4,
                    mb: 2
                  }
                }
                onClick={() => { register(); console.log(state) }}>
                Sign Up
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
export default InscRec;