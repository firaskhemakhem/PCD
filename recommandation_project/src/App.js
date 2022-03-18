import React ,{useState} from 'react';
import Footer from '../src/Components/Footer/Footer'
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import Acceuil from './Components/Acceuil/Acceuil';
import Auth from './Components/Pages/Auth';
import Inscription from './Components/Pages/Inscription';
import InscriptionRec from './Components/Pages/InscriptionRec';
import InscRec from './Components/Pages/InscRec';
import Detaille from './Components/Detaille/Detaille';
import InscEtu from './Components/Pages/InscEtu';
import EspaceCandidat from './Components/Pages/EspaceCandidat';
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
      
        <Route exact path ="/InscEtud" element ={<InscEtu/>}/>
        <Route exact path ="/InscRec" element ={<InscRec/>}/>
        <Route exact path ="/footer" element ={<Footer/>}/>
        <Route exact path ="/Detaille" element={<Detaille/>}/>
        <Route exact path = "/EspCand" element={<EspaceCandidat/>}/>
      </Routes>
    </BrowserRouter>   
    </div>
    
    
  );
}
  
export default App;