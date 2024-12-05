import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, 
  ShoppingCart, 
  User, 
  Search 
} from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart();

  return (
    <header className="bg-brand-black text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <button 
            className="lg:hidden mr-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu />
          </button>
          <Link to="/" className="text-2xl font-bold">IMPULSO PERFORMANCE</Link>
        </div>

        <nav className={`
          ${isMenuOpen ? 'block' : 'hidden'} 
          lg:block absolute lg:relative top-full left-0 w-full lg:w-auto bg-brand-black lg:bg-transparent
        `}>
          <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-6 p-4 lg:p-0">
            <li><Link to="/" className="hover:text-brand-orange">Início</Link></li>
            <li><Link to="/produtos" className="hover:text-brand-orange">Produtos</Link></li>
            <li><Link to="/comunidade" className="hover:text-brand-orange">Comunidade</Link></li>
          </ul>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="hover:text-brand-orange">
            <Search />
          </button>
          <button className="hover:text-brand-orange">
            <User />
          </button>
          <Link to="/carrinho" className="relative hover:text-brand-orange">
            <ShoppingCart />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-brand-orange text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;