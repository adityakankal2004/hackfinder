import React, {useState} from 'react';
import {signup} from '../services/authService';
import {useNavigate} from 'react-router-dom';

export default function Signup(){
  const [form,setForm] = useState({name:'',email:'',password:'',role:'participant'});
  const [error,setError] = useState(null);
  const nav = useNavigate()

  const submit = async (e)=> {
    e.preventDefault()
    try{
      await signup(form)
      nav('/login')
    } catch(err) {
      setError(err.response?.data?.message || "Signup failed")
    }
  }
    return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Sign Up</h2>
      {error && <div className="bg-red-100 text-red-700 p-2 mb-3 rounded"}{error}
      </div>
    <form onSubmit={submit} className="space-y-3">
    <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Full name" className="w-full p-2 border rounded" />

    <input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="Email" className="w-full p-2 boder rounded"/>

    <input type="password" value={form.password} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Password" className="w-full p-2 border rounded" />
    <select value={form.role} onChange={e=>setForm({...form,role:e.target.value})} className="w-full p-2 boder rounded">

      <option value="participant">Participant</option>
      <option value="organizer">Organizer</option>
    </select>
    <button className="w-full bg-green-600 text-white p-2 rounded">Create account</button>
    </form>
    </div>
  )
}
