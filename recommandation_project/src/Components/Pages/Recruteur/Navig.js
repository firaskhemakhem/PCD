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
import InfoIcon from '@mui/icons-material/Info';
import PopUpMessage from '../../PopUpMessage/PopUpFile';
import Feedback from '../FeedBack/Feedback';
import { IconButton } from '@mui/material';

export default function Navig() {
const [isOpenSucceed,setisOpenSucceed]= React.useState({isOpenSucceed :false});
 const [state, setState] = React.useState({});
 const Icons =(index) =>{
   if(index === 0){return <PermIdentityIcon/>;}
   else if (index=== 1 ){return <NavLink to = {'/Agenda/'+localStorage.getItem('LoginUser')}><DateRangeIcon/></NavLink>;}
   else if (index=== 2 ){return <MailOutlineIcon/>;}
   else {return <IconButton onClick={()=>popup()}><FeedbackIcon/></IconButton>};}
const popup =event=>{
  
    setisOpenSucceed({isOpenSucceed:true});
    console.log(isOpenSucceed.isOpenSucceed);
  }
const Icons2 =(index)=>{
  if(index === 0){return <NavLink to = "/" style={{color:'grey'}}><HomeIcon /> </NavLink>;}
  else if (index=== 1 ){return <InfoIcon />;}
  else {return <NavLink to ="/AuthRec"><InboxIcon /></NavLink> ;}
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
        {['Profile', 'Agenda', 'Email', 'Votre Avis'].map((text, index) => (
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
        {['Acceuil', 'A Propos', 'Déconnexion'].map((text, index) => (
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
   <div align="center" style={{zIndex:'3',position:'fixed'}}>
    {isOpenSucceed.isOpenSucceed && <PopUpMessage
    dataFromParent ={<>
<Feedback
  style={{ zIndex: '3' }}
   position="center"
  numberOfStars={5}
  headerText="Bienvenue"
  bodyText="Votre Avis"
/>  </>}
/>}
     </div>

    </div>
  );
}