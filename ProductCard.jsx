import React from 'react';
import { useCart } from '../contexts/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold">{product.name}</h3>
        <p className="text-gray-500 mb-2">{product.category}</p>
        <p className="text-brand-orange font-bold text-2xl mb-4">
          R$ {product.price.toFixed(2)}
        </p>
        <button 
          onClick={() => addToCart(product)}
          className="w-full bg-brand-black text-white py-2 rounded-full hover:bg-gray-800 transition"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
};