import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-6">Product Catalog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product._id} className="bg-gray-800 p-4 rounded shadow-lg">
            <img src={product.image} alt={product.name} className="h-48 w-full object-cover mb-4 rounded" />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-400">{product.category}</p>
            <p className="text-green-400 font-bold">PKR {product.price}</p>
            <p className="mt-2 text-sm text-gray-300">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
