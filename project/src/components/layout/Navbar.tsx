import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, BarChart2, Calendar, TrendingUp, FileText, Target } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navLinks = [
    { 
      name: 'Demir Fiyat Endeksi', 
      path: '/demir-fiyat-endeksi',
      icon: <BarChart2 className="w-5 h-5 mr-1" />
    },
    { 
      name: 'Bölgesel Fiyat Arşivi', 
      path: '/bolgesel-fiyat-arsivi',
      icon: <Calendar className="w-5 h-5 mr-1" />
    },
    { 
      name: 'Günlük Piyasa Analizi', 
      path: '/gunluk-piyasa-analizi',
      icon: <TrendingUp className="w-5 h-5 mr-1" />
    },
    { 
      name: 'Talep Formu', 
      path: '/talep-formu',
      icon: <FileText className="w-5 h-5 mr-1" />
    },
    { 
      name: 'Misyon Vizyon', 
      path: '/misyon-vizyon',
      icon: <Target className="w-5 h-5 mr-1" />
    }
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center">
            <div className="flex items-center">
              <div className="mr-2 p-1 bg-steel-600 text-white rounded">
                <BarChart2 className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-steel-800">Türkiye Demir Piyasası</h1>
                <p className="text-xs text-steel-600 hidden sm:block">Güncel Demir Fiyatları ve Analizler</p>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 items-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  isActive 
                    ? "flex items-center px-3 py-2 text-sm font-medium text-rust-600 border-b-2 border-rust-600" 
                    : "flex items-center px-3 py-2 text-sm font-medium text-steel-700 hover:text-rust-600 hover:border-b-2 hover:border-rust-600 transition-all"
                }
              >
                {link.icon}
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-steel-700 hover:text-steel-900 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-fadeIn">
          <div className="container-custom py-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => 
                  isActive 
                    ? "flex items-center px-4 py-3 text-sm font-medium text-rust-600 border-l-4 border-rust-600 bg-rust-50" 
                    : "flex items-center px-4 py-3 text-sm font-medium text-steel-700 hover:text-rust-600 hover:bg-gray-50 hover:border-l-4 hover:border-rust-600 transition-all"
                }
              >
                {link.icon}
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;