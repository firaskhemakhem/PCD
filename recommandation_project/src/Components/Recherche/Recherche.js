import { useState, useEffect } from 'react';

import HeaderCan from '../Pages/Etudiant/HeaderCan';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SujetDomaine from './SujetDomaine';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import V from './V';

function Recherche() {
    const [value, setValue] = React.useState('');
    const [inputValue, setInputValue] = React.useState('');
    const [data, setData] = useState([]);
    const theme = createTheme();
    const [visible, setVisible] = React.useState(false);
    const [vis, setVis] = useState(false);
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/PcdApp/sujet/`)
            .then((response) => response.json())
            .then((result) => { setData(result) })
     
        
          

    }, []);
    // useEffect(()=>{
    //     fun()
    // })
    
    const fun =()=>{
        if (localStorage.getItem("Visible")=== "true"){
            setVisible(true)
            alert("ok")
        }
        else{setVisible(false)
        alert("not ok")}

    }
  
    return (
        <div>
            <HeaderCan />
            <div style={{
                marginTop: '40px',
                marginLeft: '150px',

            }}>
                <h4>  <ArrowBackIosIcon />
                    Candidat</h4>
            </div>
            <div style={{
                textAlign: 'center',
                color: '#023C59',
                marginTop: '20px'
            }}>
                <h3>Rechercher une offre de stage</h3>
            </div>
            <div style={{
                marginRight: '890px',
                marginLeft: '8px',
                marginTop: '30px'
            }}>
            </div>
            <ThemeProvider theme={theme}>
                <Grid container component="main" sx={{ height: '180vh' }}>
                    <CssBaseline />
                    <Grid
                        item
                        xs={false}
                        sm={6}
                        md={6}
                        sx={{
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: (t) =>
                                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                         <div>
            
                            {localStorage.setItem("inputValue", `${inputValue}`)}

                            <Autocomplete
                                value={value}
                                onChange={(event, newValue) => { setValue(newValue) }}
                                inputValue={inputValue}
                                onInputChange={(event, newInputValue) => {
                                    setInputValue(newInputValue);
                                }}
                                freeSolo
                                id="free-solo-2-demo"
                                disableClearable
                                options={data.map((option) => option.Domaine || option.Titre ||option.duree)}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Recherche selon Domaine,Titre,ou Duree "
                                        InputProps={{
                                            ...params.InputProps,
                                            type: 'search',
                                        }}
                                        style={{
                                            paddingBottom: '5px',
                                            paddingLeft: '5px',
                                            width: '500px'
                                        }}
                                    />
                                )}
                            />
                            <button class="btn btn-outline-secondary" variant="contained" onClick={() => { setVis(true) ;if(localStorage.getItem("contenu")!=localStorage.getItem("inputValue")){
                                setVis(false)
                            };  localStorage.setItem("contenu",`${inputValue}`);setVisible(true) }}

                                style={{
                                    marginLeft: '525px',
                                    marginTop: '-90px'
                                }} >Recherche</button>
                        </div>
                      
                         {vis && <div className="App">
                             
            
                            <SujetDomaine />
                        </div>}
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} component={Paper} elevation={6} square>

                       { visible && <V/>}
                      
                    </Grid>
                </Grid>
            </ThemeProvider>

        </div>


    );

}
export default Recherche;