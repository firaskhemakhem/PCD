import React, {useContext, useState, useRef} from "react";
import {multiStepContext} from "./StepContext";

import {PDFExport} from '@progress/kendo-react-pdf';
import './Cv.css';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router';

function Res() {
    const navigate = useNavigate();
    const {userData, setFinalData} = useContext(multiStepContext);
    const [infoper, setInfoper] = useState([]);
    const [infoadd, setInfoadd] = useState([]);
    const [competence, setCompetence] = useState([]);
    const [cv, setCv] = useState([]);
    const arrangeData = () => {
        setInfoper({
            "Nom": userData.Nom,
            "Email": userData.Email,
            "Adresse": userData.Adresse,
            "Gouvernorat": userData.Gouvernorat,
            "Tel": userData.Tel,
            "DDN": userData.DDN,
            "Dom": userData.Dom,
            "LoginStu": localStorage.getItem('LoginUser')
        });
        setCompetence({
            "Formation": userData.Formation,
            "ExpProf": userData.ExpProf,
            "Certif": userData.Certif,
            "Lang": userData.Lang,
            "Liens": userData.Liens,
            "LoginStu": localStorage.getItem('LoginUser')
        });
        setInfoadd({"CentreInt": userData.CentreInt, "VieAsso": userData.VieAsso, "LoginStu": localStorage.getItem('LoginUser')});
        setCv({
            "InfoPer": userData.Nom + "*" + userData.Email + "*" + userData.Adresse + "*" + userData.Gouvernorat + "*" + userData.Tel + "*" + userData.DDN + "*" + userData.Dom,
            "Compe": userData.Formation + "*" + userData.ExpProf + "*" + userData.Certif + "*" + userData.Lang + "*" + userData.Liens,
            "InfoAdd": userData.CentreInt + "*" + userData.VieAsso,
            "LoginStu": localStorage.getItem('LoginUser')
        });
        setFinalData(userData);
        console.log(cv);
        console.log(infoper);
        console.log(competence);
        console.log(infoadd);
        return(console.log(cv))
    }

    const registerInfoPer = event => {
        arrangeData();
        fetch('http://127.0.0.1:8000/PcdApp/infoper/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(infoper)
        }).then(data => data.json()).catch(error => console.error(error))
    }
    const registerInfoAdd = event => {
        arrangeData();
        fetch('http://127.0.0.1:8000/PcdApp/infoadd/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(infoadd)
        }).then(data => data.json()).catch(error => console.error(error))
    }
    const registercompetence = event => {
        arrangeData();
        fetch('http://127.0.0.1:8000/PcdApp/competence/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(competence)
        }).then(data => data.json()).catch(error => console.error(error))
    }
    const registercv = event => {
        arrangeData();
        fetch('http://127.0.0.1:8000/PcdApp/cv/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cv)
        }).then(data => data.json()).catch(error => console.error(error))
    }
    const ddData = [
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
    ];
    const pdfExportComponent = useRef(null);
    const [layoutSelection, setLayoutSelection] = useState({text: "A4", value: "size-a4"});
    const handleExportWithComponent = (event) => {
        pdfExportComponent.current.save();
    }

    const updatePageLayout = (event) => {
        setLayoutSelection(event.target.value);
    }
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
                                        userData.Nom
                                    } </span>
                                    <span className="invoice-number">
                                        {
                                        userData.Email
                                    }</span><br/>
                                    <span className="invoice-number">
                                        {
                                        userData.Tel
                                    }</span>
                                </div>
                                <div className="pdf-footer">
                                    <p> {
                                        userData.Gouvernorat
                                    }<br/> {
                                        userData.Adresse
                                    }<br/> {
                                        userData.DDN
                                    } </p>
                                </div>
                                <div className="addresses">
                                    <p className="signature">
                                        <h4>Compétences:</h4>
                                        <h6>Parcour Educatif</h6>
                                        <div>{
                                            userData.Formation
                                        }</div>
                                        <h6>Expérience Professionnelle</h6>
                                        <div>{
                                            userData.ExpProf
                                        }</div>
                                        <h6>Certificats</h6>
                                        <div>{
                                            userData.Certif
                                        }</div>
                                        <h6>Langues</h6>
                                        <div>{
                                            userData.Lang
                                        }</div>
                                        <p> {
                                            userData.Dom
                                        }<br/> {
                                            userData.Tel
                                        }<br/> {
                                            userData.Email
                                        } </p>
                                        <p> {
                                            userData.Liens
                                        }<br/>

                                        </p>
                                    </p>
                                </div>

                                <div className="addresses">
                                    <p className="signature">
                                        <h4>Infomation Additionnelles</h4>
                                        <h6>Centre d'Interet</h6>
                                        <div>{
                                            userData.CentreInt
                                        }</div>
                                        <h6>vie associative</h6>
                                        <div>{
                                            userData.VieAsso
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
                            registerInfoPer();
                            registerInfoAdd();
                            registercv();
                            registercompetence();
                            handleExportWithComponent();
                            //navigate('/EspCand/'+localStorage.getItem('LoginUser'))
                        }
                }>

                    Terminer
                </button>
            </Grid>
        </div>

    );
}
export default Res;
