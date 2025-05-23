import { Link } from 'react-router-dom';
import { BarChart2, TrendingUp, MapPin, FileText, ArrowRight } from 'lucide-react';
import LatestNews from '../components/home/LatestNews';
import RegionalPricePreview from '../components/home/RegionalPricePreview';

const HomePage = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-steel-800 to-steel-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-steel-900/70 to-steel-800/60"></div>
        
        <div className="container-custom relative">
          <div className="min-h-[600px] py-16 md:py-24 flex flex-col justify-center">
            <div className="max-w-3xl animate-slideUp space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Türkiye'nin En Güncel
                <span className="text-rust-400 block">Demir Piyasası</span>
                Verileri
              </h1>
              
              <p className="text-xl text-gray-300 max-w-xl">
                Demir sektörünün en güncel fiyatları, bölgesel veriler ve profesyonel piyasa analizleri ile 
                doğru kararlar alın.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  to="/demir-fiyat-endeksi" 
                  className="btn bg-rust-600 hover:bg-rust-700 text-white flex items-center justify-center group"
                >
                  <BarChart2 className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                  Güncel Fiyatlar
                </Link>
                <Link 
                  to="/gunluk-piyasa-analizi" 
                  className="btn bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 flex items-center justify-center group"
                >
                  <TrendingUp className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                  Piyasa Analizi
                </Link>
              </div>
              
              <div className="flex items-center gap-8 pt-6 text-gray-300">
                <div>
                  <div className="text-2xl font-bold text-white">50K+</div>
                  <div className="text-sm">Aylık Kullanıcı</div>
                </div>
                <div className="w-px h-12 bg-gray-700"></div>
                <div>
                  <div className="text-2xl font-bold text-white">81</div>
                  <div className="text-sm">İl Kapsamında</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Boxes */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-steel-800 mb-4">Kapsamlı Demir Piyasası Verileri</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Türkiye genelinde güncel demir fiyatları, bölgesel karşılaştırmalar ve profesyonel analizler
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <BarChart2 className="w-10 h-10 text-steel-600" />,
                title: "Demir Fiyat Endeksi",
                description: "Günlük güncellenen demir fiyat endeksi ve tarihsel fiyat karşılaştırmaları.",
                link: "/demir-fiyat-endeksi"
              },
              {
                icon: <MapPin className="w-10 h-10 text-steel-600" />,
                title: "Bölgesel Fiyat Arşivi",
                description: "Türkiye'nin tüm bölgelerinde geçerli olan demir fiyatlarına erişim.",
                link: "/bolgesel-fiyat-arsivi"
              },
              {
                icon: <TrendingUp className="w-10 h-10 text-steel-600" />,
                title: "Günlük Piyasa Analizi",
                description: "Uzman analistler tarafından hazırlanan günlük demir piyasası değerlendirmeleri.",
                link: "/gunluk-piyasa-analizi"
              }
            ].map((feature, index) => (
              <div key={index} className="card group hover:-translate-y-1">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-steel-100 rounded-full">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <Link to={feature.link} className="text-rust-600 flex items-center font-medium group-hover:text-rust-700">
                    Detaylı Bilgi
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Analysis and Regional Prices */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="section-title">Son Piyasa Analizleri</h2>
              <LatestNews />
            </div>
            <div>
              <h2 className="section-title">Bölgesel Fiyat Özeti</h2>
              <RegionalPricePreview />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-steel-700 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Özel Fiyat Bilgisi ve Analiz Talebi</h2>
            <p className="text-lg text-white mb-8">
              Projeleriniz için özel fiyat teklifleri ve detaylı piyasa analizleri almak için talep formunu doldurun.
            </p>
            <Link to="/talep-formu" className="btn bg-rust-600 hover:bg-rust-700 text-white inline-flex items-center">
              <FileText className="w-5 h-5 mr-2" />
              Talep Formu
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;