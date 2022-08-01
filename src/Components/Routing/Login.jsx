import React, {useState, useRef, useEffect} from 'react'
import {Button, Flex, FormControl, FormLabel, HStack, Input, VStack} from '@chakra-ui/react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
// import Nav from './Nav';


const Login = () => {

  const [show, setShow] = useState(false);
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState({});
    // const [confirmPassword, setConfirmPassword] = useState('');
    const userNameRef = useRef();

const navigate = useNavigate();

    useEffect(() => {
      const registerData = sessionStorage.getItem('user');
   const userInfo = JSON.parse(registerData);
   setUserData(userInfo);
    },[]);
    console.log(userData);

    const handleSubmit = (event) => {
      if (userData?.name === username && userData?.password === password) {
        sessionStorage.setItem('username', username);
        navigate('/product');
      } else {
          alert('Incorrect Details');
        }
      }

  return (
   <VStack
   justify={'center'}
   align={'center'}
   as={'form'}
   pt={'100px'}
   gap={5}
   flexDirection='column'
    onSubmit={handleSubmit}
   >

    <HStack 
    width={'full'}
    >
      <Link to={'/'}>Register</Link>
    </HStack>
   
   <FormControl width={'50%'}>
    <FormLabel>Username </FormLabel>
        <Input type={'text'} 
        placeholder={'Enter a Text'}
        value={username} 
        ref={userNameRef}
        onChange={() =>
        setUserName(userNameRef.current.value)}
        />
   </FormControl>

   <FormControl width={'50%'}>
    <FormLabel>Password </FormLabel>
        <Input type={show ? 'text' : 'password'} 
        placeholder={"Enter a Password"}
        value={password} 
        onChange={(e) => 
        setPassword(e.target.value)}
        />
        

    <Button 
    type={'button'} 
    onClick={() => 
    setShow(!show)}
    >
      Show
    </Button>
    </FormControl>

   <Button 
   type={'submit'} 
   colorScheme={'facebook'} 
   onClick={handleSubmit}
   > 
   Submit
   </Button>

   </VStack>

  )
}

export default Login

