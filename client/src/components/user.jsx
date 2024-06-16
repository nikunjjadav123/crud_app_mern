import React from "react";
import {Link} from "react-router-dom";
import styles from "./css/user.module.css";
const User = () => {
    return (
        <>
            <h1 className="text-[30px]">USERS</h1>
            
            <div class={styles.userTable}>
                <Link to={"/add"} class={styles.addButton}>Add User</Link>
                <table className="border-collapse border border-slate-500">
                    <thead>
                        <tr>
                            <th className="border border-slate-600">User Id</th>
                            <th className="border border-slate-600">First Name</th>
                            <th className="border border-slate-600">Last Name</th>
                            <th className="border border-slate-600">Email</th>
                            <th className="border border-slate-600">Age</th>
                            <th className="border border-slate-600">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-slate-600 text-center">sdasda</td>
                            <td className="border border-slate-600 text-center">sdds</td>
                            <td className="border border-slate-600 text-center">ada</td>
                            <td className="border border-slate-600 text-center">SAAS</td>
                            <td className="border border-slate-600 text-center">SASDA</td>
                            <td className="border border-slate-600 text-center">
                                <Link to={"/edit"} className={styles.editButton}><i class="fa-solid fa-edit"></i></Link>
                                <button className={styles.deleteButton}><i class="fa-solid fa-trash"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default User;