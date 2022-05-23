import React, { Component } from 'react';
import HeaderRec from '../Recruteur/HeaderRec';
import Feedback from './Feedback';


class AcceuilFed extends Component{
  state = { isOpenSucceed:false}
render(){
    return(
      <div >
   <HeaderRec/>
  <div style={{backgroundColor:'#D3DEE5' , height:'590px'}}>
  <h2 style ={{
    color:'#023C59',
    textAlign:'center',

  }}>Merci de donner votre avis concernant notre application</h2>
  
 
<Feedback
  style={{ zIndex: '1' }}
 //  position="center"
  numberOfStars={5}
  headerText="Bienvenue"
  bodyText="Votre Avis"
//  // buttonText="Cliquez içi"
 // handleClose={() => console.log("handleclose")}
  handleSubmit={data =>
    fetch("http://127.0.0.1:8000/PcdApp/feedback/", {
       headers: {
         Accept: "application/json",
         "Content-Type": "application/json"
       },
       method: "POST", // or 'PUT'
       body: JSON.stringify(data)
       
     })
       .then(response => {
         console.log(response);
         console.log(data);

         if (!response.ok) {
           return Promise.reject(
             "Our servers are having issues! We couldn't send your feedback!"
           );
         }
         response.json();
       })
       .then(() => {
         alert("Success!");
       })
       .catch(error => {
         alert(
           "Our servers are having issues! We couldn't send your feedback!",
          error
         );
       })
   }
   handleButtonClick={() => console.log("handleButtonClick")}
/>  
</div>
  
        </div>

    
    );}}
export default AcceuilFed;