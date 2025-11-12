import React from 'react';

export default function Navbar({ go, cartCount }) {
  return (
    <div className="navbar container">
      <div style={{display:'flex', alignItems:'center', gap:12}}>
        <div style={{fontWeight:700}}>Shopping App</div>
        <div style={{opacity:0.9}}>— static demo</div>
      </div>
      <div className="nav-links">
        <a href="#" onClick={(e)=>{e.preventDefault(); go('home');}}>Home</a>
        <a href="#" onClick={(e)=>{e.preventDefault(); go('cart');}}>Cart ({cartCount})</a>
        <a href="#" onClick={(e)=>{e.preventDefault(); go('login');}}>Login</a>
        <a href="#" onClick={(e)=>{e.preventDefault(); go('register');}}>Register</a>
      </div>
    </div>
  );
}
