import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

import { IconBtn, MenuIc } from './Iconstyle';



export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 ,
       backgroundColor:'#9000ffba',
       height: '41vh',
       color: 'white'

       
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Biz haqimizda', 'Turnirlar' , 'Xisob', 'rasmlar'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0? <ArrowForwardIosIcon sx={{color: 'white'}} /> : <ArrowForwardIosIcon sx={{color: 'white'}} /> }
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List sx={{backgroundColor: '#8F00FF', color: 'white'}}>
        {["Ro'yhatdan o'tish"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <AppRegistrationIcon sx={{color: 'white'}} /> : <ArrowForwardIosIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {['right',].map((anchor) => (
        <React.Fragment key={anchor}>
           <IconBtn style={{color: '#8F00FF', display: 'none'}} onClick={toggleDrawer(anchor, true)}>
              <MenuIc />
            </IconBtn>         
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
