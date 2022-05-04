import React, { useContext } from "react";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { multiStepContext } from "./StepContextTest";


function Partie2() {
    const {Ab,I,Ac,R, Q5,Q6,Q7,Q8,setQ5,setQ6,setQ7,setQ8, setCurrentStep,testData, setTestData } = useContext(multiStepContext);
    return (
        <React.Fragment>
            <div>
                <ol start="5">
                    <li>5/ Quand je dois faire un achat important, pour choisir,
                        <ol type='a'>
                        <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                                onChange={(e)=>{setQ5({...Q5,"a": e.target.value})}}
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>c/ j'essaie de calculer le meilleur rapport qualité-prix (au besoin je consulte une revue spécialisée).</li>
                            
                        <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                                onChange={(e)=>{setQ5({...Q5,"b": e.target.value})}}
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>b/ je fais confiance à mon intuition.</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                                onChange={(e)=>{setQ5({...Q5,"c": e.target.value})}}
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>d/ ce qui m'intéresse, c'est d'abord de faire un essai, je n'achète pas un chat dans un sac.</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                                onChange={(e)=>{setQ5({...Q5,"d": e.target.value})}}
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>a/ j'observe, j'écoute les avis et les contre-avis, je prends tout mon temps.</li>
                            
                        </ol>
                    </li>
                    <li>6/ Le professeur qui me convient le mieux est quelqu'un
                        <ol type='a'>
                        <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                                onChange={(e)=>{setQ6({...Q6,"a": e.target.value})}}
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>a/ qui expose sa matière avec rigueur, logique et précision.</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                                onChange={(e)=>{setQ6({...Q6,"b": e.target.value})}}
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>c/ qui, avant tout, fait appel à l'expérience vécue des étudiants.</li>
                            
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                                onChange={(e)=>{setQ6({...Q6,"c": e.target.value})}}
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>b/ qui fait agir ses étudiants aussi souvent que possible.</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                                onChange={(e)=>{setQ6({...Q6,"d": e.target.value})}}
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>d/ qui a le souci de faire observer et réfléchir avant d'agir.</li>
                        </ol>
                    </li>
                    <li>7/ Pour apprendre une langue étrangère, je préfère
                        <ol type='a'>

                        <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                                onChange={(e)=>{setQ7({...Q7,"a": e.target.value})}}
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>b/ étudier un vocabulaire de base et un minimum de grammaire avant de me lancer dans une conversation.</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                                onChange={(e)=>{setQ7({...Q7,"b": e.target.value})}}
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>d/ improviser : tout dépend de la langue, de mes rencontres et de mon état d'esprit...</li>
                            
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                                onChange={(e)=>{setQ7({...Q7,"c": e.target.value})}}
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>c/ me plonger dans la pratique et parler le plus tôt possible !</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                                onChange={(e)=>{setQ7({...Q7,"d": e.target.value})}}
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>a/ lire et écouter pour bien m'imprégner de la langue.</li>
                            
                        </ol>
                    </li>
                    <li>8/ Pour préparer un exposé,
                        <ol type='a'>
                        <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                                onChange={(e)=>{setQ8({...Q8,"a": e.target.value})}}
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>d/ je construis une structure logique, une analyse et une synthèse.</li>
                        
                        <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                                onChange={(e)=>{setQ8({...Q8,"b": e.target.value})}}
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>a/ je le construis en fonction de mon public. S'il le faut, j'improvise sur place.</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                                onChange={(e)=>{setQ8({...Q8,"c": e.target.value})}}
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>b/ je répète seul ou en petit comité.</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                                onChange={(e)=>{setQ8({...Q8,"d": e.target.value})}}
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>c/ je m'inspire d'exemples que j'ai pu observer et apprécier.</li>
                            </ol>
                    </li>
                </ol>
            </div>
            <button class="btn btn-light" onClick={() => { setCurrentStep(2) }}>
                Précédent
            </button>

            <button class="btn btn-light" style={{ marginLeft: '910px' }} onClick={() => { setCurrentStep(4) }}>
                Suivant
            </button>
        </React.Fragment>
    )
}
export default Partie2;
