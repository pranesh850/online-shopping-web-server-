import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/mockData';
import ProductCard from '../components/ProductCard';

export default function HomePage({ go, addToCart }) {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    getProducts().then(setProducts);
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <div className="product-grid" style={{marginTop:12}}>
        {products.map(p => (
          <ProductCard key={p.id} p={p} onDetails={(id)=>go('details',{id})} onAdd={addToCart} />
        ))}
      </div>
    </div>
  );
}
