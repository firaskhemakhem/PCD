import React ,{useState} from 'react';
import Footer from '../src/components/Footer/Footer'
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import Acceuil from './components/Acceuil/Acceuil';
import Auth from './components/Pages/Auth';
import InscRec from './components/Pages/InscRec';
import Detaille from './components/Detaille/Detaille';
import InscEtu from './components/Pages/InscEtu';
import EspaceCandidat from './components/Pages/EspaceCandidat';
import EspaceRec from './components/Pages/EspaceRec';
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
        <Route exact path ="/Auth" element ={<Auth/>}/>
        <Route exact path ="/InscEtud" element ={<InscEtu/>} userLogin={userLogin}/>
        <Route exact path ="/InscRec" element ={<InscRec/>} userLogin={userLogin} />
        <Route exact path ="/footer" element ={<Footer/>}/>
        <Route exact path ="/Detaille" element={<Detaille/>}/>
        <Route exact path = "/EspCand" element={<EspaceCandidat/>}/>
        <Route exact path = "/EspRec" element={<EspaceRec/>}/>
      </Routes>
    </BrowserRouter>   
    </div>
    
    
  );
}
  
export default App;