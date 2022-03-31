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
const handleSubmit = (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  console.log({
    email: data.get('email'),
    password: data.get('password'),
  });
};

function InscRec() {
  const navigate = useNavigate();
  const [state, setState] = React.useState([]);
  const register = event => {
    fetch('http://127.0.0.1:8000/PcdApp/recruteur/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(state)
    })
      .then(data => data.json())
      .then((res) => {
        console.log(res);
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
          navigate('/')
        }
      })
      .catch((error) => console.error(error))
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
            <Box component="form" noValidate
              onSubmit={handleSubmit}
              sx={
                { mt: 3 }
              }>
              <Grid container
                spacing={2}>
                <Grid item
                  xs={12}>
                  <TextField required fullWidth id="nom"
                    label="Nom De L'Entreprise"
                    name="Nom"
                    autoComplete="Nom De L'Entreprise"
                    value={state.Nom}
                    //onChange ={this.inputChanged}
                    onChange={(e) => { setState({ ...state, "Nom": e.target.value }) }} />
                </Grid>
                <Grid item
                  xs={12}>
                  <TextField required fullWidth id="email"
                    label="Addresse Email"
                    name="Email"
                    autoComplete="email"
                    value={state.Email}
                    //onChange ={this.inputChanged}
                    onChange={(e) => { setState({ ...state, "Email": e.target.value }) }} />
                </Grid>
                <Grid item
                  xs={12}
                  sm={6}>
                  <TextField required name="Login"
                    fullWidth id="login"
                    label="Login" autoFocus
                    value={state.Login}
                    //onChange ={this.inputChanged}
                    onChange={(e) => { setState({ ...state, "Login": e.target.value }) }} />
                </Grid>
                <Grid item
                  xs={12}
                  sm={6}>
                  <TextField required fullWidth id="Code Postal"
                    label="Code Postal" name="CodePostal"
                    autoComplete="Code-Postal"
                    value={state.CodePostal}
                    //onChange ={this.inputChanged}
                    onChange={(e) => { setState({ ...state, "CodePostal": e.target.value }) }} />
                </Grid>

                <Grid item
                  xs={12}>
                  <TextField required fullWidth name="MDP"
                    label="Mot de Passe" type="password"
                    id="password"
                    autoComplete="new-password"
                    value={state.MDP}
                    //onChange ={this.inputChanged}
                    onChange={(e) => { setState({ ...state, "MDP": e.target.value }) }} />
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
                    //onChange ={this.inputChanged}
                    onChange={(e) => { setState({ ...state, "Tel": e.target.value }) }} />
                </Grid>
                <Grid item
                  xs={12}>
                  <TextField required fullWidth id="adresse"
                    label="Adresse"
                    name="Adresse"
                    value={state.Adresse}
                    //onChange ={this.inputChanged}
                    onChange={(e) => { setState({ ...state, "Adresse": e.target.value }) }} />
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
                      //onChange ={this.inputChanged}
                      onChange={(e) => { setState({ ...state, "Gouvernorat": e.target.value }) }}>
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

            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
export default InscRec;