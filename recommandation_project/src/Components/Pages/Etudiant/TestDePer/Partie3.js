import React, { useContext } from "react";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { multiStepContext } from "./StepContextTest";



function Partie3() {
    const { setCurrentStep } = useContext(multiStepContext);
    return ( 
        <React.Fragment>
            <div>
                <ol start="9">
                    <li> Pour passer de bonnes vacances,
                        <ol type='a'>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>je me décide rapidement, je prépare mes bagages ou mon matériel et je fonce.</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>je rassemble une solide documentation, je pèse le pour et le contre et je choisis en connaissance de cause...</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>j'aime voir sur place et risquer un peu d'imprévu.</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>j'hésite à me décider, j'ai besoin d'avis, de témoignages ...</li>
                        </ol>
                    </li>
                    <li>Si je dois lire un livre difficile,
                        <ol type='a'>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>j'analyse la table des matières ... J'essaie d'assimiler chaque élément avant de passer au suivant.</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>je commence par le parcourir pour mieux le "sentir" et pour voir si cela vaut la peine d'insister...</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>je recherche surtout les exemples, les aspects concrets et les applications.</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>je ne me presse pas, je demande parfois des avis, des appréciations.</li>
                        </ol>
                    </li>
                    <li>Si je dois préparer un bon petit plat,
                        <ol type='a'>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>je m'adresse à quelqu'un qui s'y connaît et je l'observe.</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>j'analyse la recette ; il faut de la rigueur et de la précision.</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>je me fie plutôt à mon expérience et à mon coup d'oeil ...</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>je me lance, je tâtonne, je goûte ... Je mets tout de suite la main à la pâte.</li>
                        </ol>
                    </li>
                    <li> Pour choisir une profession,
                        <ol type='a'>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>le mieux c'est d'essayer en faisant un stage.</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>Pour moi, le plus important est de se fier à ses intuitions et à ses relations.</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>l'idéal est d'observer les professionnels sur le terrain et de solliciter leurs témoignages.</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>l'essentiel est d'analyser tous les éléments, par exemple les aptitudes, les débouchés, les salaires...</li>
                        </ol>
                    </li>
                </ol>
            </div>
            <button class="btn btn-light" onClick={() => { setCurrentStep(3) }}>
                Précédent
            </button>

            <button class="btn btn-light" style={{ marginLeft: '910px' }} onClick={() => { setCurrentStep(5) }}>
                Suivant
            </button>
        </React.Fragment>
    )
}
export default Partie3;
