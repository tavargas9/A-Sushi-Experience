import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Navbar from './Navbar';
import Hero from './Hero';

export default function App() {
  return (
    <Container 
      maxWidth='lg'
      sx={{
        boxShadow:'0 5px 10px',
        height: 'fit-content',
        padding: {xs: '0px 0px'},
      }}
    >
      <Navbar/>
      <Hero/>
    </Container>
  );
}
