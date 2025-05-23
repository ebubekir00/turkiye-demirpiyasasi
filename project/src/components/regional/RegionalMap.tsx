interface RegionalMapProps {
  selectedRegion: string | null;
  onRegionSelect: (region: string) => void;
}

const RegionalMap: React.FC<RegionalMapProps> = ({ selectedRegion, onRegionSelect }) => {
  return (
    <div className="w-full h-full relative">
      <div className="relative z-10 h-full flex items-center justify-center p-8">
        <div className="text-center max-w-4xl mx-auto bg-white rounded-lg p-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              "Marmara", "Ege", "İç Anadolu", "Akdeniz", 
              "Karadeniz", "Doğu Anadolu", "Güneydoğu Anadolu"
            ].map((region) => (
              <button
                key={region}
                onClick={() => onRegionSelect(region)}
                className={`p-4 rounded-lg transition-all duration-300 ${
                  selectedRegion === region
                    ? 'bg-steel-600 text-white shadow-lg transform scale-105'
                    : 'bg-white hover:bg-steel-50 border border-gray-200 hover:border-steel-200'
                }`}
              >
                <span className="font-medium">{region}</span>
                <div className={`h-1 mt-2 rounded-full transition-all duration-300 ${
                  selectedRegion === region ? 'bg-rust-500' : 'bg-transparent'
                }`}></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegionalMap;