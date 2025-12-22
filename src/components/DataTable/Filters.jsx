import React from 'react';
import { Filter, X } from 'lucide-react';

const Filters = ({ columns, filterOptions, filters, onChange }) => {
  const filterableColumns = columns.filter(col => col.filterable);

  if (filterableColumns.length === 0) return null;

  const handleFilterChange = (key, value) => {
    onChange({
      ...filters,
      [key]: value === 'all' ? null : value
    });
  };

  const clearFilter = (key) => {
    const newFilters = { ...filters };
    delete newFilters[key];
    onChange(newFilters);
  };

  const clearAllFilters = () => {
    onChange({});
  };

  const activeFiltersCount = Object.keys(filters).filter(key => filters[key] !== null).length;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-gray-600" />
          <span className="font-medium text-gray-700">Filtres</span>
          {activeFiltersCount > 0 && (
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
              {activeFiltersCount} actif(s)
            </span>
          )}
        </div>
        {activeFiltersCount > 0 && (
          <button
            onClick={clearAllFilters}
            className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1"
          >
            <X className="w-4 h-4" />
            Tout effacer
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-3">
        {filterableColumns.map((column) => {
          const options = filterOptions[column.key] || [];
          const currentValue = filters[column.key] || 'all';

          return (
            <div key={column.key} className="flex flex-col min-w-[180px]">
              <label className="text-sm font-medium text-gray-700 mb-1">
                {column.label}
              </label>
              <div className="flex gap-2">
                <select
                  value={currentValue}
                  onChange={(e) => handleFilterChange(column.key, e.target.value)}
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
                >
                  <option value="all">Tous</option>
                  {options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {currentValue !== 'all' && (
                  <button
                    onClick={() => clearFilter(column.key)}
                    className="p-2 text-gray-500 hover:text-red-600 transition duration-300"
                    title="Effacer ce filtre"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filters;