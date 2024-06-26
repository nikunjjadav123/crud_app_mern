import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const DerivedState = () => {

    const [inputValue,setInputValue] = useState("");

    return (
        <>
            <p>Derived State Example</p>
            <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
            <DisplayComponent inputValue={inputValue} />
        </>
    )
};

export default DerivedState

const InputComponent = ({inputValue,setInputValue}) => {
    
    return(
        <>
            <input type="text" placeholder="enter your name" value={inputValue} onChange={(e) => setInputValue(e.target.value)} ></input>
        </>
    );
    

};


const DisplayComponent = ({inputValue}) => {    

    return <p>The current input value is:{inputValue}</p>;

};
