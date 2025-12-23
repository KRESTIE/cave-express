import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartItem } from '../types';
import { DELIVERY_FEE } from '../constants';
import { ChevronLeft, CreditCard, Smartphone, CheckCircle, MapPin, User, Truck, ShieldCheck, Lock } from 'lucide-react';

interface CheckoutProps {
  cart: CartItem[];
  hasCavoPass: boolean;
  clearCart: () => void;
}

type Step = 'info' | 'payment' | 'confirmation';

export const Checkout: React.FC<CheckoutProps> = ({ cart, hasCavoPass, clearCart }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>('info');
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    zip: '',
    city: 'Sion', // Default targeted area
    notes: ''
  });

  const [paymentMethod, setPaymentMethod] = useState<'card' | 'twint' | 'invoice'>('card');

  // Calculation
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const delivery = hasCavoPass ? 0 : DELIVERY_FEE;
  const total = subtotal + delivery;

  useEffect(() => {
    if (cart.length === 0 && step !== 'confirmation') {
      navigate('/shop');
    }
  }, [cart, step, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
    window.scrollTo(0, 0);
  };

  const handlePaymentSubmit = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(false);
    clearCart();
    setStep('confirmation');
    window.scrollTo(0, 0);
  };

  if (step === 'confirmation') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8 text-center">
          <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Commande Confirmée !</h2>
          <p className="text-gray-600 mb-8">
            Merci {formData.firstName}.<br/>
            Votre commande a bien été enregistrée.<br/>
            Un email de confirmation vous a été envoyé à <span className="font-medium text-gray-900">{formData.email}</span>.
          </p>
          <div className="bg-wine-50 rounded-lg p-4 mb-8 text-left">
            <h3 className="font-bold text-wine-900 mb-2 text-sm uppercase tracking-wide">Prochaines étapes</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex items-start gap-2">
                <Truck className="h-4 w-4 mt-0.5 text-wine-700" />
                <span>Préparation de votre commande en cave.</span>
              </li>
              <li className="flex items-start gap-2">
                <Smartphone className="h-4 w-4 mt-0.5 text-wine-700" />
                <span>Notre livreur vous contactera au <strong>{formData.phone}</strong> avant son arrivée.</span>
              </li>
            </ul>
          </div>
          <button
            onClick={() => navigate('/')}
            className="w-full bg-wine-900 text-white font-bold py-3 px-4 rounded hover:bg-wine-800 transition-colors"
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button onClick={() => navigate('/shop')} className="flex items-center text-gray-600 hover:text-wine-900">
            <ChevronLeft className="h-5 w-5 mr-1" />
            Retour à la boutique
          </button>
          <div className="font-serif font-bold text-xl text-gray-900">Paiement Sécurisé</div>
          <div className="w-20"></div> {/* Spacer for centering */}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
          
          {/* Left Column: Steps */}
          <div className="lg:col-span-7">
            
            {/* Progress Steps */}
            <div className="flex items-center justify-center mb-8">
              <div className={`flex items-center ${step === 'info' ? 'text-wine-900 font-bold' : 'text-gray-500'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 border-2 ${step === 'info' ? 'border-wine-900 bg-wine-50' : 'border-gray-300'}`}>1</div>
                Coordonnées
              </div>
              <div className="w-12 h-0.5 bg-gray-300 mx-4"></div>
              <div className={`flex items-center ${step === 'payment' ? 'text-wine-900 font-bold' : 'text-gray-500'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 border-2 ${step === 'payment' ? 'border-wine-900 bg-wine-50' : 'border-gray-300'}`}>2</div>
                Paiement
              </div>
            </div>

            {step === 'info' && (
              <form id="info-form" onSubmit={handleInfoSubmit} className="bg-white shadow rounded-lg overflow-hidden">
                <div className="p-6 md:p-8 space-y-6">
                  <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <User className="h-5 w-5 text-wine-900" />
                    Informations personnelles
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">Prénom</label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-wine-500 focus:border-wine-500 sm:text-sm p-3 border"
                        value={formData.firstName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Nom</label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-wine-500 focus:border-wine-500 sm:text-sm p-3 border"
                        value={formData.lastName}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-wine-500 focus:border-wine-500 sm:text-sm p-3 border"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Téléphone (pour la livraison)</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="079 123 45 67"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-wine-500 focus:border-wine-500 sm:text-sm p-3 border"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <hr className="border-gray-200" />

                  <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 pt-2">
                    <MapPin className="h-5 w-5 text-wine-900" />
                    Adresse de livraison
                  </h2>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Rue et numéro</label>
                    <input
                      type="text"
                      name="address"
                      required
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-wine-500 focus:border-wine-500 sm:text-sm p-3 border"
                      value={formData.address}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-1">
                      <label htmlFor="zip" className="block text-sm font-medium text-gray-700">NPA</label>
                      <input
                        type="text"
                        name="zip"
                        required
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-wine-500 focus:border-wine-500 sm:text-sm p-3 border"
                        value={formData.zip}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-span-2">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">Ville</label>
                      <input
                        type="text"
                        name="city"
                        required
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-wine-500 focus:border-wine-500 sm:text-sm p-3 border"
                        value={formData.city}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Instructions pour le livreur (optionnel)</label>
                    <textarea
                      name="notes"
                      rows={3}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-wine-500 focus:border-wine-500 sm:text-sm p-3 border"
                      placeholder="Code d'entrée, étage, etc."
                      value={formData.notes}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-wine-900 text-white font-bold py-4 px-6 rounded-md hover:bg-wine-800 transition-colors shadow-lg flex items-center justify-center gap-2"
                    >
                      Continuer vers le paiement
                      <ChevronLeft className="h-5 w-5 transform rotate-180" />
                    </button>
                  </div>
                </div>
              </form>
            )}

            {step === 'payment' && (
              <div className="bg-white shadow rounded-lg overflow-hidden">
                <div className="p-6 md:p-8 space-y-8">
                  <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <Lock className="h-5 w-5 text-wine-900" />
                    Mode de paiement
                  </h2>

                  <div className="space-y-4">
                    {/* Card Option */}
                    <div 
                      className={`border rounded-lg p-4 cursor-pointer transition-colors ${paymentMethod === 'card' ? 'border-wine-900 bg-wine-50' : 'border-gray-200 hover:border-gray-300'}`}
                      onClick={() => setPaymentMethod('card')}
                    >
                      <div className="flex items-center">
                        <input 
                          type="radio" 
                          name="payment" 
                          checked={paymentMethod === 'card'} 
                          onChange={() => setPaymentMethod('card')}
                          className="h-4 w-4 text-wine-900 focus:ring-wine-500"
                        />
                        <div className="ml-3 flex items-center gap-2">
                          <CreditCard className="h-6 w-6 text-gray-700" />
                          <span className="font-medium text-gray-900">Carte de Crédit</span>
                        </div>
                        <div className="ml-auto flex gap-2">
                           {/* Icons mockup */}
                           <div className="h-6 w-10 bg-gray-200 rounded"></div>
                           <div className="h-6 w-10 bg-gray-200 rounded"></div>
                        </div>
                      </div>
                      
                      {paymentMethod === 'card' && (
                        <div className="mt-4 pl-7 space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                           <div>
                             <label className="block text-xs font-medium text-gray-500 uppercase">Numéro de carte</label>
                             <input type="text" placeholder="0000 0000 0000 0000" className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-sm" />
                           </div>
                           <div className="grid grid-cols-2 gap-4">
                             <div>
                               <label className="block text-xs font-medium text-gray-500 uppercase">Expiration</label>
                               <input type="text" placeholder="MM/YY" className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-sm" />
                             </div>
                             <div>
                               <label className="block text-xs font-medium text-gray-500 uppercase">CVC</label>
                               <input type="text" placeholder="123" className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-sm" />
                             </div>
                           </div>
                        </div>
                      )}
                    </div>

                    {/* Twint Option */}
                    <div 
                      className={`border rounded-lg p-4 cursor-pointer transition-colors ${paymentMethod === 'twint' ? 'border-wine-900 bg-wine-50' : 'border-gray-200 hover:border-gray-300'}`}
                      onClick={() => setPaymentMethod('twint')}
                    >
                      <div className="flex items-center">
                        <input 
                          type="radio" 
                          name="payment" 
                          checked={paymentMethod === 'twint'} 
                          onChange={() => setPaymentMethod('twint')}
                          className="h-4 w-4 text-wine-900 focus:ring-wine-500"
                        />
                        <div className="ml-3 flex items-center gap-2">
                          <Smartphone className="h-6 w-6 text-gray-700" />
                          <span className="font-medium text-gray-900">TWINT</span>
                        </div>
                      </div>
                      {paymentMethod === 'twint' && (
                        <div className="mt-4 pl-7 text-sm text-gray-600">
                          Un code QR s'affichera à l'étape suivante pour valider le paiement.
                        </div>
                      )}
                    </div>

                    {/* Invoice Option */}
                    <div 
                      className={`border rounded-lg p-4 cursor-pointer transition-colors ${paymentMethod === 'invoice' ? 'border-wine-900 bg-wine-50' : 'border-gray-200 hover:border-gray-300'}`}
                      onClick={() => setPaymentMethod('invoice')}
                    >
                      <div className="flex items-center">
                        <input 
                          type="radio" 
                          name="payment" 
                          checked={paymentMethod === 'invoice'} 
                          onChange={() => setPaymentMethod('invoice')}
                          className="h-4 w-4 text-wine-900 focus:ring-wine-500"
                        />
                        <div className="ml-3 flex items-center gap-2">
                          <span className="font-medium text-gray-900">Sur Facture</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      type="button"
                      onClick={() => setStep('info')}
                      className="w-1/3 border border-gray-300 text-gray-700 font-bold py-4 px-6 rounded-md hover:bg-gray-50 transition-colors"
                    >
                      Retour
                    </button>
                    <button
                      onClick={handlePaymentSubmit}
                      disabled={loading}
                      className="w-2/3 bg-wine-900 text-white font-bold py-4 px-6 rounded-md hover:bg-wine-800 transition-colors shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <span>Traitement...</span>
                      ) : (
                        <>
                          Confirmer et Payer
                          <span className="bg-white bg-opacity-20 px-2 py-0.5 rounded text-sm">CHF {total.toFixed(2)}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-5 mt-8 lg:mt-0">
            <div className="bg-white shadow rounded-lg overflow-hidden sticky top-24">
              <div className="p-6 bg-gray-50 border-b border-gray-200">
                <h3 className="text-lg font-serif font-bold text-gray-900">Récapitulatif de commande</h3>
              </div>
              <div className="p-6">
                <ul className="divide-y divide-gray-200 mb-6">
                  {cart.map((item) => (
                    <li key={item.id} className="py-4 flex">
                      <div className="flex-shrink-0 w-16 h-16 border border-gray-200 rounded-md overflow-hidden">
                        <img src={item.image} alt={item.name} className="w-full h-full object-center object-cover" />
                      </div>
                      <div className="ml-4 flex-1 flex flex-col justify-center">
                        <div className="flex justify-between text-sm font-medium text-gray-900">
                          <h3>{item.quantity}x {item.name}</h3>
                          <p>CHF {(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                        <p className="text-xs text-gray-500">{item.producer}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-gray-200 pt-4 space-y-2">
                  <div className="flex justify-between text-sm text-gray-600">
                    <p>Sous-total</p>
                    <p>CHF {subtotal.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <p className="flex items-center">
                       Livraison
                       {hasCavoPass && <span className="ml-2 text-xs bg-wine-100 text-wine-800 px-1.5 py-0.5 rounded font-bold">Cavo-Pass</span>}
                    </p>
                    <p className={hasCavoPass ? "line-through text-gray-400" : ""}>
                      CHF {DELIVERY_FEE.toFixed(2)}
                    </p>
                  </div>
                  {hasCavoPass && (
                    <div className="flex justify-between text-sm text-green-600 font-medium">
                       <p>Remise Cavo-Pass</p>
                       <p>- CHF {DELIVERY_FEE.toFixed(2)}</p>
                    </div>
                  )}
                  
                  <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
                    <p className="text-base font-bold text-gray-900">Total à payer</p>
                    <p className="text-xl font-bold text-wine-900">CHF {total.toFixed(2)}</p>
                  </div>
                </div>

                <div className="mt-6 flex items-start gap-3 bg-blue-50 p-4 rounded text-sm text-blue-800">
                  <ShieldCheck className="h-5 w-5 flex-shrink-0" />
                  <p>
                    Paiement 100% sécurisé. Vos données sont chiffrées.
                    Livraison garantie ce soir avant 23h00.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
