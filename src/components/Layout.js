import { NavLink, Outlet, Link, useNavigate } from "react-router-dom";
import { FaHome, FaCreditCard, FaEnvelope, FaUserCircle } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

const items=[["/",FaHome,"Home"],["/bank",FaCreditCard,"Bank"],["/messages",FaEnvelope,"Messages"],["/profile",FaUserCircle,"Profile"]];
export default function Layout(){
 const {logout}=useAuth(), navigate=useNavigate();
 return <div className="site-shell">
  <header className="topbar"><Link className="logo" to="/">Mbhombi</Link><nav aria-label="Main navigation">{items.map(([to,Icon,label])=><NavLink key={to} to={to} end={to==="/"}><Icon aria-hidden="true"/><span>{label}</span></NavLink>)}</nav><button className="logout" onClick={()=>{logout();navigate('/login')}}>Log out</button></header>
  <main id="main"><Outlet/></main>
  <footer>
    <div className="footer-links">
    <Link to="/about">About us</Link>
    <a href="/contact">Contact us</a>
    <a href="/careers">Careers</a>
    <a href="/terms">Ts &amp; Cs</a>
    <a href="/privacy-policy">Privacy Policy</a>
    </div>
    <p>© {new Date().getFullYear()} Mbhombi Financial Services. All rights reserved.</p>
  </footer>
 </div>;
}
