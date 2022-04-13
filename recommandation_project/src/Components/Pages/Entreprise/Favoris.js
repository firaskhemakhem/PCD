import React from 'react';
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
  
          (this.state.isLogin && <tr key={follow.id}>
         
                 <td>{follow.recruteur}</td>
                 
                 
          
               </tr>));
        return(
            <div>
             <HeaderCan/>
                
                {this.state.isLogin &&<div classname ='paddbody' style={{paddingRight:'100px'}}>
      <h4 className="hhh" >Votre Fav</h4>
      <table class="table">
       <thead>
       
        
        <tr>
          <th scope="col">Fav</th>
         
        </tr>
        
        
       </thead>
      <tbody>
         {rows} 
      </tbody>
    </table>
  </div>}
            </div>
        );
    }

}
export default Favoris;