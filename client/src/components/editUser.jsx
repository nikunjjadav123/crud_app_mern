import React, { useEffect,useState } from 'react';
import styles from "./css/addUser.module.css";
import {Link,useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import toast,{Toaster} from 'react-hot-toast';
import 'bootstrap/dist/css/bootstrap.min.css';

const EditUser = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const users = {
        fname : "",
        lname : "",
        email : "",
        city : "",
        age : "",
        password : "",
    }
    const [user,setUser] = useState(users);
    const inputChangeHandler = (e) => {
        const {name,value} = e.target;
        setUser({...user, [name]:value});
    }

    useEffect(()=>{
        axios.get(`http://localhost:9000/api/getone/${id}`).then((response)=>{
            setUser(response.data);
        }).catch((error)=>{
            console.log(error);
        })
    },[id])

    const submitForm = async(e) => {
        e.preventDefault();
        await axios.put(`http://localhost:9000/api/update/${id}`,user).then((response)=>{
            toast.success("User Edited Successfully",{position:"top-center"});

            const interval = setInterval(() => {
                window.location.reload();
            }, 2000);
            // navigate("/");
          
        }).catch(error=>console.log("error"));
    }
    return (
        <>
            <Toaster />
            <div class={styles.addUser}>
                <Link to={"/"} class={styles.backButton}>Back</Link><br/><br/>
                <h1 className="text-[30px] text-red-900">EDIT USER</h1>
                <form className={styles.addUserForm} onSubmit={submitForm}>
                    <div className={styles.inputGroup}>
                        <label htmlFor='fname'>First Name</label>
                        <input type="text" value={user.fname} onChange={inputChangeHandler} id="fname" name="fname" placeholder="Enter Your First Name" autoComplete="off"/>
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor='lname'>Last Name</label>
                        <input type="text" value={user.lname} onChange={inputChangeHandler} id="lname" name="lname" placeholder="Enter Your Last Name" autoComplete="off"/>
                    </div>
                    {/* <div className={styles.inputGroup}>
                        <label htmlFor='password'>Password</label>
                        <input type="password" onChange={inputChangeHandler} id="password" name="password" placeholder="Enter Your Password" autoComplete="off"/>
                    </div> */}
                    <div className={styles.inputGroup}>
                        <label htmlFor='email'>Email</label>
                        <input type="email" value={user.email} onChange={inputChangeHandler} id="email" name="email" placeholder="Enter Your Email" autoComplete="off"/>
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor='age'>Age</label>
                        <input type="text" value={user.age} onChange={inputChangeHandler} id="age" name="age" placeholder="Enter Your Age" autoComplete="off"/>
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor='city'>City</label>
                        <input type="text" value={user.city} onChange={inputChangeHandler} id="city" name="city" placeholder="Enter Your City" autoComplete="off"/>
                    </div>
                    <div className={styles.inputGroup}>
                        <button type="submit">SAVE</button>
                    </div>
                </form>
                
            </div>
        </>
    
    )
}

export default EditUser