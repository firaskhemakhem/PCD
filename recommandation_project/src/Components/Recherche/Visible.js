import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { pink } from '@mui/material/colors';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
 
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


function Visible() {
const state={
        curDT : new Date().toLocaleString(),
      }
     
const [data, setData] = React.useState([]);
const [follow,setFollow]=React.useState(false);
const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  React.useEffect(() => {
     fetch(`http://127.0.0.1:8000/PcdApp/sujet/`)
         .then((response) => response.json())
         .then((result) =>{
         for (let i = 0; i<result.length ;i++ ){
             if (result[i].Tech.toUpperCase().indexOf(localStorage.getItem("inputValue").toUpperCase())!==-1 || result[i].Domaine.toUpperCase().indexOf(localStorage.getItem("inputValue").toUpperCase())!==-1 || result[i].duree.toUpperCase().indexOf(localStorage.getItem("inputValue").toUpperCase())!==-1){
                 setData(result[i])
             }}
             localStorage.setItem("LoginRec",`${data.LoginRec}`)})
    // fetch(`http://127.0.0.1:8000/PcdApp/sujet/${(localStorage.getItem("IdRech"))}/`)
    // .then ((response) => response.json())
    // .then((result) =>{setData(result)
      
    //   localStorage.setItem("LoginRec",`${data.LoginRec}`)})
    fetch(`http://127.0.0.1:8000/PcdApp/suit/`)
    .then((response)=> response.json())
    .then((result) => {
        for (let i = 0 ; i<result.length ;i++){
            if (result[i].recruteur == localStorage.getItem("LoginRec") && result[i].student == localStorage.getItem("LoginUser") && result[i].follow == true){
                   setFollow(true);

            }
        }

    })

},[]);


 return (
  
    
 <Card sx={{ maxWidth: 545 }}>
      
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">

        
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={data.LoginRec}
        subheader={state.curDT}
      />
      {/* <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      /> */}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
       {data.Titre}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" >
            {follow &&  <FavoriteIcon sx={{ color: pink[500]} } />}
            {!follow &&  <FavoriteIcon />}
            
         
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
       
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph style={{
              textDecorationLine:'underline'
          }}><h5>Description du sujet :</h5> </Typography>
          <Typography paragraph>
           {data.Description}
          </Typography>
          <Typography paragraph style={{
              textDecorationLine:'underline'
          }}>
          <h5>Domaine du sujet :</h5>
          </Typography>
          <Typography paragraph>
           {data.Domaine}
          </Typography>
          <Typography paragraph style={{
              textDecorationLine:'underline'
          }}>
          <h5>Technologies du sujet :</h5>
          </Typography>
          <Typography paragraph>
           {data.Tech}
          </Typography>
        </CardContent>

      </Collapse>
    </Card>
  );
} 


export default Visible;