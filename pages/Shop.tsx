import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { ProductType, Product, PriceCategory } from '../types';
import { Filter, Search, Plus, X, Thermometer, Calendar, Utensils, Activity, Grape, MapPin } from 'lucide-react';

interface ShopProps {
  addToCart: (product: Product) => void;
}

export const Shop: React.FC<ShopProps> = ({ addToCart }) => {
  const [selectedType, setSelectedType] = useState<ProductType | 'All'>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesType = selectedType === 'All' || product.type === selectedType;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.producer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  const getCategoryColor = (category: PriceCategory) => {
    switch (category) {
      case PriceCategory.GREEN: return 'border-green-500 text-green-700 bg-green-50';
      case PriceCategory.ORANGE: return 'border-orange-500 text-orange-700 bg-orange-50';
      case PriceCategory.RED: return 'border-red-600 text-red-700 bg-red-50';
    }
  };

  const getCategoryBadgeColor = (category: PriceCategory) => {
     switch (category) {
      case PriceCategory.GREEN: return 'bg-green-100 text-green-800';
      case PriceCategory.ORANGE: return 'bg-orange-100 text-orange-800';
      case PriceCategory.RED: return 'bg-red-100 text-red-800';
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">La Cave</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Une sélection rigoureuse de vins valaisans et de grands crus. 
            Classés pour faciliter votre choix : Vert (Découverte), Orange (Plaisir), Rouge (Prestige).
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          
          {/* Filters */}
          <div className="flex flex-wrap gap-2 justify-center">
            <button 
              onClick={() => setSelectedType('All')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedType === 'All' ? 'bg-wine-900 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
            >
              Tout
            </button>
            {Object.values(ProductType).map(type => (
              <button 
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedType === type ? 'bg-wine-900 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Rechercher un cru..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-wine-500 focus:border-wine-500 sm:text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden flex flex-col h-full border border-gray-100">
              <div 
                className="relative h-64 overflow-hidden group cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="mx-auto my-4 h-56 w-auto object-contain"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="absolute top-2 right-2">
                  <span className={`px-2 py-1 text-xs font-bold uppercase rounded border ${getCategoryColor(product.category)}`}>
                    {product.category}
                  </span>
                </div>
                <div className="absolute bottom-2 right-2 bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Search className="h-4 w-4 text-wine-900" />
                </div>
              </div>
              
              <div className="p-4 flex-1 flex flex-col">
                <div className="mb-2">
                  <p className="text-sm text-gray-500 uppercase tracking-wide">{product.type}</p>
                  <h3 
                    className="text-lg font-bold text-gray-900 leading-tight cursor-pointer hover:text-wine-700"
                    onClick={() => setSelectedProduct(product)}
                  >
                    {product.name}
                  </h3>
                  <p className="text-sm text-wine-700 font-medium">{product.producer}</p>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <span className="text-xl font-bold text-gray-900">CHF {product.price.toFixed(2)}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product);
                    }}
                    className="p-2 bg-wine-900 text-white rounded-full hover:bg-wine-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-wine-500 shadow-md"
                    aria-label="Ajouter au panier"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">Aucun produit ne correspond à votre recherche.</p>
          </div>
        )}

      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={() => setSelectedProduct(null)}></div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
              
              <div className="absolute top-0 right-0 pt-4 pr-4 z-10">
                <button
                  type="button"
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
                  onClick={() => setSelectedProduct(null)}
                >
                  <span className="sr-only">Fermer</span>
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="sm:flex">
                {/* Image Section */}
                <div className="sm:w-1/3 bg-gray-100 flex items-center justify-center py-6">
                   <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name} 
                    className="mx-auto my-4 h-104 w-auto object-contain"
                   />
                </div>

                {/* Content Section */}
                <div className="sm:w-2/3 p-6 sm:p-10">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryBadgeColor(selectedProduct.category)} mb-2`}>
                        Catégorie {selectedProduct.category}
                      </span>
                      <h2 className="text-3xl font-serif font-bold text-gray-900 mb-1">{selectedProduct.name}</h2>
                      <p className="text-xl text-wine-700 font-medium">{selectedProduct.producer}</p>
                    </div>
                    <div className="text-right">
                       <p className="text-2xl font-bold text-gray-900">CHF {selectedProduct.price.toFixed(2)}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 italic mb-8 border-l-4 border-wine-200 pl-4 py-1">
                    "{selectedProduct.description}"
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-8">
                    
                    <div>
                      <h4 className="flex items-center text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">
                        <Grape className="h-4 w-4 mr-2" /> Cépage
                      </h4>
                      <p className="text-gray-900 font-medium">{selectedProduct.details.cepage}</p>
                    </div>

                    <div>
                      <h4 className="flex items-center text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">
                        <MapPin className="h-4 w-4 mr-2" /> Appellation
                      </h4>
                      <p className="text-gray-900 font-medium">{selectedProduct.details.appellation}</p>
                    </div>

                    <div className="md:col-span-2">
                       <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Nez</h4>
                       <p className="text-gray-900">{selectedProduct.details.nose}</p>
                    </div>

                    <div className="md:col-span-2">
                       <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Bouche</h4>
                       <p className="text-gray-900">{selectedProduct.details.mouth}</p>
                    </div>

                    <div>
                      <h4 className="flex items-center text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">
                        <Activity className="h-4 w-4 mr-2" /> Analyse
                      </h4>
                      <p className="text-gray-900">{selectedProduct.details.analysis}</p>
                    </div>

                    <div>
                      <h4 className="flex items-center text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">
                        <Calendar className="h-4 w-4 mr-2" /> Garde
                      </h4>
                      <p className="text-gray-900">{selectedProduct.details.aging}</p>
                    </div>

                     <div className="md:col-span-2">
                       <h4 className="flex items-center text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">
                         <Utensils className="h-4 w-4 mr-2" /> Idéal avec
                       </h4>
                       <p className="text-gray-900">{selectedProduct.details.pairing}</p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-100 flex justify-end">
                    <button
                      onClick={() => {
                        addToCart(selectedProduct);
                        setSelectedProduct(null);
                      }}
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-wine-900 hover:bg-wine-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-wine-500"
                    >
                      <Plus className="h-5 w-5 mr-2" />
                      Ajouter au panier
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};