import '../../../styles/Password/password.css'
import { useNavigate } from 'react-router';
import PopUpMessage from '../../PopUpMessage/PopUpFile';
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Postulation() {

    const formSubmit = (event) => {
        event.preventDefault();
        emailjs.sendForm('service_xkv5vt9', 'template_ee3g12r', '#Login','#Email','#File','rKn8bitffG4ybeVng')
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
         }, function(error) {
            console.log('FAILED...', error);
         });
    }
    const navigate = useNavigate();
    const [state, setState] = React.useState({
        credentials:{
     
        Email: "",
        Login: "",
        File:""},
        
        isOpenSucceed: false,
        isOpenFailed: false
    })
    // const [selectedFile, setSelectedFile] = React.useState(null);





    const inputChanged = (event) => {
        const cred = state.credentials;
        console.log(event.target.value);
        cred[event.target.name] = event.target.value;
        setState({
            ...state, "Login": event.target.value,
            ...state, "MDP": event.target.value,
            ...state,"File":event.target.value,
            ...state
        });
        //setState({...state,credentials:cred});
        console.log(state.credentials);
    }

    React.useEffect(() => {

        var id = localStorage.getItem('LoginUser');
        fetch(`http://127.0.0.1:8000/PcdApp/student/${id}/`, {

            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then((result) => {
                setState({ ...state, data: result });
                console.log(state.data);
                console.log(result);
            })
    }, []);


    return (
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

                                <div className="form-div">
                                        <form className="reservation-form" onSubmit={formSubmit}>
                                    <input
                                        type="text"
                                        class="form-control rounded-left"
                                        placeholder="Login"
                                        name="Login"
                                        value={state.credentials.Login}
                                        onChange={inputChanged}
                                        required></input>
                     

                                
                                    <input
                                        type="text"
                                        class="form-control rounded-left"
                                        placeholder="Email"
                                        name="Email"
                                        value={state.credentials.Email}
                                        onChange={inputChanged}
                                        required></input>
                                

                                    {/* <input
                                        type="file"
                                        value={selectedFile}
                                        onChange={(e) => setSelectedFile(e.target.files[0])}
                                    />
                                    <button> </button> */}
                                  
                                        <label>Attach file:</label>
                                        <input type="file" name="File"  value={state.credentials.File}
                                        onChange={inputChanged}/>
                                        <input type="submit" value="Submit" />
                               
                               
                         
                                    <button
                                        type="button"
                                        class="btn btn-primary rounded submit p-3 px-5"
                                        onClick={formSubmit}>
                                        Teminer
                                    </button>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div align="center">
                {state.isOpenSucceed && <PopUpMessage
                    dataFromParent={<>
                        <h1>Verifier</h1>
                        <p>Un lien est envoyer a votre Email</p>

                        <NavLink to={'/AuthEtud/'}>
                            <Button variant="contained" >
                                Ok
                            </Button>
                        </NavLink>
                    </>}
                />}
            </div>
            <div align="center">
                {state.isOpenFailed && <PopUpMessage
                    dataFromParent={<>
                        <h1>Erreur !</h1>
                        <p>Email ou Mot de Passe invalides</p>

                        <NavLink to={'/AuthEtud/'}>
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
export default Postulation;