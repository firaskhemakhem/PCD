import React, { useState } from 'react'
import {NavLink} from  'react-router-dom';
class AgendaPartagee extends React.Component{

constructor(){
    super();
    this.state={
        data:[]
    };
}

fetchData(){
    fetch('http://127.0.0.1:8000/PcdApp/agendapartage/')
    .then(response=>response.json())
    .then((data)=>{
        this.setState({
            data:data
        });
    });
}

componentDidMount(){
    this.fetchData();
}
deleteData(id){
  fetch('http://127.0.0.1:8000/PcdApp/agendapartage/'+id,{
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
    const agendaData=this.state.data;
        const rows=agendaData.map((agenda)=>
  
            <tr key={agenda.Id_Agenda}>
                <td>{agenda.Date}</td>
                <td>{agenda.StartTime}</td>
                <td>{agenda.EndTime}</td>
                <td>
                <NavLink to={'/Update/'+agenda.Id_Agenda}>
                  <button 
                      type="button" 
                      class="btn btn-outline-secondary"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 4, mb:2 }}
                      onClick ={()=>localStorage.setItem("Id_Agenda", agenda.Id_Agenda )}
                    >
                     Mettre à jour
                  </button>
                </NavLink>
                </td>
                <td><button onClick={()=>this.deleteData(agenda.Id_Agenda)} className="btn btn-danger">Supprimer</button></td>
              </tr>);

    return( <div style={{paddingRight:'100px'}}>
      <table class="table">
       <thead>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Temps Début</th>
          <th scope="col">Temps fin</th>
          <th scope="col">Mettre à jour</th>
          <th scope="col">Supprimer</th>
        </tr>
       </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
 </div>
    );
  }
}

export default AgendaPartagee;