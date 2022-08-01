import { Button } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import { PropContext } from './TeachContext'

const Comp3 = () => {
  const {setName} = useContext(PropContext)
  return (
    <div
    style={{display: 'flex'}}>
      <h1>Comp3</h1> 
      <Button colorScheme='cyan' onClick={() => setName('Boss')}>
        Change Comp2
      </Button>
      </div>
  )
}

export default Comp3