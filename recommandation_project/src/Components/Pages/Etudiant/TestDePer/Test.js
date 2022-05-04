import React,{useContext} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Partie1 from "./Partie1";
import Partie2 from "./Partie2";
import Partie3 from "./Partie3";
import ResTest from './ResTest';
import {multiStepContext} from './StepContextTest';
import Consignes from './Consignes';

const theme = createTheme();
const Test=()=>{
  const {currentStep}=useContext(multiStepContext);
  function showStep(step) {
    switch (step) {
      case 1:
        return <Consignes/>
      case 2:
        return <Partie1/>;
      case 3:
        return <Partie2/>;
      case 4:
        return <Partie3/>;
      case 5:
          return <ResTest/>
      default:
        throw new Error('Unknown step');
    }
  }

  
  return(
    <header className='App-header'>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Test de personnalité
          </Typography>
          <br/>
          <div style={{marginLeft: '250px', marginBottom:'25px' }}>
          <div className="center-stepper">
            <Stepper style={{ width: "18%"}} activeStep={currentStep - 1}  orientation="horizontal">
              <Step>
                <StepLabel>Consignes</StepLabel>
              </Step>
              <Step>
                <StepLabel>Premiere Partie</StepLabel>
              </Step>
              <Step>
                <StepLabel>Deuxième Partie</StepLabel>
              </Step>
              <Step>
                <StepLabel>Troisiéme Partie</StepLabel>
              </Step>
              <Step>
                <StepLabel>Resultat</StepLabel>
              </Step>
            </Stepper>
            
          </div>
          </div>
          {showStep(currentStep)}
        </Paper>
      </Container>
    </ThemeProvider>
    </header>
  )
}
export default Test;
