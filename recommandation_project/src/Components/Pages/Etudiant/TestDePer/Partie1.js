import React, { useContext, useState } from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { multiStepContext } from "./StepContextTest";


function Partie1() {
    const {Ab,I,Ac,R,Q1,Q2,Q3,Q4,setQ1,setQ2,setQ3,setQ4, setCurrentStep,testData, setTestData } = useContext(multiStepContext);
    return (
        <React.Fragment>
            <div>
                <ol>
                    <li>1/ Quand j'utilise un nouvel appareil (ordinateur, magnétoscope ...),
                        <ol type='a'>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                                onChange={(e)=>{setQ1({...Q1,"a": e.target.value})}}
                                
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>a/ j'analyse soigneusement le mode d'emploi et j'essaie de bien comprendre le fonctionnement de chaque élément.</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                                onChange={(e)=>{setQ1({...Q1,"b": e.target.value})}}
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>c/ je me fie à mes intuitions ou je demande à un copain de m'aider.</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                                onChange={(e)=>{setQ1({...Q1,"c": e.target.value})}}
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>b/ je procède par essais et erreurs, je tâtonne.</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                                onChange={(e)=>{setQ1({...Q1,"d": e.target.value})}}
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>d/ j'écoute et j'observe attentivement les explications de celui qui s'y connaît.</li>
                        </ol>
                    </li>
                    <li>2/ En général, face à un problème,
                        <ol type='a'>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                                //onChange={(e)=>{setAb({Ab}+e.target.value); console.log(Ab+e.target.value)}}
                                onChange={(e)=>{setQ2({...Q2,"a": e.target.value})}}

                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>b/ j'analyse rationnellement le problème, j'essaie de rester logique...</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                                onChange={(e)=>{setQ2({...Q2,"b": e.target.value})}}
                            />
                         <li style={{ marginTop: '-20px', marginLeft: '35px' }}>d/ je réagis plutôt instinctivement; je me fie à mes impressions ou à mes sentiments.</li>
                         
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                                onChange={(e)=>{setQ2({...Q2,"c": e.target.value})}}
                            />

                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>c/ je n'hésite pas, je prends le taureau par les cornes et j'agis.</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                                onChange={(e)=>{setQ2({...Q2,"c": e.target.value})}}
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>a/ je prends tout mon temps et j'observe.</li>
                            
                        </ol>
                    </li>
                    <li>3/ Pour m'orienter dans une ville inconnue,
                        <ol type='a'>
                        <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                                onChange={(e)=>{setQ3({...Q3,"a": e.target.value})}}
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>c/ je me repère rationnellement ; de préférence, je consulte une carte ou un plan.</li>
                            
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                                onChange={(e)=>{setQ3({...Q3,"b": e.target.value})}}
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>a/ je me fie à mon intuition, je "sens" la direction générale. Si cela ne va pas, j'interpelle quelqu'un de sympathique...</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                                onChange={(e)=>{setQ3({...Q3,"c": e.target.value})}}
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>d/ l'important pour moi, c'est de réagir rapidement : parfois je demande, parfois j'essaie un itinéraire, quitte à faire demi-tour...</li>
                        
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                                onChange={(e)=>{setQ3({...Q3,"d": e.target.value})}}
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>b/ j'observe calmement et attentivement. J'essaie de trouver des points de repère.</li>
                           </ol>
                    </li>
                    <li>4/ Si je dois étudier un cours,
                        <ol type='a'>
                        <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                                onChange={(e)=>{setQ4({...Q4,"a": e.target.value})}}
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>b/ je décortique soigneusement la matière : j'analyse et je raisonne.</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                                onChange={(e)=>{setQ4({...Q4,"b": e.target.value})}}
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>d/ j'aime travailler avec des amis et je m'attache à ce qui me paraît important.</li>
                        
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                                onChange={(e)=>{setQ4({...Q4,"c": e.target.value})}}
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>a/ j'essaie surtout de faire des exercices et de découvrir des applications pratiques.</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                                onChange={(e)=>{setQ4({...Q4,"d": e.target.value})}}
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>c/ je prends mon temps, je lis et relis attentivement la matière.</li>
                            </ol>
                    </li>


                </ol>

            </div>

            <button class="btn btn-light" 
                onClick={() => { setCurrentStep(1)}}>
                Précédent
            </button>

            <button class="btn btn-light" style={{ marginLeft: '910px' }} onClick={() => { setCurrentStep(3) }}>
                Suivant
            </button>

        </React.Fragment>
    );
}

export default Partie1;
