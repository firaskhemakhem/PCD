import * as React from 'react';
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


const InscEtu =()=>{
 
      const [value, setValue] = React.useState(new Date());
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
                      <Grid item xs={12}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <Stack spacing={3}>
                            <DesktopDatePicker
                              label="Date de Naissance"
                              value={value}
                              minDate={new Date('1990-01-01')}
                              onChange={(newValue) => {
                                setValue(newValue);
                              }}
                              renderInput={(params) => <TextField {...params} />}
                            />
                          </Stack>
                        </LocalizationProvider>
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
                    <NavLink to ="/Auth">
                    <button
                      type="button" 
                      class="btn btn-outline-secondary"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 4, mb:2 }}
                    >
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
      )
}
export default InscEtu;