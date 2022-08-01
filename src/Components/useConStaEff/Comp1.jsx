import { Button } from '@chakra-ui/react';
import React from 'react'
import { useEffect } from 'react';
import {useState, useRef} from 'react';


const Comp1 = () => {
  const divRef = useRef();
  const inputRef = useRef();
  const [name, setName] = useState('');

  useEffect(() => {
divRef.current.style.backgroundColor = 'red';
inputRef.current.type ='date';
  }, [name]);


  
  return (
    <div ref = {divRef}>
      <h1>{name}</h1>
      <input ref={inputRef} 
      placeholder={'Enter your  code...'} 
      
     />
   
    <Button >Click me</Button>
    </div>
  )
}

export default Comp1