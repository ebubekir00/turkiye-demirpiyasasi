import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-steel-800 text-white">
      <div className="container-custom py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">Türkiye Demir Piyasası</h3>
            <p className="text-gray-300 mb-4">
              Türkiye'nin en güncel ve kapsamlı demir piyasası verileri, analizleri ve bölgesel fiyat arşivi.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link to="/demir-fiyat-endeksi" className="text-gray-300 hover:text-white transition-colors">
                  Demir Fiyat Endeksi
                </Link>
              </li>
              <li>
                <Link to="/bolgesel-fiyat-arsivi" className="text-gray-300 hover:text-white transition-colors">
                  Bölgesel Fiyat Arşivi
                </Link>
              </li>
              <li>
                <Link to="/gunluk-piyasa-analizi" className="text-gray-300 hover:text-white transition-colors">
                  Günlük Piyasa Analizi
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Kurumsal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/misyon-vizyon" className="text-gray-300 hover:text-white transition-colors">
                  Misyon Vizyon
                </Link>
              </li>
              <li>
                <Link to="/talep-formu" className="text-gray-300 hover:text-white transition-colors">
                  Talep Formu
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">İletişim</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 text-rust-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Tekkeköy/Samsun, Türkiye</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-rust-500" />
                <span className="text-gray-300">+90(539) 910 02 06</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-rust-500" />
                <span className="text-gray-300">bilgi@demirpiyasasi.com.tr</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Türkiye Demir Piyasası. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;