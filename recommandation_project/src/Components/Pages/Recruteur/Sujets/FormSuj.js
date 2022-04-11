import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Sujets from './Sujets';


const theme = createTheme();
const FormSuj =()=>{
  const [dataSuj, setDataSuj]=React.useState({LoginRec:localStorage.getItem("LoginUser")});
  const registerSujet = event => {
    fetch('http://127.0.0.1:8000/PcdApp/sujet/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(dataSuj)
    })
    .then( data => data.json(),
    window.location.reload(true))
    .catch( error => console.error(error))
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
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
            <Sujets/>
        </Grid>
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
            <h1 className='Titre'>Proposez vos sujets!</h1>
            <Box component="form" noValidate sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          id="Titre"
                          label="Titre du sujet"
                          name="Titre"
                          value={dataSuj.Nom}
                          onChange={(e)=>{setDataSuj({...dataSuj,"Titre":e.target.value})}}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          id="Description"
                          label="Description du sujet"
                          name="Description"
                          multiline
                          rows={5}
                          value={dataSuj.Description}
                          onChange={(e)=>{setDataSuj({...dataSuj,"Description":e.target.value})}}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          name="Domaine"
                          fullWidth
                          id="Domain"
                          label="Domain"
                          autoFocus
                          value={dataSuj.Domaine}
                          onChange={(e)=>{setDataSuj({...dataSuj,"Domaine":e.target.value})}}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                      <TextField
                          required
                          fullWidth
                          name="duree"
                          label="Durée de Stage"
                          id="duree"
                          value={dataSuj.duree}
                          onChange={(e)=>{setDataSuj({...dataSuj,"duree":e.target.value})}}
                        />
                        
                      </Grid>
                      <Grid item xs={12}>
                      <TextField
                          fullWidth
                          id="Tech"
                          label="Technologies necessaire pour le sujet"
                          name="Tech"
                          value={dataSuj.Tech}
                          onChange={(e)=>{setDataSuj({...dataSuj,"Tech":e.target.value})}}
                        />
                      </Grid>
                      
                      <Grid item xs={12} sm={4} >
                        
                        <FormControl required sx={{sm: 4, minWidth: 170 }}>
                          <InputLabel id="demo-simple-select-required-label">Payée?</InputLabel>
                          <Select
                            labelId="demo-simple-select-required-label"
                            id="demo-simple-select-required"
                            label="paye"
                            name="paye"
                            value={dataSuj.paye}
                            onChange={(e)=>{setDataSuj({...dataSuj,"paye":e.target.value})}}
                          >
                          <MenuItem value={"True"} >Oui</MenuItem>
                          <MenuItem value={"False"}>Non</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={5} >
                        <FormControl required sx={{sm:4, minWidth: 348 }}>
                          <InputLabel id="demo-simple-select-required-label">Par binome?</InputLabel>
                          <Select
                            labelId="demo-simple-select-required-label"
                            id="demo-simple-select-required"
                            label="bin"
                            name="Bin"
                            value={dataSuj.Bin}
                            onChange={(e)=>{setDataSuj({...dataSuj,"Bin":e.target.value})}}
                          >
                          <MenuItem value={"True"}>Oui</MenuItem>
                          <MenuItem value={"False"}>Non</MenuItem>                       
                          </Select>
                        </FormControl>
                      </Grid>
                    </Grid>
                    <br/>   
                    <Grid container justifyContent="flex-end">
                      <Grid item>
                      <button
                      type="button" 
                      class="btn btn-outline-secondary"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 10, mb:2 }}
                      onClick={registerSujet}
                      
                    >
                      Ajouter Sujet
                    </button>
                      </Grid>
                    </Grid>
                  </Box>
                  
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
export default FormSuj;