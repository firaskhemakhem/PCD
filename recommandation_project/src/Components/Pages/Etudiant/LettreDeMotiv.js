import React, {useEffect} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HeaderCan from './HeaderCan';
import PopUpMessage from '../../PopUpMessage/PopUpFile';
import {useNavigate} from 'react-router';
const theme = createTheme();
export default function LettreDeMotiv() {
    //const IdStu=window.location.href.split('/')[4];
    const [data, setData]=React.useState([]);
    const [dataFinal,setDataFinal]= React.useState([]);
    const [nomEtu, setNomEtu]= React.useState('');
    const [openPop, setOpenPop]= React.useState(false);

    const navigate = useNavigate();

    const IdStu = localStorage.getItem("LoginUser");
    const IdRec= localStorage.getItem("IdRec");
    const IdSuj=localStorage.getItem('IDSujInter');

    //const date=Date().toLocaleString().split(' ');
    const date=new Date()
    var jour;
    var mois;
    var tempsM;
    var tempsH;
    const fixJour=()=>{
        
        if (date.getDate()<10)
            jour="0"+date.getDate();
        else 
            jour= date.getDate();
    }
    const fixMois=()=>{
        
        if (date.getMonth()<9)
            mois="0"+date.getMonth();
        else 
            mois= date.getMonth();
    }
    const fixMinu=()=>{
        if (date.getMinutes()<10)
            tempsM="0"+date.getMinutes();
        else 
            tempsM= date.getMinutes();
    }
    const fixheure=()=>{
        if (date.getHours()<10)
            tempsH="0"+date.getHours();
        else 
            tempsH= date.getHours();
    }
    
    //var format="Le 0"+ jour + "/0" + mois + "/" + annee + " à " + temps;
    var format= React.useRef(null)
    useEffect(() => {
        
        fetch(`http://127.0.0.1:8000/PcdApp/interessant/`,{
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
            })
        .then(response => response.json())
        .then((result)=>{
            setData(result) 
        })
        fetch(`http://127.0.0.1:8000/PcdApp/student/${IdStu}/`,{
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
            })
        .then(response => response.json())
        .then((result)=>{
            //console.log(reslt)
            setNomEtu(result.Nom)
        })
      }, []);

    const FetchData=()=>{
        fixJour();
        fixMois();
        fixMinu();
        fixheure();
        format="Le "+ jour + "/" + mois + "/" + date.getFullYear() + " à " + tempsH + ":" + tempsM ;
        console.log(data);
        for (let i=0 ; i < data.length ; i++){
            if (data[i].recruteur===IdRec && data[i].student===IdStu  && data[i].id_sujet===IdSuj){
                setDataFinal({"Recruteur":IdRec,"Student":IdStu, "Sujet":IdSuj, "Nom":nomEtu , "Time": format})
            }
        }
    }

    const addNotif = event => {
        FetchData();
        fetch('http://127.0.0.1:8000/PcdApp/notifRec/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataFinal)
        }).then(data => data.json(),
        console.log(data))
        .then(setOpenPop(true))
        .catch(error => console.error(error),console.log(dataFinal))
    }
    // onSubmit={(e)=>{fixJour();
    //     fixMois();
    //     fixMinu();
    //     fixheure();}}
    return (
        
        <ThemeProvider theme={theme}>

            <CssBaseline />
            <HeaderCan/>

            <Container component="main"  maxWidth="lg" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
               
                    <Typography component="h1" variant="h5" >
                        Lettre De Motivation
                    </Typography>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '50ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="outlined-multiline-static"
                            label="De"
                            placeholder=" Nom & Prénom, 
                            Adresse
                            CodePostal/Gouv
                            Numéro de Telephone"
                            multiline
                            rows={4}
                        />

                        <Grid container justifyContent="flex-end">
                            <TextField
                                id="outlined-multiline-static"
                                label="A"
                                placeholder=" Nom de l'Entreprise, 
                                Adresse de l'Entreprise
                                CodePostal/Gouv
                                Date de Lettre"
                                multiline
                                rows={4}
                            /></Grid>
                    </Box>

                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '120ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="outlined-multiline-static"
                            label="Objet"
                            
                            multiline
                            fullWidth
                        />
                        <TextField
                            id="outlined-multiline-static"
                            label="Corps/Contenu"
                            multiline
                            rows={9}
                            fullWidth
                        />
                    </Box>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '50ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >   <Grid container justifyContent="flex-end">
                            <TextField
                                id="outlined-multiline-static"
                                label="Signature"
                                multiline
                                rows={1}
                            />
                            
                        </Grid>
                        <Grid container justifyContent="flex-end">
                            <button 
                                type="submit"
                                class="btn btn-outline-secondary"
                                onClick={(e)=>{
                                e.preventDefault()
                                addNotif(e)}}
                            >
                                Envoyer
                            </button>
                        </Grid>
                    </Box>
                </Paper>
            </Container>
            <div align="center">
                {openPop && <PopUpMessage dataFromParent ={<>
                <h3><b>félicitations!</b></h3><br/>
                <p>Votre condidature a été envoyer!</p>
                    <button class="btn btn-outline-dark" variant="contained" onClick={(e)=>{
                        e.preventDefault()
                        addNotif(e)
                        navigate('/entreprise/'+IdRec);
                        }}
                    >
                        Ok
                    </button>
                </>}
          />}
            </div>
        </ThemeProvider>
    );
}
