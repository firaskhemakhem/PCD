import { ContactSupportOutlined } from '@material-ui/icons';
import React from 'react';
import { NavLink } from 'react-router-dom';
import HeaderRec from '../HeaderRec';

class Sujets extends React.Component {

    constructor() {
        super();
        this.state = {
            data: [],
            isLogin: false,
            nb: 0,
            Att:false


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
    deleteData(id){
        fetch('http://127.0.0.1:8000/PcdApp/sujet/'+id,{
            method:'DELETE',
            body:JSON.stringify(this.state),
        })
        .then(response=>response)
        .then((data)=>{
            if(data){
                this.fetchData();
            }
        });
      }

    render() {
        const sujetData = this.state.data;
         console.log(sujetData)
        
        const rows = sujetData.map((sujet) =>
        

        (this.state.isLogin  && !sujet.Att &&<tr key={sujet.Id_sujet}>

            <td>{sujet.Titre}</td>
            <td>{sujet.Description}</td>
            <td>{sujet.Domaine}</td>
            <td>  <NavLink to={"/UpdateSujet/"+sujet.Id_sujet}>
                   <button 
                       type="button" 
                       class="btn btn-outline-secondary"
                       fullWidth
                       variant="contained"
                       sx={{ mt: 4, mb:2 }}
                     >
                      Mettre à jour
                   </button></NavLink>
                 </td>
                 <td><button onClick={()=>this.deleteData(sujet.Id_sujet)} className="btn btn-danger">Supprimer</button></td>
        </tr>));
        return (
          
            
                <div>
                    <HeaderRec/>
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
                        borderRadius: '10px',
                        marginTop:'15px'
                       
                    }}>
                    <div>
                        <h4 style={{
                            textAlign: 'center',
                            color: '#023C59', paddingTop:'8px'
                        }}>Vos Sujets Déposés</h4>
                        <table class="table">
                            <thead>


                                <tr>
                               
                                <th scope="col">Titre</th>
                                <th scope="col">Description</th>
                                <th scope="col">Domaine</th>
                                <th scope="col">Mettre à jour</th>
                                <th scope="col">Supprimer</th>
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