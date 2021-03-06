import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import DateRangeIcon from '@mui/icons-material/DateRange';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FeedbackIcon from '@mui/icons-material/Feedback';
import {NavLink} from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import  OfflinePinIcon from '@mui/icons-material/OfflinePin';
import InfoIcon from '@mui/icons-material/Info';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
export default function Navig() {
 const [state, setState] = React.useState({});
 const Icons =(index) =>{
   if(index === 0){return <NavLink to={"/CandProfile/"+localStorage.getItem('LoginUser')} style={{color:'grey'}}> <PermIdentityIcon /> </NavLink> ;}
   else if (index=== 1 ){return <NavLink to = {"/EspCand/"+ localStorage.getItem('LoginUser')} style={{
    color:'grey'
  }}><HomeIcon /> </NavLink>;}
   else if (index=== 2 ){return <NavLink to='/Detaille' style={{color:'grey'}}><InfoIcon /></NavLink>;}
   else if(index === 3) {return <NavLink to = {"/Favoris/"+localStorage.getItem('LoginUser')} style={{
     color:'grey'
   }}><FavoriteIcon /></NavLink>;}
   else if(index === 4) {return <NavLink to = {"/RecomSubjects/"+localStorage.getItem('LoginUser')} style={{
    color:'grey'
  }}><OfflinePinIcon /></NavLink>;}
   else {return <NavLink to = "/entreprise" style={{
    color:'grey'
  }}><DensityMediumIcon/></NavLink>}
 }
const Icons2 =(index)=>{
  if(index === 0){return <NavLink to = "/" style={{
    color:'grey'
  }}><InboxIcon /></NavLink>;}
  // else if (index=== 1 ){return <NavLink to='/Detaille' style={{color:'grey'}}><InfoIcon /></NavLink>;}
  // else {return <NavLink to = "/" style={{
  //   color:'grey'
  // }}><InboxIcon /></NavLink>;}
}
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Profile', 'Acceuil', 'A Propos', 'Liste des Favoris','Recommandation','Liste des entreprises'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
     
              {Icons(index) }
              
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['D??connexion'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {Icons2(index)}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
     
      {['left'].map((anchor) => (
         
        <React.Fragment key={anchor}>
           
           <MenuIcon onClick={toggleDrawer(anchor, true)} /> 
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}