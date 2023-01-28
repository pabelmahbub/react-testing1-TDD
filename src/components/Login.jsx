import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import './Login.css'

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const [user, setuser] = useState({});

    const handleClick = async(e)=>{
      e.preventDefault();
      setLoading(true);
      try{
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/users/1");
        setuser(data)
      }catch{
        setError(true)
      }
      setLoading(false);
    };

  return (
    <div className='container'>
        <h3> Login Form</h3>
        <span>{user.name}</span>
        <form>
            <input type= "text" placeholder='username'  value={username} onChange={(e)=> setUsername(e.target.value)}/>
            <input type= "password" placeholder='password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
            <button disabled={!username || !password} onClick={handleClick}>{loading ? "please wait...." : 'Login'}</button>
        </form>
        <span 
           data-testid = "error"
           style={{ visibility: error ? "visible" : "hidden"}}
        >
            Something went wrong. Pls try again.</span>
    </div>
  )
}

export default Login