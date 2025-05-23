import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="container-custom py-8 animate-fadeIn">
      <h1 className="text-3xl font-bold text-steel-800 mb-6">Gizlilik Politikası</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
        <section>
          <h2 className="text-xl font-semibold text-steel-800 mb-3">1. Veri Toplama ve Kullanım</h2>
          <p className="text-gray-600 mb-4">
            Türkiye Demir Piyasası olarak, hizmetlerimizi sunmak ve geliştirmek için aşağıdaki verileri toplamaktayız:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>İletişim bilgileri (ad-soyad, e-posta, telefon numarası)</li>
            <li>Firma bilgileri</li>
            <li>Kullanım istatistikleri ve tercihler</li>
            <li>Cihaz ve tarayıcı bilgileri</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-steel-800 mb-3">2. Veri Güvenliği</h2>
          <p className="text-gray-600 mb-4">
            Verilerinizin güvenliği bizim için önceliklidir. Bu kapsamda:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>SSL şifreleme teknolojisi kullanıyoruz</li>
            <li>Düzenli güvenlik değerlendirmeleri yapıyoruz</li>
            <li>Verileriniz güvenli sunucularda saklanmaktadır</li>
            <li>Sadece yetkili personelin erişimine izin veriyoruz</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-steel-800 mb-3">3. Çerezler ve İzleme</h2>
          <p className="text-gray-600 mb-4">
            Sitemizde kullanıcı deneyimini iyileştirmek için çerezler kullanılmaktadır. Bu çerezler:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>Oturum yönetimi</li>
            <li>Tercih hatırlama</li>
            <li>Analitik amaçlı kullanım istatistikleri</li>
            <li>Performans optimizasyonu</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-steel-800 mb-3">4. Veri Paylaşımı</h2>
          <p className="text-gray-600 mb-4">
            Topladığımız verileri üçüncü taraflarla paylaşma politikamız:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>Yasal zorunluluklar durumunda resmi kurumlarla</li>
            <li>Hizmet sağlayıcılarımızla (analitik, hosting vb.)</li>
            <li>Açık rızanız olması durumunda iş ortaklarımızla</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-steel-800 mb-3">5. Kullanıcı Hakları</h2>
          <p className="text-gray-600 mb-4">
            KVKK kapsamında sahip olduğunuz haklar:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>Verilerinize erişim hakkı</li>
            <li>Verilerinizin düzeltilmesini talep etme hakkı</li>
            <li>Verilerinizin silinmesini talep etme hakkı</li>
            <li>Veri işleme faaliyetini sınırlandırma hakkı</li>
            <li>Veri taşınabilirliği hakkı</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-steel-800 mb-3">6. İletişim</h2>
          <p className="text-gray-600">
            Gizlilik politikamız hakkında sorularınız için:
          </p>
          <div className="mt-2 space-y-1 text-gray-600">
            <p>E-posta: bilgi@demirpiyasasi.com.tr</p>
            <p>Telefon: +90(539) 910 02 06</p>
            <p>Adres: Tekkeköy/Samsun, Türkiye</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-steel-800 mb-3">7. Güncellemeler</h2>
          <p className="text-gray-600">
            Bu gizlilik politikası son olarak 15.01.2025 tarihinde güncellenmiştir. Politika değişiklikleri 
            hakkında kullanıcılarımız e-posta yoluyla bilgilendirilecektir.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;