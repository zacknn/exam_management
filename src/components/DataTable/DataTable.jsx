import React, { useState, useMemo, useEffect } from 'react';
import SearchBar from './SearchBar';
import Filters from './Filters';
import Pagination from './Pagination';
import { Search, Filter, ChevronUp, ChevronDown } from 'lucide-react';

const DataTable = ({
  data,
  columns,
  title = "Tableau",
  description = "Liste des éléments",
  searchable = true,
  filterable = true,
  pagination = true,
  itemsPerPageOptions = [5, 10, 25, 50],
  onRowClick,
  actions,
  onAdd,
  addButtonText = "Ajouter",
  showAddButton = true,
  isLoading = false
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageOptions[0]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [selectedRows, setSelectedRows] = useState([]);

  // Réinitialiser à la page 1 quand les filtres changent
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filters]);

  // Fonction de recherche et filtrage
  const filteredData = useMemo(() => {
    if (!data) return [];
    
    let result = [...data];

    // Recherche textuelle sur toutes les colonnes
    if (searchTerm) {
      const lowerSearchTerm = searchTerm.toLowerCase();
      result = result.filter(item =>
        columns.some(column => {
          const value = item[column.key];
          if (value && typeof value === 'string') {
            return value.toLowerCase().includes(lowerSearchTerm);
          }
          if (value && typeof value === 'number') {
            return value.toString().includes(searchTerm);
          }
          return false;
        })
      );
    }

    // Filtres par colonnes
    Object.entries(filters).forEach(([key, value]) => {
      if (value && value !== 'all') {
        result = result.filter(item => {
          const itemValue = item[key];
          if (Array.isArray(value)) {
            return value.includes(itemValue);
          }
          return itemValue === value;
        });
      }
    });

    // Tri
    if (sortConfig.key) {
      result.sort((a, b) => {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];

        if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }

    return result;
  }, [data, searchTerm, filters, sortConfig, columns]);

  // Pagination
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredData, currentPage, itemsPerPage]);

  // Gestion du tri
  const handleSort = (key) => {
    setSortConfig(current => ({
      key,
      direction: current.key === key && current.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  // Sélection de ligne
  const handleSelectRow = (id) => {
    setSelectedRows(prev =>
      prev.includes(id)
        ? prev.filter(rowId => rowId !== id)
        : [...prev, id]
    );
  };

  // Sélectionner tout
  const handleSelectAll = () => {
    if (selectedRows.length === paginatedData.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(paginatedData.map(item => item.id));
    }
  };

  // Options de filtres pour chaque colonne
  const filterOptions = useMemo(() => {
    const options = {};
    columns.forEach(column => {
      if (column.filterable && data) {
        const uniqueValues = [...new Set(data.map(item => item[column.key]))];
        options[column.key] = uniqueValues.filter(v => v != null);
      }
    });
    return options;
  }, [columns, data]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      {/* En-tête avec titre et bouton d'ajout */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
        
        {showAddButton && onAdd && (
          <button
            onClick={onAdd}
            className="flex items-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition duration-300"
          >
            <span>+</span>
            {addButtonText}
          </button>
        )}
      </div>

      {/* Barre d'outils : recherche et filtres */}
      <div className="mb-6 space-y-4">
        {searchable && (
          <SearchBar
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Rechercher..."
          />
        )}

        {filterable && (
          <Filters
            columns={columns}
            filterOptions={filterOptions}
            filters={filters}
            onChange={setFilters}
          />
        )}

        {/* Indicateurs de filtres actifs */}
        {(searchTerm || Object.keys(filters).length > 0) && (
          <div className="flex items-center gap-2 text-sm">
            <Filter className="w-4 h-4 text-gray-500" />
            <span className="text-gray-700">
              {filteredData.length} résultat(s) trouvé(s)
              {searchTerm && ` pour "${searchTerm}"`}
            </span>
            <button
              onClick={() => {
                setSearchTerm('');
                setFilters({});
              }}
              className="ml-4 text-blue-600 hover:text-blue-800"
            >
              Effacer les filtres
            </button>
          </div>
        )}
      </div>

      {/* Tableau */}
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {actions && (
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-12">
                  <input
                    type="checkbox"
                    checked={selectedRows.length === paginatedData.length && paginatedData.length > 0}
                    onChange={handleSelectAll}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </th>
              )}
              
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                  onClick={() => column.sortable && handleSort(column.key)}
                >
                  <div className="flex items-center justify-between">
                    <span>{column.label}</span>
                    {column.sortable && (
                      <span className="text-gray-400">
                        {sortConfig.key === column.key ? (
                          sortConfig.direction === 'asc' ? 
                            <ChevronUp className="w-4 h-4" /> : 
                            <ChevronDown className="w-4 h-4" />
                        ) : (
                          <div className="opacity-30">
                            <ChevronUp className="w-3 h-3" />
                            <ChevronDown className="w-3 h-3" />
                          </div>
                        )}
                      </span>
                    )}
                  </div>
                </th>
              ))}
              
              {actions && (
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              )}
            </tr>
          </thead>
          
          <tbody className="bg-white divide-y divide-gray-200">
            {paginatedData.length > 0 ? (
              paginatedData.map((item, index) => (
                <tr
                  key={item.id || index}
                  className={`hover:bg-gray-50 ${onRowClick ? 'cursor-pointer' : ''} ${
                    selectedRows.includes(item.id) ? 'bg-blue-50' : ''
                  }`}
                  onClick={() => onRowClick && onRowClick(item)}
                >
                  {actions && (
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        type="checkbox"
                        checked={selectedRows.includes(item.id)}
                        onChange={(e) => {
                          e.stopPropagation();
                          handleSelectRow(item.id);
                        }}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                    </td>
                  )}
                  
                  {columns.map((column) => (
                    <td key={column.key} className="px-6 py-4 whitespace-nowrap">
                      {column.render ? column.render(item) : item[column.key]}
                    </td>
                  ))}
                  
                  {actions && (
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex gap-2">
                        {actions(item)}
                      </div>
                    </td>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td 
                  colSpan={columns.length + (actions ? 2 : 1)} 
                  className="px-6 py-12 text-center text-gray-500"
                >
                  <div className="flex flex-col items-center gap-2">
                    <Search className="w-12 h-12 text-gray-300" />
                    <p>Aucune donnée trouvée</p>
                    {(searchTerm || Object.keys(filters).length > 0) && (
                      <button
                        onClick={() => {
                          setSearchTerm('');
                          setFilters({});
                        }}
                        className="text-blue-600 hover:text-blue-800 text-sm"
                      >
                        Réinitialiser les filtres
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {pagination && filteredData.length > 0 && (
        <Pagination
          totalItems={filteredData.length}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
          onItemsPerPageChange={setItemsPerPage}
          itemsPerPageOptions={itemsPerPageOptions}
        />
      )}
    </div>
  );
};

export default DataTable;