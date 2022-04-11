import React, { useState } from 'react'
import {NavLink} from  'react-router-dom';
import "../../../../styles/AgendaPartagee/Agenda.css"

class AgendaPartagee extends React.Component{

constructor(){
    super();
    this.state={
        data:[],
        //credentials:[],
        isLogin:false
    };
}

fetchData(){
  fetch(`http://127.0.0.1:8000/PcdApp/agenda/`)
    
    .then(response=>response.json())
    .then((result)=>{
        for(let i=0 ; i< result.length;i++){
          if(result[i].LoginRec == localStorage.getItem("LoginUser")){
            this.setState({data : [...this.state.data,result[i]]})
            this.setState({
              isLogin:true
            })
            localStorage.setItem('isLogin',true)
          }
          
        }
        console.log(this.state.data);
        console.log(this.state.isLogin);
    });
}

componentDidMount(){
    this.fetchData();
}
deleteData(id){
  fetch('http://127.0.0.1:8000/PcdApp/agenda/'+id,{
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
  
          (this.state.isLogin && <tr key={agenda.Id_Calend}>
           { localStorage.setItem("Id_Calend",agenda.Id_Calend)}
                 <td>{agenda.Date}</td>
                 <td>{agenda.StartTime}</td>
                 <td>{agenda.EndTime}</td>
                 <td>
                 <NavLink to={'/Update/'+localStorage.getItem("LoginUser")+'/'+localStorage.getItem("Id_Calend")}>
                   <button 
                       type="button" 
                       class="btn btn-outline-secondary"
                       fullWidth
                       variant="contained"
                       sx={{ mt: 4, mb:2 }}
                     >
                      Mettre à jour
                   </button>
                 </NavLink>
                 </td>
                 <td><button onClick={()=>this.deleteData(agenda.Id_Calend)} className="btn btn-danger">Supprimer</button></td>
               </tr>));

    return( <div>
      {this.state.isLogin &&<div classname ='paddbody' style={{paddingRight:'100px'}}>
      <h4 className="hhh" >Votre Agenda</h4>
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
  </div>}
  </div>);
  }
}

export default AgendaPartagee;
