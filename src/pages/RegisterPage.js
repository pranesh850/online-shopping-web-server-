import React, { useState } from 'react';

export default function RegisterPage({ go }) {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [pass,setPass] = useState('');
  const handle = (e) => { e.preventDefault(); alert('Demo register — no backend.'); go('login'); };
  return (
    <div style={{maxWidth:420}}>
      <h2>Register</h2>
      <form onSubmit={handle}>
        <div className="form-group">
          <label>Name</label><br/>
          <input value={name} onChange={e=>setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Email</label><br/>
          <input value={email} onChange={e=>setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Password</label><br/>
          <input type="password" value={pass} onChange={e=>setPass(e.target.value)} />
        </div>
        <button className="btn btn-primary" type="submit">Register</button>
      </form>
    </div>
  );
}
