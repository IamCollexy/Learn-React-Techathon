import { Button } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import Nav from './Nav'

export const Product = () => {
  const [user, setUser] = useState('');
 const navigate = useNavigate();
  useEffect(() => {
    const userName = sessionStorage.getItem('username') ||
    console.log(userName);
    setUser(userName);
  },[])
  console.log(user);

  return (
    <div>
<h1>{user}</h1>
<Button 
colorScheme={'red'} 
onClick={() => 
{sessionStorage.removeItem('username')
navigate('/login')
}
}
>
Logout
</Button>
    </div>

  )
}
