import React, { useState } from 'react';

export default function LoginPage({ go }) {
  const [email,setEmail] = useState('');
  const [pass,setPass] = useState('');
  const handle = (e) => { e.preventDefault(); alert('Demo login — no backend.'); go('home'); };
  return (
    <div style={{maxWidth:420}}>
      <h2>Login</h2>
      <form onSubmit={handle}>
        <div className="form-group">
          <label>Email</label><br/>
          <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com" />
        </div>
        <div className="form-group">
          <label>Password</label><br/>
          <input type="password" value={pass} onChange={e=>setPass(e.target.value)} />
        </div>
        <button className="btn btn-primary" type="submit">Login</button>
      </form>
    </div>
  );
}
