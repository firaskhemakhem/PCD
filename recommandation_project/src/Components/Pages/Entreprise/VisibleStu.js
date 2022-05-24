import React from 'react';
import HeaderCan from '../Etudiant/HeaderCan';
import Button from '@mui/material/Button';

import { Textarea } from '@chakra-ui/react';
import StarRatings from 'react-star-ratings';
import FeedBackEntrp from './FeedBackEntrp';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import {NavLink} from 'react-router-dom';

class VisibleStu extends React.Component {


    constructor() {
        super();
        this.state = {
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
            open: false,
            emailRec:'',


        };
        this.handleMessageInput = this.handleMessageInput.bind(this);
    }
    handleMessageInput(inputName, content) {
        if (inputName === 'Rating') {
            this.setState({ ratingInput: content });
        } else if (inputName === 'FeedBack') {
            this.setState({ feedInput: content });
        }
    }
    handleRatingInput(ratingInput) {
        this.setState({ ratingInput: ratingInput });
    }
    handleFeedInput(feedInput) {
        this.setState({ feedInput: feedInput });

    }
    update = event => {
        var id = this.state.data.id;
        console.log(id);
        fetch(`http://127.0.0.1:8000/PcdApp/suit/${id}/`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    "follow": (!this.state.isFavorite),
                    "recruteur": this.state.url,
                    "student": localStorage.getItem("LoginUser")
                }
            )
        })
            .then(data => data.json())
            .then((result) => {
                console.log(result);
                // window.location.reload(true);
            })
            .catch(error => console.error(error));

    }

    register = event => {
        fetch('http://127.0.0.1:8000/PcdApp/suit/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    "follow": this.state.isFavorite,
                    "recruteur": this.state.url,
                    "student": localStorage.getItem("LoginUser"),
                }

            )
        })
            .then(data => data.json())
            .then((result) => {

                this.setState({
                    credentials: result
                });
                //window.location.reload(true);
                console.log(result);

            })
            .catch(error => console.error(error));

    }
    registerInter = (event, idsuj) => {
        fetch('http://127.0.0.1:8000/PcdApp/interessant/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    "Att": false,
                    "id_sujet": idsuj,
                    "recruteur": this.state.url,
                    "student": localStorage.getItem("LoginUser"),
                }

            )
        })
            .then(data => data.json())
            .then((result) => {

                this.setState({
                    credentials: result
                });
                //window.location.reload(true);
                console.log(result);

            })
            .catch(error => console.error(error));

    }
    registerfeed = (event) => {
        fetch('http://127.0.0.1:8000/PcdApp/feedbacketurec/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    "Recruteur": window.location.href.split('/')[4],
                    "FeedBack": this.state.feedInput,
                    "Rating": this.state.ratingInput
                }
            )
        })
            .then(data => data.json())
            .then((result) => {

                console.log(result);

            })
            .catch(error => console.error(error));

    }
    fetchDataFollow = (event) => {
        fetch(`http://127.0.0.1:8000/PcdApp/suit/`)
            .then(response => response.json())
            .then((result) => {
                console.log(result);
                console.log(window.location.href.split('/')[4]);
                console.log(localStorage.getItem("LoginUser"));
                this.setState({
                    url: window.location.href.split('/')[4]
                })
                for (let i = 0; i < result.length; i++) {
                    console.log(result[i].recruteur)
                    console.log(result[i].student)
                    if (result[i].recruteur == window.location.href.split('/')[4] && result[i].student == localStorage.getItem("LoginUser")) {
                        this.setState({
                            ...this.state, data: result[i]

                        })
                        if (result[i].follow == true) {
                            this.setState({
                                color: 'error',
                                content: 'Ne plus Suivre',
                                isFavorite: false
                            })
                        }

                        else if (result[i].recruteur !== window.location.href.split('/')[4] && result[i].student == localStorage.getItem("LoginUser")) {
                            this.setState({
                                ...this.state, data: result[i]
                            })
                            this.register(event)
                        }
                    } else if (result[i].recruteur !== window.location.href.split('/')[4]) {
                        this.setState({
                            data: result[i], ...this.state
                        })
                        this.register(event)
                    }

                }
            });
    }
    change = event => {
        if (this.state.isFavorite == false) {

            this.setState({
                color: 'error',
                content: 'Ne plus Suivre',
                isFavorite: true
            });
            { this.update(event) }

        } else if (this.state.isFavorite == true) {

            this.setState({
                color: 'success',
                content: 'Suivre',
                isFavorite: false,

            });
            { this.update(event) }
        }

        console.log(this.state.color);
        console.log(this.state.isFavorite)


    }

    fetchDataSujet() {
        fetch(`http://127.0.0.1:8000/PcdApp/sujet/`)

            .then(response => response.json())
            .then((result) => {
                console.log(result);
                console.log(window.location.href.split('/')[4]);

                this.setState({
                    url: window.location.href.split('/')[4]
                })
                //  console.log(localStorage.getItem("Login"))
                for (let i = 0; i < result.length; i++) {
                    if (result[i].LoginRec == this.state.url) {
                        this.setState({ dataSujet: [...this.state.dataSujet, result[i]] })
                        this.setState({
                            isLoginSujet: true
                        })
                        localStorage.setItem('isLoginSujet', true)
                    }

                }
                console.log(this.state.dataSujet);
                console.log(this.state.isLoginSujet);
            });
    }
    fetchDataAgenda() {
        fetch(`http://127.0.0.1:8000/PcdApp/agenda/`)

            .then(response => response.json())
            .then((result) => {
                console.log(result);
                //  console.log(localStorage.getItem("Login"))
                this.setState({
                    url: window.location.href.split('/')[4]
                })
                for (let i = 0; i < result.length; i++) {
                    if (result[i].LoginRec == this.state.url) {
                        this.setState({ dataAgenda: [...this.state.dataAgenda, result[i]] })
                        this.setState({
                            isLoginAgenda: true
                        })
                        localStorage.setItem('isLoginAgenda', true)
                    }

                }
                console.log(this.state.dataAgenda);
                console.log(this.state.isLoginAgenda);
            });
    }
    fetchDataFeed() {
        fetch(`http://127.0.0.1:8000/PcdApp/interessant/`)

            .then(response => response.json())
            .then((result) => {
                console.log(result);
                //  console.log(localStorage.getItem("Login"))
                this.setState({
                    url: window.location.href.split('/')[4]
                })
                for (let i = 0; i < result.length; i++) {
                    if (result[i].recruteur == this.state.url && result[i].student == localStorage.getItem("LoginUser") && result[i].Att == true) {
                        // this.setState({ dataAgenda: [...this.state.dataAgenda, result[i]] })
                        this.setState({
                            isFeed: true
                        })
                        localStorage.setItem('isLoginFeed', true)
                    }

                }
                console.log(this.state.dataAgenda);
                console.log(this.state.isLoginAgenda);
            });
    }

    fetchRecData(){
        fetch(`http://127.0.0.1:8000/PcdApp/recruteur/${window.location.href.split('/')[4]}/`,{
        method: 'Get',
        headers: { 'Content-Type': 'application/json' },
    })
        .then(data => data.json())
        .then((result) => {
            console.log(result);
            this.setState({
            emailRec: result.Email
            })
            console.log(this.state.emailRec);
        })
        .catch(error => console.error(error));
        
    }

    componentDidMount() {
        this.fetchDataSujet();
        this.fetchRecData();
        this.fetchDataFollow();
        this.fetchDataFeed();

    }

    render() {
        const Transition = React.forwardRef(function Transition(props, ref) {
            return <Slide direction="up" ref={ref} {...props} />;
        });
        const handleClickOpen = () => {
            this.setState({
                open: true
            })
        };

        const handleClose = () => {
            this.setState({
                open: false
            })
        };
    

        const sujetData = this.state.dataSujet;
        const IdStu = localStorage.getItem("LoginUser");
        { localStorage.setItem("IdRec", window.location.href.split('/')[4]) }
        //const IdEntre= window.location.href.split('/')[4];
        { localStorage.setItem("EmailRec", this.state.emailRec) }
        const rowsSujet = sujetData.map((sujet) =>

        (this.state.isLoginSujet && <tr key={sujet.Id_sujet}>
            {localStorage.setItem("Id_sujet", sujet.Id_sujet)}
            <td>{sujet.Titre}</td>
            <td>{sujet.Description}</td>
            <td>{sujet.Domaine}</td>
            <td><NavLink to={"/ChoisirTemps/" + IdStu}><button className="btn btn-outline-secondary" onClick={(e) => { this.registerInter(e, sujet.Id_sujet); localStorage.setItem('IDSujInter', sujet.Id_sujet) }}>Intéresser</button></NavLink></td>
        </tr>));
     

        return (

            <div>

                <HeaderCan /><br />
                <div style={{
                    marginLeft: '15px'
                }}><Button variant="contained" color={`${this.state.color}`} onClick={(e) => this.change(e)}>
                        {this.state.content}
                    </Button></div>
                <div >

                    {this.state.isLoginSujet &&

                        <div>
                            <div>
                                <div style={{
                                    textAlign: 'center',
                                    fontSize: '18px'
                                }}>
                                    <p>Une bréve description concernat les sujets déposés par cette entreprise</p>
                                    <p>Vous etes intéressé ?</p>
                                    <p>N'hésiter pas de cliquer sur le button "Intéresser"</p>
                                </div>
                                <h4 style={{
                                    textAlign: 'center',
                                    color: '#023C59'
                                }}>Les Sujets Déposés par {this.state.url}</h4>
                                <div style={{
                                    border: '4px solid #023C59',
                                    borderRadius: '8px',
                                    paddingTop: '15px',
                                    marginRight: '50px',
                                    marginLeft: '50px'
                                }}>
                                    <table class="table" >
                                        <thead>
                                            <tr>
                                                <th scope="col">Titre</th>
                                                <th scope="col">Description</th>
                                                <th scope="col">Domaine</th>
                                                <th scope="col">Intéresser</th>
                                            </tr>


                                        </thead>
                                        <tbody>
                                            {rowsSujet}
                                        </tbody>
                                    </table>
                                </div>
                                <br />

                            </div>
                        </div>}
                </div>
               
                <div>
                    {this.state.isFeed && <div>
                        <div style={{
                            paddingTop: '15px',
                            textAlign: 'center',
                            fontSize: '18px'
                        }}>
                            <p>Puisque vous etes attribué à l'un des sujets de cette entreprise</p>
                            <p>N'hésiter pas de partager votre expérience et votre avis avec les autres</p>
                            <p>Votre Avis est anonyme.</p>
                        </div>

                        <div style={{
                            marginLeft: '500px'
                        }}>

                            <Textarea placeholder='Entrer votre Avis' name='FeedBack'
                                width={'350px'}
                                height={'250px'}
                                onChange={e => this.setState({
                                    feedInput: e.target.value
                                })}
                            />
                            <div style={{ marginLeft: '50px' }}>
                                <StarRatings
                                    rating={this.state.ratingInput}
                                    starRatedColor="#023C59"

                                    changeRating={newRating => this.setState({
                                        ratingInput: newRating
                                    })}
                                    numberOfStars={5}
                                    name='Rating'
                                    starDimension="35px"
                                    starSpacing="10px"
                                />
                            </div>




                        </div>
                        <button className="btn btn-outline-secondary" style={{ marginLeft: '640px' }} onClick={this.registerfeed}>Envoyer</button>
                    </div>}
                    <div>
                        <Button variant="outlined" onClick={handleClickOpen} style={{
                            marginLeft: '20px'
                        }}>
                            Consulter les avis
                        </Button>
                        <Dialog
                            open={this.state.open}
                            TransitionComponent={Transition}
                            keepMounted
                            //onClose={handleClose}
                            aria-describedby="alert-dialog-slide-description"
                        >
                            <DialogTitle>{"Les Avis pour l'entreprise " + `${this.state.url}`}</DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-slide-description">
                                    <FeedBackEntrp />
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={() => { handleClose(); window.location.reload(true) }}>Fermer</Button>

                            </DialogActions>
                        </Dialog>
                    </div>
                </div>
            </div>
        );
    }
}
export default VisibleStu; 
