import { ContactSupportOutlined } from '@material-ui/icons';
import React from 'react';

class Sujets extends React.Component {

    constructor() {
        super();
        this.state = {
            data: [],
            isLogin: false,
            nb: 0


        };
    }

    fetchData() {
        fetch(`http://127.0.0.1:8000/PcdApp/sujet/`)

            .then(response => response.json())
            .then((result) => {
                for (let i = 0; i < result.length; i++) {
                    if (result[i].LoginRec == localStorage.getItem("LoginUser")) {
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
    }

    render() {
        const sujetData = this.state.data;
         console.log(sujetData)
        
        const rows = sujetData.map((sujet) =>

        (this.state.isLogin && <tr key={sujet.Id_sujet}>

            <td>{sujet.Titre}</td>
            <td>{sujet.Description}</td>
            <td>{sujet.Domaine}</td>
        </tr>));
        return (
          

                <div>
                    {!this.state.isLogin && <div>
                        <h2 style={{
                            color: '#023C59',
                            paddingTop:'300px'

                        }}>Vous n'avez aucun sujet déposé</h2>
                        </div>}
                    {this.state.isLogin && 
                      <div style={{
                        border: '1px solid #023C59',
                        borderWidth: '3px',
                        borderRadius: '10px'
                    }}>
                    <div>
                        <h4 style={{
                            textAlign: 'center',
                            color: '#023C59'
                        }}>Vos Sujets Déposés</h4>
                        <table class="table">
                            <thead>


                                <tr>

                                    <th scope="col">Titre</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Domaine</th>
                                </tr>


                            </thead>
                            <tbody>
                                {rows}
                            </tbody>
                        </table>

                    </div>
                    </div>}
                </div>
          
        )
    }
}

export default Sujets;