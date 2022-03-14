import React from 'react';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import Acceuil from './Components/Acceuil/Acceuil';
import Authentification from './Components/Pages/Authentification';
import InscRec from './Components/Pages/InscRec';
import InscEtu from './Components/Pages/InscEtu';
import Auth from './Components/Pages/Auth';



class App extends React.Component {
  render(){
  return ( 
    <div className='App'> 
      <BrowserRouter>
       <Routes>
       <Route exact path ="/" element ={<Acceuil/>}/>
        <Route exact path ="/Authentification" element ={<Authentification/>}/>
        <Route exact path="/Auth" element={<Auth/>}/>
        <Route exact path ="/InscEtud" element ={<InscEtu/>}/>
        <Route exact path ="/InscRec" element ={<InscRec/>}/>
        <Route exact path ="/footer" element ={<Footer/>}/>
      </Routes>
    </BrowserRouter>   
    </div>
    
    
  );
}}
  
export default App;