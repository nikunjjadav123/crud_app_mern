import React from 'react';

const EventHandling = () => {

   function handleButtonClick(){
        alert("hii");
    }

    return(
        <>
            <button onClick={handleButtonClick}>Click Me</button>
        </>
    );
};

export default EventHandling;