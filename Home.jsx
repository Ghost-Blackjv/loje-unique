import React from 'react';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Running, Dumbbell, Shirt, Activity } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Banner Principal */}
      <section className="relative bg-brand-black text-white py-24 text-center">
        <div className="container mx-auto relative z-10">
          <h1 className="text-5xl font-bold mb-6">VISTA SUA AMBIÇÃO</h1>
          <p className="text-xl mb-8">Performance, estilo e tecnologia em cada peça</p>
          <a 
            href="/produtos" 
            className="inline-block bg-brand-orange px-10 py-4 rounded-full text-lg font-bold hover:bg-orange-600 transition"
          >
            Explorar Coleção
          </a>
        </div>
      </section>

      {/* Categorias */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Nossas Categorias</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Shirt className="w-12 h-12" />, name: "Treino Funcional" },
              { icon: <Dumbbell className="w-12 h-12" />, name: "Musculação" },
              { icon: <Running className="w-12 h-12" />, name: "Corrida" },
              { icon: <Activity className="w-12 h-12" />, name: "Yoga" }
            ].map((category, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center hover:scale-105 transition-transform"
              >
                <div className="bg-gray-100 p-6 rounded-full mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Produtos em Destaque */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Destaques</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUCTS.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-brand-black text-white py-16 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">Junte-se à Comunidade IMPULSO</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Receba conteúdos exclusivos, dicas de treino, novidades e ofertas especiais
          </p>
          <form className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="Digite seu melhor e-mail" 
              className="flex-grow px-4 py-3 rounded-l-full text-black"
              required
            />
            <button 
              type="submit"
              className="bg-brand-orange text-white px-6 py-3 rounded-r-full hover:bg-orange-600 transition"
            >
              Cadastrar
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;