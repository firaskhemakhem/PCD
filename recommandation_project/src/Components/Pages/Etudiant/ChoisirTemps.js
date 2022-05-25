import React from 'react';
import HeaderCan from '../Etudiant/HeaderCan';
import PopUpMessage from '../../PopUpMessage/PopUpFile';
class ChoisirTemps extends React.Component {


    constructor() {
        super();
        this.state = {
            dataAgenda: [],
            isLoginAgenda: false,
            url: '',
            credentials: {},
            isFavorite: false,
            data: {},
            id: '',
            dispo:'',
            dataInter:[],
            dataNomStu:'',
            openPop:false,
            finalData:{
                Recruteur:'' , Student: '', Sujet: '', Nom: '', Time: ''

            },
            temps: {
                date:new Date(), 
                jour:'', 
                mois:'', 
                tempsM:'', 
                tempsH:''
            },
            IdStu : localStorage.getItem("LoginUser"),
            IdRec : localStorage.getItem("IdRec"),
            IdSuj :localStorage.getItem('IDSujInter'),

        };

    }
    //IDSujInter
    fetchDataSujet(){
        fetch(`http://127.0.0.1:8000/PcdApp/Sujet/${localStorage.getItem('IDSujInter')}/`,{
        method: 'Get',
        headers: { 'Content-Type': 'application/json' },
    })
        .then(data => data.json())
        .then((result) => {
            //console.log(result);
            this.setState({
            TitreSuj: result.Titre
            })
            //console.log(this.state.TitreSuj);
        })
        .catch(error => console.error(error));
        
    }
    sendEmail () {
        localStorage.setItem('TitreSuj', this.state.TitreSuj)
        window.open(`mailto:${localStorage.getItem("EmailRec")}?cc=&subject=Candidature à traves PIAPE &body=Rédigez votre lettre de motivation ici \n & N'oubliez pas d'attacher votre CV ${this.state.dispo}`);
    };

    fetchDataAgenda() {
        fetch(`http://127.0.0.1:8000/PcdApp/agenda/`)

            .then(response => response.json())
            .then((result) => {
                //console.log(result);
                //  console.log(localStorage.getItem("Login"))
                this.setState({
                    url: localStorage.getItem("IdRec")
                })
                for (let i = 0; i < result.length; i++) {
                    if (result[i].LoginRec == this.state.url) {
                        this.setState({ dataAgenda: [...this.state.dataAgenda, result[i]] })
                        this.setState({
                            isLoginAgenda: true
                        })
                        localStorage.setItem('isLoginAgenda', true)
                    }

                }
                //console.log(this.state.dataAgenda);
                //console.log(this.state.isLoginAgenda);
            });
    }
    fetchDataInter(){
        fetch(`http://127.0.0.1:8000/PcdApp/interessant/`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then((result) => {
                this.setState({
                    dataInter: result
                })
            })
    }
 fetchDataStu(){
    var IdStu = localStorage.getItem("LoginUser");
 
    fetch(`http://127.0.0.1:8000/PcdApp/student/${IdStu}/`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => response.json())
        .then((result) => {
            //console.log(reslt)
           // setNomEtu(result.Nom)
           this.setState({
            dataNomStu:result.Nom
           })
        })
    }
   /* fetchDataAgenda() {
        var  id = localStorage.getItem("Id_ag")
        fetch(`http://127.0.0.1:8000/PcdApp/agenda/${id}`)

            .then(response => response.json())
            .then((result) => {
                console.log(result);
                //  console.log(localStorage.getItem("Login"))
                this.setState({
                    url: localStorage.getItem("IdRec")
                })
                for (let i = 0; i < result.length; i++) {
                    if (result[i].LoginRec == this.state.url) {
                        this.setState({ dataAgenda: [...this.state.dataAgenda, result[i]] })
                        this.setState({
                            isLoginAgenda: true
                        })
                        localStorage.setItem('isLoginAgenda', true)
                    }

                }
                console.log(this.state.dataAgenda);
                console.log(this.state.isLoginAgenda);
            });
    }*/
    fixJour(){
      
        if (this.state.temps.date.getDate() < 10)
            this.state.temps.jour = "0" + this.state.temps.date.getDate();
        else
            this.state.temps.jour = this.state.temps.date.getDate();
    }
    fixMois() {

        if (this.state.temps.date.getMonth() < 9)
            this.state.temps.mois = "0" + this.state.temps.date.getMonth();
        else
            this.state.temps.mois = this.state.temps.date.getMonth();
    }
    fixMinu() {
        if (this.state.temps.date.getMinutes() < 10)
            this.state.temps.tempsM = "0" + this.state.temps.date.getMinutes();
        else
            this.state.temps.tempsM = this.state.temps.date.getMinutes();
    }
    fixheure () {
        if (this.state.temps.date.getHours() < 10)
            this.state.temps.tempsH = "0" + this.state.temps.date.getHours();
        else
            this.state.temps.tempsH = this.state.temps.date.getHours();
    }
    FetchData () {
        this.fixJour();
        this.fixMois();
        this.fixMinu();
        this.fixheure();
        let format = "Le " + this.state.temps.jour + "/" + this.state.temps.mois + "/" + this.state.temps.date.getFullYear() + " à " + this.state.temps.tempsH + ":" + this.state.temps.tempsM;
        console.log(this.state.dataInter);
        let IdStu = localStorage.getItem("LoginUser");
        let IdRec = localStorage.getItem("IdRec");
        let IdSuj =localStorage.getItem("IDSujInter");
        console.log(IdStu);
        console.log(IdRec);
        console.log(IdSuj);
        console.log(this.state.dataInter);
       for (let i = 0; i < this.state.dataInter.length; i++) {
            if (this.state.dataInter[i].recruteur === IdRec && this.state.dataInter[i].student === IdStu && this.state.dataInter[i].id_sujet === IdSuj) {

               
                this.setState(

                   finalData =>( {"Recruteur":"Cognira" ,
                    "Student": "Farah",
                     "Sujet": 1,
                      "Nom":"Farah" ,
                       "Time": "20/09/1999"})
                )
                
               //setDataFinal({ "Recruteur": IdRec, "Student": IdStu, "Sujet": IdSuj, "Nom": nomEtu, "Time": format })
            }
            console.log(this.state.finalData)
        }
    }
    addNotif = (event) => {
       this.FetchData () ;
            this.fixJour();
            this.fixMois();
            this.fixMinu();
            this.fixheure();
           let nom = this.state.dataNomStu;
            let format = "Le " + this.state.temps.jour + "/" + this.state.temps.mois + "/" + this.state.temps.date.getFullYear() + " à " + this.state.temps.tempsH + ":" + this.state.temps.tempsM;
        let IdStu = localStorage.getItem("LoginUser");
        let IdRec = localStorage.getItem("IdRec");
        let IdSuj =localStorage.getItem("IDSujInter");
      console.log("off")
      console.log(this.state.dataInter)
     // this.FetchData();
     for (let i = 0; i < this.state.dataInter.length; i++) {
        console.log("ohhff")
        if (this.state.dataInter[i].recruteur == IdRec && this.state.dataInter[i].student == IdStu && this.state.dataInter[i].id_sujet == IdSuj) {

            console.log("psst")
        fetch('http://127.0.0.1:8000/PcdApp/notifRec/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            
            body: JSON.stringify({
                
                "Recruteur":IdRec ,
                    "Student": IdStu,
                     "Sujet": IdSuj,
                      "Nom":this.state.dataNomStu ,
                       "Time": format
        })
        }).then(data => data.json())
            .then(this.setState({
                openPop: true
            }),
           
                //setOpenPop(true)
                )
            .catch(error => console.error(error), console.log(this.state.finalData))
    }}}
    componentDidMount() {
        this.fetchDataAgenda();
        //this.fetchDataSujet();
        this.fetchDataInter();
        this.fetchDataStu();
    }
    
    render() {      

       
        const agendaData = this.state.dataAgenda;
     //   const IdStu = localStorage.getItem("LoginUser");

        
        const rowsAgenda = agendaData.map((agenda) =>
        (this.state.isLoginAgenda && <tr key={agenda.Id_Calend}>
            {/* {this.fetchDataSujet()} */}
            {localStorage.setItem("Id_ag", agenda.Id_Calend)}
            <td>{agenda.Date}</td>
            <td>{agenda.StartTime}</td>
            <td>{agenda.EndTime}</td>
              
            <td><button className="btn btn-outline-secondary" onClick={(e) => { e.preventDefault(); this.sendEmail(); this.setState({...this.state,dispo: `Parmi vos disponibilités existant dans PIAPE je choisit la date +${agenda.Date} + à partir de +${agenda.StartTime}`}); this.addNotif() }}>Confirmer</button></td>

        </tr>));

        return (
            <div>
                <HeaderCan /><br />
                <div>
                    {this.state.isLoginAgenda &&
                        <div>
                            <div style={{
                                textAlign: 'center',
                                fontSize: '18px'
                            }}>
                                <p>Si vous etes intéressé par au moins un sujet </p>
                                <p>Confirmer une date d'entretien selon la compatibilité de votre disponibilté et la disponibilté de recruteur de cette entreprise</p>
                                <p>N'hésiter pas de cliquer sur le button "Confirmer"</p>
                            </div>


                            <h4 style={{
                                textAlign: 'center',
                                color: '#023C59'
                            }} >La disponibilité de {this.state.url} pour les entretiens</h4>
                            <div style={{
                                border: '4px solid #023C59',
                                borderRadius: '8px',
                                paddingTop: '15px',
                                marginRight: '50px',
                                marginLeft: '50px'

                            }}>
                                <table class="table">
                                    <thead>


                                        <tr>

                                            <th scope="col">Date</th>
                                            <th scope="col">Temps Début</th>
                                            <th scope="col">Temps fin</th>
                                            <th scope="col">Votre disponilité</th>

                                        </tr>


                                    </thead>
                                    <tbody>
                                        {rowsAgenda}
                                    </tbody>
                                </table>
                            </div>
                        </div>}
                        <div align="center">
                {/* {this.state.openPop && <PopUpMessage dataFromParent={<>
                    <h3><b>félicitations!</b></h3><br />
                    <p>Votre condidature a été envoyer!</p>

                    <button class="btn btn-outline-dark" variant="contained" onClick={(e) => {
                        e.preventDefault()
                        this.addNotif()
                        window.location.reload(true)

                    }}
                        title="support@example.com"
                    >
                        Ok
                    </button>

                </>}
                />}  */}
            </div>
                </div>

            </div>
        );
    }
}
export default ChoisirTemps; 