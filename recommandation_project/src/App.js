import React ,{useState} from 'react';
import Footer from '../src/Components/Footer/Footer'
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import Acceuil from './Components/Acceuil/Acceuil';

import AuthEtudiant from './Components/Pages/Etudiant/AuthEtudiant';

import InscRec from './Components/Pages/Recruteur/InscRec';
import Detaille from './Components/Detaille/Detaille';
import InscEtu from './Components/Pages/Etudiant/InscEtu';
import EspaceCandidat from './Components/Pages/Etudiant/EspaceCandidat';
import EspaceRec from './Components/Pages/Recruteur/EspaceRec';
import AcceuilAgen from './Components/Pages/Recruteur/AgendaPartagee/AcceuilAgen';
import CandProfile from './Components/Pages/Etudiant/CandidatProfile';
import AcceuilFed from './Components/Pages/FeedBack/AcceuilFed';
import ForgetPassword from './Components/Pages/Etudiant/forgetPassword';
import ChangePassword from './Components/Pages/Etudiant/ChangePassword';

import Cv from './Components/Pages/formCv/Cv';
import StepContext from './Components/Pages/formCv/StepContext';
import StepContextUpdate from './Components/Pages/UpdateCv/StepContextUpdate'
import UpdateCv from './Components/Pages/UpdateCv/UpdateCv';

import Creation from './Components/Pages/Recruteur/Creation';
import AuthRecruteur from './Components/Pages/Recruteur/AuthRecruteur';
import RecProfile from './Components/Pages/Recruteur/RecProfile';

import Update from './Components/Pages/Recruteur/AgendaPartagee/Update';
import FormSuj from './Components/Pages/Recruteur/Sujets/FormSuj';
import Entreprise from './Components/Pages/Entreprise/Entreprise';
import VisibleStu from './Components/Pages/Entreprise/VisibleStu';
import Favoris from './Components/Pages/Entreprise/Favoris';

import LettreDeMotiv from './Components/Pages/Etudiant/LettreDeMotiv'
import UpdateSuj from './Components/Pages/Recruteur/Sujets/UpdateSuj';
import Listedescand from './Components/Pages/Recruteur/Listedescandidatures/Listedescand';
import Recherche from './Components/Recherche/Recherche';


import Test from './Components/Pages/Etudiant/TestDePer/Test';
import StepContextTest from './Components/Pages/Etudiant/TestDePer/StepContextTest';
import Postulation from './Components/Pages/Etudiant/Postulation';

import RecommandationCVs from './Components/Pages/Recruteur/RecommandationCVs'
function App() {
  const [token, setToken] = useState('');

  const userLogin = (tok) => {
    setToken(tok);
  }
  return ( 
    <div className='App'> 
      <BrowserRouter>
       <Routes>
       <Route exact path ="/" element ={<Acceuil/>}/>
        <Route exact path ="/authEtud"element={<AuthEtudiant/>}/>
        <Route exact path ="/AuthRec"element={<AuthRecruteur/>}/>
        <Route exact path ="/InscEtud" element ={<InscEtu/>} userLogin={userLogin}/>
        <Route exact path ="/InscRec" element ={<InscRec/>} userLogin={userLogin} /> 
        <Route exact path ="/footer" element ={<Footer/>}/>
        <Route exact path ="/forgetpassword/" element ={<ForgetPassword/>}/>
        <Route exact path ="/changepassword/" element ={<ChangePassword/>}/>
        <Route exact path ="/Detaille" element={<Detaille/>}/>
        <Route exact path = "/EspCand/:id" element={<EspaceCandidat/>}/>
        <Route exact path = "/EspRec/:id" element={<EspaceRec/>}/>
        <Route exact path ="/FeedBack/:id" element={<AcceuilFed/>}/>
        <Route exact path = "/CandProfile/:id" element={<CandProfile/>}/>
        <Route exact path = "/RecProfile/:id" element={<RecProfile/>}/>
        <Route exact path ="/Agenda/:id" element={<AcceuilAgen/>}/>
        <Route exact path="/CV/:id" element={<StepContext><Cv/></StepContext>}/>
        <Route exact path="/UpdateCV/:id" element={<StepContextUpdate><UpdateCv/></StepContextUpdate>}/>
        <Route exact path = "/Creation" element={<Creation/>}/>
        <Route exact path="/Update/:id/:id" element={<Update/>}/>
        <Route exact path = "/Sujet/:id" element={<FormSuj/>}/>
        <Route exact path = "/entreprise" element={<Entreprise/>}/>
        <Route exact path = "/entreprise/:id" element={<VisibleStu/>}/>
        <Route exact path = "/Favoris/:id" element={<Favoris/>}/>
        <Route exact path = "/Sujet" element={<FormSuj/>}/>
        <Route exact path = "/ListeCand/:id" element={<Listedescand/>}/>
        <Route exact path = "/UpdateSujet/:id" element={<UpdateSuj/>}/>
        <Route exact path="/ChoisirTemps/:id" element={<LettreDeMotiv/>} />
        <Route exact path="/Recherche" element={<Recherche/>}/>
        <Route exact path = "/Recherche/:id" element={<VisibleStu/>}/> 
        <Route exact path = '/Test/:id' element = {<StepContextTest><Test/></StepContextTest>}/>
        <Route exact path="/Post" element={<Postulation/>}/>
        <Route exact path = "/RecommandationCVs/:id" element={<RecommandationCVs/>}/>
      </Routes>
    </BrowserRouter>   
    </div>
    
    
  );
}
  
export default App;