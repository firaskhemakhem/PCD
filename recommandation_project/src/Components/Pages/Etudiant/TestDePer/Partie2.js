import React, { useContext } from "react";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { multiStepContext } from "./StepContextTest";


function Partie2() {
    const { setCurrentStep } = useContext(multiStepContext);
    return (
        <React.Fragment>
            <div>
                <ol start="5">
                    <li> Quand je dois faire un achat important, pour choisir,
                        <ol type='a'>
                        <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>j'observe, j'écoute les avis et les contre-avis, je prends tout mon temps.</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>je fais confiance à mon intuition.</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>j'essaie de calculer le meilleur rapport qualité-prix (au besoin je consulte une revue spécialisée).</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>ce qui m'intéresse, c'est d'abord de faire un essai, je n'achète pas un chat dans un sac.</li>
                        </ol>
                    </li>
                    <li> Le professeur qui me convient le mieux est quelqu'un
                        <ol type='a'>
                        <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>qui expose sa matière avec rigueur, logique et précision.</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>qui fait agir ses étudiants aussi souvent que possible.</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>qui, avant tout, fait appel à l'expérience vécue des étudiants.</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>qui a le souci de faire observer et réfléchir avant d'agir.</li>
                        </ol>
                    </li>
                    <li> Pour apprendre une langue étrangère, je préfère
                        <ol type='a'>
                        <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>lire et écouter pour bien m'imprégner de la langue.</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>étudier un vocabulaire de base et un minimum de grammaire avant de me lancer dans une conversation.</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>me plonger dans la pratique et parler le plus tôt possible !</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>improviser : tout dépend de la langue, de mes rencontres et de mon état d'esprit...</li>
                        </ol>
                    </li>
                    <li> Pour préparer un exposé,
                        <ol type='a'>
                        <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>je le construis en fonction de mon public. S'il le faut, j'improvise sur place.</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>je répète seul ou en petit comité.</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>je m'inspire d'exemples que j'ai pu observer et apprécier.</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>je construis une structure logique, une analyse et une synthèse.</li>
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
