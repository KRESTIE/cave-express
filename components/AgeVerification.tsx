import React, { useState, useEffect } from 'react';
import { ShieldCheck, Wine } from 'lucide-react';

interface AgeVerificationProps {
  onVerify: () => void;
}

export const AgeVerification: React.FC<AgeVerificationProps> = ({ onVerify }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleVerify = () => {
    localStorage.setItem('cave-express-age-verified', 'true');
    setIsOpen(false);
    onVerify();
  };

  const handleReject = () => {
    window.location.href = 'https://www.google.com';
  };

  useEffect(() => {
    const isVerified = localStorage.getItem('cave-express-age-verified');
    if (isVerified) {
      setIsOpen(false);
      onVerify();
    }
  }, [onVerify]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full p-8 text-center border-t-4 border-wine-900">
        <div className="flex justify-center mb-6">
          <div className="bg-wine-100 p-4 rounded-full">
            <ShieldCheck className="w-12 h-12 text-wine-900" />
          </div>
        </div>
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Bienvenue sur Cave Express</h2>
        <p className="text-gray-600 mb-6">
          Conformément à la législation suisse, la vente d'alcool est interdite aux mineurs.
          <br /><br />
          <span className="font-semibold">Avez-vous l'âge légal requis (18 ans révolus) ?</span>
        </p>
        
        <div className="space-y-3">
          <button
            onClick={handleVerify}
            className="w-full bg-wine-900 hover:bg-wine-800 text-white font-bold py-3 px-4 rounded transition-colors flex items-center justify-center gap-2"
          >
            <Wine className="w-5 h-5" />
            Oui, j'ai plus de 18 ans
          </button>
          <button
            onClick={handleReject}
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-3 px-4 rounded transition-colors"
          >
            Non, sortir du site
          </button>
        </div>
        <p className="mt-4 text-xs text-gray-500">
          L'abus d'alcool est dangereux pour la santé. À consommer avec modération.
        </p>
      </div>
    </div>
  );
};
