import React from "react";
import HeaderCan from "../Candidat/HeaderCan";
import {NavLink} from "react-router-dom"



class Update extends React.Component {

    
    constructor(){
        super();
        this.state={
         // data:[],
          Id_Agenda:localStorage.getItem("Id_Agenda"),
          Date:'',
          StartTime:'',
          EndTime:''
        }
        this.changeHandler=this.changeHandler.bind(this);
        this.submitForm=this.submitForm.bind(this);
    }

    // Input Change Handler
    changeHandler(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    // Submit Form

   
   submitForm(){
      // const id = 2;
  //     alert(this.state.Id_Agenda);
     // var isload = false ;
      //if(!isload){
       var id = this.state.Id_Agenda;
        fetch(`http://127.0.0.1:8000/PcdApp/agendapartage/${id}/`,{
            method:'PUT',
            body:JSON.stringify(this.state),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response=>response.json())
        .then((data)=>console.log(data));
       // window.location.reload(true);
       // isload = true;

   // }

    }

    fetchData(){
        var id = this.state.Id_Agenda;
        fetch(`http://127.0.0.1:8000/PcdApp/agendapartage/${id}/`)
        .then(response=>response.json())
        .then((data)=>{
            this.setState({
               // data:data,
               // Id_Agenda: data.Id_Agenda,
                Date:data.Date,
                StartTime:data.StartTime,
                EndTime:data.EndTime
            });
        });
    }

    componentDidMount(){
        this.fetchData();
        // const id =1;
        // //var id = this.state.Id_Agenda;
        // fetch(`http://127.0.0.1:8000/PcdApp/agendapartage/${id}/`)
        // .then(response=>response.json())
        // .then((data)=>{
        //     this.setState({
        //        // data:data,
        //         Id_Agenda:data.Id_Agenda,
        //         Date:data.Date,
        //         StartTime:data.StartTime,
        //         EndTime:data.EndTime
        //     });
        // });
       
    }


    render(){
       //const agendaId = this.state.data;
        return(<div>
            <HeaderCan/>
         <div style={{ paddingLeft :'130px' ,paddingRight:'130px', paddingTop:'100px'}}>
            <div  style={{ border :'1px solid #023C59',borderRadius:'15px',borderWidth:'10px'}}>
            <h4  style={{paddingTop:'15px',textAlign:'center',color:'#023C59'}}>Mettre à jour votre agneda</h4><br/><br/>
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <th>Date</th>
                        <td>
                            <input value={this.state.Date} name="Date" onChange={this.changeHandler} type="date" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>Temps Début</th>
                        <td>
                            <input value={this.state.StartTime} name="StartTime" onChange={this.changeHandler} type="time" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>Temps Fin</th>
                        <td>
                            <input value={this.state.EndTime} name="EndTime" onChange={this.changeHandler} type="time" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                           <NavLink to ="/Agenda"> <input type="submit" onClick={this.submitForm(this.state.Id_Agenda)} className="btn btn-outline-secondary" /></NavLink>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
        </div>);
    
}}
export default Update;