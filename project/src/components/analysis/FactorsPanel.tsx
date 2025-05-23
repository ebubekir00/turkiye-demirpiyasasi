import { TrendingUp, TrendingDown, MinusCircle } from 'lucide-react';

const FactorsPanel = () => {
  const factors = [
    {
      name: "Küresel Demir Cevheri Fiyatları",
      impact: "up",
      description: "Son iki haftada %3.5 artış gösterdi."
    },
    {
      name: "İnşaat Sektöründeki Talep",
      impact: "up",
      description: "Yeni başlayan projeler nedeniyle talep arttı."
    },
    {
      name: "Enerji Maliyetleri",
      impact: "up",
      description: "Elektrik fiyatlarındaki artış üretim maliyetlerini yükseltti."
    },
    {
      name: "Döviz Kurları",
      impact: "neutral",
      description: "Son dönemde stabil seyretti."
    },
    {
      name: "Stok Seviyeleri",
      impact: "down",
      description: "Üreticilerdeki stoklar yeterli seviyede."
    },
    {
      name: "İhracat Talebi",
      impact: "up",
      description: "Komşu ülkelerden gelen talepler arttı."
    }
  ];
  
  return (
    <div className="space-y-4">
      {factors.map((factor, index) => (
        <div key={index} className="flex items-start border-b border-gray-100 pb-3 last:border-b-0 last:pb-0">
          <div className="mt-1">
            {factor.impact === 'up' && <TrendingUp className="text-green-500 w-5 h-5" />}
            {factor.impact === 'down' && <TrendingDown className="text-red-500 w-5 h-5" />}
            {factor.impact === 'neutral' && <MinusCircle className="text-gray-500 w-5 h-5" />}
          </div>
          <div className="ml-3">
            <p className="font-medium text-steel-800">{factor.name}</p>
            <p className="text-sm text-gray-600">{factor.description}</p>
          </div>
        </div>
      ))}
      
      <div className="mt-6 pt-4 border-t border-gray-200">
        <h3 className="font-medium text-steel-800 mb-2">Piyasa Beklentisi</h3>
        <div className="bg-green-50 border-l-4 border-green-500 p-3">
          <p className="text-green-700 text-sm">
            <strong>Yükseliş Eğilimi:</strong> Demir fiyatlarının önümüzdeki 2-3 hafta içinde %2-3 aralığında artış göstermesi bekleniyor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FactorsPanel;