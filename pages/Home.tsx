import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Truck, MapPin, Award } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <div className="relative h-[600px] bg-black">
        <img 
          src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2940&auto=format&fit=crop" 
          alt="Vin Valaisan" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 drop-shadow-lg">
            Cave Express
          </h1>
          <p className="text-xl md:text-3xl text-gray-100 font-light max-w-3xl mb-10 drop-shadow-md">
            "Prolongez vos moments, nous livrons l’excellence."
          </p>
          <Link 
            to="/shop" 
            className="px-8 py-4 bg-wine-700 hover:bg-wine-800 text-white rounded-md font-bold text-lg transition-transform hover:scale-105 shadow-lg"
          >
            Commander Maintenant
          </Link>
          <p className="mt-4 text-gray-300 text-sm font-medium">Livraison jusqu'à 23h00 • 6j/7</p>
        </div>
      </div>

      {/* Value Proposition Icons */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            
            <div className="flex flex-col items-center">
              <div className="p-4 bg-wine-50 rounded-full mb-4">
                <Clock className="h-10 w-10 text-wine-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Service Nocturne</h3>
              <p className="text-gray-600">
                Vos magasins ferment à 18h30 ? Nous livrons vos vins et champagnes préférés jusqu'à 23h00.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="p-4 bg-wine-50 rounded-full mb-4">
                <Truck className="h-10 w-10 text-wine-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Livraison Express</h3>
              <p className="text-gray-600">
                Une logistique optimisée pour une livraison rapide dans un rayon de 15km (Sion et alentours).
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="p-4 bg-wine-50 rounded-full mb-4">
                <MapPin className="h-10 w-10 text-wine-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Terroir Valaisan</h3>
              <p className="text-gray-600">
                Partenaire de domaines prestigieux comme Maison Gilliard. Excellence locale garantie.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Target Audience / Brand Identity Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1559563362-c667ba5f5480?q=80&w=2000&auto=format&fit=crop" 
              alt="Dégustation conviviale" 
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
              Facilitateur de moments conviviaux
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Cave Express est né d'un constat simple : en zone rurale, l'offre de qualité disparaît après la fermeture des commerces. 
              Nous sommes là pour sauver vos soirées, vos apéritifs improvisés et vos dîners entre amis.
            </p>
            <div className="flex items-center gap-4 mb-8">
              <Award className="h-8 w-8 text-gold-600" />
              <span className="text-gray-800 font-medium">Une sélection approuvée par des experts</span>
            </div>
            <Link to="/experiences" className="text-wine-700 font-bold hover:underline decoration-2 underline-offset-4">
              Découvrir nos Escapades Œnotouristiques &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-wine-900 py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-white mb-4">Rejoignez le Club Privilège</h2>
          <p className="text-wine-100 mb-8 text-lg">
            Avec le Cavo-Pass, bénéficiez de la livraison gratuite illimitée et d'accès exclusifs.
          </p>
          <Link 
            to="/cavo-pass" 
            className="inline-block px-8 py-3 bg-white text-wine-900 font-bold rounded-md hover:bg-gray-100 transition-colors"
          >
            Voir les avantages
          </Link>
        </div>
      </section>

    </div>
  );
};
