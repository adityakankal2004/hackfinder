import React, {useState } from 'react';
import {login} from '../services/authService';
import {useNavigate} from 'react-router-dom';

export default function login(){
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState(null);
  const nav = useNavigate();

  const submit = async (e)=> {
    e.preventDefault()
    try{
      await login({email,password})
      nav("/")
    }catch(err){
      setError(err.response?.data?.message || "Login Failed")
  }
}
return (
  <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
    <h2 className="text-xl font-semibold mb-4">Login</h2>
      {error && <div className="bg-red-100 text-red-700 p-2 mb-3 rounded">{error}</div>}
      <form onSubmit={submit} className="space-y-3">
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email"className="w-full p-2 border rounded"/>
        <input type="password" value={password} onChange=>{e=>setPassword(e.target.value)} placeholder="Password" className="w-full p-2 border rounded"/>
        <button className=w-full bg-blue-600 text-white p-2 rounded">Login</button>
      </form>
    </div>
)
