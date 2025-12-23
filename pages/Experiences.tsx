import React from 'react';
import { EXPERIENCES } from '../constants';
import { Calendar, MapPin, Clock } from 'lucide-react';

export const Experiences: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-wine-600 font-bold tracking-wider uppercase text-sm">Diversification de l'offre</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-2 mb-4">Escapades Cave Express</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Plus qu'une livraison, une expérience. Découvrez le terroir valaisan à travers nos événements exclusifs en partenariat avec les producteurs locaux.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
              <div className="relative h-64">
                <img 
                  src={exp.image} 
                  alt={exp.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-md shadow-sm font-bold text-wine-900">
                  CHF {exp.price} / pers.
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">{exp.title}</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-3 text-wine-500" />
                    <span>Durée : {exp.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-3 text-wine-500" />
                    <span>Lieu : {exp.location}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-8 flex-1 leading-relaxed">
                  {exp.description}
                </p>

                <div className="mt-auto flex flex-col sm:flex-row gap-4">
                  <button 
                    className="flex-1 px-6 py-3 bg-wine-900 text-white font-bold rounded-md hover:bg-wine-800 transition-colors flex items-center justify-center gap-2"
                  >
                    <Calendar className="h-5 w-5" />
                    Réserver
                  </button>
                  <button className="px-6 py-3 border border-wine-900 text-wine-900 font-bold rounded-md hover:bg-wine-50 transition-colors">
                    Offrir
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Digitalisation Info */}
        <div className="mt-20 bg-wine-900 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Digitalisation de la réservation</h3>
          <p className="opacity-90 max-w-2xl mx-auto mb-6">
            Réservez votre créneau en ligne, payez en toute sécurité et profitez de l'option Click & Collect pour repartir avec vos bouteilles préférées après la dégustation.
          </p>
        </div>

      </div>
    </div>
  );
};
