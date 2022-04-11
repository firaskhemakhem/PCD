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
import ForgetPassword from './Components/Pages/Etudiant/ForgetPassword'

/*<Route exact path = "/CandProfile/:id" element={<CandProfile/>}/> ki nrigel 7keyet el id*/


import Cv from './Components/Pages/formCv/Cv';
//import ResulatFinal from './Components/Pages/formCv/ResultatFinal';
import StepContext from './Components/Pages/formCv/StepContext';


import Creation from './Components/Pages/Recruteur/Creation';
import AuthRecruteur from './Components/Pages/Recruteur/AuthRecruteur';
import RecProfile from './Components/Pages/Recruteur/RecProfile';

import Update from './Components/Pages/Recruteur/AgendaPartagee/Update';
import FormSuj from './Components/Pages/Recruteur/Sujets/FormSuj';
import LettreDeMotiv from './Components/Pages/Etudiant/LettreDeMotiv'

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
        {/* <Route exact path ="/InscRec" element ={<Registration/>} userLogin={userLogin} /> */}
        <Route exact path ="/footer" element ={<Footer/>}/>
        <Route exact path ="/password/" element ={<ForgetPassword/>}/>
        <Route exact path ="/Detaille" element={<Detaille/>}/>
        <Route exact path = "/EspCand/:id" element={<EspaceCandidat/>}/>
        <Route exact path = "/EspRec/:id" element={<EspaceRec/>}/>
        <Route exact path ="/FeedBack/:id" element={<AcceuilFed/>}/>
        <Route exact path = "/CandProfile/:id" element={<CandProfile/>}/>
        <Route exact path = "/RecProfile/:id" element={<RecProfile/>}/>
        <Route exact path ="/Agenda/:id" element={<AcceuilAgen/>}/>
        <Route exact path="/CV/:id" element={<StepContext><Cv/></StepContext>}/>
        <Route exact path = "/Creation" element={<Creation/>}/>
        <Route exact path="/Update/:id/:id" element={<Update/>}/>
        <Route exact path = "/Sujet" element={<FormSuj/>}/>
        <Route exact path="/LettreDeMotivation" element={<LettreDeMotiv/>} />
      </Routes>
    </BrowserRouter>   
    </div>
    
    
  );
}
  
export default App;