import * as React from 'react';
import {Component} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FeaturedPost from './FeaturedPost';
import MainFeaturedPost from './MainFeaturePost';
import Footer from '../Footer/Footer';
import '../../styles/Pages/EspaceCandidat.css'
import AgendaPartagee from './AgendaPartagee';
import HeaderCan from './HeaderCan';
import {useState} from 'react';
//import Input from '@mui/material/Input';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

import axios from 'axios';


const Input = styled('input')({
  display: 'none',
});


const mainFeaturedPost = {
  title: 'Espace Candidat',
  description:
    "Bienvenue chez PIAPE : Plateform Intelligente pour Achever votre Parcours Educatifs ",
  image:'http://www.enicarthage.rnu.tn/uploads/actualite/cropped/48d5685c423bc80f4135d971a2357653f40a55fd.png',
  imageText: 'main image description',
 /* linkText: 'Continue reading…',*/

};

const featuredPosts = [
  {
    title: 'OBTENIR UN CV',
    description:
      'Remplir notre formulaire pour obtenir un CV via notre application.',
    image: 'https://coda.newjobs.com/api/imagesproxy/ms/xmonsterfrx/marketing/Articles/actualiser-regulierement-son-cv.jpg',
    imageLabel: 'Remplir',
    link : <button
        type="button" 
        class="btn btn-outline-secondary"
        fullWidth
        variant="contained"
        sx={{ mt: 4, mb:2 }}
      >
        Remplir
      </button>
  },
  {
    title: 'TELECHARGER VOTRE CV',
    description:
      'Si vous avez déjà un CV pret vous pouvez le déposer.',
    image: 'https://www.mastersbooking.fr/sites/default/files/styles/img_blog/public/field/image/resume-2296951_1920_1_0.png?itok=ESjYBHbn',
    imageLabel: 'Déposer',
    link :  <Stack direction="row" alignItems="center" spacing={2}>
              <label htmlFor="contained-button-file">
                <Input id="contained-button-file" multiple type="file" display="none"/>
                <Button variant="contained" component="span" class="btn btn-outline-secondary">
                  Upload
                </Button>
              </label>
              <label htmlFor="icon-button-file">
                <Input id="icon-button-file" type="file" display="none" />
                <IconButton color="primary" aria-label="upload picture" component="span">
                  <PhotoCamera />
                </IconButton>
              </label>
            </Stack>
  },
 
];

const featuredPosts2 = [
    {
        title: 'OPTIMISER VOTRE CANDIDATURES',
        description:
          'Ecrire votre lettre de motivation via notre application. Ecrire un test de personnalité.', 
        image: 'https://edito.regionsjob.com/xjob/wp-content/uploads/sites/3/2021/12/AdobeStock_348132153-1-1-722x489.jpeg',
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
        title: 'AGENDA PARTAGEE',
        description:
          'Sélectionner votre temps libre pour obtenir une entretien .', 
        image: 'https://i0.wp.com/maitriser-son-temps.com/wp-content/uploads/2020/12/agenda-electronique.jpg?resize=800%2C445&ssl=1&is-pending-load=1',
        imageLabel: 'Déposer',
        link :<AgendaPartagee/>
      },
      
];


const sidebar = {
 /* title: 'About',
  description:
    'PIAPE est une application intélligente qui facilite au candidat de trouver leur PFE le plus adéquat .',*/
  /*archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],*/
  /*social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],*/
};

const theme = createTheme();

class EspaceCandidat extends Component {
  
  state = {
    credentials: {},
    file:''
  }
  componentDidMount(){
    var id=localStorage.getItem('IdUser');
     //fetch('http://127.0.0.1:8000/PcdApp/student/1/',{
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

  inputChanged = (event) => {
    const cred = this.state.file;
    cred = event.target.file[0];
    this.setFile({file: cred});
    
  }

  render(){
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <HeaderCan dataFromParent = {this.state.credentials.Id_Utilisateur}/>
        <Container maxWidth="lg">
          <main>
            <MainFeaturedPost post={mainFeaturedPost}/>
            <Grid container spacing={4}>
              {featuredPosts.map((post) => (
                <FeaturedPost key={post.title} post={post} />
              ))}
            </Grid>
            <Grid container spacing={5} sx={{ mt: 3 }}>
               <p className='parag'>Nos Consultants a vos cote pour : </p> 
            <Grid container spacing={4}>
              {featuredPosts2.map((post) => (
                <FeaturedPost key={post.title} post={post} />
              ))}
            </Grid>
            <Grid container spacing={5} sx={{ mt: 3 }}>
            </Grid>
            </Grid>
          </main>
        </Container>
        <div className="App">
          <form onSubmit={this.handleSubmit}>
            <h1>React File Upload</h1>
            <input type="file" onChange={this.inputChanged}/>
            <button type="submit">Upload</button>
          </form>
        </div>
        <Footer/>
      </ThemeProvider>
    );
  }
  
}

export default EspaceCandidat;
