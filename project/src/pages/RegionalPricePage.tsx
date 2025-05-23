import { useState } from 'react';
import { Search } from 'lucide-react';
import RegionalMap from '../components/regional/RegionalMap';
import RegionalTable from '../components/regional/RegionalTable';

const RegionalPricePage = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  const regions = [
    "Marmara", "Ege", "İç Anadolu", "Akdeniz", 
    "Karadeniz", "Doğu Anadolu", "Güneydoğu Anadolu"
  ];
  
  const handleRegionSelect = (region: string) => {
    setSelectedRegion(region === selectedRegion ? null : region);
  };

  return (
    <div className="container-custom py-8 animate-fadeIn">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-steel-800 mb-2">Bölgesel Fiyat Arşivi</h1>
        <p className="text-gray-600">
          Türkiye'nin tüm bölgelerindeki güncel demir fiyatları ve karşılaştırmalar
        </p>
      </div>
      
      {/* Search Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div className="relative w-full md:w-auto md:min-w-[300px]">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Bölge ara..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      {/* Region Selection Tabs */}
      <div className="mb-6 flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedRegion(null)}
          className={`px-4 py-2 rounded-md ${
            selectedRegion === null
              ? 'bg-steel-600 text-white'
              : 'bg-white border border-gray-300 text-steel-700 hover:bg-gray-50'
          }`}
        >
          Tüm Türkiye
        </button>
        
        {regions.map((region) => (
          <button
            key={region}
            onClick={() => handleRegionSelect(region)}
            className={`px-4 py-2 rounded-md ${
              selectedRegion === region
                ? 'bg-steel-600 text-white'
                : 'bg-white border border-gray-300 text-steel-700 hover:bg-gray-50'
            }`}
          >
            {region}
          </button>
        ))}
      </div>
      
      {/* Interactive Map */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-8">
        <h2 className="text-xl font-semibold text-steel-800 mb-4">Türkiye Demir Fiyat Haritası</h2>
        <div className="h-96 border border-gray-200 rounded-lg">
          <RegionalMap selectedRegion={selectedRegion} onRegionSelect={handleRegionSelect} />
        </div>
      </div>
      
      {/* Price Table */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-8">
        <h2 className="text-xl font-semibold text-steel-800 mb-4">
          {selectedRegion ? `${selectedRegion} Bölgesi Fiyatları` : 'Tüm Bölgeler Fiyat Karşılaştırması'}
        </h2>
        <RegionalTable selectedRegion={selectedRegion} searchTerm={searchTerm} />
      </div>
      
      {/* Information Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-steel-800 mb-4">Bölgesel Fiyat Farkları Hakkında</h2>
        <div className="text-gray-600 space-y-4">
          <p>
            Demir fiyatları bölgesel olarak farklılık gösterebilmektedir. Bu farklılıklar, üretim tesislerine olan 
            mesafe, lojistik maliyetler, bölgesel talep yoğunluğu, rekabet koşulları ve stok durumu gibi faktörlerden 
            kaynaklanmaktadır.
          </p>
          <p>
            Marmara ve Ege bölgelerinde büyük üretim tesislerinin yoğunluğu nedeniyle genellikle daha düşük fiyatlar 
            görülürken, Doğu ve Güneydoğu Anadolu bölgelerinde lojistik maliyetler nedeniyle fiyatlar daha yüksek 
            olabilmektedir.
          </p>
          <p>
            Tabloda gösterilen fiyatlar, her bölgedeki ana tedarikçilerin fiyatlarının ortalamasını yansıtmaktadır 
            ve KDV hariç, fabrika teslim fiyatlarıdır. Kesin fiyat bilgisi için ilgili tedarikçi ile iletişime 
            geçmenizi öneririz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegionalPricePage;