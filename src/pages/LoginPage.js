import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { authApi } from "../api";
import { useAuth } from "../context/AuthContext";
import Alert from "../components/Alert";


export default function LoginPage(){
  
  const[form,setForm]=useState({username:"",password:""}),
  [show,setShow]=useState(false),
  [error,setError]=useState(""),
  [busy,setBusy]=useState(false);
  
  
  const{login}=useAuth(),
            nav=useNavigate();
            
      async function submit(e){
      
        e.preventDefault();
        setBusy(true);
        setError("");
       
     try{
      const r=await authApi.login(form);
      const jwt=typeof r==="string"?r:r?.token;
      
      if(!jwt)throw new Error("The backend did not return a JWT.");
      
      login(jwt);
      
      nav("/",{replace:true})
    }
    catch(x){
      setError(x.status===404?"No profile exists for these details. Create a profile first.":x.message)
    }finally{
      setBusy(false)
    }
  }
  
  return <main className="auth-page">
    <form className="auth-card" onSubmit={submit}>
      <h1>Sign in</h1>
      <p>Access your Mbhombi dashboard.</p>
      {
      error&&<Alert>{error} {
        
        error.includes("profile")&&<Link to="/signup">Create profile</Link>
        }</Alert>}
        
      <label>Username<input name="username" autoComplete="username" required value={form.username}
       onChange={e=>setForm({...form,username:e.target.value})}/> 
      </label>
      
      
      <label>Password<div className="password">
        <input name="password" type={show?"text":"password"} autoComplete="current-password" required value={form.password} 
        onChange={
          e=>setForm({...form,password:e.target.value})}/>
          
          <button type="button" onClick={()=>setShow(!show)}>
            {show?"Hide":"Show"}</button>
            </div>       
     </label>
     <button className="primary" disabled={busy}>{busy?"Signing in...":"Sign in"}</button>
     
     <p>Need a profile? <Link to="/signup">Sign up</Link></p>
     </form>
     </main>
    }
