import React from 'react';

export default function CartPage({ cart, removeFromCart, go }) {
  const total = cart.reduce((s,p)=>s + p.price * p.qty, 0);
  return (
    <div>
      <button className="btn" onClick={()=>go('home')}>← Back</button>
      <h2 style={{marginTop:12}}>Your Cart</h2>
      {cart.length===0 ? <p>Your cart is empty.</p> : (
        <div>
          {cart.map(item => (
            <div key={item.id} style={{display:'flex', gap:12, alignItems:'center', marginBottom:12}} className="card">
              <img src={item.image} alt="" style={{width:100, height:80, objectFit:'cover', borderRadius:6}} />
              <div style={{flex:1}}>
                <div style={{fontWeight:700}}>{item.name}</div>
                <div>Qty: {item.qty}</div>
                <div>₹{(item.price*item.qty).toFixed(2)}</div>
              </div>
              <div>
                <button className="btn btn-outline" onClick={()=>removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <h3>Total: ₹{total.toFixed(2)}</h3>
          <button className="btn btn-primary">Checkout (demo)</button>
        </div>
      )}
    </div>
  );
}
