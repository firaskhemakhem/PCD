import React, {useState} from 'react';
import Cv from './Cv';

export const multiStepContext= React.createContext();

const StepContext=()=>{
    const [currentStep, setCurrentStep]=useState(1);
    const [userData, setUserData]=useState([]);
    const [finalData, setFinalData]=useState([]);
    function submitData(){
        
    }
    return(
        <div>
            <multiStepContext.Provider value={{currentStep,setCurrentStep, userData,setUserData,finalData,setFinalData,submitData}}>
                <Cv/>
            </multiStepContext.Provider>
        </div>
    )
}
export default StepContext;