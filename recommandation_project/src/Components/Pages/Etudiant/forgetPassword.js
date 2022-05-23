import '../../../styles/Password/password.css'
import { useNavigate } from 'react-router';
import PopUpMessage from '../../PopUpMessage/PopUpFile';
import Button from '@mui/material/Button';
import {NavLink} from "react-router-dom";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Forgetpassword (){
    const navigate = useNavigate();
    const [state,setState]=React.useState({
        credentials:{},
        data:{},
        isOpenSucceed:false,
        isOpenFailed:false
     })

    const sendEmail = (e) => {
        if((state.data.Login == state.credentials.Login) &&(state.data.Email == state.credentials.Email)){
            e.preventDefault();

            emailjs.send('service_xkv5vt9', 'template_ee3g12r', {to_name: state.data.Login,To_Email: state.data.Email,}, 'rKn8bitffG4ybeVng')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                console.log(error.text);
                });
            setState({...state,isOpenSucceed:true});
            localStorage.setItem("LoginUser",state.data.Login);
        }
        else{
            
            setState({...state,isOpenFailed:true});
        }
    };

    const Verifier =(e)=>{
        if((state.data.Login == state.credentials.Login) &&(state.data.Email == state.credentials.Email)){
            fetch('http://127.0.0.1:8000/PcdApp/changepass/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    "Login": state.data.Login,
                    "Email": state.data.Email,
                    "MDP": state.data.MDP,
                }
            )
            }).then(data => data.json()).then((res) => {
                console.log(res);
            }).catch((error) => console.error(error))
            
            setState({...state,isOpenSucceed:true});
            localStorage.setItem("LoginUser",state.data.Login);
            console.log('done !')
        }
        else{
            
            setState({...state,isOpenFailed:true});
        }
    }

    const inputChanged = (event) => {
        const cred = state.credentials;
        console.log(event.target.value);
        cred[event.target.name] = event.target.value;
        setState({...state,"Login":event.target.value,
                   ...state,"MDP":event.target.value,
                  ...state});
        //setState({...state,credentials:cred});
        console.log(state.credentials); 
      }

      React.useEffect(() => {
        {localStorage.setItem('LoginUser',state.credentials.Login)}
        var id=localStorage.getItem('LoginUser');
        fetch(`http://127.0.0.1:8000/PcdApp/student/${id}/`,{
       
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }) 
        .then(response => response.json())
        .then((result)=>{
            setState({...state,data:result});
            console.log(state.data);
            console.log(result);
        })
      }, []);
    

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
                                
                                    <div class="form-group">
                                        <input 
                                        type="text" 
                                        class="form-control rounded-left"
                                        placeholder="Login" 
                                        name ="Login" 
                                        value = {state.credentials.Login}
                                        onChange ={inputChanged}
                                        required></input>
                                    </div>
                                   
                                    <div class="form-group d-flex">
                                        <input 
                                        type="text" 
                                        class="form-control rounded-left" 
                                        placeholder="Email" 
                                        name = "Email" 
                                        value = {state.credentials.Email}
                                        onChange ={inputChanged}
                                        required></input>
                                    </div>
                            
                        
                                    <div class="form-group">
                                        <button 
                                        type="button" 
                                        class="btn btn-primary rounded submit p-3 px-5" 
                                        onClick={sendEmail}>
                                            Teminer
                                        </button>
                                    </div>
                                
                            </div>
                        </div>
                    </div>
                </div> 
            </section>
            <div align="center">
                {state.isOpenSucceed && <PopUpMessage
                    dataFromParent ={<>
                    <h1>Verifier</h1>
                    <p>Un lien est envoyer a votre Email</p>
                    
                    <NavLink to ={'/AuthEtud/'}> 
                    <Button variant="contained" >
                        Ok
                        </Button>
                    </NavLink>
                    </>}
                />}
            </div>
            <div align="center">
                {state.isOpenFailed && <PopUpMessage
                    dataFromParent ={<>
                    <h1>Erreur !</h1>
                    <p>Email ou Mot de Passe invalides</p>
                    
                    <NavLink to ={'/AuthEtud/'}> 
                    <Button variant="contained" >
                        Ok
                        </Button>
                    </NavLink>
                    </>}
                />}
            </div>
        </div>
    )
    
}
export default Forgetpassword;