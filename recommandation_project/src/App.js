import React from 'react';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import Acceuil from './Components/Acceuil/Acceuil';
import Authentification from './Components/Pages/Authentification';
import Inscription from './Components/Pages/Inscription';
import InscriptionRec from './Components/Pages/InscriptionRec';



class App extends React.Component {
  render(){
  return ( 
    <div className='App'> 
      <BrowserRouter>
       <Routes>
       <Route exact path ="/" element ={<Acceuil/>}/>
        <Route exact path ="/Auth" element ={<Authentification/>}/>
        <Route exact path ="/InscEtud" element ={<Inscription/>}/>
        <Route exact path ="/InscRec" element ={<InscriptionRec/>}/>
        <Route exact path ="/footer" element ={<Footer/>}/>
      </Routes>
    </BrowserRouter>   
    </div>
    
    
  );
}}
  
export default App;