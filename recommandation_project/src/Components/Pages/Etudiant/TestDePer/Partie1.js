import React, { useContext, useState } from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { multiStepContext } from "./StepContextTest";


function Partie1() {
    const { setCurrentStep } = useContext(multiStepContext);
    return (
        <React.Fragment>
            <div>
                <ol>
                    <li> Quand j'utilise un nouvel appareil (ordinateur, magnétoscope ...),
                        <ol type='a'>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>j'analyse soigneusement le mode d'emploi et j'essaie de bien comprendre le fonctionnement de chaque élément.</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>je procède par essais et erreurs, je tâtonne.</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>je me fie à mes intuitions ou je demande à un copain de m'aider.</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>j'écoute et j'observe attentivement les explications de celui qui s'y connaît.</li>
                        </ol>
                    </li>
                    <li> En général, face à un problème,
                        <ol type='a'>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>je prends tout mon temps et j'observe.</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>j'analyse rationnellement le problème, j'essaie de rester logique...</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>je n'hésite pas, je prends le taureau par les cornes et j'agis.</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>je réagis plutôt instinctivement; je me fie à mes impressions ou à mes sentiments.</li>
                        </ol>
                    </li>
                    <li> Pour m'orienter dans une ville inconnue,
                        <ol type='a'>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>je me fie à mon intuition, je "sens" la direction générale. Si cela ne va pas, j'interpelle quelqu'un de sympathique...</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>j'observe calmement et attentivement. J'essaie de trouver des points de repère.</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>je me repère rationnellement ; de préférence, je consulte une carte ou un plan.</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>l'important pour moi, c'est de réagir rapidement : parfois je demande, parfois j'essaie un itinéraire, quitte à faire demi-tour...</li>
                        </ol>
                    </li>
                    <li> Si je dois étudier un cours,
                        <ol type='a'>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>j'essaie surtout de faire des exercices et de découvrir des applications pratiques.</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>je décortique soigneusement la matière : j'analyse et je raisonne.</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>je prends mon temps, je lis et relis attentivement la matière.</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>j'aime travailler avec des amis et je m'attache à ce qui me paraît important.</li>
                        </ol>
                    </li>


                </ol>

            </div>

            <button class="btn btn-light" onClick={() => { setCurrentStep(1) }}>
                Précédent
            </button>

            <button class="btn btn-light" style={{ marginLeft: '910px' }} onClick={() => { setCurrentStep(3) }}>
                Suivant
            </button>

        </React.Fragment>
    );
}

export default Partie1;
