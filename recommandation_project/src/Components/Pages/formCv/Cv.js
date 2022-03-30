import react,{useContext} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
//import { useState } from 'react';

import InfoPer from "./InfoPer";
import Competence from "./Competence";
import InfoAdd from "./InfoAdd";
import Res from './Res';
import Header from '../../Header/Header';
import {multiStepContext} from './StepContext';
//const steps = ['Information Personnel', 'Compétences', 'Information Additionnelle', 'Resultat Final'];



const theme = createTheme();
const Cv=()=>{
  const {currentStep, finalData}=useContext(multiStepContext);
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
      <Header/>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Curriculum vitæ
          </Typography>
          <div className="center-stepper">
            <Stepper style={{ width: "18%" }} activeStep={currentStep - 1}  orientation="horizontal">
              <Step>
                <StepLabel>Information Personnel</StepLabel>
              </Step>
              <Step>
                <StepLabel>Compétences</StepLabel>
              </Step>
              <Step>
                <StepLabel>Information Additionnelle</StepLabel>
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

/*export default function Cv() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };


  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };


  //const [IP,setIP]=useState({Id_InfoPer:'',Nom:'',Email:'',Tel:'',Gouvernorat:'',Adresse:'',DDN:''})
  //const [IA,setIA]=useState({Id_InfoAdd:'',CentreInt:'',VieAsso:''})
  //const [Com,setCom]=useState({Id_Com:'',Formation:'',ExpProf:'',Certif:'',Lang:'',Liens:''})
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header/>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Curriculum vitæ
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <button class="btn btn-light" onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </button>
                  )}
                
                  <button
                    class="btn btn-light"
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? 'Terminer' : 'Next'}
                  </button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}*/