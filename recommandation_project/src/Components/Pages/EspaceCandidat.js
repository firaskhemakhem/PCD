import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FeaturedPost from './FeaturedPost';
import Header from '../Header/Header';
import MainFeaturedPost from './MainFeaturePost';
import Sidebar from './Sidebar';
import Footer from '../Footer/Footer';
import '../../styles/Pages/EspaceCandidat.css'
import AgendaPartagee from './AgendaPartagee';
import HeaderCan from './HeaderCan';



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
    /*date: 'Nov 12',*/
    description:
      'Remplir notre formulaire pour obtenir un CV via notre application.',
    image: 'https://coda.newjobs.com/api/imagesproxy/ms/xmonsterfrx/marketing/Articles/actualiser-regulierement-son-cv.jpg',
    imageLabel: 'Remplir',
    link :'Remplir'
  },
  {
    title: 'TELECHARGER VOTRE CV',
    /*date: 'Nov 11',*/
    description:
      'Si vous avez déjà un CV pret vous pouvez le déposer.',
    image: 'https://www.mastersbooking.fr/sites/default/files/styles/img_blog/public/field/image/resume-2296951_1920_1_0.png?itok=ESjYBHbn',
    imageLabel: 'Déposer',
    link :'Déposer'
  },
 
];

const featuredPosts2 = [
    {
        title: 'OPTIMISER VOTRE CANDIDATURES',
        /*date: 'Nov 11',*/
        description:
          'Ecrire votre lettre de motivation via notre application. Ecrire un test de personnalité.', 
        image: 'https://edito.regionsjob.com/xjob/wp-content/uploads/sites/3/2021/12/AdobeStock_348132153-1-1-722x489.jpeg',
        imageLabel: 'Déposer',
        
      },
      {
        title: 'AGENDA PARTAGEE',
        /*date: 'Nov 11',*/
        description:
          'Sélectionner votre temps libre pour obtenir une entretien .', 
        image: 'https://i0.wp.com/maitriser-son-temps.com/wp-content/uploads/2020/12/agenda-electronique.jpg?resize=800%2C445&ssl=1&is-pending-load=1',
        imageLabel: 'Déposer',
        link: <AgendaPartagee/>
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

export default function EspaceCandidat() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <HeaderCan/>
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
      <Footer/>
    </ThemeProvider>

  );
}

