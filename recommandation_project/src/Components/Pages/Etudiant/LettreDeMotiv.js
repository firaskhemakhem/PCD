import React, { useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HeaderCan from './HeaderCan';
import PopUpMessage from '../../PopUpMessage/PopUpFile';
import { useNavigate } from 'react-router';
const theme = createTheme();
export default function LettreDeMotiv() {
    //const IdStu=window.location.href.split('/')[4];
    const [data, setData] = React.useState([]);
    const [dataFinal, setDataFinal] = React.useState([]);
    const [nomEtu, setNomEtu] = React.useState('');
    const [openPop, setOpenPop] = React.useState(false);
    const [state, setState] = React.useState({
        dataSujet: [],
        isLoginSujet: false,
        dataAgenda: [],
        isLoginAgenda: false,
        url: '',
        credentials: {},
        isFavorite: false,
        color: 'success',
        content: 'Suivre',
        data: {},
        id: '',
        isFeed: false,
        feedInput: '',
        ratingInput: -1,
        open: false
    })
    const navigate = useNavigate();

    const IdStu = localStorage.getItem("LoginUser");
    const IdRec = localStorage.getItem("IdRec");
    const IdSuj = localStorage.getItem('IDSujInter');
    const agendaData = state.dataAgenda;

    const rowsAgenda = agendaData.map((agenda) =>

    (state.isLoginAgenda && <tr key={agenda.Id_Calend}>
        {localStorage.setItem("Id_ag", agenda.Id_Calend)}
        <td>{agenda.Date}</td>
        <td>{agenda.StartTime}</td>
        <td>{agenda.EndTime}</td>
        <td><button className="btn btn-outline-secondary">Confirmer</button></td>

    </tr>));
    //const date=Date().toLocaleString().split(' ');
    const date = new Date()
    var jour;
    var mois;
    var tempsM;
    var tempsH;
    const fixJour = () => {

        if (date.getDate() < 10)
            jour = "0" + date.getDate();
        else
            jour = date.getDate();
    }
    const fixMois = () => {

        if (date.getMonth() < 9)
            mois = "0" + date.getMonth();
        else
            mois = date.getMonth();
    }
    const fixMinu = () => {
        if (date.getMinutes() < 10)
            tempsM = "0" + date.getMinutes();
        else
            tempsM = date.getMinutes();
    }
    const fixheure = () => {
        if (date.getHours() < 10)
            tempsH = "0" + date.getHours();
        else
            tempsH = date.getHours();
    }

    //var format="Le 0"+ jour + "/0" + mois + "/" + annee + " à " + temps;
    var format = React.useRef(null)
    useEffect(() => {

        //fetchDataAgenda();
        //fetchDataSujet();
        //fetchDataAgenda();
        //fetchDataFollow();
        //fetchDataFeed();
        console.log(state)
        fetch(`http://127.0.0.1:8000/PcdApp/agenda/`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
        

            .then(response => response.json())
            .then((result) => {
                console.log(result);
               // console.log(localStorage.getItem("Login"))
                // setState({...state,
                //     "url": window.location.href.split('/')[4]
                // })
                for (let i = 0; i < result.length; i++) {
                    if (result[i].LoginRec == IdRec) {
                        console.log(result[i])
                        setState({...state,
                            "dataAgenda": [...state.dataAgenda, result[i]],
                        ...state,
                            "isLoginAgenda": true
                        })
                        localStorage.setItem('isLoginAgenda', true)
                    }

                }
                console.log(state.isLoginAgenda);
                console.log(state.dataAgenda);
               
            });
        fetch(`http://127.0.0.1:8000/PcdApp/interessant/`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then((result) => {
                setData(result)
            })
        fetch(`http://127.0.0.1:8000/PcdApp/student/${IdStu}/`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then((result) => {
                //console.log(reslt)
                setNomEtu(result.Nom)
            })
        //fetchDataAgenda();
    }, []);

    const FetchData = () => {
        fixJour();
        fixMois();
        fixMinu();
        fixheure();
        format = "Le " + jour + "/" + mois + "/" + date.getFullYear() + " à " + tempsH + ":" + tempsM;
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            if (data[i].recruteur === IdRec && data[i].student === IdStu && data[i].id_sujet === IdSuj) {
                setDataFinal({ "Recruteur": IdRec, "Student": IdStu, "Sujet": IdSuj, "Nom": nomEtu, "Time": format })
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
            .catch(error => console.error(error), console.log(dataFinal))
    }
    // onSubmit={(e)=>{fixJour();
    //     fixMois();
    //     fixMinu();
    //     fixheure();}}
    const sendEmail = () => {
        window.open("mailto:pcdensi911@gmail.com?subject=SendMail&body=Description");
    };

    
    return (

        <ThemeProvider theme={theme}>

            <CssBaseline />
            <HeaderCan />

            <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>

                    <Typography component="h1" variant="h5" align="center">
                        Choisir le temps approprié pour vous
                    </Typography>

                    <div>
                        {state.isLoginAgenda &&
                            <div>
                                <div style={{
                                    textAlign: 'center',
                                    fontSize: '18px'
                                }}>
                                    <p>Si vous etes intéressé par au moins un sujet </p>
                                    <p>Confirmer une date d'entretien selon la compatibilité de votre disponibilté et la disponibilté de recruteur de cette entreprise</p>
                                    <p>N'hésiter pas de cliquer sur le button "Confirmer"</p>
                                </div>




                                <h4 style={{
                                    textAlign: 'center',
                                    color: '#023C59'
                                }} >La disponibilité de {state.url} pour les entretiens</h4>
                                <div style={{
                                    border: '4px solid #023C59',
                                    borderRadius: '8px',
                                    paddingTop: '15px',
                                    marginRight: '50px',
                                    marginLeft: '50px'

                                }}>
                                    <table class="table">
                                        <thead>


                                            <tr>
                                                <th scope="col">ID</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Temps Début</th>
                                                <th scope="col">Temps fin</th>
                                                <th scope="col">Votre disponilité</th>

                                            </tr>


                                        </thead>
                                        <tbody>
                                            {rowsAgenda}
                                        </tbody>
                                    </table>
                                </div>
                            </div>}
                    </div>
                </Paper>
            </Container>
            <div align="center">
                {openPop && <PopUpMessage dataFromParent={<>
                    <h3><b>félicitations!</b></h3><br />
                    <p>Votre condidature a été envoyer!</p>

                    <button class="btn btn-outline-dark" variant="contained" onClick={(e) => {
                        e.preventDefault()
                        addNotif(e)
                        navigate('/entreprise/' + IdRec);

                        //navigate(React.Linking.openURL('mailto:support@example.com'))
                    }}
                        //onPress={() => React.Linking.openURL('mailto:support@example.com') }
                        title="support@example.com"
                    >
                        {/* <a href="mailto:sara.oualha@ensi-uma.tn"> */}
                        Ok
                        {/* </a> */}
                    </button>

                </>}
                />}
            </div>
        </ThemeProvider>
    );
}
/*<Box
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
                                sendEmail()
                                addNotif(e)}}
                                //onPress={() => Linking.openURL('mailto:support@example.com') }
                                //onPress={() => React.Linking.openURL('mailto:support@example.com') }
                                //title="support@example.com"
                            >
                                Envoyer
                            </button>
                        </Grid>
                    </Box>*/