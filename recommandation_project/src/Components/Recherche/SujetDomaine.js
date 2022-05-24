import React from 'react';
import EventsList from './EventsList';


class SujetDomaine extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            exist:false,
            index:'',
            dataa:[],
            vis:false
            
         
        };
    }
    fetchData() {
      
        fetch(`http://127.0.0.1:8000/PcdApp/sujet/`)

            .then(response => response.json())
            .then((result) => {

                this.setState({
                    data: result
                })
              
                for (let i = 0; i<result.length ;i++ ){
                    if (result[i].Tech.toUpperCase().indexOf(localStorage.getItem("inputValue").toUpperCase())!==-1 || result[i].Domaine.toUpperCase().indexOf(localStorage.getItem("inputValue").toUpperCase())!==-1 || result[i].duree.toUpperCase().indexOf(localStorage.getItem("inputValue").toUpperCase())!==-1){
                        console.log(this.state.data[i]);
                        this.setState({
                            exist:true
                        })
                        this.setState({
                            dataa:[...this.state.dataa, this.state.data[i]]
                        })}}
                       
                        
            });
            
           
    }
    fun (){
        var dom = localStorage.getItem("inputValue");
     
        if (dom.length === 0 ) {
         
            this.setState({vis:false})
        }else {
            this.setState({vis:true})

        }
    }

    componentDidMount() {
        this.fetchData();
        this.fun();
      
    }

    render() {
        return (
          
            <div>
               
             {this.state.vis && this.state.exist && <EventsList data={this.state.dataa} />}
               
            </div>

        );

    }

}
export default SujetDomaine;