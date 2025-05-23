import { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowUpDown } from 'lucide-react';

interface PriceData {
  date: string;
  price: number;
  change: number;
  volume: number;
}

interface PriceTableProps {
  data: PriceData[];
  loading?: boolean;
}

const PriceTable: React.FC<PriceTableProps> = ({ data, loading }) => {
  const [sortField, setSortField] = useState<keyof PriceData>('date');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  
  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-12 h-12 border-4 border-steel-200 border-t-steel-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 text-gray-500">
        Veri bulunamadı
      </div>
    );
  }
  
  // Handle sorting
  const handleSort = (field: keyof PriceData) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };
  
  // Sort data
  const sortedData = [...data].sort((a, b) => {
    if (sortField === 'date') {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortDirection === 'asc' ? dateA - dateB : dateB - dateA;
    }
    
    return sortDirection === 'asc' 
      ? a[sortField] - b[sortField] 
      : b[sortField] - a[sortField];
  });
  
  // Render sort icon
  const renderSortIcon = (field: keyof PriceData) => {
    if (field !== sortField) {
      return <ArrowUpDown className="w-4 h-4 ml-1" />;
    }
    return sortDirection === 'asc' 
      ? <ChevronUp className="w-4 h-4 ml-1" />
      : <ChevronDown className="w-4 h-4 ml-1" />;
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            <th 
              className="px-4 py-3 text-left cursor-pointer"
              onClick={() => handleSort('date')}
            >
              <div className="flex items-center text-sm font-medium text-gray-700">
                Tarih
                {renderSortIcon('date')}
              </div>
            </th>
            <th 
              className="px-4 py-3 text-right cursor-pointer"
              onClick={() => handleSort('price')}
            >
              <div className="flex items-center justify-end text-sm font-medium text-gray-700">
                Fiyat (₺/Ton)
                {renderSortIcon('price')}
              </div>
            </th>
            <th 
              className="px-4 py-3 text-right cursor-pointer"
              onClick={() => handleSort('change')}
            >
              <div className="flex items-center justify-end text-sm font-medium text-gray-700">
                Değişim (%)
                {renderSortIcon('change')}
              </div>
            </th>
            <th 
              className="px-4 py-3 text-right cursor-pointer"
              onClick={() => handleSort('volume')}
            >
              <div className="flex items-center justify-end text-sm font-medium text-gray-700">
                İşlem Hacmi (Ton)
                {renderSortIcon('volume')}
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {sortedData.map((item, index) => (
            <tr 
              key={index} 
              className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${
                index === 0 ? 'bg-steel-50' : ''
              }`}
            >
              <td className="px-4 py-3 text-sm text-gray-700">
                {new Date(item.date).toLocaleDateString('tr-TR')}
              </td>
              <td className="px-4 py-3 text-sm text-right font-medium text-gray-900">
                {item.price.toLocaleString('tr-TR')}
              </td>
              <td className={`px-4 py-3 text-sm text-right font-medium ${
                item.change > 0 
                  ? 'text-green-600' 
                  : item.change < 0 
                    ? 'text-red-600' 
                    : 'text-gray-600'
              }`}>
                {item.change > 0 ? '+' : ''}{item.change.toFixed(1)}%
              </td>
              <td className="px-4 py-3 text-sm text-right text-gray-700">
                {item.volume.toLocaleString('tr-TR')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PriceTable;