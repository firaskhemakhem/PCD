import React, {useContext, useState, useRef} from "react";
import {multiStepContext} from "./StepContextUpdate";

import {PDFExport} from '@progress/kendo-react-pdf';
import './Cv.css';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router';
import PopUpMessage from '../../PopUpMessage/PopUpFile';
function ResUpdate() {  
    const { updateInfoPer, updateCompétence, updateInfoAdd,updateCv, setUpdateCv} = useContext(multiStepContext);
    const [openPop, setOpenPop]= React.useState(false);
    const navigate = useNavigate();
    const arrangeData = () => {
        const id = window.location.href.split('/')[4]
       setUpdateCv({
            "LoginStu": id,
            "InfoPer": updateInfoPer.Nom + "*" + updateInfoPer.Email + "*" + updateInfoPer.Adresse + "*" + updateInfoPer.Gouvernorat + "*" + updateInfoPer.Tel + "*" + updateInfoPer.DDN + "*" + updateInfoPer.Dom,
            "Compe": updateCompétence.Formation + "*" + updateCompétence.ExpProf + "*" + updateCompétence.Certif + "*" + updateCompétence.Lang + "*" + updateCompétence.Liens,
            "InfoAdd": updateInfoAdd.CentreInt + "*" + updateInfoAdd.VieAsso,
            
        });
        console.log("sara")
        console.log(updateCompétence)
        console.log(updateCv);
        return(console.log(updateCv))
    }
    const update = event => {
        arrangeData();
        const id = window.location.href.split('/')[4]
        fetch(`http://127.0.0.1:8000/PcdApp/cv/${id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateCv)
        }).then(data => data.json()).then(console.log(updateCv)).catch(error => console.error(error))
    }
    /*const ddData = [
        {
            text: "A3",
            value: "size-a3"
        }, {
            text: "Letter",
            value: "size-letter"
        }, {
            text: "Executive",
            value: "size-executive"
        }
    ];*/
    const pdfExportComponent = useRef(null);
    const [layoutSelection, setLayoutSelection] = useState({text: "A4", value: "size-a4"});
    /*const handleExportWithComponent = (event) => {
        pdfExportComponent.current.save();
    }*/

    /*const updatePageLayout = (event) => {
        setLayoutSelection(event.target.value);
    }*/
    return (
        <div>
            <br/>
            <div id="example">
                <div className="page-container hidden-on-narrow">
                    <PDFExport ref={pdfExportComponent}>
                        <div className={
                            `pdf-page ${
                                layoutSelection.value
                            }`
                        }>
                            <div className="inner-page">
                                <div className="pdf-header">
                                    <span className="company-logo">
                                        {
                                        updateInfoPer.Nom
                                    } </span>
                                    <span className="invoice-number">
                                        {
                                        updateInfoPer.Email
                                    }</span><br/>
                                    <span className="invoice-number">
                                        {
                                        updateInfoPer.Tel
                                    }</span>
                                </div>
                                <div className="pdf-footer">
                                    <p> {
                                        updateInfoPer.Gouvernorat
                                    }<br/> {
                                        updateInfoPer.Adresse
                                    }<br/> {
                                        updateInfoPer.DDN
                                    } </p>
                                </div>
                                <div className="addresses">
                                    <p className="signature">
                                        <h4>Compétences:</h4>
                                        <h6>Parcour Educatif</h6>
                                        <div>{
                                            updateCompétence.Formation
                                        }</div>
                                        <h6>Expérience Professionnelle</h6>
                                        <div>{
                                            updateCompétence.ExpProf
                                        }</div>
                                        <h6>Certificats</h6>
                                        <div>{
                                            updateCompétence.Certif
                                        }</div>
                                        <h6>Langues</h6>
                                        <div>{
                                            updateCompétence.Lang
                                        }</div>
                                        <p> {
                                            updateInfoPer.Dom
                                        }<br/> {
                                            updateInfoPer.Tel
                                        }<br/> {
                                            updateInfoPer.Email
                                        } </p>
                                        <p> {
                                            updateInfoPer.Liens
                                        }<br/>

                                        </p>
                                    </p>
                                </div>

                                <div className="addresses">
                                    <p className="signature">
                                        <h4>Infomation Additionnelles</h4>
                                        <h6>Centre d'Interet</h6>
                                        <div>{
                                            updateInfoAdd.CentreInt
                                        }</div>
                                        <h6>vie associative</h6>
                                        <div>{
                                            updateInfoAdd.VieAsso
                                        }</div>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </PDFExport>
                </div>
            </div>
            <br/>
            <Grid container justifyContent="flex-end">
                <button class="btn btn-outline-success"

                    onClick={
                        () => {
                            update()
                            setOpenPop(true)
                        }
                }>
                    Terminer
                </button>
            </Grid>
            <div align="center">
                {openPop && <PopUpMessage dataFromParent ={<>
                <h3><b>félicitations!</b></h3><br/>
                <p>Votre CV a été modifier!</p>
                    <button class="btn btn-outline-dark" variant="contained" onClick={(e)=>{
                        e.preventDefault()
                        update()
                        navigate('/EspCand/'+window.location.href.split('/')[4]);
                        }}
                    >
                        Ok
                    </button>
                </>}
          />}
            </div>
        </div>
////handleExportWithComponent();
    );
}
export default ResUpdate;
