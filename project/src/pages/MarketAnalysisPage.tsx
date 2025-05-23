import { useState } from 'react';
import { Filter, Search } from 'lucide-react';
import AnalysisCard from '../components/analysis/AnalysisCard';
import TrendChart from '../components/analysis/TrendChart';
import FactorsPanel from '../components/analysis/FactorsPanel';

const MarketAnalysisPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const categories = [
    "Tüm Analizler", "Günlük Değerlendirmeler", "Haftalık Görünüm", 
    "Aylık Projeksiyonlar", "Küresel Piyasalar", "Hammadde Analizi"
  ];
  
  const analysisItems = [
    {
      id: 1,
      title: "Ocak Ayı Demir Piyasası Görünümü",
      summary: "Ocak ayında demir piyasasında beklenen gelişmeler, fiyat tahminleri ve sektörü etkileyecek faktörler.",
      category: "Aylık Projeksiyonlar",
      author: "Ahmet Demir",
      authorTitle: "Kıdemli Piyasa Analisti",
      image: "https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      title: "Küresel Hammadde Fiyatlarının Türkiye Demir Piyasasına Etkileri",
      summary: "Demir cevheri ve hurda fiyatlarındaki son gelişmelerin Türkiye'deki demir fiyatlarına muhtemel yansımaları.",
      category: "Hammadde Analizi",
      author: "Zeynep Çelik",
      authorTitle: "Ekonomi Uzmanı",
      image: "https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 3,
      title: "Günlük Piyasa Bülteni: Demir Fiyatlarında Yukarı Yönlü Hareket",
      summary: "Bugünkü işlemlerde demir fiyatları %1.2 artış gösterdi. İşlem hacmi son bir ayın en yüksek seviyesine ulaştı.",
      category: "Günlük Değerlendirmeler",
      author: "Mehmet Yılmaz",
      authorTitle: "Teknik Analist",
      image: "https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 4,
      title: "Haftalık Demir Piyasası Değerlendirmesi",
      summary: "Geçtiğimiz haftanın demir piyasası performansı, öne çıkan gelişmeler ve gelecek hafta için beklentiler.",
      category: "Haftalık Görünüm",
      author: "Ayşe Kaya",
      authorTitle: "Sektör Uzmanı",
      image: "https://images.pexels.com/photos/1036857/pexels-photo-1036857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 5,
      title: "Çin'in Demir Üretim Politikasındaki Değişiklikler ve Küresel Etkiler",
      summary: "Çin'in açıkladığı yeni üretim kotaları ve çevre düzenlemelerinin küresel demir piyasasına olası etkileri.",
      category: "Küresel Piyasalar",
      author: "Ali Yıldız",
      authorTitle: "Uluslararası Piyasalar Uzmanı",
      image: "https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];
  
  const filteredAnalysis = analysisItems.filter(item => {
    const matchesCategory = selectedCategory === null || selectedCategory === "Tüm Analizler" 
      ? true 
      : item.category === selectedCategory;
      
    const matchesSearch = searchTerm
      ? item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchTerm.toLowerCase())
      : true;
      
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container-custom py-8 animate-fadeIn">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-steel-800 mb-2">Günlük Piyasa Analizi</h1>
        <p className="text-gray-600">
          Uzman analistlerimiz tarafından hazırlanan güncel demir piyasası değerlendirmeleri ve tahminleri
        </p>
      </div>
      
      {/* Market Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-steel-800 mb-4">Piyasa Görünümü</h2>
          <div className="mb-6">
            <TrendChart />
          </div>
          <p className="text-gray-600">
            Son 30 günde demir fiyatları istikrarlı bir şekilde artış gösterdi. Özellikle son haftada artan talep 
            ve sınırlı arz nedeniyle yükseliş hızlandı. Önümüzdeki dönemde mevsimsel faktörler ve inşaat sektöründeki 
            canlanma fiyatları desteklemeye devam edebilir.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-steel-800 mb-4">Etkileyen Faktörler</h2>
          <FactorsPanel />
        </div>
      </div>
      
      {/* Search Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div className="relative w-full md:w-auto md:min-w-[300px]">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Analizlerde ara..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      {/* Category Tabs */}
      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category === "Tüm Analizler" ? null : category)}
            className={`px-4 py-2 rounded-md ${
              (category === "Tüm Analizler" && selectedCategory === null) || category === selectedCategory
                ? 'bg-steel-600 text-white'
                : 'bg-white border border-gray-300 text-steel-700 hover:bg-gray-50'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Analysis Cards */}
      {filteredAnalysis.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow-md">
          <p className="text-gray-500 text-lg">Seçilen kriterlere uygun analiz bulunamadı.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredAnalysis.map(analysis => (
            <AnalysisCard key={analysis.id} analysis={analysis} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MarketAnalysisPage;