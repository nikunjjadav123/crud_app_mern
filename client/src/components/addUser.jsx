import React, { useState } from 'react';
import axios from "axios";
import styles from "./css/addUser.module.css";
import {Link} from "react-router-dom";
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';


const Add = () => {

    const users = {
        fname : "",
        lname : "",
        email : "",
        city : "",
        age : "",
        password : "",
    }
    const [user,setUser] = useState(users);
    const inputHandler = (e) => {
        const {name,value} = e.target;
        setUser({...user, [name]:value});
        // console.log(user);
    }

    const submitForm = async(e) => {
        e.preventDefault();
        await axios.post("http://localhost:9000/api/create",user).then((response)=>{
            alert("New User Added");

        }).catch(error=>console.log("error"));
    }

    return (
        <>
            <div class={styles.addUser}>
                <Link to={"/"} class={styles.backButton}>Back</Link><br/><br/>
                <h1 className="text-[30px] text-red-900">ADD NEW USER</h1>
                <form className={styles.addUserForm} onSubmit={submitForm}>
                    <div className={styles.inputGroup}>
                        <label htmlFor='fname'>First Name</label>
                        <input type="text" onChange={inputHandler} id="fname" name="fname" placeholder="Enter Your First Name" autoComplete="off"/>
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor='lname'>Last Name</label>
                        <input type="text" onChange={inputHandler} id="lname" name="lname" placeholder="Enter Your Last Name" autoComplete="off"/>
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor='password'>Password</label>
                        <input type="password" onChange={inputHandler} id="password" name="password" placeholder="Enter Your Password" autoComplete="off"/>
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor='email'>Email</label>
                        <input type="email" onChange={inputHandler} id="email" name="email" placeholder="Enter Your Email" autoComplete="off"/>
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor='age'>Age</label>
                        <input type="text" onChange={inputHandler} id="age" name="age" placeholder="Enter Your Age" autoComplete="off"/>
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor='city'>City</label>
                        <input type="text" onChange={inputHandler} id="city" name="city" placeholder="Enter Your City" autoComplete="off"/>
                    </div>
                    <div className={styles.inputGroup}>
                        <button type="submit">ADD USER</button>
                    </div>
                </form>
                
            </div>
        </>
    
    )
}

export default Add