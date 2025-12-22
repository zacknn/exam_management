import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({
  totalItems,
  currentPage,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
  itemsPerPageOptions = [5, 10, 25, 50]
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const getPageNumbers = () => {
    const pages = [];
    
    // Toujours afficher la première page
    pages.push(1);
    
    // Pages autour de la page courante
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      if (i > 1 && i < totalPages) {
        pages.push(i);
      }
    }
    
    // Toujours afficher la dernière page
    if (totalPages > 1) {
      pages.push(totalPages);
    }
    
    // Supprimer les doublons
    return [...new Set(pages)].sort((a, b) => a - b);
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 pt-6 border-t border-gray-200">
      {/* Informations */}
      <div className="text-sm text-gray-700">
        Affichage de <span className="font-semibold">{startItem}</span> à{' '}
        <span className="font-semibold">{endItem}</span> sur{' '}
        <span className="font-semibold">{totalItems}</span> éléments
      </div>

      {/* Contrôles de pagination */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="p-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition duration-300"
          aria-label="Page précédente"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-1">
          {pageNumbers.map((page, index) => {
            const showEllipsis = index > 0 && page - pageNumbers[index - 1] > 1;
            
            return (
              <React.Fragment key={page}>
                {showEllipsis && (
                  <span className="px-2 text-gray-500">...</span>
                )}
                <button
                  onClick={() => onPageChange(page)}
                  className={`min-w-[40px] h-10 flex items-center justify-center rounded-lg border transition duration-300 ${
                    page === currentPage
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              </React.Fragment>
            );
          })}
        </div>

        <button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="p-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition duration-300"
          aria-label="Page suivante"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Éléments par page */}
      <div className="flex items-center gap-2 text-sm">
        <label htmlFor="itemsPerPage" className="text-gray-700">
          Éléments par page :
        </label>
        <select
          id="itemsPerPage"
          value={itemsPerPage}
          onChange={(e) => {
            onItemsPerPageChange(Number(e.target.value));
            onPageChange(1);
          }}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        >
          {itemsPerPageOptions.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Pagination;