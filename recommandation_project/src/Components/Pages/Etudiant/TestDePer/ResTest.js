import React, {useContext, useState, useRef, useEffect} from "react";
import {multiStepContext} from "./StepContextTest";

import {PDFExport} from '@progress/kendo-react-pdf';
import './Test.css';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router';

function Res() {
    const navigate = useNavigate();
    const { Q1,Q2,Q3,Q4,setQ1,setQ2,setQ3,setQ4,Q5,Q6,Q7,Q8,setQ5,setQ6,setQ7,setQ8,Q9,Q10,Q11,Q12,setQ9,setQ10,setQ11,setQ12,setCurrentStep,testData, setTestData } = useContext(multiStepContext);
    const[Result,setResult]=useState(' O5TEEEEEEEEEEEEEEHHHHHHHHHHHHHHHHHHHHHHH');
    const donnerRes=(X1,Y1)=>{
        if (X1>0 && Y1>0){
            setResult(' Methodique Reflexif');
        }
        if (X1>0 && Y1<0){
            setResult(' Intuitif Reflexif');
        }
        if (X1<0 && Y1<0){
            setResult(' Intuitif Pragmatique');
        }
        if (X1<0 && Y1>0){
            setResult(' Methodique Pragmatique');
        }
    }
    useEffect(()=>{
        var Ab= Q1.a + Q2.a+ Q3.a+ Q4.a+ Q5.a+ Q6.a+ Q7.a+ Q8.a+ Q9.a+ Q10.a+ Q11.a+ Q12.a;
        var I= Q1.b + Q2.b+ Q3.b+ Q4.b+ Q5.b+ Q6.b+ Q7.b+ Q8.b+ Q9.b+ Q10.b+ Q11.b+ Q12.b;
        var Ac= Q1.c + Q2.c+ Q3.c+ Q4.c+ Q5.c+ Q6.c+ Q7.c+ Q8.c+ Q9.c+ Q10.c+ Q11.c+ Q12.c;
        var R= Q1.d + Q2.d+ Q3.d+ Q4.d+ Q5.d+ Q6.d+ Q7.d+ Q8.d+ Q9.d+ Q10.d+ Q11.d+ Q12.d;
        var X = I - Ab - 9;
        var Y = Ac - R - 5;
        console.log(X);
        console.log(Y);
        donnerRes(X,Y);    
    },[])
    return (
        <div>
            Vous êtes
            <div></div>
            {Result}
        </div>

    );
}
export default Res;
