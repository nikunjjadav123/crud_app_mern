import React, { useState } from 'react';
import {RouterProvider, createBrowserRouter,Router , Route} from "react-router-dom";

const Layout = () => {
    let time = new Date().toLocaleTimeString();
    const [ctime,setCtime] = useState(time);

    const updateTime = () => {
        let time = new Date().toLocaleTimeString();
        setCtime(time);
    };
    
    setInterval(updateTime,1000);
      
    return (
        <>
        <div class="time_wrapper">  
            <div id="time_clock" className="time_center">{ctime}</div>
        </div>
    
        </>
        
    );
}

export default Layout