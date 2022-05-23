import React from 'react';
import EventsList from './EventsList';
import "../../../styles/Entreprise/Entreprise.css"
import HeaderCan from '../Etudiant/HeaderCan';
class Entreprise extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            //credentials:[],
            // isLogin:false
         
        };
    }
    fetchData() {
        fetch(`http://127.0.0.1:8000/PcdApp/recruteur/`)

            .then(response => response.json())
            .then((result) => {
                this.setState({
                    data: result
                })
                // for(let i =0 ; i<result.length;i++){
                //     this.setState({
                //         Loginoo:result[i].LoginRec
                //     })}
            });
    }

    componentDidMount() {
        this.fetchData();
    }
    render() {
        const eventsData = this.state.data;
        console.log(eventsData)
        // for(let i =0 ; i<eventsData.length;i++){
        // localStorage.setItem('Logino',eventsData[i].Login);
        // console.log(eventsData[i].Login)}

        
        return (
            <div>
                <HeaderCan/>

                <div className="App">
                    <h1 style={{
                        paddingTop :'10px',
                        
                        color : '#023C59',
                        paddingLeft:'37%'

                    }}>Liste des entreprises</h1>
                    <EventsList data={eventsData} />
                </div>
            </div>

        );

    }

}
export default Entreprise;