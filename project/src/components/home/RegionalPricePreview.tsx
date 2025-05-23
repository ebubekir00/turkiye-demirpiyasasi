import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';

const RegionalPricePreview = () => {
  const regions = [
    { name: "İstanbul", price: 16200, change: 1.2 },
    { name: "Ankara", price: 16050, change: 0.8 },
    { name: "İzmir", price: 16100, change: 1.0 },
    { name: "Bursa", price: 16000, change: 0.5 },
    { name: "Antalya", price: 16300, change: 1.5 },
  ];

  return (
    <div className="card">
      <div className="space-y-4">
        {regions.map((region, index) => (
          <div 
            key={index} 
            className="flex items-center justify-between p-3 border-b last:border-b-0 hover:bg-gray-50 rounded transition-colors"
          >
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-steel-600 mr-2" />
              <span className="font-medium">{region.name}</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="font-semibold">{region.price} ₺/Ton</span>
              <span className={`text-xs ${region.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {region.change >= 0 ? '▲' : '▼'} %{Math.abs(region.change)}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <Link 
          to="/bolgesel-fiyat-arsivi" 
          className="text-rust-600 inline-flex items-center font-medium hover:text-rust-700"
        >
          Tüm Bölgesel Fiyatları Gör
          <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default RegionalPricePreview;