import React from 'react';
import { NavLink } from 'react-router-dom';
import PopUpMessage from '../../PopUpMessage/PopUpFile';
import HeaderCan from "../Etudiant/HeaderCan"
class Favoris extends React.Component{
  constructor(){
    super();
    this.state={
        data:[],
        //credentials:[],
        isLogin:false
    };
}


  fetchDataFollow(){
    fetch(`http://127.0.0.1:8000/PcdApp/suit/`)

        .then(response => response.json())
        .then((result) => {
            console.log(result);
            for (let i = 0; i < result.length; i++) {
              
                if (result[i].student == localStorage.getItem("LoginUser") && result[i].follow==true ) {
                 
                  this.setState({data : [...this.state.data,result[i]]})
                  this.setState({
                    isLogin:true
                  })
                  localStorage.setItem('isLogin',true)
              
             
                }

            }
        });
}
componentDidMount(){
  this.fetchDataFollow();
}
    render(){
      const followData=this.state.data;
      const rows=followData.map((follow)=>
     
          (this.state.isLogin && 
            
          <tr key={follow.id}>
         
                 <td style={{
                   height :'75px'
                 }}>{follow.recruteur}</td>
                 <td><NavLink to={"/entreprise/"+follow.recruteur}>
                   <button className="btn btn-outline-secondary">Consulter</button></NavLink></td>

                 
                 
          
               </tr>));
             
        return(
            <div>
             <HeaderCan/>
                
                {this.state.isLogin &&<div classname ='paddbody' style={{paddingRight:'100px'}}>
      <h4 style={{
        textAlign:'center',
        color :'#023C59',
        paddingTop:'20px',

      }} >Liste de Votre Favoris</h4>
      <div style={{
        border :'2px solid #023C59',
        borderRadius:'8px',
        marginLeft:'300px',
        marginRight:'300px'

      }}>
      <table class="table">
       <thead>
       
        
        <tr>
          <th scope="col" >Favoris</th>
         
        </tr>
        
        
       </thead>
      <tbody>
         {rows} 
      </tbody>
    </table>
    </div>
  </div>}
            </div>
        );
    }

}
export default Favoris;