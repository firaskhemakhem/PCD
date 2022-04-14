import React,{useContext, useState} from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { multiStepContext } from "./StepContext";


function InfoPer() {
    const {setCurrentStep,userData, setUserData}=useContext(multiStepContext);   
    const [tableData,setTableData]=useState([])
    
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
                            id="Dom" 
                            name="Dom" 
                            label="Domaine" 
                            fullWidth 
                            variant="standard"
                            value={userData.Dom}
                            onChange={(e)=>{setUserData({...userData,"Dom":e.target.value})}}
                        />
                        <br/>
                    </Grid>
                    <Grid item
                        xs={40}
                        sm={12}>
                    <Grid container justifyContent="flex-end">
                        <button class="btn btn-light" onClick={()=>{setCurrentStep(2)}}>
                            next
                        </button>
                    </Grid>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
}

export default InfoPer;
