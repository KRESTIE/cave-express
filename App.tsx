import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { CartDrawer } from './components/CartDrawer';
import { AgeVerification } from './components/AgeVerification';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { CavoPass } from './pages/CavoPass';
import { Experiences } from './pages/Experiences';
import { Checkout } from './pages/Checkout';
import { CartItem, Product } from './types';

const App: React.FC = () => {
  const [isAgeVerified, setIsAgeVerified] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [hasCavoPass, setHasCavoPass] = useState(false);

  const handleVerifyAge = () => {
    setIsAgeVerified(true);
  };

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const activatePass = () => {
    // Simulation of purchase
    const confirm = window.confirm("Confirmer l'achat du Cavo-Pass pour 150 CHF/an ?");
    if(confirm) {
        setHasCavoPass(true);
        alert("Félicitations ! Vous êtes maintenant membre Cavo-Pass. La livraison est désormais gratuite.");
    }
  };

  return (
    <div className="font-sans text-gray-900 bg-white">
      <AgeVerification onVerify={handleVerifyAge} />
      
      {isAgeVerified && (
        <Router>
          <Navbar cart={cart} toggleCart={() => setIsCartOpen(true)} />
          
          <CartDrawer 
            isOpen={isCartOpen} 
            onClose={() => setIsCartOpen(false)}
            cart={cart}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
            hasCavoPass={hasCavoPass}
          />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop addToCart={addToCart} />} />
              <Route path="/cavo-pass" element={<CavoPass activatePass={activatePass} hasPass={hasCavoPass} />} />
              <Route path="/experiences" element={<Experiences />} />
              <Route 
                path="/checkout" 
                element={<Checkout cart={cart} hasCavoPass={hasCavoPass} clearCart={clearCart} />} 
              />
            </Routes>
          </main>

          <footer className="bg-gray-900 text-white py-8 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <p className="text-gray-400 text-sm mb-2">
                &copy; {new Date().getFullYear()} Cave Express. Sion, Valais.
              </p>
              <p className="text-gray-600 text-xs">
                L'abus d'alcool est dangereux pour la santé. Consommez avec modération.
                Vente interdite aux moins de 16 ans (Vins) et 18 ans (Spiritueux).
              </p>
            </div>
          </footer>
        </Router>
      )}
    </div>
  );
};

export default App;
