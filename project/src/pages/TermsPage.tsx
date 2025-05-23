import React from 'react';

const TermsPage = () => {
  return (
    <div className="container-custom py-8 animate-fadeIn">
      <h1 className="text-3xl font-bold text-steel-800 mb-6">Kullanım Koşulları</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
        <section>
          <h2 className="text-xl font-semibold text-steel-800 mb-3">1. Hizmet Kullanım Şartları</h2>
          <p className="text-gray-600 mb-4">
            Türkiye Demir Piyasası platformunu kullanarak aşağıdaki şartları kabul etmiş sayılırsınız:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>Verilen bilgilerin sadece bilgilendirme amaçlı olduğunu</li>
            <li>Yatırım tavsiyesi niteliği taşımadığını</li>
            <li>Kullanıcı hesabınızın güvenliğinden sorumlu olduğunuzu</li>
            <li>Hizmetlerimizi yasal amaçlar için kullanacağınızı</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-steel-800 mb-3">2. Fikri Mülkiyet Hakları</h2>
          <p className="text-gray-600 mb-4">
            Platform üzerindeki tüm içerik ve veriler Türkiye Demir Piyasası'nın fikri mülkiyetidir:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>Fiyat verileri ve analizler</li>
            <li>Grafikler ve görseller</li>
            <li>Logo ve markalar</li>
            <li>Yazılım ve tasarım öğeleri</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-steel-800 mb-3">3. Kullanıcı Sorumlulukları</h2>
          <p className="text-gray-600 mb-4">
            Platform kullanıcıları aşağıdaki kurallara uymakla yükümlüdür:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>Doğru ve güncel bilgi sağlamak</li>
            <li>Hesap güvenliğini korumak</li>
            <li>Platformu kötüye kullanmamak</li>
            <li>Diğer kullanıcıların haklarına saygı göstermek</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-steel-800 mb-3">4. Hizmet Kısıtlamaları</h2>
          <p className="text-gray-600 mb-4">
            Aşağıdaki durumlar platformdan yararlanmanızı kısıtlayabilir:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>Kullanım koşullarının ihlali</li>
            <li>Yasadışı faaliyetler</li>
            <li>Sistem güvenliğini tehdit eden davranışlar</li>
            <li>Diğer kullanıcıların haklarını ihlal eden eylemler</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-steel-800 mb-3">5. Sorumluluk Reddi</h2>
          <p className="text-gray-600 mb-4">
            Platform üzerinden sağlanan bilgiler hakkında:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>Veriler güvenilir kaynaklardan alınmaktadır</li>
            <li>Ancak doğruluk garantisi verilmemektedir</li>
            <li>Yatırım kararları kullanıcının sorumluluğundadır</li>
            <li>Oluşabilecek zararlardan platform sorumlu değildir</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-steel-800 mb-3">6. Ödeme ve İade Koşulları</h2>
          <p className="text-gray-600 mb-4">
            Ücretli hizmetlerimiz için geçerli koşullar:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>Ödemeler güvenli ödeme sistemleri üzerinden yapılır</li>
            <li>İptal ve iade talepleri 14 gün içinde değerlendirilir</li>
            <li>Kullanılmış hizmetler için kısmi iade yapılabilir</li>
            <li>İade talepleri yazılı olarak alınır</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-steel-800 mb-3">7. Değişiklikler</h2>
          <p className="text-gray-600">
            Bu kullanım koşulları son olarak 15.01.2025 tarihinde güncellenmiştir. Koşullardaki değişiklikler 
            hakkında kullanıcılarımız e-posta yoluyla bilgilendirilecektir.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-steel-800 mb-3">8. İletişim</h2>
          <p className="text-gray-600">
            Kullanım koşulları hakkında sorularınız için:
          </p>
          <div className="mt-2 space-y-1 text-gray-600">
            <p>E-posta: bilgi@demirpiyasasi.com.tr</p>
            <p>Telefon: +90(539) 910 02 06</p>
            <p>Adres: Tekkeköy/Samsun, Türkiye</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsPage;