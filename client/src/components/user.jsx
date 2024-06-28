import React,{useEffect, useState} from "react";
import axios from "axios";
import {Link,useNavigate} from "react-router-dom";
import styles from "./css/user.module.css";
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import toast,{Toaster} from 'react-hot-toast';

const User = () => {

    const [data,setData] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        async function FetchData(){
            try{
                const fetchUser = await axios.get('http://localhost:9000/api/all');
                const response = fetchUser.data;
                setData(response);
            }catch(error){

            }
        }
        FetchData();
    },[]);

    const deleteUser = async(userId) => {
        await axios.delete(`http://localhost:9000/api/delete/${userId}`).then((response)=>{
            toast.success("User Deleted Successfully",{position:"top-center"});
            window.location.reload(false);

           
        }).catch(error=>console.log("error"));
    }

    return (
        <>
            <Toaster />
                <div class={styles.userTable}>
                <Link to={"/add"} class={styles.addButton}>
                Add User</Link><br/><br/>
                <h1 className="text-[30px] text-red-900">ALL REGISTERED USERS</h1>
                <Table striped bordered hover className={styles.userTable}>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>City</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {data.map((elem,index)=>{
                            return (
                                <tr>
                                    <td>{elem.fname}</td>
                                    <td>{elem.lname}</td>
                                    <td>{elem.email}</td>
                                    <td>{elem.age}</td>
                                    <td>{elem.city}</td>
                                    <td>
                                        <Link to={`/edit/`+elem._id}><i className="fa fa-edit"></i></Link>&nbsp;&nbsp;&nbsp;&nbsp;
                                        <button onClick={()=> deleteUser(elem._id)}><i class="fa fa-trash"></i></button>
                                    </td>
                                </tr>
                            )
                       })}
                        
                    </tbody>
                </Table>
                </div>
        </>
    )
}

export default User;