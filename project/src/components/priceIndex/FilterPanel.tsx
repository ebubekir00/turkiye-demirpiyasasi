import { X } from 'lucide-react';

interface FilterPanelProps {
  onClose: () => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ onClose }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6 animate-slideUp">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-steel-800">Filtreleme Seçenekleri</h3>
        <button 
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Demir Türü
          </label>
          <select className="w-full p-2 border border-gray-300 rounded-md">
            <option>Tümü</option>
            <option>İnşaat Demiri (8mm-32mm)</option>
            <option>Nervürlü Çelik</option>
            <option>Hasır Çelik</option>
            <option>Profil</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Bölge
          </label>
          <select className="w-full p-2 border border-gray-300 rounded-md">
            <option>Tüm Türkiye</option>
            <option>Marmara</option>
            <option>Ege</option>
            <option>İç Anadolu</option>
            <option>Akdeniz</option>
            <option>Karadeniz</option>
            <option>Doğu Anadolu</option>
            <option>Güneydoğu Anadolu</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Üretici
          </label>
          <select className="w-full p-2 border border-gray-300 rounded-md">
            <option>Tümü</option>
            <option>İsdemir</option>
            <option>Kardemir</option>
            <option>Çolakoğlu</option>
            <option>Erdemir</option>
            <option>Diler Demir Çelik</option>
          </select>
        </div>
      </div>
      
      <div className="mt-4 flex justify-end">
        <button className="btn bg-gray-200 text-gray-700 hover:bg-gray-300 mr-2">
          Sıfırla
        </button>
        <button className="btn btn-primary">
          Filtreleri Uygula
        </button>
      </div>
    </div>
  );
};

export default FilterPanel;