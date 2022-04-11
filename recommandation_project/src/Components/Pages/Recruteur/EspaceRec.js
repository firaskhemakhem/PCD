import * as React from 'react';

import {Component} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FeaturedPost from './FeaturedPost';
import MainFeaturedPost from './MainFeaturePost';
import Footer from '../../Footer/Footer';
import '../../../styles/Pages/EspaceCandidat.css'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import HeaderRec from './HeaderRec';
import { NavLink } from 'react-router-dom';


const Input = styled('input')({
  display: 'none',
});


const mainFeaturedPost = {
  image:'https://novojob.com/images/process-rec.jpg',
  imageText: 'main image description',
};

const featuredPosts = [
  {
    title: <Button variant="outlined" style={{
        color:'black',
        width:'100%',
       fontSize:'20px'
    }} >RECHERCHER UN PROFIL
  </Button>,
    description:
      'Trouvez les profils cadres les plus pertinents pour vos offres.',
    image: 'https://bestirtech.com/blog/wp-content/uploads/2020/04/saved-search.jpg',
    imageLabel: 'Rechercher',
    link : <button
        type="button" 
        class="btn btn-outline-secondary"
        fullWidth
        variant="contained"
        sx={{ mt: 4, mb:2 }}
      >
        Rechecher
      </button>
  },
  {
    title: <Button variant="outlined" style={{
        color:'black',
        width:'100%',
       fontSize:'20px'
    }} >CREER VOS OFFRES
</Button>,
    description:
     <ul style={{fontSize:'15px'}}>
         <li>Télècharger vos offres</li>
         <li>Remplir un formulaire pour déposer vos offres</li>
     </ul>,
    image: 'https://www.cidj.com/sites/default/files/styles/og_image/public/2018-09/deposer-gratuitement-offre-stage.jpg?itok=J1g5Fz3S',
    imageLabel: 'Déposer',
    link :<NavLink to="/Creation">
      <Button variant="contained" component="span" class="btn btn-outline-secondary">
                  Creer
          </Button></NavLink>
  },
 
];

const featuredPosts2 = [
    {
        title: 'RECRUTER',
        description:
        <ul>
          <li>
              Diffuser une offres
          </li>
          <li>Rechercher des profil</li>
        </ul>,
        image: 'https://img-19.ccm2.net/4RuHKYETyACo36CrgoDkyndtfgo=/63cf698199ed479f8957c72daf8d1537/ccm-faq/recrutement-sur-internet-fotolia-s-.png',
        imageLabel: 'Déposer',
        link : <button
        type="button" 
        class="btn btn-outline-secondary"
        fullWidth
        variant="contained"
        sx={{ mt: 4, mb:2 }}
      >
        Sélectionner
      </button>
        
      },
      {
        title: 'ATTIRER LES CANDIDATS',
        description:
          <ul>
              <li>Entretiens</li>
              <li>Stratégie de recrutement</li>
          </ul>, 
        image: 'https://www.dynamique-mag.com/wp-content/uploads/Comment-attirer-les-meilleurs-780x470.jpg',
        imageLabel: 'Déposer',
        link : <button
        type="button" 
        class="btn btn-outline-secondary"
        fullWidth
        variant="contained"
        sx={{ mt: 4, mb:2 }}
      >
        Sélectionner
      </button>
        
      },
      
];

const theme = createTheme();

class EspaceRec extends Component {
  
  state = {
    credentials: {}
  }
  componentDidMount(){
    var id=localStorage.getItem('LoginUser');
    fetch(`http://127.0.0.1:8000/PcdApp/student/${id}/`,{
   
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
        })  
    .then(response => response.json())
    .then((result)=>{
        this.setState({credentials:result})
        console.log(result);
    })
  }
  render(){
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline/>
       <HeaderRec/>
        <Container maxWidth="lg">
          <main>
            <MainFeaturedPost post={mainFeaturedPost}/>
            <Grid container spacing={4}>
              {featuredPosts.map((post) => (
                <FeaturedPost key={post.title} post={post} />
              ))}
            </Grid>
            <Grid >
               <p  style={{textAlign :'center', color:'#023C59',fontSize:'35px'}}>NOS CONSULTANTS À VOS CÔTÉS POUR : </p> 
            <Grid container spacing={3}>
              {featuredPosts2.map((post) => (
                <FeaturedPost key={post.title} post={post} />
              ))}
            </Grid>
            <br/>
            </Grid>
          </main>
        </Container>
        <Footer/>
      </ThemeProvider>
    );
  }
  
}
export default EspaceRec;