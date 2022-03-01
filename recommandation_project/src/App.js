import React from 'react';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import Acceuil from './Components/Acceuil/Acceuil';
import Authentification from './Components/Pages/Authentification';
import Inscription from './Components/Pages/Inscription';



class App extends React.Component {
  render(){
  return ( 
    <div className='App'> 
      <BrowserRouter>
       <Routes>
       <Route exact path ="/" element ={<Acceuil/>}/>
        <Route exact path ="/Auth" element ={<Authentification/>}/>
        <Route exact path ="/Insc" element ={<Inscription/>}/>
        <Route exact path ="/footer" element ={<Footer/>}/>
      </Routes>
    </BrowserRouter>   
    </div>
    
    
  );
}}
  
export default App;