import{useState}from"react";
import{accountApi}from"../api";
import{useAuth}from"../context/AuthContext";
import Alert from"../components/Alert";

export default function CreateAccountPage(){
    const{user}=useAuth();
    const[f,setF]=useState(
        {
            accountHolderName:"",
            customerId:user?.customerId||user?.customer_id||"",
            phone:"",accountType:"",pin:"",initialDeposit:"50"}),
            [show,setShow]=useState(false),[msg,setMsg]=useState(null);const change=e=>setF({...f,[e.target.name]:e.target.value});
            
            async function submit(e){e.preventDefault();
                
                try{
                    const r=await accountApi.create({...f,initialDeposit:Number(f.initialDeposit)});
                    setMsg({type:"success",text:`Account ${r.accountNumber||""} created successfully.`})
                }
                catch(x){setMsg({type:"error",text:x.message})
            }
            }

            return<section className="form-section">
                <form className="signup-card narrow" onSubmit={submit}>
                    <h1>Create bank account</h1>
                    {msg&&<Alert type={msg.type}>{msg.text}</Alert>}
                    {["accountHolderName","customerId","phone","accountType"]
                    .map(n=><label key={n}>{n.replace(/([A-Z])/g," $1")}
                    
                     *<input name={n} required value={f[n]} onChange={change}/></label>)}<label>PIN *<div className="password">
                        <input name="pin" type={show?"text":"password"} inputMode="numeric" required value={f.pin} onChange={change}/>
                        <button type="button" onClick={()=>setShow(!show)}>{show?"Hide":"Show"}</button>
                        </div>
                        </label><label>Initial deposit *<input name="initialDeposit" type="number" min="50" step="0.01" required value={f.initialDeposit} onChange={change}/></label>
                        <button className="primary">Create account</button></form></section>}
