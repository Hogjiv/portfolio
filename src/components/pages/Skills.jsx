// components/Navbar.jsx
import React from 'react';
import { Center } from '@chakra-ui/react'
import  { Text } from '@chakra-ui/react'; 
function Skills() { 
  return (
    <div>
      <Center p="4"> 
       <h3> 
       <Text className='text-montserrat  ' fontSize='2xl' textTransform="uppercase">SKILLS </Text>   
        
       </h3>
          

        {/* <p className='text-montserrat'> Monserat </p>
        <p className='text-montserrat'> MOSERAT </p> */}
   </Center>
    </div>
    
  );
}

export default Skills;
