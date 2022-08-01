import React, { useEffect } from 'react'
import { useState } from 'react';
import {Flex, Text, VStack} from '@chakra-ui/react';
//How to Create a Base Url ?????

const Fetch = () => {
  const [cars, setCars] = useState(null)
    // const url = 'https://random-data-api.com/api/restaurant/random_restaurant?size=20';
    const url = 'https://random-data-api.com/api/vehicle/random_vehicle?size=5';
    
    const getData = async ( ) => {
      const res = await fetch(url);
      const data = await res.json();
      setCars(data);
    };
    useEffect(() => {
      // First Way ... First way does not allow async function .

        // fetch(url)
        // .then((res) => res.json())
        // .then ((data) => {
          
        //     setRestaurant(data); 
        // })
        // .catch((err) => console.log(err));
       
        getData();
      //  const renderRestaurant = restaurant?.map(item => console.log(item));
      //  const renderRestaurant = restaurant? restaurant.map(item => console.log(item));
      //  const renderRestaurant = restaurant && restaurant?.map(item => console.log(item));
    },[]);
      const renderCars = cars?.map((car) =>  {
        console.log(car);
       
       return ( 
       <Flex gap={3} key={car.id}width={'300px'} border={'2px solid black '}>
         {/* <Text>{car.color}</Text>
         <Text>{car.make_&_model}</Text>
         <Text>{car.kilometrage}</Text> */}
         <Text>{car.fuel_type}</Text>
         <Text>{car.doors}</Text>
         <Text>{car.color}</Text>

        <HStack>
          {car.specs.map((spec, i) => {
            return <Text key={i}> {spec} </Text>;
          })}
      </HStack>
      </Flex>
       )
      });
 

 

  return (
    <div>{renderCars}</div>
  )
}

export default Fetch