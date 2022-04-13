import React ,{Component}from 'react';
import HeaderRec from "./HeaderRec";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stages from "../../../assets/images/Stages.png";
import { NavLink } from 'react-router-dom';
const theme = createTheme();
class Creation extends Component{

    render(){
        return(      
            <ThemeProvider theme={theme}>
            <CssBaseline/>
           <HeaderRec/>
           <div class="card" >
           <Card sx={{ maxWidth: 345 }} style={{
               marginLeft:'450px',
               marginTop:'20px'
           }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={Stages}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          Déposer vos offres
        </Typography>
        <Typography variant="body1" color="text.secondary">
          VOUS SOUHAITEZ RECRUTER UN ÉTUDIANT EN STAGE? 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Déposer votre offre de poste
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Déposer</Button>
       
      </CardActions>
    </Card>

           </div>
           <div class="card-group">
  <div class="card" style={{
      marginLeft:'50px',
      marginTop:'20px',
      marginRight:'100px',
      backgroundColor:'#D8D8D8'
  }}>
    {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
    <div class="card-body">
      <h5 class="card-title">Télécharger vos offres</h5>
      <p class="card-text">Télécharger vos sujets du PFE pour trouver les meilleurs candidats.</p>
      <p class="card-text"><small class="text-muted">Télécharger</small></p>
    </div>
  </div>
  <div class="card" style={{
      marginLeft:'20px',
      marginTop:'20px',
      marginRight:'50px',
      backgroundColor:'#D8D8D8'
  }}>
    {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
    <div class="card-body">
      <h5 class="card-title">Remplir un formulaire</h5>
      <p class="card-text">Déposez votre offre de poste via notre formulaire, un de nos conseillers vous recontactera pour vous accompagner dans votre recrutement.</p>
      <NavLink to={"/Sujet/"+localStorage.getItem("LoginUser")}><button type="button" class="btn btn-outline-secondary" >
                               Remplir
                            </button></NavLink>

    </div>
  </div>

</div>
      

            </ThemeProvider>
        );
    }

    
}
export default Creation;
