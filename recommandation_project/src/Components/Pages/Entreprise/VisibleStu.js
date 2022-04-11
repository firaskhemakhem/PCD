import React from 'react';
import HeaderCan from '../Etudiant/HeaderCan'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material';
import Button from '@mui/material/Button';
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
            content:'Follow',
            data: {}
            

        };
    }
    change = event => {
      if( this.state.isFavorite==true){
        this.setState({
            color: 'error',
            content:'DesFollow',
            isFavorite:true
        });
      
        {this.update()}
    }
    else if( this.state.isFavorite==false) {
        this.setState({
            color: 'success',
            content:'Follow',
            isFavorite:false
        });
        {this.update()}
    }
        console.log(this.state.color);
        console.log(this.state.isFavorite)
     

    }
    update = event => {
        var id = this.state.data.id;
        fetch(`http://127.0.0.1:8000/PcdApp/suit/${id}/`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    "follow": this.state.isFavorite,
                    "recruteur": this.state.url,
                    "student": localStorage.getItem("LoginUser")
                }
            )
        })
            .then(data => data.json())
            .then((result) => {
                console.log(result);
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
                console.log(result);

            })
            .catch(error => console.error(error));

    }
    fetchDataFollow() {
        fetch(`http://127.0.0.1:8000/PcdApp/suit/`)

            .then(response => response.json())
            .then((result) => {
                console.log(result);
                console.log(window.location.href.split('/')[4]);

                this.setState({
                    url: window.location.href.split('/')[4]
                })
                
                for (let i = 0; i < result.length; i++) {
                    if (result[i].recruteur == this.state.url && result[i].student == localStorage.getItem("LoginUser")) {
                        this.setState({
                            data:result[i]
                        })
                        if(result[i].follow == true){
                            this.setState({
                                color:'error',
                                content :'DesFollow',
                                isFavorite:false
                            })
                        }else if (result[i].follow == false){
                            this.setState({
                                color:'success',
                                content :'Follow',
                                isFavorite:true
                            })
                        }
                 
                    }

                }
            });
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

    componentDidMount() {
        this.fetchDataSujet();
        this.fetchDataAgenda();
        this.fetchDataFollow();
    }

    render() {
        const sujetData = this.state.dataSujet;
        const agendaData = this.state.dataAgenda;
        { localStorage.setItem('isFav', false) }

        console.log(sujetData)

        const rowsSujet = sujetData.map((sujet) =>

        (this.state.isLoginSujet && <tr key={sujet.Id_sujet}>
            {localStorage.setItem("Id_suj", sujet.Id_sujet)}
            <td>{sujet.Titre}</td>
            <td>{sujet.Description}</td>
            <td>{sujet.Domaine}</td>
            <td><button className="btn btn-outline-secondary" >Intéresser</button></td>
        </tr>));
        const rowsAgenda = agendaData.map((agenda) =>

        (this.state.isLoginAgenda && <tr key={agenda.Id_Calend}>
            {localStorage.setItem("Id_ag", agenda.Id_sujet)}
            <td>{agenda.Id_Calend}</td>
            <td>{agenda.Date}</td>
            <td>{agenda.StartTime}</td>
            <td>{agenda.EndTime}</td>
            <td><button className="btn btn-outline-secondary">Confirmer</button></td>

        </tr>));

        return (
            <div>
                <HeaderCan /><br />
                <Button variant="contained" color={`${this.state.color}`} onClick={()=>{this.change()}}>
                   {this.state.content}
                </Button>
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
                    {this.state.isLoginAgenda &&
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
                            }} >La disponilité de {this.state.url} pour les entretiens</h4>
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
            </div>
        );
    }
}
export default VisibleStu; 