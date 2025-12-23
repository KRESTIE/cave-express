import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Trash2, Crown, Truck } from 'lucide-react';
import { CartItem } from '../types';
import { DELIVERY_FEE } from '../constants';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  updateQuantity: (id: string, delta: number) => void;
  removeFromCart: (id: string) => void;
  hasCavoPass: boolean;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  updateQuantity,
  removeFromCart,
  hasCavoPass
}) => {
  const navigate = useNavigate();
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const delivery = hasCavoPass ? 0 : DELIVERY_FEE;
  const total = subtotal + delivery;

  if (!isOpen) return null;

  const handleCheckout = () => {
    onClose();
    navigate('/checkout');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose} />
      
      <div className="absolute inset-y-0 right-0 pl-10 max-w-full flex">
        <div className="w-screen max-w-md bg-white shadow-xl flex flex-col h-full">
          
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-6 bg-wine-900 text-white">
            <h2 className="text-lg font-serif font-medium">Votre Panier</h2>
            <button onClick={onClose} className="text-wine-100 hover:text-white">
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
            {cart.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-gray-500">Votre panier est vide.</p>
              </div>
            ) : (
              <ul className="divide-y divide-gray-200">
                {cart.map((item) => (
                  <li key={item.id} className="py-6 flex">
                    <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <div className="ml-4 flex-1 flex flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>{item.name}</h3>
                          <p className="ml-4">CHF {(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">{item.producer}</p>
                      </div>
                      <div className="flex-1 flex items-end justify-between text-sm">
                        <div className="flex items-center border rounded-md">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                          >-</button>
                          <span className="px-2 py-1 text-gray-900">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                          >+</button>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="font-medium text-red-600 hover:text-red-500 flex items-center"
                        >
                          <Trash2 className="h-4 w-4 mr-1" />
                          Supprimer
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 py-6 px-4 sm:px-6 bg-gray-50">
            <div className="flex justify-between text-base font-medium text-gray-900 mb-2">
              <p>Sous-total</p>
              <p>CHF {subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mb-4">
              <p className="flex items-center">
                <Truck className="h-4 w-4 mr-2" />
                Livraison
                {hasCavoPass && <span className="ml-2 text-wine-600 font-bold flex items-center"><Crown className="h-3 w-3 mr-1"/> Cavo-Pass</span>}
              </p>
              <p className={hasCavoPass ? "line-through text-gray-400" : ""}>
                CHF {DELIVERY_FEE.toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between text-xl font-bold text-gray-900 mb-6 border-t border-gray-200 pt-4">
              <p>Total</p>
              <p>CHF {total.toFixed(2)}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500 mb-4">
              Livraison express jusqu'à 23h00.
            </p>
            <button
              className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-wine-900 hover:bg-wine-800 disabled:bg-gray-400 disabled:cursor-not-allowed"
              onClick={handleCheckout}
              disabled={cart.length === 0}
            >
              Commander
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
