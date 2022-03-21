import React, {useState} from "react";

const Form = () =>{
    const [userRegist,setRegister] = React.useState({
        Username:"",
        Department:"",
        gender:"",
        role:"",
        salary:""
     });
    const handleInput=(e)=>{
        const name = e.target.name;
        const value = e.target.value;

         setRegister({...userRegist, [name]: value})
    }
   
    const handleSubmit = (e) =>{
        e.preventDefault();

       
    }
    return (
        <>
        <h2>Employee Details</h2>
        <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="Username">Username: </label>
                <input type="text"  autoComplete="off" 
                  value= {userRegist.Username}
                  onChange={handleInput}
                name="Username" id="username" />
            </div>
            <div>
                <label htmlFor="Department">Department: </label>
                <input type="text" autoComplete="off"
                   value= {userRegist.Department}
                   onChange={handleInput}
                name="Department" id="Department" />
            </div>
            <div>
                <label htmlFor="gender">gender : </label>
                <input type="text"   autoComplete="off"  
                  value= {userRegist.gender}
                  onChange={handleInput}
                name="gender" id="gender" />
                </div>
            <div>
                <label htmlFor="role">role: </label>
                <input type="text" autoComplete="off" 
                 value= {userRegist.role}
                 onChange={handleInput}

                name="role" id="role" />
            </div>
            <div>
                <label htmlFor="salary">salary : </label>
                <input type="text" autoComplete="off" 
                  value= {userRegist.salary}
                  onChange={handleInput}
                name="salary" id="salary" />
            </div>
            <button type="submit">Submit</button>
        </form>
         </>
    )
}
export {Form};