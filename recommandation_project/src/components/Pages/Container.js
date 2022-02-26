import React, {useState} from 'react';

// styling
import '../../styles/Pages/Authentification.css';

// components
import Authentification from './Authentification';
import Inscription from './Inscription';

const Container = () => {
  const [welcome, setWelcome] = useState(false)

  const setBannerClass = () => {
    const classArr = ["banner-side cfb"]
    if (welcome) classArr.push('send-right')
    return classArr.join(' ')
  }

  const setFormClass = () => {
    const classArr = ["form-side cfb"] 
    if (welcome) classArr.push('send-left')
    return classArr.join(' ')
  }

  return (
    <div className="Container cfb">

      <div className={setBannerClass()}> 

        {welcome ? 
          <h2>Rejoignez-nous!</h2>
            : <h2>Bienvenue</h2>}

        <button onClick={()=> setWelcome(!welcome)}>
          {welcome ?
            "Authentifier"
              : "Inscription"}
        </button>
      </div>

      <div className={setFormClass()}> 
          {welcome ? 
            <Inscription /> 
              : <Authentification/>
          }
          
      </div>
    </div>
  );
}

export default Container;