import { useState } from 'react';
import { Send, CheckCircle, FileText, Info } from 'lucide-react';

const RequestFormPage = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    requestType: '',
    region: '',
    ironType: '',
    quantity: '',
    timeframe: '',
    message: '',
    terms: false
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    setTimeout(() => {
      if (
        formData.fullName && 
        formData.email && 
        formData.phone && 
        formData.requestType && 
        formData.terms
      ) {
        setFormStatus('success');
      } else {
        setFormStatus('error');
      }
    }, 1500);
  };
  
  if (formStatus === 'success') {
    return (
      <div className="container-custom py-12 animate-fadeIn">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-steel-800 mb-4">Talebiniz Başarıyla Alındı</h2>
            <p className="text-gray-600 mb-6">
              Form gönderiminiz için teşekkür ederiz. Talebiniz ekibimiz tarafından inceleniyor. 
              En kısa sürede sizinle iletişime geçeceğiz.
            </p>
            <button 
              onClick={() => setFormStatus('idle')}
              className="btn btn-primary"
            >
              Yeni Talep Oluştur
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-custom py-8 animate-fadeIn">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-steel-800 mb-2">Talep Formu</h1>
        <p className="text-gray-600">
          Özel fiyat teklifi, bölgesel tedarik bilgisi veya detaylı piyasa analizi için talebinizi iletin
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-steel-800 mb-4 pb-2 border-b border-gray-200">
                  İletişim Bilgileri
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="fullName">
                      Ad Soyad <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="company">
                      Firma Adı
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                      E-posta <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="phone">
                      Telefon <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-steel-800 mb-4 pb-2 border-b border-gray-200">
                  Talep Detayları
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="requestType">
                      Talep Türü <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="requestType"
                      name="requestType"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      value={formData.requestType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Seçiniz</option>
                      <option value="price">Fiyat Teklifi</option>
                      <option value="supply">Tedarik Bilgisi</option>
                      <option value="analysis">Piyasa Analizi</option>
                      <option value="consultation">Danışmanlık</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="region">
                      Bölge
                    </label>
                    <select
                      id="region"
                      name="region"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      value={formData.region}
                      onChange={handleChange}
                    >
                      <option value="">Seçiniz</option>
                      <option value="marmara">Marmara</option>
                      <option value="ege">Ege</option>
                      <option value="icanadolu">İç Anadolu</option>
                      <option value="akdeniz">Akdeniz</option>
                      <option value="karadeniz">Karadeniz</option>
                      <option value="doguanadolu">Doğu Anadolu</option>
                      <option value="guneydogu">Güneydoğu Anadolu</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="ironType">
                      Demir Türü
                    </label>
                    <select
                      id="ironType"
                      name="ironType"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      value={formData.ironType}
                      onChange={handleChange}
                    >
                      <option value="">Seçiniz</option>
                      <optgroup label="İnşaat Demiri">
                        <option value="id-8">8mm İnşaat Demiri</option>
                        <option value="id-10">10mm İnşaat Demiri</option>
                        <option value="id-12">12mm İnşaat Demiri</option>
                        <option value="id-14">14mm İnşaat Demiri</option>
                        <option value="id-16">16mm İnşaat Demiri</option>
                      </optgroup>
                      <optgroup label="Profil">
                        <option value="kp-4040">40x40 Kutu Profil</option>
                        <option value="kp-5050">50x50 Kutu Profil</option>
                        <option value="kp-6060">60x60 Kutu Profil</option>
                      </optgroup>
                      <optgroup label="Nervürlü Çelik">
                        <option value="nc-8">8mm Nervürlü Çelik</option>
                        <option value="nc-10">10mm Nervürlü Çelik</option>
                        <option value="nc-12">12mm Nervürlü Çelik</option>
                      </optgroup>
                      <optgroup label="HEA/HEB">
                        <option value="hea-100">HEA 100</option>
                        <option value="hea-200">HEA 200</option>
                        <option value="heb-100">HEB 100</option>
                        <option value="heb-200">HEB 200</option>
                      </optgroup>
                      <optgroup label="IPE">
                        <option value="ipe-100">IPE 100</option>
                        <option value="ipe-200">IPE 200</option>
                        <option value="ipe-300">IPE 300</option>
                      </optgroup>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="quantity">
                      Miktar (Ton)
                    </label>
                    <input
                      type="text"
                      id="quantity"
                      name="quantity"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      value={formData.quantity}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="timeframe">
                      Zaman Çerçevesi
                    </label>
                    <select
                      id="timeframe"
                      name="timeframe"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      value={formData.timeframe}
                      onChange={handleChange}
                    >
                      <option value="">Seçiniz</option>
                      <option value="immediate">Acil (1-3 gün)</option>
                      <option value="short">Kısa Vadeli (1-2 hafta)</option>
                      <option value="medium">Orta Vadeli (2-4 hafta)</option>
                      <option value="long">Uzun Vadeli (1-3 ay)</option>
                      <option value="planning">Planlama Aşaması</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">
                      Mesajınız
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      className="w-4 h-4 text-steel-600 border-gray-300 rounded focus:ring-steel-500"
                      checked={formData.terms}
                      onChange={handleCheckboxChange}
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="text-gray-600">
                      Kişisel verilerimin işlenmesine ve tarafıma ticari elektronik ileti gönderilmesine izin veriyorum.
                      <span className="text-red-500">*</span>
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="btn bg-steel-600 text-white hover:bg-steel-700 flex items-center"
                  disabled={formStatus === 'submitting'}
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Gönderiliyor...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Talebi Gönder
                    </>
                  )}
                </button>
              </div>
              
              {formStatus === 'error' && (
                <div className="mt-4 bg-red-50 border-l-4 border-red-500 p-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Info className="h-5 w-5 text-red-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-red-700">
                        Lütfen tüm zorunlu alanları doldurun ve devam edin.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
        
        <div>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-center mb-4">
              <FileText className="w-6 h-6 text-steel-600 mr-2" />
              <h2 className="text-xl font-semibold text-steel-800">Talep Bilgileri</h2>
            </div>
            <div className="text-gray-600 space-y-4">
              <p>
                Türkiye Demir Piyasası olarak, ihtiyaçlarınıza uygun özel fiyat teklifleri, bölgesel tedarik
                bilgileri ve detaylı piyasa analizleri sunuyoruz.
              </p>
              <p>
                Formu doldurduktan sonra, ekibimiz talebinizi değerlendirecek ve en kısa sürede sizinle
                iletişime geçecektir.
              </p>
              <p>
                <strong>Yanıt Süresi:</strong> Genellikle 24 saat içinde yanıt veriyoruz.
              </p>
            </div>
          </div>
          
          <div className="bg-steel-50 rounded-lg border border-steel-200 p-6">
            <h3 className="text-lg font-semibold text-steel-800 mb-4">Sık Sorulan Sorular</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-steel-700 mb-1">Fiyat teklifim ne kadar sürede hazırlanır?</h4>
                <p className="text-sm text-gray-600">
                  Fiyat teklifleri genellikle 24-48 saat içerisinde hazırlanır ve tarafınıza iletilir.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-steel-700 mb-1">Bölgesel tedarik bilgisi nedir?</h4>
                <p className="text-sm text-gray-600">
                  Belirttiğiniz bölgedeki tedarikçiler, stok durumları ve teslimat süreleri hakkında detaylı bilgidir.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-steel-700 mb-1">Özel piyasa analizi ücretli midir?</h4>
                <p className="text-sm text-gray-600">
                  Kapsamlı ve özel hazırlanan piyasa analizleri için ücret talep edilebilir. Temel analizler ücretsizdir.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-steel-700 mb-1">Danışmanlık hizmeti nasıl çalışır?</h4>
                <p className="text-sm text-gray-600">
                  Uzman ekibimiz, projenize veya ihtiyacınıza özel stratejik tavsiyelerde bulunur ve en uygun çözümleri sunar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestFormPage;