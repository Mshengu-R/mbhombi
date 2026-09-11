import{useEffect,useState}from"react";
import{useNavigate}from"react-router-dom";
import{profileApi}from"../api";import{useAuth}from"../context/AuthContext";
import Alert from"../components/Alert";

export default function ProfilePage(){
    
    const[p,setP]=useState(null),
    [msg,setMsg]=useState(null),
    nav=useNavigate(),{logout}=useAuth();
    useEffect(()=>{
        profileApi.me()
                  .then(setP)
                  .catch(e=>setMsg({type:"error",text:e.message}))},[]);
                  
    const change=e=>setP({...p,[e.target.name]:e.target.value});
    
    async function save(e){
        e.preventDefault();
        
        try{
            
            setP(await profileApi.update(p));
            setMsg({type:"success",text:"Profile updated."})
        
        }catch(x){
            
            setMsg({type:"error",text:x.message})
           }
        }async function remove(){
            
            if(!window.confirm("Permanently delete your profile? This cannot be undone."))return;
            
            try{
                
                await profileApi.remove();
                logout();
                nav("/signup",{replace:true})
            }catch(x){
                setMsg({type:"error",text:x.message})
            }
        }return <section className="form-section">
            <form className="signup-card narrow" onSubmit={save}>
            
            <h1>Your profile</h1>
            {
            msg&&<Alert type={msg.type}>{msg.text}</Alert>}
            {
            !p?<p role="status">Loading profile...</p>:Object.entries(p)
                                                    .filter(([k,v])=>typeof v!=="object"&&!['password','pin']
                                                    .includes(k))
                                                    .map(([k,v])=><label key={k}>{k.replace(/([A-Z])/g," $1")}
            
            <input name={k} value={v??""} onChange={change} disabled={["id","username"].includes(k)}/>
            </label>)}
            {
            p&&<>
            <button className="primary">Save changes</button>
            <button type="button" className="danger" onClick={remove}>Delete profile</button>
            </>
            }
            </form>
            </section>}
