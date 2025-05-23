import { useEffect, useState } from 'react';

interface PriceData {
  date: string;
  price: number;
}

const PriceChart = () => {
  const [priceData, setPriceData] = useState<PriceData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real application, this would be fetched from an API
    const mockData: PriceData[] = [
      { date: '01.01.2025', price: 15500 },
      { date: '02.01.2025', price: 15450 },
      { date: '03.01.2025', price: 15600 },
      { date: '04.01.2025', price: 15700 },
      { date: '05.01.2025', price: 15650 },
      { date: '06.01.2025', price: 15800 },
      { date: '07.01.2025', price: 16000 },
    ];

    // Simulate loading
    const timer = setTimeout(() => {
      setPriceData(mockData);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const maxPrice = Math.max(...priceData.map(item => item.price));
  const minPrice = Math.min(...priceData.map(item => item.price));
  const range = maxPrice - minPrice;
  
  // Calculate if the latest price is higher than the previous day
  const isIncreasing = priceData.length >= 2 && 
    priceData[priceData.length - 1].price > priceData[priceData.length - 2].price;

  return (
    <div>
      <h3 className="text-xl font-semibold text-steel-800 mb-4">Demir Fiyat Endeksi (TL/Ton)</h3>
      
      {loading ? (
        <div className="h-64 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-steel-200 border-t-steel-600 rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-500 text-sm">Son 7 Gün</span>
              <div className={`flex items-center ${isIncreasing ? 'text-green-600' : 'text-red-600'}`}>
                <span className="text-2xl font-bold">{priceData[priceData.length - 1].price} ₺</span>
                <span className="ml-2 text-sm">
                  {isIncreasing ? '▲' : '▼'} 
                  {Math.abs(priceData[priceData.length - 1].price - priceData[priceData.length - 2].price)} ₺
                </span>
              </div>
            </div>
          </div>

          <div className="relative h-64">
            <div className="absolute bottom-0 left-0 right-0 flex items-end h-full">
              {priceData.map((item, index) => {
                const height = range === 0 ? 50 : ((item.price - minPrice) / range) * 100;
                return (
                  <div 
                    key={index} 
                    className="flex-1 flex flex-col items-center group"
                  >
                    <div 
                      className={`w-full mx-0.5 rounded-t transition-all duration-300 group-hover:opacity-80 ${
                        index === priceData.length - 1 
                          ? (isIncreasing ? 'bg-green-500' : 'bg-red-500')
                          : 'bg-steel-500'
                      }`}
                      style={{ height: `${Math.max(height, 5)}%` }}
                    ></div>
                    <div className="text-xs text-gray-600 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.price} ₺
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* X-axis labels */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-between pt-1 border-t border-gray-200">
              {priceData.map((item, index) => (
                <div key={index} className="text-xs text-gray-500 text-center w-full">
                  {index % 2 === 0 ? item.date.split('.').slice(0, 2).join('.') : ''}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PriceChart;