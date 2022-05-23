import * as React from 'react';

import {Component} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FeaturedPost from './FeaturedPost';
import MainFeaturedPost from './MainFeaturePost';
import Footer from '../../Footer/Footer';
import '../../../styles/Pages/EspaceCandidat.css'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import HeaderRec from './HeaderRec';
import { NavLink } from 'react-router-dom';


const Input = styled('input')({
  display: 'none',
});



// https://emploi-tunisie-travail.com/wp-content/uploads/2019/12/jobs-in-tunisia-1.png
// https://i.pinimg.com/564x/9b/9d/87/9b9d87aac970486a8793525e233ee783.jpg
// https://i.pinimg.com/564x/49/8d/08/498d08478c0c6473db4fcc0b52c5fe02.jpg


const queryParams = new URLSearchParams(window.location.search);
// const login = localStorge.getItem("LoginUser")
// <Link to={'/cv/'+this.state.credentials.Login}>
const name = queryParams.get('Login');


const theme = createTheme();
class RecommandationCVs extends Component {

    constructor() {
        super();
        this.state = {
            data: [],
            isLogin: false,
            NomSuj: [],
            nom: '',
            id: [],
            isSujet: '',
            dataSuj: [],
            credentials: {
                Id_sujet: '',
                Titre: '',
                Description: '',
                Domaine: '',
                duree: '',
                Tech: '',
                paye: '',
                Bin: '',
                Att: '',
                LoginRec: ''
            },
            stud: '',
            idsu: '',
            cred: {
                //  id:'',
                recruteur: localStorage.getItem("LoginUser"),
                student: '',
                id_sujet: '',
                Att: true
            },
            notifData:[]
        };
    }
    fetchDataSujet() {
        fetch(`http://127.0.0.1:8000/PcdApp/sujet/`)

            .then(response => response.json())
            .then((result) => {
                for (let i = 0; i < result.length; i++) {
                    if (result[i].LoginRec == localStorage.getItem("LoginUser")) {
                        this.setState({ dataSuj: [...this.state.dataSuj, result[i]] })
                        this.setState({
                            id: [...this.state.id, result[i].Id_sujet]
                        })
                        this.setState({
                            NomSuj: [...this.state.NomSuj, result[i].Titre]
                        })
                        this.setState({
                            isSujet: true
                        })
                        localStorage.setItem('isSujet', true)
                    }

                }
                console.log(this.state.dataSuj);
                console.log(this.state.id);
                console.log(this.state.NomSuj);
                console.log(this.state.isSujet);
            });
    }
    update = (event, id, idstu, ids) => {
        //var id=this.state.credentials.Login;
        fetch(`http://127.0.0.1:8000/PcdApp/interessant/${id}/`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    "recruteur": localStorage.getItem("LoginUser"),
                    "student": idstu,
                    "id_sujet": ids,
                    "Att": true
                })
        })
            .then(data => data.json())
            .then(console.log(this.state.cred))
            .catch(error => console.error(error))
    }
    updateSuj = (event) => {
        for (let i = 0; this.state.dataSuj.length; i++) {
            for (let j = 0; this.state.data.length; j++) {
                console.log(this.state.dataSuj[i].Id_sujet);
                console.log(this.state.data[j])
                if (this.state.dataSuj[i].Id_sujet == this.state.data[j].id_sujet) {
                    fetch(`http://127.0.0.1:8000/PcdApp/sujet/${this.state.dataSuj[i].Id_sujet}/`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(
                            {
                                "Titre": this.state.dataSuj[i].Titre,
                                "Description": this.state.dataSuj[i].Description,
                                "Domaine": this.state.dataSuj[i].Domaine,
                                "duree":this.state.dataSuj[i].duree,
                                "Tech":this.state.dataSuj[i].Tech,
                                "paye":this.state.dataSuj[i].paye,
                                "Bin":this.state.dataSuj[i].Bin,
                                "Att": true,
                                "LoginRec":this.state.dataSuj[i].LoginRec
                            })
                    })
                        .then(data => data.json())
                       // .then(console.log(this.state.cred))
                        .catch(error => console.error(error))

                }else {console.log("n'exista pas")}
            }
        }
        //var id=this.state.credentials.Login;

    }
    fetchData() {
        fetch(`http://127.0.0.1:8000/PcdApp/interessant/`)

            .then(response => response.json())
            .then((result) => {
                for (let i = 0; i < result.length; i++) {
                    if (result[i].recruteur == localStorage.getItem("LoginUser")) {
                        this.setState({ data: [...this.state.data, result[i]] })
                        this.setState({
                            isLogin: true
                        })
                        localStorage.setItem('isLogin', true)
                    }

                }
                //console.log(this.state.data);
                //console.log(this.state.isLogin);
            });
    }
    componentDidMount() {
        this.fetchData();
        this.fetchDataSujet();

    }

    IsSujett(idd) {
        for (let i = 0; i < this.state.id.length; i++) {
            if (this.state.id[i] === idd) {

                return i;
            }
        }
    };
    render() {
        const interData = this.state.data;
        const rows = interData.map((inter) =>

        (this.state.isLogin && <tr key={inter.id}>

            {localStorage.setItem("Id_inter", inter.id)}
            <td>{inter.student}</td>
            <td> {this.state.NomSuj[this.IsSujett(inter.id_sujet)]}</td>
            <td>
                <button
                    type="button"
                    class="btn btn-outline-secondary"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 4, mb: 2 }}
                    onClick={(e) => { this.update(e, inter.id, inter.student, inter.id_sujet) ; this.updateSuj(e);this.addNotif()}}
                >
                    Confirmer
                </button>
            </td>
            <td><button onClick={() => this.deleteData(inter.id)} className="btn btn-danger">Refuser</button></td>
        </tr>));
        return (
            <div>
                
                <HeaderRec />
                
                {<div classname='paddbody' style={{ paddingRight: '100px' }}>
                    <h4 style={{
                        textAlign: 'center',
                        paddingTop: '20px',
                        color: '#023C59'
                    }} >Liste des candidatures</h4>
                    <div style={{
                        border: '3px solid #023C59',
                        borderRadius: '8px',
                        marginLeft: '155px',
                        marginRight: '155px',



                    }}>
                        <table class="table">
                            <thead>


                                <tr>
                                    <th scope="col">Login d'étudiant</th>
                                    <th scope="col">Titre Sujet</th>
                                    <th scope="col">Confirmer</th>
                                    <th scope="col">Refuser</th>
                                </tr>


                            </thead>
                            <tbody>
                                {rows}
                            </tbody>
                        </table>
                    </div>
                </div>}

                
            </div>
            
        );
    }

}

export default RecommandationCVs;

