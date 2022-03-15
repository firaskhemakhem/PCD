import React from 'react';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import Acceuil from './components/Acceuil/Acceuil';
import Authentification from './components/Pages/Authentification';
import InscRec from './components/Pages/InscRec';
import Inscription from './components/Pages/Inscription';
import Auth from './components/Pages/Auth';



class App extends React.Component {
  render(){
  return ( 
    <div className='App'> 
      <BrowserRouter>
       <Routes>
       <Route exact path ="/" element ={<Acceuil/>}/>
        <Route exact path ="/Authentification" element ={<Authentification/>}/>
        <Route exact path="/Auth" element={<Auth/>}/>
        <Route exact path ="/InscEtud" element ={<Inscription/>}/>
        <Route exact path ="/InscRec" element ={<InscRec/>}/>
        <Route exact path ="/footer" element ={<Footer/>}/>
      </Routes>
    </BrowserRouter>   
    </div>
    
    
  );
}}
  
export default App;