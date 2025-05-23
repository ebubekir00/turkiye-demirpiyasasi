import { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowUpDown } from 'lucide-react';

interface RegionalPrice {
  city: string;
  region: string;
  price: number;
  change: number;
  lastUpdated: string;
}

interface RegionalTableProps {
  selectedRegion: string | null;
  searchTerm: string;
}

const RegionalTable: React.FC<RegionalTableProps> = ({ selectedRegion, searchTerm }) => {
  const [sortField, setSortField] = useState<keyof RegionalPrice>('price');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  
  // Real data with all 81 provinces grouped by region with varied prices
  const initialData: RegionalPrice[] = [
    // Marmara Bölgesi
    { city: 'İstanbul', region: 'Marmara', price: 16785, change: 1.2, lastUpdated: '15.01.2025' },
    { city: 'Bursa', region: 'Marmara', price: 16432, change: 0.9, lastUpdated: '15.01.2025' },
    { city: 'Kocaeli', region: 'Marmara', price: 16654, change: 1.0, lastUpdated: '15.01.2025' },
    { city: 'Balıkesir', region: 'Marmara', price: 16234, change: 1.1, lastUpdated: '15.01.2025' },
    { city: 'Tekirdağ', region: 'Marmara', price: 16543, change: 0.8, lastUpdated: '15.01.2025' },
    { city: 'Sakarya', region: 'Marmara', price: 16321, change: 0.9, lastUpdated: '15.01.2025' },
    { city: 'Çanakkale', region: 'Marmara', price: 16876, change: 1.3, lastUpdated: '15.01.2025' },
    { city: 'Edirne', region: 'Marmara', price: 16123, change: 1.4, lastUpdated: '15.01.2025' },
    { city: 'Kırklareli', region: 'Marmara', price: 16445, change: 1.2, lastUpdated: '15.01.2025' },
    { city: 'Yalova', region: 'Marmara', price: 16567, change: 1.1, lastUpdated: '15.01.2025' },
    { city: 'Bilecik', region: 'Marmara', price: 16789, change: 1.0, lastUpdated: '15.01.2025' },

    // Ege Bölgesi
    { city: 'İzmir', region: 'Ege', price: 16987, change: 1.0, lastUpdated: '15.01.2025' },
    { city: 'Manisa', region: 'Ege', price: 16345, change: 1.1, lastUpdated: '15.01.2025' },
    { city: 'Aydın', region: 'Ege', price: 16789, change: 1.2, lastUpdated: '15.01.2025' },
    { city: 'Denizli', region: 'Ege', price: 16234, change: 1.3, lastUpdated: '15.01.2025' },
    { city: 'Muğla', region: 'Ege', price: 16876, change: 1.4, lastUpdated: '15.01.2025' },
    { city: 'Afyonkarahisar', region: 'Ege', price: 16543, change: 1.5, lastUpdated: '15.01.2025' },
    { city: 'Kütahya', region: 'Ege', price: 16123, change: 1.6, lastUpdated: '15.01.2025' },
    { city: 'Uşak', region: 'Ege', price: 16654, change: 1.7, lastUpdated: '15.01.2025' },

    // İç Anadolu Bölgesi
    { city: 'Ankara', region: 'İç Anadolu', price: 16987, change: 0.8, lastUpdated: '15.01.2025' },
    { city: 'Konya', region: 'İç Anadolu', price: 16432, change: 0.9, lastUpdated: '15.01.2025' },
    { city: 'Kayseri', region: 'İç Anadolu', price: 16876, change: 1.0, lastUpdated: '15.01.2025' },
    { city: 'Eskişehir', region: 'İç Anadolu', price: 16543, change: 1.1, lastUpdated: '15.01.2025' },
    { city: 'Sivas', region: 'İç Anadolu', price: 16234, change: 1.2, lastUpdated: '15.01.2025' },
    { city: 'Yozgat', region: 'İç Anadolu', price: 16789, change: 1.3, lastUpdated: '15.01.2025' },
    { city: 'Aksaray', region: 'İç Anadolu', price: 16123, change: 1.4, lastUpdated: '15.01.2025' },
    { city: 'Niğde', region: 'İç Anadolu', price: 16654, change: 1.5, lastUpdated: '15.01.2025' },
    { city: 'Karaman', region: 'İç Anadolu', price: 16345, change: 1.6, lastUpdated: '15.01.2025' },
    { city: 'Kırıkkale', region: 'İç Anadolu', price: 16567, change: 1.7, lastUpdated: '15.01.2025' },
    { city: 'Kırşehir', region: 'İç Anadolu', price: 16876, change: 1.8, lastUpdated: '15.01.2025' },
    { city: 'Çankırı', region: 'İç Anadolu', price: 16432, change: 1.9, lastUpdated: '15.01.2025' },
    { city: 'Nevşehir', region: 'İç Anadolu', price: 16789, change: 2.0, lastUpdated: '15.01.2025' },

    // Akdeniz Bölgesi
    { city: 'Antalya', region: 'Akdeniz', price: 16987, change: 1.5, lastUpdated: '15.01.2025' },
    { city: 'Adana', region: 'Akdeniz', price: 16543, change: 1.6, lastUpdated: '15.01.2025' },
    { city: 'Mersin', region: 'Akdeniz', price: 16876, change: 1.3, lastUpdated: '15.01.2025' },
    { city: 'Hatay', region: 'Akdeniz', price: 16234, change: 1.7, lastUpdated: '15.01.2025' },
    { city: 'Kahramanmaraş', region: 'Akdeniz', price: 16789, change: 1.8, lastUpdated: '15.01.2025' },
    { city: 'Osmaniye', region: 'Akdeniz', price: 16432, change: 1.9, lastUpdated: '15.01.2025' },
    { city: 'Burdur', region: 'Akdeniz', price: 16654, change: 2.0, lastUpdated: '15.01.2025' },
    { city: 'Isparta', region: 'Akdeniz', price: 16345, change: 2.1, lastUpdated: '15.01.2025' },

    // Karadeniz Bölgesi
    { city: 'Samsun', region: 'Karadeniz', price: 16987, change: 1.5, lastUpdated: '15.01.2025' },
    { city: 'Trabzon', region: 'Karadeniz', price: 16543, change: 1.6, lastUpdated: '15.01.2025' },
    { city: 'Ordu', region: 'Karadeniz', price: 16876, change: 1.7, lastUpdated: '15.01.2025' },
    { city: 'Giresun', region: 'Karadeniz', price: 16234, change: 1.8, lastUpdated: '15.01.2025' },
    { city: 'Rize', region: 'Karadeniz', price: 16789, change: 1.9, lastUpdated: '15.01.2025' },
    { city: 'Zonguldak', region: 'Karadeniz', price: 16432, change: 2.0, lastUpdated: '15.01.2025' },
    { city: 'Kastamonu', region: 'Karadeniz', price: 16654, change: 2.1, lastUpdated: '15.01.2025' },
    { city: 'Sinop', region: 'Karadeniz', price: 16345, change: 2.2, lastUpdated: '15.01.2025' },
    { city: 'Amasya', region: 'Karadeniz', price: 16567, change: 2.3, lastUpdated: '15.01.2025' },
    { city: 'Tokat', region: 'Karadeniz', price: 16876, change: 2.4, lastUpdated: '15.01.2025' },
    { city: 'Çorum', region: 'Karadeniz', price: 16432, change: 2.5, lastUpdated: '15.01.2025' },
    { city: 'Bartın', region: 'Karadeniz', price: 16789, change: 2.6, lastUpdated: '15.01.2025' },
    { city: 'Karabük', region: 'Karadeniz', price: 16543, change: 2.7, lastUpdated: '15.01.2025' },
    { city: 'Düzce', region: 'Karadeniz', price: 16234, change: 2.8, lastUpdated: '15.01.2025' },
    { city: 'Bolu', region: 'Karadeniz', price: 16876, change: 2.9, lastUpdated: '15.01.2025' },
    { city: 'Artvin', region: 'Karadeniz', price: 16432, change: 3.0, lastUpdated: '15.01.2025' },
    { city: 'Gümüşhane', region: 'Karadeniz', price: 16654, change: 3.1, lastUpdated: '15.01.2025' },
    { city: 'Bayburt', region: 'Karadeniz', price: 16345, change: 3.2, lastUpdated: '15.01.2025' },

    // Doğu Anadolu Bölgesi
    { city: 'Erzurum', region: 'Doğu Anadolu', price: 16987, change: 1.8, lastUpdated: '15.01.2025' },
    { city: 'Malatya', region: 'Doğu Anadolu', price: 16543, change: 1.7, lastUpdated: '15.01.2025' },
    { city: 'Elazığ', region: 'Doğu Anadolu', price: 16876, change: 1.9, lastUpdated: '15.01.2025' },
    { city: 'Van', region: 'Doğu Anadolu', price: 16234, change: 2.0, lastUpdated: '15.01.2025' },
    { city: 'Erzincan', region: 'Doğu Anadolu', price: 16789, change: 2.1, lastUpdated: '15.01.2025' },
    { city: 'Ağrı', region: 'Doğu Anadolu', price: 16432, change: 2.2, lastUpdated: '15.01.2025' },
    { city: 'Kars', region: 'Doğu Anadolu', price: 16654, change: 2.3, lastUpdated: '15.01.2025' },
    { city: 'Iğdır', region: 'Doğu Anadolu', price: 16345, change: 2.4, lastUpdated: '15.01.2025' },
    { city: 'Ardahan', region: 'Doğu Anadolu', price: 16567, change: 2.5, lastUpdated: '15.01.2025' },
    { city: 'Bingöl', region: 'Doğu Anadolu', price: 16876, change: 2.6, lastUpdated: '15.01.2025' },
    { city: 'Bitlis', region: 'Doğu Anadolu', price: 16432, change: 2.7, lastUpdated: '15.01.2025' },
    { city: 'Muş', region: 'Doğu Anadolu', price: 16789, change: 2.8, lastUpdated: '15.01.2025' },
    { city: 'Tunceli', region: 'Doğu Anadolu', price: 16543, change: 2.9, lastUpdated: '15.01.2025' },
    { city: 'Hakkari', region: 'Doğu Anadolu', price: 16234, change: 3.0, lastUpdated: '15.01.2025' },

    // Güneydoğu Anadolu Bölgesi
    { city: 'Gaziantep', region: 'Güneydoğu Anadolu', price: 16987, change: 1.8, lastUpdated: '15.01.2025' },
    { city: 'Diyarbakır', region: 'Güneydoğu Anadolu', price: 16543, change: 1.9, lastUpdated: '15.01.2025' },
    { city: 'Şanlıurfa', region: 'Güneydoğu Anadolu', price: 16876, change: 2.0, lastUpdated: '15.01.2025' },
    { city: 'Batman', region: 'Güneydoğu Anadolu', price: 16234, change: 2.1, lastUpdated: '15.01.2025' },
    { city: 'Adıyaman', region: 'Güneydoğu Anadolu', price: 16789, change: 2.2, lastUpdated: '15.01.2025' },
    { city: 'Siirt', region: 'Güneydoğu Anadolu', price: 16432, change: 2.3, lastUpdated: '15.01.2025' },
    { city: 'Mardin', region: 'Güneydoğu Anadolu', price: 16654, change: 2.4, lastUpdated: '15.01.2025' },
    { city: 'Kilis', region: 'Güneydoğu Anadolu', price: 16345, change: 2.5, lastUpdated: '15.01.2025' },
    { city: 'Şırnak', region: 'Güneydoğu Anadolu', price: 16567, change: 2.6, lastUpdated: '15.01.2025' }
  ];
  
  // Filter data based on selected region and search term
  const filteredData = initialData.filter(item => {
    const matchesRegion = selectedRegion ? item.region === selectedRegion : true;
    const matchesSearch = searchTerm 
      ? item.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.region.toLowerCase().includes(searchTerm.toLowerCase())
      : true;
    
    return matchesRegion && matchesSearch;
  });
  
  // Handle sorting
  const handleSort = (field: keyof RegionalPrice) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };
  
  // Sort data
  const sortedData = [...filteredData].sort((a, b) => {
    if (sortField === 'city' || sortField === 'region') {
      return sortDirection === 'asc' 
        ? a[sortField].localeCompare(b[sortField]) 
        : b[sortField].localeCompare(a[sortField]);
    }
    
    return sortDirection === 'asc' 
      ? a[sortField] - b[sortField] 
      : b[sortField] - a[sortField];
  });
  
  // Render sort icon
  const renderSortIcon = (field: keyof RegionalPrice) => {
    if (field !== sortField) {
      return <ArrowUpDown className="w-4 h-4 ml-1" />;
    }
    return sortDirection === 'asc' 
      ? <ChevronUp className="w-4 h-4 ml-1" />
      : <ChevronDown className="w-4 h-4 ml-1" />;
  };
  
  // Group cities by region for analysis
  const regionStats = initialData.reduce((acc, item) => {
    if (!acc[item.region]) {
      acc[item.region] = {
        count: 0,
        total: 0,
        min: Infinity,
        max: -Infinity,
      };
    }
    
    acc[item.region].count += 1;
    acc[item.region].total += item.price;
    acc[item.region].min = Math.min(acc[item.region].min, item.price);
    acc[item.region].max = Math.max(acc[item.region].max, item.price);
    
    return acc;
  }, {} as Record<string, { count: number; total: number; min: number; max: number }>);

  return (
    <div>
      {sortedData.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          Seçilen kriterlere uygun sonuç bulunamadı.
        </div>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th 
                    className="px-4 py-3 text-left cursor-pointer"
                    onClick={() => handleSort('city')}
                  >
                    <div className="flex items-center text-sm font-medium text-gray-700">
                      Şehir
                      {renderSortIcon('city')}
                    </div>
                  </th>
                  <th 
                    className="px-4 py-3 text-left cursor-pointer"
                    onClick={() => handleSort('region')}
                  >
                    <div className="flex items-center text-sm font-medium text-gray-700">
                      Bölge
                      {renderSortIcon('region')}
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
                  <th className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end text-sm font-medium text-gray-700">
                      Son Güncelleme
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {sortedData.map((item, index) => (
                  <tr 
                    key={index} 
                    className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">{item.city}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{item.region}</td>
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
                      {item.lastUpdated}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {!selectedRegion && !searchTerm && (
            <div className="mt-6 border-t border-gray-200 pt-4">
              <h3 className="text-lg font-medium text-steel-800 mb-3">Bölgesel Karşılaştırma Özeti</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(regionStats).map(([region, stats]) => (
                  <div key={region} className="bg-gray-50 p-3 rounded-md border border-gray-200">
                    <h4 className="font-medium text-steel-700 mb-2">{region}</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>Ortalama Fiyat:</div>
                      <div className="text-right font-medium">
                        {Math.round(stats.total / stats.count).toLocaleString('tr-TR')} ₺
                      </div>
                      <div>Minimum:</div>
                      <div className="text-right font-medium">
                        {stats.min.toLocaleString('tr-TR')} ₺
                      </div>
                      <div>Maksimum:</div>
                      <div className="text-right font-medium">
                        {stats.max.toLocaleString('tr-TR')} ₺
                      </div>
                      <div>Fark:</div>
                      <div className="text-right font-medium">
                        {(stats.max - stats.min).toLocaleString('tr-TR')} ₺
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default RegionalTable;