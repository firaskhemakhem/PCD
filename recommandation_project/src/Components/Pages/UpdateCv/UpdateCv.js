import React,{useContext} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import UpdateInfoPer from './UpdateInfoPer';
import UpdateInfoAdd from './UpdateInfoAdd';
import UpdateCompetence from './UpdateCompetence'
import ResUpdate from './ResUpdate';
import HeaderCan from '../Etudiant/HeaderCan';
import {multiStepContext} from './StepContextUpdate';



const theme = createTheme();
const UpdateCv=()=>{
  const {currentStep, finalData}=useContext(multiStepContext);
  function showStep(step) {
    switch (step) {
      case 1:
        return <UpdateInfoPer/>;
      case 2:
        return <UpdateCompetence/>;
      case 3:
        return <UpdateInfoAdd/>;
      case 4:
          return <ResUpdate/>
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
export default UpdateCv;
