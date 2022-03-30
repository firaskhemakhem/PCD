import React,{useContext} from "react";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { multiStepContext } from "./StepContext";

const Lang = [
    { title: 'Anglais', value:'Anglais'},
    { title: 'Arabe' ,value:'Arabe'},
    { title: 'Chinois',value:'Chinois'},
    { title: 'Espagnol',value:'Espagnol'},
    { title: 'Français',value:'Français'},
    { title: "Russe",value:'Russe'},
    { title: 'Allemand',value:'Allemand'},
    { title: 'Italien',value:'Italien'},
    { title: 'Japonais',value:'Japonais'},
    { title: 'Turc',value:'Turc'},
];

function Competence() {
    const [lang, setLang] = React.useState([])
    const {setCurrentStep,userData, setUserData}=useContext(multiStepContext);
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
                        <TextField
                            id="formation"
                            label="Formation"
                            name='Formation'
                            multiline
                            rows={4}
                            placeholder="Expliquer votre parcour educatif en quelques lignes"
                            variant="standard"
                            fullWidth
                            value={userData.Formation}
                            onChange={(e)=>{setUserData({...userData,"Formation":e.target.value})}}
                        />
                    </Grid>
                    <Grid item
                        xs={12}
                        md={14}>
                        <TextField
                            id="exp"
                            label="Expérience professionnelle"
                            multiline
                            rows={4}
                            placeholder="Expliquer votre expérience professionnelle en quelques lignes"
                            variant="standard"
                            fullWidth
                            name="ExpProf"
                            value={userData.ExpProf}
                            onChange={(e)=>{setUserData({...userData,"ExpProf":e.target.value})}}
                        />
                    </Grid>
                    <Grid item
                        xs={12}
                        md={14}>
                        <TextField
                            id="certif"
                            label="Certificats"
                            multiline
                            rows={4}
                            placeholder="Donnez des exemples de certificats"
                            variant="standard"
                            fullWidth
                            name="Certif"
                            value={userData.Certif}
                            onChange={(e)=>{setUserData({...userData,"Certif":e.target.value})}}
                        />
                    </Grid>
                    <Grid item
                        xs={12}
                        md={14}>
                        <TextField
                            id="Lang"
                            label="Langues"
                            multiline
                            rows={1}
                            placeholder="les langues avec lesquelles vous pouvez communiquer"
                            variant="standard"
                            fullWidth
                            name="Lang"
                            value={userData.Lang}
                            onChange={(e)=>{setUserData({...userData,"Lang":e.target.value})}}
                        />
                    </Grid>
                    <Grid item
                        xs={12}
                        md={14}>
                        <TextField
                            id="liens"
                            label="Liens utils"
                            multiline
                            rows={4}
                            placeholder="Donnez des liens utiles (e.g: Github, LinkedIn,...)"
                            variant="standard"
                            fullWidth
                            name="Liens"
                            value={userData.Liens}
                            onChange={(e)=>{setUserData({...userData,"Liens":e.target.value})}}
                        />
                    </Grid>
                    <Grid item
                        xs={20}
                        sm={6}>
                        <button class="btn btn-light" onClick={()=>{setCurrentStep(1)}}>
                            Back
                        </button>
                    </Grid>
                    <Grid item
                        xs={12}
                        sm={6}>
                        <button class="btn btn-light" onClick={()=>{setCurrentStep(3)}}>
                            Next
                        </button>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
}
export default Competence;
