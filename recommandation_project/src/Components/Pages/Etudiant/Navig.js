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
export default function Navig() {
 const [state, setState] = React.useState({});
 const Icons =(index) =>{
   if(index === 0){return <PermIdentityIcon/>;}
   else if (index=== 1 ){return <DateRangeIcon/>;}
   else if (index=== 2 ){return <MailOutlineIcon/>;}
   else {return <NavLink to = "/FeedBack"><FeedbackIcon /></NavLink>;}
 }
const Icons2 =(index)=>{
  if(index === 0){return <NavLink to = "/"><HomeIcon /> </NavLink>;}
  else if (index=== 1 ){return <InfoIcon />;}
  else {return <InboxIcon />;}
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