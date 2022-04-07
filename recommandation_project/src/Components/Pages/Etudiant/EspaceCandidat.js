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
import HeaderCan from './HeaderCan';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';


const Input = styled('input')({
  display: 'none',
});


const mainFeaturedPost = {
  image:'https://emploi-tunisie-travail.com/wp-content/uploads/2019/12/jobs-in-tunisia-1.png',
  imageText: 'main image description',
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
          'Pour optimiser votre candidature vous devez écrire une lettre de motivation via notre application.', 
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
        title: 'PASSER UN TEST DE PERSONNALITE',
        description:
          'Le résultat du test de personnalité est importante pour la recommandation.', 
        image: 'http://www.psychomedia.qc.ca/image/2015-12/36543-63194-image',
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

class EspaceCandidat extends Component {
  
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
        <HeaderCan dataFromParent = {this.state.credentials.Login}/>
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

export default EspaceCandidat;
