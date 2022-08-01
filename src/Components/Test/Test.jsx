import React from 'react';

const age = 50;
const Test = () => {
    const age = 80;
    // const h1 = React.createElement('h1', {}, 'Hello world'); How React wanted us to create Element
    return (
    <>
    <p>Hello</p>
    <div> {age} </div>
    <div> Test </div>
    <div> Test </div>
    <div> Test </div>
    <input className={'form'} onClick type="text" name="" id='' />
    </>
    )
}
export default Test;