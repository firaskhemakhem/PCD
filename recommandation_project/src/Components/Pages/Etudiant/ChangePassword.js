import * as React from 'react';
import '../../../styles/Password/password.css';
import { useNavigate } from 'react-router';
import PopUpMessage from '../../PopUpMessage/PopUpFile';
import Button from '@mui/material/Button';

import {NavLink} from "react-router-dom";


function ChangePassword(){

    

    const navigate = useNavigate();
    const [state,setState]=React.useState({
        credentials:{},
        data:{},
        isOpenSucceed:false,
        isOpenFailed:false
     })

    const Done = () =>{
        setState({...state,isOpenFailed:false})
    }

    const Verifier =()=>{
        if(state.credentials.MDP == state.credentials.VerifMDP){
            var id=localStorage.getItem('LoginUser');
            fetch(`http://127.0.0.1:8000/PcdApp/student/${id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    "Login": state.data.Login,
                    "Email": state.data.Email,
                    "MDP": state.credentials.MDP,
                    "Nom": state.credentials.MDP,
                    "Tel": state.data.Tel,
                    "Gouvernorat": state.data.Gouvernorat,
                    "Adresse": state.data.Adresse,
                    "Civ": state.data.Civ,
                    "DDN": state.data.DDN,
                }
            )
            }).then(data => data.json()).then((res) => {
                console.log(res);
            }).catch((error) => console.error(error))
            
            setState({...state,isOpenSucceed:true});
            console.log('done !')
        }
        else {
            setState({...state,isOpenFailed:true});
        }
    }

    const inputChanged = (event) => {
        const cred = state.credentials;
        //console.log(event.target.value);
        cred[event.target.name] = event.target.value;
        setState({...state,"MDP":event.target.value,
                   ...state,"VerifMDP":event.target.value,
                  ...state}); 
        console.log(state.credentials);
      }

      React.useEffect(() => {
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
                        <br/>
                        <h3 class="text-center mb-4">Votre nouvelle mot de passe </h3>
                        <br/>
                            <div class="form-group">
                                <input 
                                type="text" 
                                class="form-control rounded-left" 
                                placeholder="New Password" 
                                required
                                name ="MDP"
                                value = {state.credentials.MDP}
                                onChange ={inputChanged}
                                ></input>
                            </div>
                        <div class="form-group d-flex">
                        <input 
                        type="text" 
                        class="form-control rounded-left" 
                        placeholder="Verify new password"
                        name="VerifMDP"
                        value = {state.credentials.VerifMDP}
                        onChange ={inputChanged}
                        required></input>
                        </div>
                        <br/>
                    
                        <div class="form-group">
                            <button 
                            type="button" 
                            class="btn btn-primary rounded submit p-3 px-5"
                            onClick={Verifier}
                            >Teminer</button>
                        </div>
                    
                    </div>
                        </div>
                    </div>
                </div>
            </section>
            {state.isOpenSucceed && navigate('/AuthEtud/')}
            <div align="center">
                {state.isOpenFailed && <PopUpMessage
                    dataFromParent ={<>
                    <h1>Erreur !</h1>
                    <p>les champs saisies ne corresponds pas</p>
                    
                     
                    <Button variant="contained" 
                        onClick={Done}>
                        Ok
                        </Button>
                    
                    </>}
                />}
            </div>
        </div>
    )
    
}
export default ChangePassword;