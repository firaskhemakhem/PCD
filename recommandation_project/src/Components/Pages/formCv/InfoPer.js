import React,{useContext, useState} from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { multiStepContext } from "./StepContext";

/*const handleSubmit = (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  console.log({
    email: data.get('email'),
    password: data.get('password'),
  });
};
const register = event => {
    fetch('http://127.0.0.1:8000/PcdApp/infoper/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(userData)
    })
    .then( data => data.json())
    .catch( error => console.error(error))
}*/
function InfoPer() {
    const {setCurrentStep,userData, setUserData}=useContext(multiStepContext);
    //const {det,setDet}= useState({Id_InfoPer:'',Nom:'', Email:'',Address:'',Gouvernorat:'',Tel:'',DDN:'',Civ:''})
    /*const inputChanged = (event) => {
        const cred = det;
        console.log(event.target.value);
        cred[event.target.name] = event.target.value;
        setDet(cred);
    }*/
    const register = event => {
        //setDet()
        fetch("http://127.0.0.1:8000/PcdApp/infoper/", {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({Nom:userData.Nom, Email: userData.Email, Tel:userData.Tel, Gouvernorat:userData.Gouvernorat, Adresse:userData.Adresse, DDN: userData.DDN, Dom: userData.Dom})
        })
        .then( data => data.json())
        .catch( error => console.error(error))
        console.log(userData)
    }
        return (
            <React.Fragment>
                <Typography variant="h6" gutterBottom>
                    Information Personnel
                </Typography>
                <Grid container spacing={3} >
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
                            //value={det.Nom}
                            //onChange={inputChanged}
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
                            //value={det.Email}
                            //onChange={inputChanged}
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
                            //value={det.Tel}
                            //onChange={inputChanged}
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
                            //value={det.Gouvernorat}
                            //onChange={inputChanged}
                        />
                    </Grid>
                    <Grid item
                        xs={12}>
                        <TextField 
                            required 
                            id="adresse" 
                            name="Adresse" 
                            label="Adresse" 
                            fullWidth 
                            variant="standard"
                            value={userData.Adresse}
                            onChange={(e)=>{setUserData({...userData,"Adresse":e.target.value})}}
                            //value={det.Address}
                            //onChange={inputChanged}
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
                            //value={det.DDN}
                            //onChange={inputChanged}
                        />
                    </Grid>
                    <Grid item
                        xs={12}
                        sm={6}>
                        <TextField 
                            required 
                            id="Dom" 
                            name="Dom" 
                            label="Domaine" 
                            fullWidth 
                            variant="standard"
                            value={userData.Dom}
                            onChange={(e)=>{setUserData({...userData,"Dom":e.target.value})}}
                            //value={det.Civ}
                            //onChange={inputChanged}
                        />
                    </Grid>
                    <Grid item
                        sm={6}>
                        <button class="btn btn-light" onClick={()=>{setCurrentStep(2)}}>
                            next
                        </button>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
}

export default InfoPer;
