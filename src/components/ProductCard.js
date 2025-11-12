import React from 'react';

export default function ProductCard({ p, onDetails, onAdd }) {
  return (
    <div className="card">
      <img src={p.image} alt={p.name} style={{width:'100%', height:140, objectFit:'cover', borderRadius:6}} />
      <h3>{p.name}</h3>
      <p>₹{p.price.toFixed(2)}</p>
      <div style={{display:'flex', gap:8}}>
        <button className="btn btn-outline" onClick={()=>onDetails(p.id)}>Details</button>
        <button className="btn btn-primary" onClick={()=>onAdd(p)}>Add</button>
      </div>
    </div>
  );
}
