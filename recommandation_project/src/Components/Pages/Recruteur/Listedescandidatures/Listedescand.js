import { id } from 'date-fns/locale';
import React from 'react';
import { NavLink } from 'react-router-dom';
import HeaderRec from '../HeaderRec';

class Listedescand extends React.Component {

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
            }


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

                }else {console.log("n'esxista pas")}
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
                console.log(this.state.data);
                console.log(this.state.isLogin);
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

    //&& this.state.id ==inter.id_sujet
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
                    onClick={(e) => { this.update(e, inter.id, inter.student, inter.id_sujet) ; this.updateSuj(e);}}
                >
                    Confirmer
                </button>
            </td>
            <td><button onClick={() => this.deleteData(inter.id)} className="btn btn-danger">Refuser</button></td>
        </tr>));
        return (
            <div>
                <HeaderRec />
                {!this.state.isLogin && <div>
                    Aucun candidat n'est postulé à vos sujet

                </div>}
                {this.state.isLogin && <div classname='paddbody' style={{ paddingRight: '100px' }}>
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
export default Listedescand;