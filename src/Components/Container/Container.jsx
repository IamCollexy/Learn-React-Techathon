import React from 'react'
import './Container.css'
// way 1 Below is an Object parameter Destructuring Syntax
 export const Container = ({header, text, className, border, width, arr, item }) => {
   console.log(item?.name);
const renderArr = arr?.map((num) => {
return <p>Array {num}</p>;
}); 
return (
<div
className={className ? className : 'btn'}
style={{
width: width || '75%',
border: border
}}
>
  <h1>{className}</h1>
  <h1>{header}</h1>
  <p>{text}</p>
  {item?.name}
  <div>{renderArr}</div>
</div>
   )
 };


// way 2 props Destructuring Syntax.. 
// export const Container = (props) => {
    // console.log(props.header)
//   <div className="container1">
//       {/* Destructured Props */}
//     <div className='BoxContainer' id="container">
//       <h1>{props.header}</h1>
//       <p>{props.text1}</p>
//       <p>{props.text2}</p>
//       </div>

  // way 3 Object Destructuring to destructure props
  // export const Container = (props) => {
// const {header} = props;
//   <div className='BoxContainer' id="container">
//       <h1>{header}</h1>
//       </div>
//..........................................................
//         <div class="container"> 
//      <div className='BoxContainer' id="container">
//       <h1>Welcome to React</h1>
//       <p>Welcome to the Page</p>
//       <p>Welcome to React by Collexy</p>
//       </div>
//     <div className='BoxContainer' id="container">
//       <h1>Welcome to React</h1>
//       <p>Welcome to the Page</p>
//       <p>Welcome to React by Collexy</p>
//       </div>
//     <div className='BoxContainer' id="container">
//       <h1>Welcome to React</h1>
//       <p>Welcome to the Page</p>
//       <p>Welcome to React by Collexy</p>
//       </div>
//     <div className='BoxContainer' id="container">
//       <h1>Welcome to React</h1>
//       <p>Welcome to the Page</p>
//       <p>Welcome to React by Collexy</p>
//       </div>  
//      </div>