import React, { useContext } from "react";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { multiStepContext } from "./StepContextTest";



function Partie3() {
    const {Ab,I,Ac,R,Q9,Q10,Q11,Q12,setQ9,setQ10,setQ11,setQ12, setCurrentStep,testData, setTestData } = useContext(multiStepContext);
    return ( 
        <React.Fragment>
            <div>
                <ol start="9">
                    <li>9/ Pour passer de bonnes vacances,
                        <ol type='a'>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                                onChange={(e)=>{setQ9({...Q9,"a": e.target.value})}}
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>b/ je rassemble une solide documentation, je pèse le pour et le contre et je choisis en connaissance de cause...</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                                onChange={(e)=>{setQ9({...Q9,"b": e.target.value})}}
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>c/ j'aime voir sur place et risquer un peu d'imprévu.</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                                onChange={(e)=>{setQ9({...Q9,"c": e.target.value})}}
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>a/ je me décide rapidement, je prépare mes bagages ou mon matériel et je fonce.</li>
                            
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                                onChange={(e)=>{setQ9({...Q9,"c": e.target.value})}}
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>d/ j'hésite à me décider, j'ai besoin d'avis, de témoignages ...</li>
                        </ol>
                    </li>
                    <li>10/Si je dois lire un livre difficile,
                        <ol type='a'>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                                onChange={(e)=>{setQ10({...Q10,"a": e.target.value})}}
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>a/ j'analyse la table des matières ... J'essaie d'assimiler chaque élément avant de passer au suivant.</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                                onChange={(e)=>{setQ10({...Q10,"b": e.target.value})}}
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>b/ je commence par le parcourir pour mieux le "sentir" et pour voir si cela vaut la peine d'insister...</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                                onChange={(e)=>{setQ10({...Q10,"c": e.target.value})}}
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>c/ je recherche surtout les exemples, les aspects concrets et les applications.</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                                onChange={(e)=>{setQ10({...Q10,"d": e.target.value})}}
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>d/ je ne me presse pas, je demande parfois des avis, des appréciations.</li>
                        </ol>
                    </li>
                    <li>11/ Si je dois préparer un bon petit plat,
                        <ol type='a'>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                                onChange={(e)=>{setQ11({...Q11,"a": e.target.value})}}
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>b/ j'analyse la recette ; il faut de la rigueur et de la précision.</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                                onChange={(e)=>{setQ11({...Q11,"b": e.target.value})}}
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>c/ je me fie plutôt à mon expérience et à mon coup d'oeil ...</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                                onChange={(e)=>{setQ11({...Q11,"c": e.target.value})}}
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>d/ je me lance, je tâtonne, je goûte ... Je mets tout de suite la main à la pâte.</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                                onChange={(e)=>{setQ11({...Q11,"d": e.target.value})}}
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>a/ je m'adresse à quelqu'un qui s'y connaît et je l'observe.</li>
                            
                        </ol>
                    </li>
                    <li>12/ Pour choisir une profession,
                        <ol type='a'>
                        <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                                onChange={(e)=>{setQ12({...Q12,"a": e.target.value})}}
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>d/ l'essentiel est d'analyser tous les éléments, par exemple les aptitudes, les débouchés, les salaires...</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                                onChange={(e)=>{setQ12({...Q12,"b": e.target.value})}}
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>b/ Pour moi, le plus important est de se fier à ses intuitions et à ses relations.</li>
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                                onChange={(e)=>{setQ12({...Q12,"c": e.target.value})}}
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>a/ le mieux c'est d'essayer en faisant un stage.</li>
                            
                            <TextField
                                style={{ width: "15px" }}
                                id="standard-required"
                                variant="standard"
                                onChange={(e)=>{setQ12({...Q12,"d": e.target.value})}}
                            />
                            <li style={{ marginTop: '-20px', marginLeft: '35px' }}>c/ l'idéal est d'observer les professionnels sur le terrain et de solliciter leurs témoignages.</li>
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
