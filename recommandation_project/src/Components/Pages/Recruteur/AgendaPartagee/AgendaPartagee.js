import React, { useState } from 'react'
import {NavLink} from  'react-router-dom';
class AgendaPartagee extends React.Component{

constructor(){
    super();
    this.state={
        data:[],
        isLogin:false
    };
}

fetchData(){
  fetch(`http://127.0.0.1:8000/PcdApp/agenda/`)
    
    .then(response=>response.json())
    .then((data)=>{
        this.setState({
            data:data
        });
        for(let i=0 ; i< data.length;i++){
          if(data[i].LoginRec == localStorage.getItem("LoginUser")){
            this.setState({
              isLogin:true
            })
          }
          console.log(data[i].LoginRec);
        }
        
        console.log(localStorage.getItem("LoginUser"))
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
   
    for(let i=0 ; i< this.state.data.length;i++){
      if ((this.state.data[i].LoginRec == localStorage.getItem("LoginUser"))){
          console.log(this.state.data[i]);
          const Date=this.state.data[i].Date;
      }

    }
         const rows=agendaData.map((agenda)=>
  
          (this.state.isLogin && <tr key={agenda.Id_Calend}>
                 <td>{agenda.Date}</td>
                 <td>{agenda.StartTime}</td>
                 <td>{agenda.EndTime}</td>
                 <td>
                 <NavLink to={'/Update/'+localStorage.getItem("LoginUser")+'/'+localStorage.getItem("IdUser")}>
                   <button 
                       type="button" 
                       class="btn btn-outline-secondary"
                       fullWidth
                       variant="contained"
                       sx={{ mt: 4, mb:2 }}
                       onClick ={()=>localStorage.setItem("Id_Calend",agenda.Id_Calend)}
                     >
                      Mettre à jour
                   </button>
                 </NavLink>
                 </td>
                 <td><button onClick={()=>this.deleteData(agenda.Id_Calend)} className="btn btn-danger">Supprimer</button></td>
               </tr>));

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