import React,{useContext} from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { multiStepContext } from "./StepContext";

const handleSubmit=(event)=>{
    event.preventDefault();
    const data= new FormData(event.currentTarget);
    console.log({
        email:data.get('email'),
        password: data.get('password'),
    });
};
const register= event=>{
    fetch('http://127.0.0.1:8000/PcdApp/infoper/',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(this.state)
    })
    .then( date=> DataTransfer.json())
    .catch(error=> console.error(error))
}


function InfoPer() {
    /*const inputChanged=(event)=>{
        const cred =state;
        console.log(event.target.value);
        cred[event.target.name]=event.target.value;
        this.setState({state: cred});
    } */ 
    const {setCurrentStep,userData, setUserData}=useContext(multiStepContext);
        return (
            <React.Fragment>
                <Typography variant="h6" gutterBottom>
                    Information Personnel
                </Typography>
                <Grid container spacing={3} onsubmit={handleSubmit} >
                    <Grid item
                        xs={12}
                        >
                        <TextField 
                            required 
                            id="nom" 
                            name="Nom" 
                            label="Nom & Prénom" 
                            fullWidth 
                            variant="standard"
                            value={userData.Nom}
                            onChange={(e)=>{setUserData({...userData,"Nom":e.target.value})}}
                        />
                    </Grid>
                    <Grid item
                        xs={12}>
                        <TextField 
                            required 
                            id="email" 
                            name="Email" 
                            label="Addresse Email" 
                            fullWidth  
                            variant="standard"
                            value={userData.Email}
                            onChange={(e)=>{setUserData({...userData,"Email":e.target.value})}}
                        />
                    </Grid>
                    <Grid item
                        xs={12}>
                        <TextField 
                            required 
                            id="adresse" 
                            name="Address" 
                            label="Address" 
                            fullWidth 
                            variant="standard"
                            value={userData.Address}
                            onChange={(e)=>{setUserData({...userData,"Address":e.target.value})}}
                        />
                    </Grid>
                    <Grid item
                        xs={12}
                        sm={6}>
                        <TextField 
                            required 
                            id="gouv" 
                            name="Gouvernorat" 
                            label="Gouvernorat" 
                            fullWidth  
                            variant="standard"
                            value={userData.Gouvernorat}
                            onChange={(e)=>{setUserData({...userData,"Gouvernorat":e.target.value})}}
                        />
                    </Grid>
                    <Grid item
                        xs={12}
                        sm={6}>
                        <TextField 
                            id="tel" 
                            name="Tel" 
                            label="Numéro de Téléphone" 
                            fullWidth 
                            variant="standard"
                            value={userData.Tel}
                            onChange={(e)=>{setUserData({...userData,"Tel":e.target.value})}}
                        />
                    </Grid>
                    <Grid item
                        xs={12}
                        sm={6}>
                        <TextField 
                            required 
                            id="ddn" 
                            name="DDN" 
                            label="Date de naissance" 
                            fullWidth 
                            variant="standard"
                            value={userData.DDN}
                            onChange={(e)=>{setUserData({...userData,"DDN":e.target.value})}}
                        />
                    </Grid>
                    <Grid item
                        xs={12}
                        sm={6}>
                        <TextField 
                            required 
                            id="civ" 
                            name="Civ" 
                            label="Civilié" 
                            fullWidth 
                            variant="standard"
                            value={userData.Civ}
                            onChange={(e)=>{setUserData({...userData,"Civ":e.target.value})}}
                        />
                    </Grid>
                    <Grid item
                        sm={6}>
                        <button class="btn btn-light" onClick={()=>{setCurrentStep(2)}} >
                            next
                        </button>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
}

export default InfoPer;
