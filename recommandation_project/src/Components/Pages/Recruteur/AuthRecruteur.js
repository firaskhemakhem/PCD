import * as React from 'react';
import {Component} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "../../../styles/Pages/Authentification.css";
import {NavLink} from "react-router-dom";
import PopUpMessage from '../../PopUpMessage/PopUpFile'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';

const theme = createTheme();
function AuthRecruteur() {
  const navigate = useNavigate();
  const [state,setState]=React.useState({
    credentials:{},
    data:{},
    id:'',
    isOpenSucceed:false,
    isOpenFailed:false
 })

 React.useEffect(() => {
    fetch('http://127.0.0.1:8000/PcdApp/recruteur/',{
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
        })
    .then(response => response.json())
    .then((result)=>{
        setState({...state,data:result}) 
        console.log(state.data);
        console.log(state.credentials);
    })
  }, []);

 const togglePopup =event=> {
    setState({...state,isOpenSucceed:true});
    console.log(state.isOpenSucceed);
  }
const togglePopupFailed =event=> {
    setState({...state,isOpenFailed:true});
    console.log(state.isOpenFailed);
  }

 const VerifUser = ()=>{
    var valid=false;
    for(let i=0;i<state.data.length;i++){
      if((state.data[i].Login == state.credentials.Login) && (state.data[i].MDP ==state.credentials.MDP)){
        valid=true;
        state.id=state.data[i].Login;
      }
    }
    console.log(valid);
    return valid;
  }

 const handleSubmit= event => {
    const val= VerifUser()
    console.log(val);
    if(val){
      localStorage.setItem("LoginUser",state.credentials.Login);
      togglePopup();    
    }
    else if (!val){
      togglePopupFailed();
    }
  };

 const handleErreur= event => {
    setState({...state,isOpenFailed:false});
    
  };

 const inputChanged = (event) => {
    const cred = state.credentials;
    console.log(event.target.value);
    cred[event.target.name] = event.target.value;
    setState({...state,"Login":event.target.value,
               ...state,"MDP":event.target.value,
              ...state}); 
  }


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
              backgroundImage: 'url(https://i.pinimg.com/564x/e4/e6/27/e4e62738aa6b4ea8c94d8952210bd25a.jpg)',
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
              <br/><br/>
              <h1 classname='Titre'>S'identifier</h1>
              <Box component="form" noValidate onSubmit={VerifUser} sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="login"
                  label="Login"
                  name="Login"
                  autoComplete="login"
                  autoFocus
                  value = {state.credentials.Login}
                  onChange ={inputChanged}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="MDP"
                  label="Mot de passe"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value = {state.credentials.MDP}
                  onChange ={inputChanged}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <br/><br/>
                <NavLink to ='#'>
                  <button
                    type="submit"
                    class="btn btn-outline-secondary"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={handleSubmit}
                  >
                    s'identifier
                  </button>
                  </NavLink>
                <br/><br/>
                  
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                    Mot de pass oublié?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/" variant="body2">
                      {"Vous n'avez pas de compte ? Inscrivez-vous"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <div align="center">
        {state.isOpenSucceed && navigate('/EspRec/'+localStorage.getItem('LoginUser'))}
        </div> 
        <div align="center">
          {state.isOpenFailed && <PopUpMessage
            dataFromParent ={<>
              <h3><b>Erreur!</b></h3><br/>
              <p>Vérifier Votre Login ou Votre Mot De Passe</p>
               
              <Button variant="contained"  onClick={handleErreur}>
                Ok
                </Button>
              
            </>}
          />}
        </div>
      </ThemeProvider>
    );
  }


export default AuthRecruteur;