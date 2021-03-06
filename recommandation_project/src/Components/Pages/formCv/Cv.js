import React,{useContext} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InfoPer from "./InfoPer";
import Competence from "./Competence";
import InfoAdd from "./InfoAdd";
import Res from './Res';
import HeaderCan from '../Etudiant/HeaderCan';
import {multiStepContext} from './StepContext';



const theme = createTheme();
const Cv=()=>{
  const {currentStep}=useContext(multiStepContext);
  function showStep(step) {
    switch (step) {
      case 1:
        return <InfoPer/>;
      case 2:
        return <Competence/>;
      case 3:
        return <InfoAdd/>;
      case 4:
          return <Res/>
      default:
        throw new Error('Unknown step');
    }
  }

  
  return(
    <header className='App-header'>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HeaderCan/>
      <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Curriculum vitæ
          </Typography>
          <div className="center-stepper">
            <Stepper style={{ width: "18%" }} activeStep={currentStep - 1}  orientation="horizontal">
              <Step>
                <StepLabel>Informations Personnelles</StepLabel>
              </Step>
              <Step>
                <StepLabel>Compétences</StepLabel>
              </Step>
              <Step>
                <StepLabel>Informations Additionnelles</StepLabel>
              </Step>
              <Step>
                <StepLabel>Résultat Final</StepLabel>
              </Step>
            </Stepper>
          </div>
          {showStep(currentStep)}
        </Paper>
      </Container>
    </ThemeProvider>
    </header>
  )
}
export default Cv;
