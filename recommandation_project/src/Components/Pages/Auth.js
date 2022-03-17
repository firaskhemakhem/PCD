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
import {NavLink} from 'react-router-dom';
import "../../styles/Pages/Authentification.css";


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  
const theme = createTheme();

const Auth =()=>{
      const [value, setValue] = React.useState(new Date());
        return ( 
            <ThemeProvider theme={theme}>
              <div className='backgAuth'>
              <Container component="main" maxWidth="xs" className='BorderAuth'>
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
                    Authentifier
                  </Typography>
                  <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          name="Login"
                          label="Login"
                          type="Login"
                          id="Login"
                          autoComplete="Login"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          name="password"
                          label="Mot de passe"
                          type="password"
                          id="password"
                          autoComplete="new-password"
                        />
                      </Grid>
                    </Grid>
                    <br/>
                    <NavLink to ="/EspCand">
                    <button
                      type="button" 
                      class="btn btn-outline-secondary"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 4, mb:2 }}
                    >
                      Sign In
                    </button>
                    </NavLink>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                            mot de passe oublié?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                            {"Pas de compte? Inscrivez-vous!"}
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
export default Auth;