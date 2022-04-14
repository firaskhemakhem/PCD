import React, {useEffect, useState} from 'react';
import UpdateCv from './UpdateCv';

export const multiStepContext= React.createContext();

const StepContext=()=>{
    const [currentStep, setCurrentStep]=useState(1);
    //const [userData, setUserData]=useState({Id_InfoPer:2});
    //const [finalData, setFinalData]=useState([]);
    //const id = localStorage.getItem("LoginUser");
    const[updateInfoPer, setUpdateInfoPer]=useState([]);
    const[updateCompétence, setUpdateCompétence]= useState([]);
    const [updateInfoAdd, setUpdateInfoAdd]=useState([]);
    const [updateCv, setUpdateCv]= useState([]);
    function submitData(){
        setCurrentStep(4);
    };
    return(
        <div>
            <multiStepContext.Provider value={{currentStep,setCurrentStep,updateInfoPer,setUpdateInfoPer,updateCompétence, setUpdateCompétence,updateInfoAdd, setUpdateInfoAdd, submitData, updateCv, setUpdateCv}}>
                <UpdateCv/>
            </multiStepContext.Provider>
        </div>
    )
}
export default StepContext;

 /*useEffect(()=>{
        var id = localStorage.getItem('LoginUser');
        fetch(`http://127.0.0.1:8000/PcdApp/infoper/${id}/`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        })
          .then(response => response.json())
          .then((result) => {
            setUpdateInfoPer(...updateInfoPer,result)
            console.log(result);
        })
        fetch(`http://127.0.0.1:8000/PcdApp/competence/${id}/`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        })
          .then(response => response.json())
          .then((result) => {
            setUpdateCompétence(...updateCompétence,result)
            console.log(result);
        })
        fetch(`http://127.0.0.1:8000/PcdApp/infoadd/${id}/`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        })
          .then(response => response.json())
          .then((result) => {
            setUpdateInfoAdd(...updateInfoAdd,result)
            console.log(result);
        })
        fetch(`http://127.0.0.1:8000/PcdApp/cv/${id}/`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        })
          .then(response => response.json())
          .then((result) => {
            setUpdateCv(...updateCv,result)
            console.log(result);
        })
    });*/