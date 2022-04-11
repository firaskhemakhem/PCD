import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from '../Main/Main';




class Acceuil extends React.Component {
    /*componentDidCatch(){
        localStorage.setItem('LoginUser',null)
    }*/
    render(){

        {localStorage.setItem('LoginUser',null)}
        return(<div>
            <Header/>
            <Main/>
            <Footer/>
        </div>);
    
}}
export default Acceuil ;