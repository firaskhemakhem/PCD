import React, {useContext, useEffect, useState} from "react";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {multiStepContext} from "./StepContextUpdate";


function UpdateCompetence() {
    const {setCurrentStep, updateCompétence, setUpdateCompétence} = useContext(multiStepContext);
    const [tableData, setTableData] = useState([])
    useEffect(() => {
        const id = window.location.href.split('/')[4];
        fetch(`http://127.0.0.1:8000/PcdApp/competence/${id}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json()).then((result) => {
            setUpdateCompétence(result)
            // console.log(id);
            // console.log(tableData.credentials);
        })
    }, []);

    const update = event => {
        const id = window.location.href.split('/')[4]
        setUpdateCompétence({
            ...updateCompétence,
            "LoginStu": id
        });
        fetch(`http://127.0.0.1:8000/PcdApp/competence/${id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateCompétence)
        }).then(data => data.json()).then(console.log(updateCompétence)).catch(error => console.error(error))
    }
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Compétences
            </Typography>

            <Grid container
                spacing={3}>

                <Grid item
                    xs={12}
                    md={14}>
                    <TextField id="formation" label="Formation" name='Formation' multiline focused
                        rows={4}
                        placeholder="Expliquer votre parcour educatif en quelques lignes"
                        variant="standard"
                        fullWidth
                        value={
                            updateCompétence.Formation
                        }
                        onChange={
                            (e) => {
                                updateCompétence["Formation"]= e.target.value;
                            }
                        }/>
                </Grid>
            <Grid item
                xs={12}
                md={14}>
                <TextField id="exp" label="Expérience professionnelle" multiline focused
                    rows={4}
                    placeholder="Expliquer votre expérience professionnelle en quelques lignes"
                    variant="standard"
                    fullWidth
                    name="ExpProf"
                    value={
                        updateCompétence.ExpProf
                    }
                    onChange={
                        (e) => {
                            updateCompétence["ExpProf"]= e.target.value;
                        }
                    }/>
            </Grid>
        <Grid item
            xs={12}
            md={14}>
            <TextField id="certif" label="Certificats" multiline focused
                rows={4}
                placeholder="Donnez des exemples de certificats"
                variant="standard"
                fullWidth
                name="Certif"
                value={
                    updateCompétence.Certif
                }
                onChange={
                    (e) => {
                        updateCompétence["Certif"]= e.target.value;
                    }
                }/>
        </Grid>
    <Grid item
        xs={12}
        md={14}>
        <TextField id="Lang" label="Langues" multiline focused
            rows={1}
            placeholder="les langues avec lesquelles vous pouvez communiquer"
            variant="standard"
            fullWidth
            name="Lang"
            value={
                updateCompétence.Lang
            }
            onChange={
                (e) => {
                    updateCompétence["Lang"]= e.target.value;
                }
            }/>
    </Grid>
<Grid item
    xs={12}
    md={14}>
    <TextField id="liens" label="Liens utils" multiline focused
        rows={4}
        placeholder="Donnez des liens utiles (e.g: Github, LinkedIn,...)"
        variant="standard"
        fullWidth
        name="Liens"
        value={
            updateCompétence.Liens
        }
        onChange={
            (e) => {
                updateCompétence["Liens"]= e.target.value;
            }
        }/>
</Grid><Grid item
    xs={20}
    sm={1}>
<button class="btn btn-light"
    onClick={
        () => {
            setCurrentStep(1)
        }
}>
    Back
</button></Grid><Grid item
    xs={20}
    sm={10}></Grid><Grid item
    xs={12}
    sm={1}>
<button class="btn btn-light"
    onClick={
        () => {
            
            update();
            setCurrentStep(3);
        }
}>
    Next
</button></Grid></Grid></React.Fragment>
    )
}
export default UpdateCompetence;
