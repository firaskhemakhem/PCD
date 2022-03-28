import React,{Component} from 'react'
import '../../styles/PopUpMessage/PopUpFile.css'

class PopUpMessage extends Component {
    render(){
        return(
            <div className="popup-box">
                <div className="box" >
                    {this.props.dataFromParent}
                </div>
            </div>
        )
    }
}

export default PopUpMessage;