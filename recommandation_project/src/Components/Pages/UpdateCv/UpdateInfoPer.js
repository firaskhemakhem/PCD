import React, {useContext, useState, useEffect} from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import {multiStepContext} from "./StepContextUpdate";


function UpdateInfoPer() {
    const {setCurrentStep, updateInfoPer, setUpdateInfoPer} = useContext(multiStepContext);
    //const [tableData, setTableData] = useState([])
    //const id = localStorage.getItem("LoginUser");
    useEffect(() => {
        const id = window.location.href.split('/')[4];
        //setUpdateInfoPer({...updateInfoPer,"LoginStu": id});
        fetch(`http://127.0.0.1:8000/PcdApp/infoper/${id}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json()).then((result) => {
            setUpdateInfoPer(result)
            //console.log(id);
            //console.log(tableData.credentials);
        })
    }, []);

    const inputChanged = (event) => {
        const cred = updateInfoPer;
        cred[event.target.name] = event.target.value;
        setUpdateInfoPer(cred);
    }

    const update = event => {
        const id = window.location.href.split('/')[4]
        
        fetch(`http://127.0.0.1:8000/PcdApp/infoper/${id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateInfoPer)
        }).then(data => data.json()).then(console.log(updateInfoPer)).catch(error => console.error(error))
    }

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Information Personnel
            </Typography>
            <Grid container
                spacing={3}>
                <Grid item
                    xs={12}>
                    <TextField required focused id="nom" name='Nom' label="Nom & Prénom" fullWidth variant="standard"
                        defaultValue={
                            updateInfoPer.Nom
                        }
                        onChange={
                            (e) => {
                                //updateInfoPer["Nom"]= e.target.value;
                                inputChanged(e);
                            }
                        }/>
                </Grid>
            <Grid item
                xs={12}>
                <TextField required focused id="email" name='Email' label="Addresse Email" fullWidth variant="standard"
                    defaultValue={
                        updateInfoPer.Email
                    }
                    onChange={
                        (e) => {
                            //updateInfoPer["Email"]= e.target.value;
                            inputChanged(e);
                        }
                    }/>
            </Grid>
        <Grid item
            xs={12}
            sm={6}>
            <TextField focused id="tel" name='Tel' label="Numéro de Téléphone" fullWidth variant="standard"
                defaultValue={
                    updateInfoPer.Tel
                }
                onChange={
                    (e) => {
                        //updateInfoPer["Tel"]= e.target.value;
                        inputChanged(e);
                    }
                }/>
        </Grid>
    <Grid item
        xs={12}
        sm={6}>
        <TextField required focused id="gouv" name='Gouvernorat' label="Gouvernorat" fullWidth variant="standard"
            defaultValue={
                updateInfoPer.Gouvernorat
            }
            onChange={
                (e) => {
                    //updateInfoPer["Gouvernorat"]= e.target.value;
                    inputChanged(e);
                }
            }/>
    </Grid>
<Grid item
    xs={12}>
    <TextField required focused id="adresse" name='Adresse' label="Adresse" fullWidth variant="standard"
        defaultValue={
            updateInfoPer.Adresse
        }
        onChange={
            (e) => {
                //updateInfoPer["Adresse"]= e.target.value;
                inputChanged(e);
            }
        }/>
</Grid><Grid item
    xs={12}
    sm={6}>
<TextField required focused id="ddn" name='DDN' label="Date de naissance" fullWidth variant="standard"
    defaultValue={
        updateInfoPer.DDN
    }
    onChange={
        (e) => {
            //updateInfoPer["DDN"]= e.target.value;
            inputChanged(e);
        }
    }/></Grid><Grid item
    xs={12}
    sm={6}><TextField required focused id="Dom" name='Dom' label="Domaine" fullWidth variant="standard"
    defaultValue={
        updateInfoPer.Dom
    }
    onChange={
        (e) => {
            //updateInfoPer["Dom"]= e.target.value;
            inputChanged(e);
        }
    }/><br/></Grid><Grid item
    xs={40}
    sm={12}><Grid container justifyContent="flex-end">
<button class="btn btn-light"
    onClick={
        () => {
            setCurrentStep(2);
            update();
        }
}>
    Suivant
</button></Grid></Grid></Grid></React.Fragment>
    );
    // setCurrentStep(2);
}

export default UpdateInfoPer;
