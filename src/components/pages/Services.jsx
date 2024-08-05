// components/Navbar.jsx
import React from 'react';
import { Heading, Stack } from '@chakra-ui/react' 
function Services() { 
  return (
    <div> 
      <Stack spacing={6}>
  <Heading as='h1' size='4xl' noOfLines={1}>
    (4xl) In love with React & Next
  </Heading>
  <Heading as='h2' size='3xl' noOfLines={1}>
    (3xl) In love with React & Next
  </Heading>
  <Heading as='h2' size='2xl'>
    (2xl) In love with React & Next
  </Heading>
  <Heading as='h2' size='xl'>
    (xl) In love with React & Next
  </Heading>
  <Heading as='h3' size='lg'>
    (lg) In love with React & Next
  </Heading>
  <Heading as='h4' size='md'>
    (md) In love with React & Next
  </Heading>
  <Heading as='h5' size='sm'>
    (sm) In love with React & Next
  </Heading>
  <Heading as='h6' size='xs'>
    (xs) In love with React & Next
  </Heading>
</Stack>
        <h5> Services! </h5> 

        <h1 className='white'> Skills </h1>
      <h2 className='white'> Skills </h2>
      <h3 className='white'> Skills </h3>
      <h4 className='white'> Skills </h4>
      <h5 className='white'> Skills </h5>
    </div>
  );
}

export default Services;
