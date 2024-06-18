import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const EventHandling = () => {

//    function handleButtonClick(){
//         alert("hii");
//     }

const handleButtonClick = (event) =>{
    console.log(event.target);
    alert("Hey,i am onClick event.");
}
    return(
        <>
        <Button variant="primary" onClick={handleButtonClick}>Primary</Button>

        </>
    );
};

export default EventHandling;