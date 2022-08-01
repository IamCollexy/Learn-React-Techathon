import React from 'react';
import {Routes, Route} from 'react-router-dom';

// import Login from './JustHavingFun/Login';
// import Dashboard from './JustHavingFun/Dashboard';
// import AnInteractivePage from './JustHavingFun/AnInteractivePage';

import Register from './Components/Routing/Register';
import Login from './Components/Routing/Login';
import FAQs from './Components/Routing/FAQs';
import { Product } from './Components/Routing/Product';
import {SharedLayout }from './Components/Routing/SharedLayout';
import Error from './Components/Routing/Error';
import ProtectedRoutes from './Components/Routing/ProtectedRoutes';
import Fetch from './Components/Routing/Fetch';
const App = () => {      

        return (
          <Routes>  
          
  <Route  path={'/'} element={<SharedLayout/>}>    
 < Route index element={<Register/>}/>
< Route path={'login'} element={<Login/>}/>
<Route element={<ProtectedRoutes/>}>
<Route path={'product'} element={<Product/>}/>
</Route>
<Route path={'faqs'} element={<FAQs/>}/>
<Route path={'fetch'} element={<Fetch/>}/>
<Route path={'*'} element={<Error/>}/>
</Route>
{/* < Route index element={<AnInteractivePage/>}/> */
/* < Route path={'/'} element={<AnInteractivePage/>}/>
< Route path={'/login'} element={<Login/>}/>
< Route path={'/dashboard'} element={<Dashboard/>}/> */}
            </Routes>
         

          
        )
      }
      
      export default App;


   











// import {Stack} from '@chakra-ui/react'
// import React from 'react'
// import { useState } from 'react';
// import Comp1 from './Components/Comp1';
// import Comp2 from './Components/Comp2';
// import Comp3 from './Components/Comp3';
// import { PropContext } from './Components/TeachContext';


// const App = () => {
//   const [name, setName] = useState('Comp2')
//   return (
//    <PropContext.Provider value={{ name, setName }}>   
// <Stack>
// <Comp1/>
// <Comp2/>
// <Comp3/>
// </Stack>
// </PropContext.Provider>
//   )
// }







// import React from 'react';
// import { Stack, Text, VStack} from '@chakra-ui/react';

// const Comp1 = ({name}) => {
// return ( 
// <>
// <h1>Hello Techathon</h1>
// <Comp2 name={name} />
// </>
// )
// }
// const Comp2 = ({name}) => {
// return (
// <>
// <h1>
//   Hello Techathon 
//   <Comp3 name={name}/>
// </h1>
// </>
// );
// };
// const Comp3 = ({name}) => {
// return <h1> Hello {name}</h1>
// }
// const Comp4 = () => {
// return <h1>Hello Techathon</h1>
// }
// const Comp5 = () => {
// return <h1>Hello Techathon</h1>
// }

// const App = () => {
//   const name = 'Collins';
//   return (
//    <Stack>
//     <VStack width={'50%'} margin={'100px auto'}>
//       <Text>
//         Hello World
//       </Text>
//       <Comp1 name={name}/>
//     </VStack>
//    </Stack>
//   )
// }

// export default App




// import React, {useState} from 'react';
// import {Button, Flex, Stack, Text, VStack} from '@chakra-ui/react';
// import { useEffect } from 'react';

// const App = () => {
//   const [count, setCount] = useState(0);
//   const isAdd = count > 1 ? 's' : '';
//   useEffect(() => {
//  count > 0 
//  ? ( document.title = `${count} New Message${isAdd}`) 
//  : ( document.title = 'Techathon')
//   }, [count]);
//   console.log(count);
//   return (
//     <Stack>
//       <VStack width={'50%'} margin={'100px auto'} >
//     <Text>{count}</Text>
//     <Flex gap={2}>
//     <Button colorScheme={'green'} onClick={() => setCount(count + 1)}>Add</Button>
//     <Button colorScheme={'red'} onClick={() => setCount(count - 1)}>Minus</Button>
//     <Button colorScheme={'blue'} onClick={() => setCount(0)}>Reset</Button>
//       </Flex>
//       </VStack>
//     </Stack>
//   );
// };

// export default App