import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface PriceChartProps {
  data: Array<{
    date: string;
    price: number;
  }>;
  loading?: boolean;
}

const PriceChart: React.FC<PriceChartProps> = ({ data, loading }) => {
  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-steel-600"></div>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="flex items-center justify-center h-96 text-gray-500">
        Veri bulunamadı
      </div>
    );
  }

  return (
    <div className="h-96">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="date" 
            tickFormatter={(value) => new Date(value).toLocaleDateString('tr-TR')}
          />
          <YAxis 
            domain={['auto', 'auto']}
            tickFormatter={(value) => value.toLocaleString('tr-TR')}
          />
          <Tooltip 
            formatter={(value: number) => value.toLocaleString('tr-TR') + ' ₺'}
            labelFormatter={(label) => new Date(label).toLocaleDateString('tr-TR')}
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="price" 
            stroke="#486581" 
            name="Fiyat (₺/Ton)"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PriceChart;