import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box, Toolbar, Typography } from '@mui/material';
import { height } from '@mui/system';
import { Instagram, Twitter } from '@mui/icons-material';

export default function Navbar() {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Toolbar sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    }}>    
        <Tabs value={value} onChange={handleChange}>
            <Tab label="Home" />
            <Tab label="Menu"/>
            <Tab label="Contact" />
        </Tabs>
        <Box mt={2} mr={14}>
            <Box height={100}><img style={{height: '100%'}} src='../public/logo_intro.png'/></Box> 
            <Typography variant='subtitle2' color={'primary'}>
                 A Sushi Experience 
            </Typography>
        </Box>
        <Box sx={{
            width: '10rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly'
        }}>
            <Typography color='primary' variant='subtitle2'>Book Us Today</Typography>
            <Instagram color='primary' sx={{
                height: '100%'
            }}/>
        </Box>
    </Toolbar>

  );
}
