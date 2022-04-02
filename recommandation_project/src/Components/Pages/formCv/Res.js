import React, {useContext, useState} from "react";
import { multiStepContext } from "./StepContext";
function Res(){
    const {currentStep,finalData, userData}=useContext(multiStepContext);
    const [infoper, setInfoper]=useState([]);
    const [infoadd, setInfoadd]=useState([]);
    const [competence, setCompetence]=useState([]);
    const [cv, setCv]= useState([]);
    const arrangeData=()=>{
        setInfoper({"Nom": userData.Nom,"Email": userData.Email, "Adresse": userData.Adresse,"Gouvernorat":userData.Gouvernorat,"Tel":userData.Tel,"DDN":userData.DDN,"Dom":userData.Dom});
        setCompetence({"Formation":userData.Formation,"ExpProf":userData.ExpProf,"Certif":userData.Certif, "Lang":userData.Lang,"Liens":userData.Liens});
        setInfoadd({"CentreInt":userData.CentreInt,"VieAsso": userData.VieAsso});
        setCv({"InfoPer":userData.Nom+"*"+ userData.Email +"*"+userData.Adresse+"*"+userData.Gouvernorat+"*"+userData.Tel+"*"+userData.DDN+"*"+userData.Dom, "Compe":userData.Formation+"*"+userData.ExpProf+"*"+userData.Certif+"*"+ userData.Lang+"*"+userData.Liens,"InfoAdd":userData.CentreInt+"*"+ userData.VieAsso});
        console.log(cv);
        console.log(infoper);
        console.log(competence);
        console.log(infoadd);
        return(console.log(cv))
    }
    
    const registerInfoPer = event => {
        arrangeData();
        fetch('http://127.0.0.1:8000/PcdApp/infoper/', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(infoper)
        })
        .then( data => data.json())
        .catch( error => console.error(error))
    }
    const registerInfoAdd = event => {
        arrangeData();
        fetch('http://127.0.0.1:8000/PcdApp/infoadd/', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(infoadd)
        })
        .then( data => data.json())
        .catch( error => console.error(error))
    }
    const registercompetence = event => {
        arrangeData();
        fetch('http://127.0.0.1:8000/PcdApp/competence/', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(competence)
        })
        .then( data => data.json())
        .catch( error => console.error(error))
    }
    const registercv = event => {
        arrangeData();
        fetch('http://127.0.0.1:8000/PcdApp/cv/', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(cv)
        })
        .then( data => data.json())
        .catch( error => console.error(error))
    }
    //onClick={()=>{registerInfoPer();registerInfoAdd();registercv();registercompetence()}
        return(
            <div>
                <div>Res</div>
                <button 
                    class="btn btn-outline-success"
                    onClick={()=>{registerInfoPer();registerInfoAdd();registercv();registercompetence()}}
                >
                        Terminer
                </button>
            </div>
            
        );
}
export default Res;