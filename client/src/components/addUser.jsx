import React from 'react';
import styles from "./css/addUser.module.css";
import {Link} from "react-router-dom";
const Add = () => {
    return (
        <>
            <h1 className="text-[30px]">Add New User</h1>
            
            <div class={styles.addUser}>
                <Link to={"/"} class={styles.backButton}>Back</Link>
            </div>
        </>
    
    )
}

export default Add