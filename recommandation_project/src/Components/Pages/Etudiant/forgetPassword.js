import * as React from 'react';
import {Component} from 'react';
import '../../../styles/Password/password.css'

class Forgetpassword extends Component{
    state = {
        data: {},
        credentials:{}
    }

    verif=event=>{
        if((this.state.data.Login == this.state.credentials.Login) &&(this.state.data.Email == this.state.credentials.Email)){
            window.location.assign('http://localhost:3000/changepassword/')
            
            console.log('done !')
        }
    }

    inputChanged = (event) => {
        const cred = this.state.credentials;
        console.log(event.target.value);
        cred[event.target.name] = event.target.value;
        this.setState({credentials: cred}); 
      }
    componentDidMount(){
        var id=localStorage.getItem('LoginUser');
        fetch(`http://127.0.0.1:8000/PcdApp/student/${id}/`,{
       
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
            })  
        .then(response => response.json())
        .then((result)=>{
            this.setState({data:result});
            console.log(this.state.data);
        })
      }

    render (){
        return(
            <div>
                <section class="ftco-section">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-md-6 col-lg-5">
                                <div class="login-wrap p-4 p-md-5">
                                    <div class="icon d-flex align-items-center justify-content-center">
                                        <span class="fa fa-user-o"></span>
                                    </div>
                                    <h3 class="text-center mb-4">Mot de Passe Oublié</h3>
                                    <form action ={this.verif} class="login-form">
                                        <div class="form-group">
                                            <input 
                                            type="text" 
                                            class="form-control rounded-left"
                                            placeholder="Login" 
                                            name ="Login" 
                                            value = {this.state.credentials.Login}
                                            onChange ={this.inputChanged}
                                            required></input>
                                        </div>
                                        <div class="form-group d-flex">
                                            <input 
                                            type="text" 
                                            class="form-control rounded-left" 
                                            placeholder="Email" 
                                            name = "Email" 
                                            value = {this.state.credentials.Email}
                                            onChange ={this.inputChanged}
                                            required></input>
                                        </div>
                                
                            
                                        <div class="form-group">
                                            <button 
                                            type="submit" 
                                            class="btn btn-primary rounded submit p-3 px-5" 
                                            onClick={this.verif}>
                                                Teminer
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
	            </section>
            </div>
        )
    }
}
export default Forgetpassword;