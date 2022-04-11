import React from 'react';
import PopUpMessage from '../../PopUpMessage/PopUpFile';
class Favoris extends React.Component{

    render(){
        return(
            <div>
                <PopUpMessage
            dataFromParent ={<>
              <h3><b>félicitations !</b></h3><br/>
              <p>Maintenant c'est le moment de commancer votre aventure</p>
            </>}
          />

            </div>
        );
    }

}
export default Favoris;