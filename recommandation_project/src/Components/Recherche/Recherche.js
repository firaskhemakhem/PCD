import { useState, useEffect } from 'react';

import HeaderCan from '../Pages/Etudiant/HeaderCan';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from '@mui/material';
import Input from '@material-ui/core/Input';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SujetTitre from './SujetTitre';
import SujetDomaine from './SujetDomaine';
function Recherche() {
    const [data, setData] = useState([]);
    const theme = createTheme();
    const [searchTeamTitre, setSearchTeamTitre] = useState('');
    const [searchTitre, setSearchTitre] = useState('');
    const [searchTeamDomaine, setSearchTeamDomaine] = useState('');
    const [searchDomaine, setSearchDomaine] = useState('');
    const [visTitre, setVisTitre] = useState(false);
    const [visDomaine, setVisDomaine] = useState(false);
    const [vis, setVis] = useState(false);
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/PcdApp/sujet/`)
            .then((response) => response.json())
            .then((json) => setData(json))

    }, []);


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
                        <Input
                            type="text"
                            name='Recherche'
                            id="Recherche"
                            value={searchTitre}
                            placeholder={`Recherche selon Titre`}
                            onChange={(event) => { setSearchTitre(event.target.value); setSearchTeamTitre(event.target.value); console.log(searchTeamTitre); setVisTitre(true) }}
                            style={{
                                width: '450px',
                                borderRadius: '5px',
                                marginLeft: '10px',
                                height: '50px'
                            }}
                            startAdornment={
                                <InputAdornment position='start'>
                                    <SearchIcon />
                                </InputAdornment>
                            }
                        />
                        <div style={{
                            border: '0.5px solid ',
                            borderRadius: '5px',
                            width: '470px',
                            marginLeft: '10px'

                        }}>
                            {visTitre && data.filter((sujet) => {
                                return sujet.Titre.toLowerCase().includes(searchTeamTitre.toLowerCase())
                            }).map((sujet) => {
                                return <div className='suggestion' key={sujet.Id_sujet} onClick={() => { setSearchTitre(sujet.Titre); setSearchTeamTitre(sujet.Titre) }}>
                                    {sujet.Titre}
                                </div>
                            })
                            }
                        </div>
                        <div>

                        </div>
                        <div className="App">
                            <SujetTitre />
                        </div>
                    </Grid>


                    <Grid item xs={12} sm={6} md={6} component={Paper} elevation={6} square>
                        <Box
                            sx={{
                                //   my: 8,
                                mx: 4,
                                display: 'flex',
                                //  flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Grid item xs={12} sm={8}>

                                <Input
                                    type="text"
                                    name='Recherche'
                                    id="Recherche"
                                    value={searchDomaine}
                                    placeholder={`Recherche selon Domaine`}
                                    onChange={(event) => { setSearchDomaine(event.target.value); setSearchTeamDomaine(event.target.value); console.log(searchTeamDomaine); setVisDomaine(true) }}
                                    style={{
                                        width: '450px',
                                        borderRadius: '8px',
                                        marginLeft: '10px',
                                        height: '50px'
                                    }}
                                    startAdornment={
                                        <InputAdornment position='start'>
                                            <SearchIcon />
                                        </InputAdornment>
                                    }
                                />
                                <Button variant="contained" onClick={() => {
                                    localStorage.setItem("searchTeamTitre", searchTeamTitre); localStorage.setItem("searchTeamDomaine", searchTeamDomaine); window.location.reload(true);
                                    
                                }} style={{
                                    marginLeft: '525px',
                                    marginTop: '-40px'
                                }} >Recherche</Button>
                                <div style={{
                                    border: '0.5px solid ',
                                    borderRadius: '5px',
                                    width: '470px',
                                    marginLeft: '10px',
                                    marginTop: '-25px'

                                }}>

                                    {visDomaine && data.filter((sujet) => {
                                        return sujet.Domaine.toLowerCase().includes(searchTeamDomaine.toLowerCase())
                                    }).map((sujet) => {
                                        return <div className='suggestion' key={sujet.Id_sujet} onClick={() => { setSearchDomaine(sujet.Domaine); setSearchTeamDomaine(sujet.Domaine) }}>
                                            {sujet.Domaine}

                                        </div>

                                    })
                                    }
                                </div>
                                <div className="App">
                                   
                                 <SujetDomaine />
                                </div>

                            </Grid>




                        </Box>
                    </Grid>



                    {/* //style={{width: '455px',marginLeft: '10px'}} 
            style={{width: '455px',marginLeft: '655px',marginTop:'-80px'}}*/}



                </Grid>
            </ThemeProvider>

        </div>


    );

}
export default Recherche;