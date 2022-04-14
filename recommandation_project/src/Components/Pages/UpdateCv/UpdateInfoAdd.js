import React, {useContext, useState, useEffect} from "react";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import {multiStepContext} from "./StepContextUpdate";



function UpdateInfoAdd() {
    const {
        setCurrentStep,
        updateInfoAdd,
        setUpdateInfoAdd
    } = useContext(multiStepContext);
    const [tableData,setTableData]=useState([])
    function submitData(){
        update();
        setCurrentStep(4);
    };
    useEffect(() => {
        const id = window.location.href.split('/')[4]
        fetch(`http://127.0.0.1:8000/PcdApp/infoadd/${id}/`,{
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
            })
        .then(response => response.json())
        .then((result)=>{
            setUpdateInfoAdd(result) 
        })
      }, []);
    
    const update = event => {
        const id = window.location.href.split('/')[4]
        setUpdateInfoAdd({
            ...updateInfoAdd,
            "LoginStu": id
        });
        fetch(`http://127.0.0.1:8000/PcdApp/infoadd/${id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateInfoAdd)
        }).then(data => data.json()).then(console.log(updateInfoAdd)).catch(error => console.error(error))
    }
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Informations Additionnelles
            </Typography>

            <Grid container
                spacing={3}>

                <Grid item
                    xs={12}
                    md={14}>
                    <TextField id="CentreInter" label="Centre d'intérêt" multiline
                        rows={4}
                        placeholder="Donnez vos centre d'intérêt"
                        variant="standard"
                        fullWidth
                        focused
                        name="CentreInt"
                        value={
                            updateInfoAdd.CentreInt
                        }
                        onChange={
                            (e) => {
                                setUpdateInfoAdd({
                                    ...updateInfoAdd,
                                    "CentreInt": e.target.value
                                })
                            }
                        }/>
                </Grid>
            <Grid item
                xs={12}
                md={14}>
                <TextField id="vie" label="Vie associative" multiline
                    rows={4}
                    placeholder="Donnez des exemples sur votre vie associative"
                    variant="standard"
                    fullWidth
                    focused
                    name="VieAsso"
                    value={
                        updateInfoAdd.VieAsso
                    }
                    onChange={
                        (e) => {
                            setUpdateInfoAdd({
                                ...updateInfoAdd,
                                "VieAsso": e.target.value
                            })
                        }
                    }/>
            </Grid>
        <Grid item
            xs={20}
            sm={1}>
            <button class="btn btn-light"
                onClick={
                    () => {
                        setCurrentStep(2)
                    }
            }>
                Back
            </button>
        </Grid>
        <Grid item
            xs={20}
            sm={10}></Grid>
        <Grid item
            xs={12}
            sm={1}>
            <button class="btn btn-light"
                onClick={
                    () => {
                        submitData()
                    }
            }>
                Submit
            </button>
        </Grid>
    </Grid>
</React.Fragment>
    )
}
export default UpdateInfoAdd;
