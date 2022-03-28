import React ,{useState} from 'react';
import Footer from '../src/Components/Footer/Footer'
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import Acceuil from './Components/Acceuil/Acceuil';
<<<<<<< HEAD
import AuthEtudiant from './Components/Pages/AuthEtudiant';
import AuthRecruteur from './Components/Pages/AuthRecruteur';
=======
import Auth from './Components/Pages/Auth';
>>>>>>> dbe89ad9c556bf731337624b37f7407f2fee6498
import InscRec from './Components/Pages/InscRec';
import Detaille from './Components/Detaille/Detaille';
import InscEtu from './Components/Pages/InscEtu';
import EspaceCandidat from './Components/Pages/EspaceCandidat';
import EspaceRec from './Components/Pages/EspaceRec';
<<<<<<< HEAD
import CandProfile from './Components/Pages/CandidatProfile';

/*<Route exact path = "/CandProfile/:id" element={<CandProfile/>}/> ki nrigel 7keyet el id*/

=======
import Cv from './Components/Pages/formCv/Cv';
import StepContext from './Components/Pages/formCv/StepContext';
>>>>>>> dbe89ad9c556bf731337624b37f7407f2fee6498
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
        <Route exact path ="/Detaille" element={<Detaille/>}/>
        <Route exact path = "/EspCand/:id" element={<EspaceCandidat/>}/>
        <Route exact path = "/EspRec" element={<EspaceRec/>}/>
<<<<<<< HEAD
        <Route exact path = "/CandProfile/:id" element={<CandProfile/>}/>
        
=======
        <Route exact path="/CV" element={<StepContext><Cv/></StepContext>}/>
>>>>>>> dbe89ad9c556bf731337624b37f7407f2fee6498
      </Routes>
    </BrowserRouter>   
    </div>
    
    
  );
}
  
export default App;