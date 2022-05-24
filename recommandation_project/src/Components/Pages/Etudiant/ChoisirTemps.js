import React from 'react';
import HeaderCan from '../Etudiant/HeaderCan';

class ChoisirTemps extends React.Component {


    constructor() {
        super();
        this.state = {
            dataAgenda: [],
            isLoginAgenda: false,
            url: '',
            credentials: {},
            isFavorite: false,
            data: {},
            id: '',
        };

    }

    fetchDataAgenda() {
        fetch(`http://127.0.0.1:8000/PcdApp/agenda/`)

            .then(response => response.json())
            .then((result) => {
                console.log(result);
                //  console.log(localStorage.getItem("Login"))
                this.setState({
                    url: localStorage.getItem("IdRec")
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
        this.fetchDataAgenda();
    }

    render() {
        const agendaData = this.state.dataAgenda;
        const IdStu = localStorage.getItem("LoginUser");
      
        const rowsAgenda = agendaData.map((agenda) =>

        (this.state.isLoginAgenda && <tr key={agenda.Id_Calend}>
            {localStorage.setItem("Id_ag", agenda.Id_Calend)}
            <td>{agenda.Date}</td>
            <td>{agenda.StartTime}</td>
            <td>{agenda.EndTime}</td>
            <td><button className="btn btn-outline-secondary">Confirmer</button></td>

        </tr>));

        return (
            <div>
                <HeaderCan /><br />
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
                            }} >La disponibilité de {this.state.url} pour les entretiens</h4>
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
export default ChoisirTemps; 