import React, { useContext, useState } from 'react';
import Grid from '@mui/material/Grid';
import { multiStepContext } from "./StepContextTest";
const Consignes = () => {
    const { setCurrentStep } = useContext(multiStepContext);
    return (
        <React.Fragment>
        <div>
            <div>Durée : environ 20 minutes</div>
            <div>Quelques consignes primordiales pour que votre test soit valable
                <ol>

                    <li>Il n&#39;y a pas de bonnes ou de mauvaises réponses, ni une réponse &quot;plus intelligente&quot; que les autres.</li>
                    <li><div>  Pour chacune des 12 situations, il faut :
                        <ul>
                            <li> mettre un chiffre dans les 4 cases (de 1 à 4)</li>
                            <li>utiliser chaque fois un chiffre différent</li>
                            <li>utiliser les quatre chiffres</li>
                        </ul></div></li>
                    <li> Signification des chiffres :
                        <ol>
                            <li>correspond à TOUT À FAIT MOI</li>
                            <li>correspond à souvent moi</li>
                            <li>correspond à parfois moi</li>
                            <li>correspond à RAREMENT MOI</li>
                        </ol></li>
                    <li>Il faut répondre le plus spontanément possible.</li>
                    <li>Il faut répondre à toutes les questions.</li>
                </ol>
            </div>
            <div><ol type='a'>Exemple :
                Quand j&#39;ai une petite faim,
                <div>2<li style={{marginTop: '-25px', marginLeft: '35px'}}> je patiente jusqu&#39;à l&#39;heure du repas</li></div>
                <div>4<li style={{marginTop: '-25px', marginLeft: '35px'}}> je mange ce que j&#39;avais prévu</li></div>
                <div>3<li style={{marginTop: '-25px', marginLeft: '35px'}}>je me débrouille</li></div>
                <div>1<li style={{marginTop: '-25px', marginLeft: '35px'}}>je prends ce qui me tombe sous la main</li></div>
                </ol>
            </div>
            <div>
            {/* <ol> Lorsque vous aurez répondu aux 12 items, vous devrez :
                1) <li></li>transcrire les réponses dans la grille de décodage.
                2) <li></li>calculer les valeurs Ab, R, Ac et I.
                3) <li></li>effectuer les deux soustractions I - Ab et Ac - R (sans oublier les correctifs).
                4) <li></li>reportez les deux valeurs, ainsi obtenues, sur les axes correspondants.
                Vous pourrez alors lire le descriptif de votre style d&#39;apprentissage préférentiel (point ayant pour coordonnées ces deux
                valeurs).
                </ol> */}
            </div>
            <Grid item
                xs={40}
                sm={12}>
                <Grid container justifyContent="flex-end">
                    <button class="btn btn-light" onClick={() => { setCurrentStep(2) }}>
                        Suivant
                    </button>
                </Grid>
            </Grid>
        </div>
        </React.Fragment>
    )
}

export default Consignes;