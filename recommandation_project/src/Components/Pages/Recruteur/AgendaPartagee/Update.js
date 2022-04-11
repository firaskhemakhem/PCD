import React from "react";

import {NavLink} from "react-router-dom"
import HeaderRec from "../HeaderRec";



class Update extends React.Component {  
    constructor(){
        super();
        this.state={
          Id_Calend:localStorage.getItem("Id_Calend"),
          Date:'',
          StartTime:'',
          EndTime:'',
          LoginRec:localStorage.getItem("LoginRec")
        }
        this.changeHandler=this.changeHandler.bind(this);
        this.submitForm=this.submitForm.bind(this);
    }

    changeHandler(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }
   
   submitForm(){
    var id = this.state.Id_Calend;
        fetch(`http://127.0.0.1:8000/PcdApp/agenda/${id}/`,{
            method:'PUT',
            body:JSON.stringify(this.state),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response=>response.json())
        .then((data)=>console.log(data));
    }

    fetchData(){
       var id = this.state.Id_Calend;
        fetch(`http://127.0.0.1:8000/PcdApp/agenda/${id}/`)
        .then(response=>response.json())
        .then((data)=>{
            this.setState({
                Date:data.Date,
                StartTime:data.StartTime,
                EndTime:data.EndTime,
                LoginRec:data.LoginRec
            });
        });
    }

    componentDidMount(){
        this.fetchData();   
    }


    render(){
        return(<div>
            <HeaderRec/>
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
                           <NavLink to ={"/Agenda/"+localStorage.getItem("LoginUser")}> <input type="submit" onClick={this.submitForm(this.state.Id_Calend)} className="btn btn-outline-secondary" /></NavLink>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
        </div>);
    
}}
export default Update;