import React from "react";
import Divider from '@mui/material/Divider';
import MuiGrid from '@mui/material/Grid';
import {styled} from '@mui/material/styles';
import Header from "../Header/Header";
import '../../styles/Pages/Detaille.css'
import Footer from "../Footer/Footer";

const Grid = styled(MuiGrid)(({theme}) => ({
    width: '100%',
    ...theme.typography.body2,
    '& [role="separator"]': {
        margin: theme.spacing(0, 2)
    }
}));

const Detaille = () => {
    return (
        <div>
            <Header/>
            <br/>
            <h2 class="ui center floated header">PIAPE</h2>
            <br/>
            <div className="jss801 jss802 jss803">
                <div>
                    <Divider textAlign="center">
                        <h2>Platform Intelligente pour Achever votre Parcours Educatif</h2>
                    </Divider>
                    <br/>
                    <Divider textAlign="center">
                        <h3>Notre Objectif</h3>
                    </Divider>
                    <br/>
                    <div class="page_Border">
                        <p>
                            <h4>PIAPE est une application web a comme objectifs principaux d'aider l’étudiant à trouver le PFE le plus adéquat, ainsi que le recruteur à trouver le candidat adéquat à chaque proposition de PFE.</h4>
                        </p>
                    </div>
                    <br/>
                    <Grid container>
                        <Grid item xs>
                            <Divider textAlign="center">
                                <h3>Êtes-vous un étudiant ?</h3>
                            </Divider>
                            <div class="page_Border">
                                <p>
                                    <h4>Grâce à notre plateforme, nous vous aidons à achever votre parcour educatif, en vous recommandant fréquemment des projets les plus adéquats à votre CV.</h4>
                                </p>
                                <br/>

                            </div>
                        </Grid>
                        <Divider orientation="vertical" flexItem>OU</Divider>
                        <Grid item xs>
                            <Divider textAlign="center">
                                <h3>Êtes-vous un recruteur?</h3>
                            </Divider>
                            <div class="page_Border">
                                <p>
                                    <h4>Notre plateforme vous aide à trouver le candidat le mieux adapté aux projets que vous proposez par le biais de notre site web en recevant des recommandations concernant le candidat qui leur convient le mieux sur la base de leurs compétences.</h4>
                                </p>
                                <br/>

                            </div>
                        </Grid>
                    </Grid>

                </div>
            </div>
            <Footer/>
        </div>
    );


}

export default Detaille;
