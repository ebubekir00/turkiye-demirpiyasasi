import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { supabase } from '../lib/supabase';
import PriceTable from '../components/priceIndex/PriceTable';
import PriceChart from '../components/priceIndex/PriceChart';

interface Product {
  id: string;
  name: string;
  code: string;
  category_id: string;
}

interface Category {
  id: string;
  name: string;
  slug: string;
}

interface PriceData {
  date: string;
  price: number;
  change: number;
  volume: number;
}

const PriceIndexPage = () => {
  const [viewMode, setViewMode] = useState<'table' | 'chart'>('chart');
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [priceData, setPriceData] = useState<PriceData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      fetchProducts(selectedCategory);
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (selectedProduct) {
      fetchPriceData(selectedProduct);
    }
  }, [selectedProduct]);

  const fetchCategories = async () => {
    try {
      setError(null);
      const { data, error } = await supabase
        .from('product_categories')
        .select('*')
        .order('name');
      
      if (error) throw error;
      
      const categories = data || [];
      setCategories(categories);

      // Find and select Nervürlü Çelik category by default
      const nervurluCelikCategory = categories.find(cat => cat.slug === 'nervurlu-celik');
      if (nervurluCelikCategory) {
        setSelectedCategory(nervurluCelikCategory.id);
      } else if (categories.length > 0) {
        setSelectedCategory(categories[0].id);
      }
    } catch (err) {
      console.error('Error fetching categories:', err);
      setError('Kategoriler yüklenirken bir hata oluştu.');
    }
  };

  const fetchProducts = async (categoryId: string) => {
    try {
      setError(null);
      setLoading(true);
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('category_id', categoryId)
        .order('name');
      
      if (error) throw error;
      setProducts(data || []);
      if (data && data.length > 0) {
        setSelectedProduct(data[0].id);
      }
    } catch (err) {
      console.error('Error fetching products:', err);
      setError('Ürünler yüklenirken bir hata oluştu.');
    } finally {
      setLoading(false);
    }
  };

  const fetchPriceData = async (productId: string) => {
    try {
      setError(null);
      setLoading(true);
      const { data, error } = await supabase
        .from('price_history')
        .select('*')
        .eq('product_id', productId)
        .order('date', { ascending: true });
      
      if (error) throw error;

      // Calculate price changes and add dummy volume data
      const priceDataWithChanges = (data || []).map((item, index, arr) => {
        const prevPrice = index > 0 ? arr[index - 1].price : item.price;
        const change = ((item.price - prevPrice) / prevPrice) * 100;
        return {
          ...item,
          change,
          volume: Math.floor(Math.random() * 2000) + 3000 // Dummy volume data
        };
      });

      setPriceData(priceDataWithChanges);
    } catch (err) {
      console.error('Error fetching price data:', err);
      setError('Fiyat verileri yüklenirken bir hata oluştu.');
    } finally {
      setLoading(false);
    }
  };

  // Calculate price change percentage
  const calculatePriceChange = () => {
    if (priceData.length < 2) return 0;
    const lastPrice = priceData[priceData.length - 1].price;
    const previousPrice = priceData[priceData.length - 2].price;
    return ((lastPrice - previousPrice) / previousPrice) * 100;
  };

  if (error) {
    return (
      <div className="container-custom py-8">
        <div className="bg-red-50 border-l-4 border-red-500 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">
                {error}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-custom py-8 animate-fadeIn">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-steel-800 mb-2">Demir Fiyat Endeksi</h1>
        <p className="text-gray-600">
          Türkiye genelinde güncel demir fiyatları, değişim oranları ve tarihsel veriler
        </p>
      </div>
      
      {/* Category Selection */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-steel-800 mb-4">Ürün Kategorileri</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-md ${
                selectedCategory === category.id
                  ? 'bg-steel-600 text-white'
                  : 'bg-white border border-gray-300 text-steel-700 hover:bg-gray-50'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Product Selection */}
      {selectedCategory && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-steel-800 mb-4">Ürünler</h2>
          <div className="flex flex-wrap gap-2">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => setSelectedProduct(product.id)}
                className={`px-4 py-2 rounded-md ${
                  selectedProduct === product.id
                    ? 'bg-rust-600 text-white'
                    : 'bg-white border border-gray-300 text-steel-700 hover:bg-gray-50'
                }`}
              >
                {product.name}
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* View Mode Selection */}
      <div className="mb-6">
        <div className="flex justify-end">
          <div className="flex rounded-md overflow-hidden">
            <button 
              onClick={() => setViewMode('table')}
              className={`px-4 py-2 border border-gray-300 flex items-center ${
                viewMode === 'table' 
                  ? 'bg-steel-600 text-white border-steel-600' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Tablo
            </button>
            <button 
              onClick={() => setViewMode('chart')}
              className={`px-4 py-2 border border-gray-300 flex items-center ${
                viewMode === 'chart' 
                  ? 'bg-steel-600 text-white border-steel-600' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Grafik
            </button>
          </div>
        </div>
      </div>
      
      {/* Main Content - Price Chart or Table */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-8">
        {viewMode === 'chart' ? (
          <PriceChart data={priceData} loading={loading} />
        ) : (
          <PriceTable data={priceData} loading={loading} />
        )}
      </div>
      
      {/* Related Information Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card hover:shadow-lg">
          <h3 className="text-lg font-semibold text-steel-800 mb-3">Bölgesel Fiyatlar</h3>
          <p className="text-gray-600 mb-4">
            Farklı bölgelerdeki fiyat değişimlerini inceleyin ve karşılaştırın.
          </p>
          <Link to="/bolgesel-fiyat-arsivi" className="text-rust-600 font-medium flex items-center hover:text-rust-700">
            Bölgesel Fiyatlara Git
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
        
        <div className="card hover:shadow-lg">
          <h3 className="text-lg font-semibold text-steel-800 mb-3">Piyasa Analizleri</h3>
          <p className="text-gray-600 mb-4">
            Uzman analistlerimizin günlük değerlendirmeleri ve tahminleri.
          </p>
          <Link to="/gunluk-piyasa-analizi" className="text-rust-600 font-medium flex items-center hover:text-rust-700">
            Analizlere Git
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
        
        <div className="card hover:shadow-lg">
          <h3 className="text-lg font-semibold text-steel-800 mb-3">Özel Fiyat Talebi</h3>
          <p className="text-gray-600 mb-4">
            Projeleriniz için özel fiyat ve tedarik bilgisi almak istiyorsanız form doldurun.
          </p>
          <Link to="/talep-formu" className="text-rust-600 font-medium flex items-center hover:text-rust-700">
            Talep Formu
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PriceIndexPage;