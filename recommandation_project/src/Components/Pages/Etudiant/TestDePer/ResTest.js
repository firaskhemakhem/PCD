import React, {useContext, useState, useRef} from "react";
import {multiStepContext} from "./StepContextTest";

import {PDFExport} from '@progress/kendo-react-pdf';
import './Test.css';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router';

function Res() {
    const navigate = useNavigate();
    
    return (
        <div>
            ResTest
        </div>

    );
}
export default Res;
