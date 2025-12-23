import React from 'react';
import { CheckCircle, Crown, Truck, Star } from 'lucide-react';
import { CAVO_PASS_PRICE } from '../constants';

interface CavoPassProps {
  activatePass: () => void;
  hasPass: boolean;
}

export const CavoPass: React.FC<CavoPassProps> = ({ activatePass, hasPass }) => {
  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Header */}
      <div className="bg-wine-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Crown className="mx-auto h-16 w-16 text-gold-500 mb-6" />
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Le Cavo-Pass</h1>
          <p className="text-xl text-wine-100 max-w-2xl mx-auto">
            L'abonnement exclusif pour les amateurs de vin.
            Économisez sur la livraison et accédez à des privilèges uniques.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 mb-20">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="grid md:grid-cols-2">
            
            {/* Image / Lifestyle */}
            <div className="relative h-64 md:h-auto">
              <img 
                src="cavo_pass.jpg" 
                alt="Soirée élégante" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-wine-900 bg-opacity-30"></div>
            </div>

            {/* Benefits List */}
            <div className="p-8 md:p-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Vos Avantages Membre</h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <Truck className="h-6 w-6 text-wine-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Livraison Illimitée Gratuite</h3>
                    <p className="mt-1 text-gray-500">
                      Oubliez les frais de livraison de 10 CHF. Commandez autant de fois que vous le souhaitez, toute l'année.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <Star className="h-6 w-6 text-gold-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Accès Privilège</h3>
                    <p className="mt-1 text-gray-500">
                      Priorité sur les réservations des "Escapades Cave Express" et accès aux ventes privées de grands crus. Et recevez 3 bouteilles de vins lors de vos visites
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Simplicité</h3>
                    <p className="mt-1 text-gray-500">
                      Un seul paiement annuel, pas de tacite reconduction cachée.
                    </p>
                  </div>
                </li>
              </ul>

              <div className="border-t border-gray-200 pt-8 flex flex-col items-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  CHF {CAVO_PASS_PRICE} <span className="text-lg font-normal text-gray-500">/ an</span>
                </div>
                {hasPass ? (
                  <button 
                    disabled
                    className="w-full md:w-auto px-8 py-3 bg-green-600 text-white rounded-md font-bold cursor-default flex items-center justify-center gap-2"
                  >
                    <CheckCircle className="h-5 w-5" />
                    Membre Actif
                  </button>
                ) : (
                  <button 
                    onClick={activatePass}
                    className="w-full md:w-auto px-8 py-3 bg-wine-900 text-white rounded-md font-bold hover:bg-wine-800 transition-colors shadow-lg"
                  >
                    Souscrire maintenant
                  </button>
                )}
                <p className="mt-4 text-xs text-gray-500 text-center">
                  L'abonnement est rentabilisé dès la 15ème commande.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
