import { Target, TrendingUp, Clock, Users, Shield, Award, User, UserCircle2 } from 'lucide-react';

const MissionVisionPage = () => {
  const values = [
    {
      icon: <Shield className="w-12 h-12 text-steel-600" />,
      title: "Güvenilirlik",
      description: "Doğru, tarafsız ve güvenilir veri sağlamak en temel prensibimizdir."
    },
    {
      icon: <Clock className="w-12 h-12 text-steel-600" />,
      title: "Güncellik",
      description: "Piyasa değişimlerini anında takip eder ve verileri sürekli güncelliyoruz."
    },
    {
      icon: <Users className="w-12 h-12 text-steel-600" />,
      title: "Müşteri Odaklılık",
      description: "Kullanıcılarımızın ihtiyaçlarını anlar ve buna uygun çözümler sunarız."
    },
    {
      icon: <Award className="w-12 h-12 text-steel-600" />,
      title: "Uzmanlık",
      description: "Sektörün önde gelen uzmanlarıyla çalışır ve profesyonel analizler sunarız."
    }
  ];
  
  const team = [
    {
      name: "Ebubekir Çakır",
      title: "Kurucu ve Genel Müdür",
      bio: "3 yıllık demir-çelik sektörü deneyimiyle, Türkiye'nin önde gelen piyasa analistlerinden biridir.",
      gender: "male"
    },
    {
      name: "Ayşe Kaya",
      title: "Piyasa Analisti",
      bio: "Ekonomi ve finans alanındaki uzmanlığıyla demir piyasasındaki trendleri analiz eder ve raporlar hazırlar.",
      gender: "female"
    },
    {
      name: "Selman Demircan",
      title: "Veri Analisti",
      bio: "Veri bilimi konusundaki tecrübesiyle, piyasa verilerini işleyerek anlamlı içgörüler oluşturur.",
      gender: "male"
    }
  ];

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-steel-800 to-steel-900 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Misyon ve Vizyon</h1>
            <p className="text-xl text-gray-200">
              Türkiye Demir Piyasası olarak amacımız, demir-çelik sektöründeki tüm paydaşlar için
              güvenilir, güncel ve kapsamlı bilgi kaynağı olmaktır.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-steel-50 rounded-lg p-8 border-t-4 border-steel-600 shadow-md">
              <div className="flex items-center mb-6">
                <Target className="w-10 h-10 text-steel-600 mr-3" />
                <h2 className="text-3xl font-bold text-steel-800">Misyonumuz</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  Türkiye demir piyasasındaki tüm aktörlere doğru, güncel ve tarafsız bilgi sağlayarak 
                  şeffaf bir piyasa oluşumuna katkıda bulunmak.
                </p>
                <p>
                  Üreticiler, tedarikçiler, tüketiciler ve yatırımcılar için güvenilir bir referans kaynağı 
                  olmak ve karar alma süreçlerinde değer katmak.
                </p>
                <p>
                  Kapsamlı veri analizi ve uzman görüşleriyle piyasadaki değişimleri doğru yorumlayarak 
                  paydaşlara stratejik avantaj sağlamak.
                </p>
              </div>
            </div>
            
            <div className="bg-steel-50 rounded-lg p-8 border-t-4 border-rust-600 shadow-md">
              <div className="flex items-center mb-6">
                <TrendingUp className="w-10 h-10 text-rust-600 mr-3" />
                <h2 className="text-3xl font-bold text-steel-800">Vizyonumuz</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  Türkiye'nin demir-çelik piyasasında en güvenilir ve en çok tercih edilen bilgi 
                  platformu olmak.
                </p>
                <p>
                  Sektördeki tüm paydaşları bir araya getiren, işbirliğini ve bilgi paylaşımını 
                  teşvik eden bir ekosistem oluşturmak.
                </p>
                <p>
                  Yenilikçi analiz yöntemleri ve teknolojik çözümlerle demir piyasasına dair 
                  içgörüleri herkes için erişilebilir kılmak.
                </p>
                <p>
                  Ulusal ve uluslararası ölçekte sektörel bilgi birikimini artırarak Türkiye 
                  demir-çelik sektörünün gelişimine katkıda bulunmak.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-steel-800 mb-4">Değerlerimiz</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Türkiye Demir Piyasası olarak benimsediğimiz temel değerler, tüm faaliyetlerimize yön vermektedir.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center group hover:shadow-lg transition-all">
                <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-steel-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-steel-800 mb-4">Ekibimiz</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Deneyimli ve uzman kadromuzla sektörün nabzını tutuyoruz.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden group">
                <div className="p-8 flex flex-col items-center">
                  <div className="w-24 h-24 bg-steel-100 rounded-full flex items-center justify-center mb-6">
                    {member.gender === 'male' ? (
                      <User className="w-12 h-12 text-steel-600" />
                    ) : (
                      <UserCircle2 className="w-12 h-12 text-steel-600" />
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-steel-800 mb-1">{member.name}</h3>
                  <p className="text-rust-600 font-medium mb-3">{member.title}</p>
                  <p className="text-gray-600 text-center">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-steel-700">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Bizimle Çalışmak İster misiniz?</h2>
            <p className="text-lg text-white mb-8">
              Türkiye Demir Piyasası ekibine katılmak veya işbirliği yapmak için bizimle iletişime geçin.
            </p>
            <a href="/talep-formu" className="btn bg-rust-600 hover:bg-rust-700 text-white inline-flex items-center">
              İletişime Geç
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionVisionPage;