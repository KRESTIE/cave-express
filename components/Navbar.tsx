import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Wine } from 'lucide-react';
import { CartItem } from '../types';

interface NavbarProps {
  cart: CartItem[];
  toggleCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cart, toggleCart }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/shop', label: 'La Cave' },
    { path: '/cavo-pass', label: 'Cavo-Pass' },
    { path: '/experiences', label: 'Escapades' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-wine-900  rounded-full">
                 <img
                  src="/logo.png"
                  alt="Cave Express"
                  className="h-16 w-16 object-contain"
                />
              </div>
              <span className="text-2xl font-serif font-bold text-wine-900 tracking-tight">
                Cave Express
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-wine-900 border-b-2 border-wine-900 pb-1'
                    : 'text-gray-600 hover:text-wine-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Cart & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleCart}
              className="relative p-2 text-gray-600 hover:text-wine-900 transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-wine-600 rounded-full">
                  {totalItems}
                </span>
              )}
            </button>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-wine-50 text-wine-900'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
