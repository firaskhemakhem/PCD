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
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "../../../styles/Pages/Authentification.css";
import {NavLink} from "react-router-dom";
import PopUpMessage from '../../PopUpMessage/PopUpFile'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

class AuthEtudiant extends Component  {
  constructor(){
    super();
    
  }
  state={
    credentials:{},
    data:{},
    id:'',
    isOpenSucceed:false,
    isOpenFailed:false
  }

  componentDidMount(){
    
    fetch('http://127.0.0.1:8000/PcdApp/student/',{
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
        })
    .then(response => response.json())
    .then((result)=>{
        this.setState({data:result}) 
        console.log(this.state.data);
        console.log(this.state.credentials);
        
    })
  }
  togglePopup =event=> {
    this.setState({isOpenSucceed:true});
    console.log(this.state.isOpenSucceed);
  }
  togglePopupFailed =event=> {
    this.setState({isOpenFailed:true});
    console.log(this.state.isOpenFailed);
  }

  VerifUser (){
    var valid=false;
    for(let i=0;i<this.state.data.length;i++){
      if((this.state.data[i].Login == this.state.credentials.Login) && (this.state.data[i].MDP == this.state.credentials.MDP)){
        valid=true;
        this.state.id=this.state.data[i].Login;
      }
    }
    console.log(valid);
    return valid;
  }

  handleSubmit= event => {
    const val=this.VerifUser()
    console.log(val);
    if(val){
      localStorage.setItem("LoginUser",this.state.credentials.Login);
    //  localStorage.setItem("IdUser",this.state.id);
      this.togglePopup();
    }
    else if (!val){
      this.togglePopupFailed();
    }
  };

  handleErreur= event => {
    this.setState({isOpenFailed:false});
    
  };

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
              <h1 classname='Titre'>Sign In</h1>
              <Box component="form" noValidate onSubmit={this.VerifUser} sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="login"
                  label="Login"
                  name="Login"
                  autoComplete="login"
                  autoFocus
                  value = {this.state.credentials.Login}
                  onChange ={this.inputChanged}
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
                  value = {this.state.credentials.MDP}
                  onChange ={this.inputChanged}
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
                    onClick={this.handleSubmit}
                  >
                    Sign In
                  </button>
                  </NavLink>
                <br/><br/>
                  
                <Grid container>
                  <Grid item xs>
                    <Link href="/forgetpassword/" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/" variant="body2">
                      {"Don't have an account? Sign Up"}
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
        <div align="center">
          {this.state.isOpenFailed && <PopUpMessage
            dataFromParent ={<>
              <h3><b>Oups!</b></h3><br/>
              <p>Un erreur c'est reproduit ! </p>
               
              <Button variant="contained"  onClick={this.handleErreur}>
                Ok
                </Button>
              
            </>}
          />}
        </div>
      </ThemeProvider>
    );
  }
}

export default AuthEtudiant;