import React from "react";
import Box from '@mui/material/Box';
import Visible from './Visible';
import Grid from '@mui/material/Grid';

export default function V(){
    return(
  <Box
  sx={{
      //   my: 8,
      mx: 4,
      display: 'flex',
      //  flexDirection: 'column',
      alignItems: 'center',
  }}
>
 
  
   { localStorage.getItem("Visible")== "true" ?   <Grid item xs={12} sm={8} style={{
          paddingTop:'50px',
          paddingLeft:'100px',
          marginRight:'100px',
  
      }}>
          <Visible/>
      </Grid>:<div>pas de rech</div>}
</Box>);
}