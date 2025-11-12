import React, { useEffect, useState } from 'react';
import { getProductById } from '../services/mockData';

export default function ProductDetails({ id, go, addToCart }) {
  const [product, setProduct] = useState(null);

  useEffect(()=>{
    if (!id) return;
    getProductById(id).then(setProduct);
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <button className="btn" onClick={()=>go('home')}>← Back</button>
      <div style={{display:'flex', gap:20, marginTop:12}}>
        <img src={product.image} alt="" style={{width:320, height:240, objectFit:'cover', borderRadius:8}}/>
        <div>
          <h2>{product.name}</h2>
          <p>Price: ₹{product.price.toFixed(2)}</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel.</p>
          <div style={{marginTop:12}}>
            <button className="btn btn-primary" onClick={()=>addToCart(product)}>Add to cart</button>
            <button className="btn" style={{marginLeft:8}} onClick={()=>go('cart')}>Go to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
