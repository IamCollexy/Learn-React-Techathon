import React from 'react'
import { Button } from '@chakra-ui/react'
const Buttons = ({width, height, borderRadius, Text, onClick }) => {
  return (
 
        <Button 
         w={width}
         h={height}
         borderRadius={borderRadius}
         marginLeft={'200px'}
         onClick={onClick}
         bgColor={'Yellow'}
         _hover={{
          backgroundColor: 'gray',
         }}
         >
        {Text}
        </Button>
        
  );
};
export default Buttons