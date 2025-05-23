import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const LatestNews = () => {
  const newsItems = [
    {
      id: 1,
      title: "Demir Fiyatlarında Beklenmedik Yükseliş",
      summary: "Küresel emtia piyasalarındaki gelişmeler ve artan talep nedeniyle demir fiyatlarında son iki hafta içinde %5 artış gözlemlendi.",
      image: "https://images.pexels.com/photos/257636/pexels-photo-257636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      title: "Batı Bölgesinde Tedarik Zinciri Sorunları",
      summary: "İzmir ve çevresindeki üreticiler, lojistik sorunlar nedeniyle sevkiyatlarda gecikmeler yaşandığını bildirdi. Bu durum bölgesel fiyatları etkileyebilir.",
      image: "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 3,
      title: "İnşaat Sektöründeki Canlanma Demir Talebini Artırıyor",
      summary: "Yeni başlayan altyapı projeleri ve konut inşaatlarındaki artış, demir talebini yükselterek piyasada hareketlilik yaratıyor.",
      image: "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  return (
    <div className="space-y-6">
      {newsItems.map(item => (
        <div key={item.id} className="card group hover:border-l-4 hover:border-rust-500 transition-all">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-1/3">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-48 md:h-full object-cover rounded-md"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-rust-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-4">{item.summary}</p>
              <Link 
                to="/gunluk-piyasa-analizi" 
                className="text-rust-600 inline-flex items-center font-medium group-hover:text-rust-700"
              >
                Devamını Oku
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      ))}
      
      <div className="text-center mt-8">
        <Link 
          to="/gunluk-piyasa-analizi" 
          className="btn btn-outline inline-flex items-center"
        >
          Tüm Analizleri Gör
          <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default LatestNews;