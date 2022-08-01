import {  Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'


const Nav = () => {

// const [show , setShow] = useState(false);

const location = useLocation();
console.log(location.search.split('&'));


const isActiveHash = location.hash === '#home';
const isActivePath = location.pathname === '/';
console.log(isActiveHash);

  return (

    <Flex
    w={'100%'} 
    gap={5}
    justifyContent={'center'} 
    >

      <NavLink 
      style={({isActive}) => 
      isActive 
      ? {color: 'red'} 
      : {color: 'green'}
    }
      to={'/'}
      // onClick={() => 
      // setShow((prev) =>
      //  !prev)}
      >
        Register
        </NavLink>

      {/* { show && (   */}
     <NavLink 
      className={({isActive}) => 
      isActive 
      ? 'active' 
      : 'disabled'
    }
            style={({isActive}) => 
            isActive 
            ? {color: 'red'} 
            : {color: 'green'}
          }
          to={'/login'}
      >
        Login
      </NavLink>
     {/* )} */}

      <NavLink 
            style={({isActive}) => 
            isActive 
            ? {color: 'red'} 
            : {color: 'green'}
          }
      to={'/product'}
      >
        Products
      </NavLink>

      <NavLink 
            style={({isActive}) => 
            isActive 
            ? {color: 'red'} 
            : {color: 'green'}
          }
      to={'/faqs'}
      >
        FAQs
      </NavLink>

    </Flex>
  );
  };
export default Nav