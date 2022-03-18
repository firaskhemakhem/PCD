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
import "../../styles/Pages/Inscription.css";

const theme = createTheme();

export default function InscRec() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

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
                                    {mt: 3}
                            }>
                                <Grid container
                                    spacing={2}>
                                    <Grid item
                                        xs={12}>
                                        <TextField required fullWidth id="nom" label="Nom De L'Entreprise" name="Nom De L'Entreprise" autoComplete="Nom De L'Entreprise"/>
                                    </Grid>
                                    <Grid item
                                        xs={12}>
                                        <TextField required fullWidth id="email" label="Addresse Email" name="email" autoComplete="email"/>
                                    </Grid>
                                    <Grid item
                                        xs={12}
                                        sm={6}>
                                        <TextField required name="Login" fullWidth id="login" label="Login" autoFocus/>
                                    </Grid>
                                    <Grid item
                                        xs={12}
                                        sm={6}>
                                        <TextField required fullWidth id="Code Postal" label="Code Postal" name="Code Postal" autoComplete="Code-Postal"/>
                                    </Grid>

                                    <Grid item
                                        xs={12}>
                                        <TextField required fullWidth name="password" label="Mot de Passe" type="password" id="password" autoComplete="new-password"/>
                                    </Grid>
                                    <Grid item
                                        xs={12}>
                                        <TextField required fullWidth name="password" label="Confirmer votre Mot de passe" type="password" id="password" autoComplete="new-password"/>
                                    </Grid>
                                    <Grid item
                                        xs={12}>
                                        <TextField required fullWidth id="tel" label="Numéro de Teléphone" name="tel"/>
                                    </Grid>
                                    <Grid item
                                        xs={12}
                                        sm={4}>

                                        <FormControl required
                                            sx={
                                                {
                                                    sm: 4,
                                                    minWidth: 150
                                                }
                                        }>
                                            <InputLabel id="demo-simple-select-required-label">Civilité</InputLabel>
                                            <Select labelId="demo-simple-select-required-label" id="demo-simple-select-required" label="Civilité">
                                                <MenuItem value={"Madame"}>Madame</MenuItem>
                                                <MenuItem value={"Monsieur"}>Monsieur</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item
                                        xs={12}
                                        sm={5}>
                                        <FormControl required
                                            sx={
                                                {
                                                    sm: 4,
                                                    minWidth: 300
                                                }
                                        }>
                                            <InputLabel id="demo-simple-select-required-label">Gouvernorat</InputLabel>
                                            <Select labelId="demo-simple-select-required-label" id="demo-simple-select-required" label="Civilité">
                                                <MenuItem value={"Sfax"}>Sfax</MenuItem>
                                                <MenuItem value={"Sousse"}>Sousse</MenuItem>
                                                <MenuItem value={"Sousse"}>Sousse</MenuItem>
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
                                <button type="button" class="btn btn-outline-secondary" fullWidth variant="contained"
                                    sx={
                                        {
                                            mt: 4,
                                            mb: 2
                                        }
                                }>
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