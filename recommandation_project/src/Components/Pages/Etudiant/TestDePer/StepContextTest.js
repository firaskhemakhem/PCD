import React, { useState } from 'react';
import Test from './Test';

export const multiStepContext = React.createContext();

const StepContext = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [testData, setTestData] = useState({ 
        "Q1": { "a": 0, "b": 0, "c": 0, "d": 0, },
        "Q2": { "a": 0, "b": 0, "c": 0, "d": 0, }, 
        "Q3": { "a": 0, "b": 0, "c": 0, "d": 0, }, 
        "Q4": { "a": 0, "b": 0, "c": 0, "d": 0, }, 
        "Q5": { "a": 0, "b": 0, "c": 0, "d": 0, }, 
        "Q6": { "a": 0, "b": 0, "c": 0, "d": 0, }, 
        "Q7": { "a": 0, "b": 0, "c": 0, "d": 0, }, 
        "Q8": { "a": 0, "b": 0, "c": 0, "d": 0, }, 
        "Q9": { "a": 0, "b": 0, "c": 0, "d": 0, }, 
        "Q10": { "a": 0, "b": 0, "c": 0, "d": 0, }, 
        "Q11": { "a": 0, "b": 0, "c": 0, "d": 0, }, 
        "Q12": { "a": 0, "b": 0, "c": 0, "d": 0, }, });
    const [Q1,setQ1]= useState({ "a": 0, "b": 0, "c": 0, "d": 0})
    const [Q2,setQ2]= useState({ "a": 0, "b": 0, "c": 0, "d": 0})
    const [Q3,setQ3]= useState({ "a": 0, "b": 0, "c": 0, "d": 0})
    const [Q4,setQ4]= useState({ "a": 0, "b": 0, "c": 0, "d": 0})
    const [Q5,setQ5]= useState({ "a": 0, "b": 0, "c": 0, "d": 0})
    const [Q6,setQ6]= useState({ "a": 0, "b": 0, "c": 0, "d": 0})
    const [Q7,setQ7]= useState({ "a": 0, "b": 0, "c": 0, "d": 0})
    const [Q8,setQ8]= useState({ "a": 0, "b": 0, "c": 0, "d": 0})
    const [Q9,setQ9]= useState({ "a": 0, "b": 0, "c": 0, "d": 0})
    const [Q10,setQ10]= useState({ "a": 0, "b": 0, "c": 0, "d": 0})
    const [Q11,setQ11]= useState({ "a": 0, "b": 0, "c": 0, "d": 0})
    const [Q12,setQ12]= useState({ "a": 0, "b": 0, "c": 0, "d": 0})

    var Ab=0;
    var I=0;
    var Ac=0;
    var R=0;

    return (
        <div>
            <multiStepContext.Provider value={{Q1,Q2,Q3,Q4,Q5,Q6,Q7,Q8,Q9,Q10,Q11,Q12,setQ1,setQ2,setQ3,setQ4,setQ5,setQ6,setQ7,setQ8,setQ9,setQ10,setQ11,setQ12 ,Ab,I,Ac,R,currentStep, setCurrentStep, testData, setTestData }}>
                <Test />
            </multiStepContext.Provider>
        </div>
    )
}
export default StepContext;