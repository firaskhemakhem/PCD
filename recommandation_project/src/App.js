import React from 'react';
import Footer from './components/Footer/Footer';
import {Routes ,Route, BrowserRouter} from'react-router-dom';

import Container from './components/Pages/Container';



class App extends React.Component {
  render(){
  return ( 
    <div className='App cfb'> 
      <BrowserRouter>
      <Routes>
        <Route exact path ="/Auth" element ={<Container/>}/>
        <Route exact path ="/Insc" element ={<Container/>}/>
        <Route exact path ="/footer" element ={<Footer/>}/>
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}}
  
export default App;