import {useState}from"react";
import{Link}from"react-router-dom";
import{authApi}from"../api";
import Alert from"../components/Alert";

const init={
  firstName:"",
  secondName:"",
  surname:"",
  email:"",
  phone:"",
  username:"",
  idNumber:"",
  title:"",
  dateOfBirth:"",
  role:"",
  ethnicity:"",
  gender:"",
  country:"South Africa",
  status:"",
  customerLanguage:"",
  homeAddress:"",
  password:""};

const opts={
  title:[
    "MR",
    "MRS",
    "DR",
    "PROF",
    "MISS",
    "MS"],
  ethnicity:[
             "AFRICAN",
             "ASIAN",
             "INDIAN",
             "MIXED",
             "AMERICAN"],
  gender:[
          "MALE",
          "FEMALE",
          "OTHER"],

  country:[
          "SOUTH AFRICA",
          "LESOTHO",
          "BOTSWANA"],

  customerLanguage:[
                    "ENGLISH",
                    "XITSONGA",
                    "ISIZULU",
                    "ISIXHOSA",
                    "SEPEDI",
                    "SESOTHO",
                    "SETWANA",
                    "TSHIVHENDA",
                    "AFRIKAANS"]};

export default function SignupPage(){
  
  const[f,setF]=useState(init),
  [consent,setConsent]=useState(false),[show,setShow]=useState(false),[msg,setMsg]=useState(null);
  
  const change=e=>setF(
    {...f,[e.target.name]:e.target.value});
    
    async function submit(e){
      
      e.preventDefault();
      
      if(!consent)
        return setMsg(
      {
        type:"error",
        text:"Accept the Privacy Policy to continue."
      });
      
      try{
        
        const r=await authApi.register(
          {
            ...f,secondName:f.secondName||null,
            dateOfBirth:f.dateOfBirth,
            homeAddress:[f.homeAddress.trim()]});
            
            setMsg(
              {
                type:"success",
                text:typeof r==="string"?r:"Profile created. You can sign in."
              });
              
              setF(init)
            }catch(x){
              setMsg({type:"error",text:x.message})
            }
          }
          
      const input=(name,label,type="text",required=true)=>
      <label>{label}{required&&" *"}
      <input name={name} type={type} required={required} value={f[name]} onChange={change}/>
      </label>;const select=(name,label)=><label>
        
        {label} *<select name={name} required value={f[name]} onChange={change}>
          
          <option value="">Select</option>
          {opts[name].map(
            x=>
            <option key={x}>{x}</option>)
            }
            </select>
            </label>;
            
          return <main className="signup-page">
          <form className="signup-card" onSubmit={submit}>
                
           <h1>Create profile</h1>

          {
            msg&&<Alert type={msg.type}>
           {msg.text} {msg.type==="success"&&<Link to="/login">Sign in</Link>}</Alert>}
                  
   <div className="form-grid">
        {input("firstName","First name")}
        {input("secondName","Second name","text",false)}
        {input("surname","Surname")}
        {input("email","Email","email")}
        {input("phone","Phone","tel")}
        {input("username","Username")}
        {input("idNumber","ID number")}
        {select("title","Title")}
        {input("dateOfBirth","Date of birth","date")}
        {/* {input("role","Role")} */}
        {select("ethnicity","Ethnic group")}
        {select("gender","Gender")}
        {select("country","Country")}
        {/* {input("status","Status")} */}
        {select("customerLanguage","Customer language")}
        
      <label className="wide">Home address *<textarea name="homeAddress" required value={f.homeAddress} onChange={change}/>
      </label><label className="wide">Password *<div className="password">
      <input name="password" type={show?"text":"password"} minLength="8" required value={f.password} onChange={change}/>
      <button type="button" onClick={()=>setShow(!show)}>{show?"Hide":"Show"}</button>
      
  </div>
  
      </label>
      <label className="consent wide">
        
        <input type="checkbox" checked={consent} onChange={e=>setConsent(e.target.checked)}/>
         I consent to the <a href="/privacy-policy">Privacy Policy</a>.</label>
        </div>
        <button className="primary">Create profile</button>
        <p>Already registered? <Link to="/login">Sign in</Link></p>
        </form>
    </main>}
