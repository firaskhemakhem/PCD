import React, { Component } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
//import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "../../../styles/Pages/CandidatProfile.css";
import { NavLink } from "react-router-dom";


/*var {idStudent}=1;

const getid=()=>{
  const {id} = useParams()
  idStudent=id;

}
console.log({idStudent})*/

/*const Input = styled('input')({
  display: 'none',
});*/


const theme = createTheme();
const handleSubmit = (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  console.log({
    email: data.get('email'),
    password: data.get('password'),
  });
};


class RecProfile extends Component {
  constructor() {
    super();
    this.state = {
      credentials: { Login: localStorage.getItem('LoginUser'), MDP: '', Nom: '', Email: '', Gouvernorat: '', Adresse: '', CodePostal:'', Tel: '' }
    }
  }


  componentDidMount() {
    var id = localStorage.getItem('LoginUser');
    fetch(`http://127.0.0.1:8000/PcdApp/recruteur/${id}/`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then((result) => {
        this.setState({ credentials: result })
        console.log(result);
      })
  }

  update = event => {
    var id = this.state.credentials.Login;
    fetch(`http://127.0.0.1:8000/PcdApp/recruteur/${id}/`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state.credentials)
    })
      .then(data => data.json())
      .then(console.log(this.state.credentials))
      .catch(error => console.error(error))
  }
  inputChanged = (event) =>{
    const cred = this.state.credentials;
    console.log(event.target.value);
    cred[event.target.name] = event.target.value;
    this.setState({ credentials: cred });
  }

  render() {
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
              backgroundImage: 'url(https://assets-global.website-files.com/610167bdec52d465db882881/61030feebbd1272b1f283f92_header_blog_donneeperso.jpeg)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: '',
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
              <h1 className='Titre'>Manipuler vos données personnelles !</h1>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      focused
                      required
                      fullWidth
                      id="nom"
                      label="Nom & Prénom"
                      name="Nom"
                      autoComplete="nom"
                      value={this.state.credentials.Nom}
                      onChange={this.inputChanged}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      focused
                      required
                      fullWidth
                      id="email"
                      label="Addresse Email"
                      name="Email"
                      autoComplete="email"
                      value={this.state.credentials.Email}
                      onChange={this.inputChanged}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      focused
                      required
                      name="Login"
                      fullWidth
                      id="login"
                      label="Login"
                      autoFocus
                      value={this.state.credentials.Login}
                      disabled
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      focused
                      required
                      fullWidth
                      id="Tel"
                      label="Numéro de Teléphone"
                      name="Tel"
                      value={this.state.credentials.Tel}
                      onChange={this.inputChanged}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      focused
                      required
                      fullWidth
                      name="MDP"
                      label="Mot de Passe"
                      /*type="password"*/
                      id="password"
                      autoComplete="new-password"
                      value={this.state.credentials.MDP}
                      onChange={this.inputChanged}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      focused
                      required
                      fullWidth
                      name="Adresse"
                      label="Adresse"
                      value={this.state.credentials.Adresse}
                      onChange={this.inputChanged}
                    />
                  </Grid>

                  <Grid item xs={12} sm={4} >
                  <TextField
                      focused
                      required
                      fullWidth
                      name="CodePostal"
                      label="Code Postale"
                      value={this.state.credentials.CodePostal}
                      onChange={this.inputChanged}
                    />

                    
                  </Grid>
                  <Grid item xs={12} sm={5} >
                    <FormControl required sx={{ sm: 4, minWidth: 300 }}>
                      <InputLabel id="demo-simple-select-required-label">Gouvernorat</InputLabel>
                      <Select
                        labelId="demo-simple-select-required-label"
                        id="demo-simple-select-required"
                        label="Civilité"
                        name="Gouvernorat"
                        value={this.state.credentials.Gouvernorat}
                        onChange={this.inputChanged}
                      >
                        <MenuItem value={"Sfax"}>Sfax</MenuItem>
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
                <NavLink to={'/EspRec/' + localStorage.getItem('LoginUser')}>
                  <button
                    type="button"
                    class="btn btn-outline-secondary"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 10, mb: 2 }}
                    onClick={this.update}
                  >
                    Confirmer
                  </button>
                </NavLink>

                <NavLink to={'/EspRec/' + localStorage.getItem('LoginUser')}>
                  <button
                    type="button"
                    class="btn btn-outline-secondary"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 10, mb: 2 }}
                  >
                    Annuler
                  </button>
                </NavLink>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    );
  }
}
export default RecProfile;