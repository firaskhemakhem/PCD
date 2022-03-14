import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import Stack from '@mui/material/Stack';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import "../../styles/Pages/Inscription.css";


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  
const theme = createTheme();

const InscRec =()=>{
      const [value, setValue] = React.useState(new Date());
        return ( 
            <ThemeProvider theme={theme}>
              <Container component="main" maxWidth="xs">
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
                    Inscrivez-Vous!
                  </Typography>
                  <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                          <TextField
                            required
                            fullWidth
                            id="nom"
                            label="Nom De L'Entreprise"
                            name="Nom De L'Entreprise"
                            autoComplete="Nom De L'Entreprise"
                          />
                        </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          id="email"
                          label="Addresse Email"
                          name="email"
                          autoComplete="email"
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
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          fullWidth
                          id="Tel"
                          label="Numéro de Teléphone"
                          name="Numéro de Teléphone"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          autoComplete="given-name"
                          name="firstName"
                          required
                          fullWidth
                          id="firstName"
                          label="Prénom"
                          autoFocus
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          fullWidth
                          id="lastName"
                          label="Nom"
                          name="lastName"
                          autoComplete="family-name"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          name="password"
                          label="Mot de Passe"
                          type="password"
                          id="password"
                          autoComplete="new-password"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          name="password"
                          label="Confirmer votre Mot de passe"
                          type="password"
                          id="password"
                          autoComplete="new-password"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          autoComplete="Title"
                          name="Titre"
                          required
                          fullWidth
                          id="Titre"
                          label="Titre"
                          autoFocus
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          fullWidth
                          id="Code Postal"
                          label="Code Postal"
                          name="Code Postal"
                          autoComplete="Code-Postal"
                        />
                      </Grid>
                      <Grid item xs={12} sm={4} >
                        
                        <FormControl required sx={{sm: 2, minWidth: 120 }}>
                          <InputLabel id="demo-simple-select-required-label">Civilité</InputLabel>
                          <Select
                            labelId="demo-simple-select-required-label"
                            id="demo-simple-select-required"
                            label="Civilité"
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
                          >
                          <MenuItem value={"Sfax"} >Sfax</MenuItem>
                          <MenuItem value={"Sousse"}>Sousse</MenuItem>
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
                      sx={{ mt: 4, mb:2 }}
                    >
                      Sign Up
                    </button>
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
        </ThemeProvider>
      )
}
export default InscRec;