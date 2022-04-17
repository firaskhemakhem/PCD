import React from "react";


import HeaderRec from "../HeaderRec";

import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Sujets from './Sujets';


class UpdateSuj extends React.Component {  
 
    constructor(){
        super();
        this.state={
        credentials:{ Id_sujet:localStorage.getItem("Id_suj"),
          Titre:'',
          Description:'',
          Domaine:'',
          duree:'',
          Tech:'',
          paye:'',
          Bin:'',
          Att:'',
          LoginRec:localStorage.getItem("LoginRec")}
        }
        //this.changeHandler=this.changeHandler.bind(this);
        //this.submitForm=this.submitForm.bind(this);
    }
  /*  changeHandler(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }
   
   /*submitForm(){
    var id = this.state.Id_sujet;
        fetch(`http://127.0.0.1:8000/PcdApp/agenda/${id}/`,{
            method:'PUT',
            body:JSON.stringify(this.state),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response=>response.json())
        .then((data)=>console.log(data));
    }*/

    // fetchData(){
    //    var id = this.state.Id_sujet;
    //     fetch(`http://127.0.0.1:8000/PcdApp/agenda/${id}/`)
    //     .then(response=>response.json())
    //     .then((data)=>{
    //         this.setState({
    //             Titre:data.Titre,
    //             Description:data.Description,
    //             Domaine:data.Domaine,
    //             duree:data.duree,
    //             Tech:data.Tech,
    //             paye:data.paye,
    //             Bin:data.Bin,
    //             Att:data.Att,
    //             LoginRec:data.LoginRec
    //         });
    //     });
    // }

    // componentDidMount(){
    //     this.fetchData();   
    // }
    componentDidMount() {
        const id = window.location.href.split('/')[4];
        fetch(`http://127.0.0.1:8000/PcdApp/sujet/${id}/`, {
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
        var id = this.state.credentials.Id_sujet;
        fetch(`http://127.0.0.1:8000/PcdApp/sujet/${id}/`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.state.credentials)
        })
          .then(data => data.json())
          .then(console.log(this.state.credentials))
          .catch(error => console.error(error))
      }
      inputChanged = (event) => {
        const cred = this.state.credentials;
        console.log(event.target.value);
        cred[event.target.name] = event.target.value;
        this.setState({ credentials: cred });
    
      }
    
    render(){
        const theme = createTheme();
        return(
            <div>
            <HeaderRec/>
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
            <h1 className='Titre'>Modifier vos sujets!</h1>
            <Box component="form" noValidate sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                         focused
                          required
                          fullWidth
                          id="Titre"
                          label="Titre du sujet"
                          name="Titre"
                          value={this.state.credentials.Titre}
                          onChange={this.inputChanged}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          focused
                          required
                          fullWidth
                          id="Description"
                          label="Description du sujet"
                          name="Description"
                          multiline
                          rows={5}
                          value={this.state.credentials.Description}
                          onChange={this.inputChanged}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          focused
                          required
                          name="Domaine"
                          fullWidth
                          id="Domain"
                          label="Domain"
                          autoFocus
                          value={this.state.credentials.Domaine}
                          onChange={this.inputChanged}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                      <TextField
                         focused
                          required
                          fullWidth
                          name="duree"
                          label="Durée de Stage"
                          id="duree"
                          value={this.state.credentials.duree}
                          onChange={this.inputChanged}
                        />
                        
                      </Grid>
                      <Grid item xs={12}>
                      <TextField
                          focused
                          fullWidth
                          id="Tech"
                          label="Technologies necessaire pour le sujet"
                          name="Tech"
                          value={this.state.credentials.Tech}
                          onChange={this.inputChanged}
                        />
                      </Grid>
                      
                      <Grid item xs={12} sm={4} >
                        
                        <FormControl required sx={{sm: 4, minWidth: 170 }}>
                          <InputLabel id="demo-simple-select-required-label">Payée?</InputLabel>
                          <Select
                           focused
                            labelId="demo-simple-select-required-label"
                            id="demo-simple-select-required"
                            label="paye"
                            name="paye"
                            value={this.state.credentials.paye}
                            onChange={this.inputChanged}
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
                            focused
                            labelId="demo-simple-select-required-label"
                            id="demo-simple-select-required"
                            label="bin"
                            name="Bin"
                            defaultInputValue={this.state.credentials.Bin}
                            onChange={this.inputChanged}
                          >
                          <MenuItem value={"True"} >Oui</MenuItem>
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
                      onClick={this.update}
                      
                    >
                      Confirmer
                    </button>
                      </Grid>
                    </Grid>
                  </Box>
                  
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
        </div>
        );
    
}}
export default UpdateSuj;