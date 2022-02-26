import React from 'react';
import Footer2 from './Components/Footer/Footer';
import Header from './Components/Header/Header';
//import { BrowserRouter, Router , Route } from 'react-router-dom';
//import Authentification from './Components/Pages/Authentification';
//import Switch from 'react-dom';

import Container from './components/Pages/Container';



class App extends React.Component {
  render(){
  return ( 
    <div className='App cfb'> 
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path ="/Auth" element ={<Container/>}/>
        <Route exact path ="/Insc" element ={<Container/>}/>
        <Route exact path ="/footer" element ={<Footer/>}/>
      </Routes>
      <Footer2/>
    </BrowserRouter>   
    </div>
    
  );
}}
  
export default App;