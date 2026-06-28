import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/imss-bienestar-logo.png';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-20 flex items-center justify-between gap-6 h-[82px] px-[clamp(18px,4vw,64px)] transition-all duration-180 ease-out border-b ${isScrolled ? 'bg-white/95 shadow-sums-lg border-transparent' : 'bg-[#f7f5ee]/90 border-sums-gold/30 backdrop-blur-md'}`}>
      <Link className="flex items-center gap-4 min-w-0 flex-shrink no-underline" to="/" aria-label="Ir al inicio">
        <img src={logo} alt="IMSS Bienestar Servicios Publicos de Salud" className="w-[180px] sm:w-[210px] h-auto" />
        <span className="text-sums-burgundy font-black text-[18px] pl-4 border-l-2 border-sums-gold hidden sm:block">SUMS</span>
      </Link>
      
      <button 
        className="lg:hidden w-[42px] h-[42px] flex flex-col justify-center items-center ml-auto border border-sums-line bg-sums-white" 
        type="button" 
        aria-label="Abrir menu" 
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="block h-[2px] w-[24px] bg-sums-green my-[3px]"></span>
        <span className="block h-[2px] w-[24px] bg-sums-green my-[3px]"></span>
        <span className="block h-[2px] w-[24px] bg-sums-green my-[3px]"></span>
      </button>

      <nav className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex absolute lg:relative top-[82px] lg:top-0 left-0 right-0 lg:w-auto flex-col lg:flex-row items-center gap-[clamp(14px,2vw,28px)] text-[14px] font-extrabold text-sums-green-dark bg-white lg:bg-transparent p-6 lg:p-0 shadow-sums-lg lg:shadow-none border-b lg:border-none border-sums-line`}>
        <Link to="/" className="hover:text-sums-burgundy transition-colors relative group w-full lg:w-auto text-center py-2 lg:py-0">
          El Proyecto
          <span className={`absolute left-0 right-0 -bottom-2 h-[2px] bg-sums-gold scale-x-0 origin-left transition-transform duration-150 ease-out group-hover:scale-x-100 hidden lg:block ${location.pathname === '/' ? 'scale-x-100' : ''}`}></span>
        </Link>
        <Link to="/stack" className="hover:text-sums-burgundy transition-colors relative group w-full lg:w-auto text-center py-2 lg:py-0">
          Stack Técnico
          <span className={`absolute left-0 right-0 -bottom-2 h-[2px] bg-sums-gold scale-x-0 origin-left transition-transform duration-150 ease-out group-hover:scale-x-100 hidden lg:block ${location.pathname === '/stack' ? 'scale-x-100' : ''}`}></span>
        </Link>
        <Link to="/privacidad" className="hover:text-sums-burgundy transition-colors relative group w-full lg:w-auto text-center py-2 lg:py-0">
          Privacidad
          <span className={`absolute left-0 right-0 -bottom-2 h-[2px] bg-sums-gold scale-x-0 origin-left transition-transform duration-150 ease-out group-hover:scale-x-100 hidden lg:block ${location.pathname === '/privacidad' ? 'scale-x-100' : ''}`}></span>
        </Link>
      </nav>
    </header>
  );
}
