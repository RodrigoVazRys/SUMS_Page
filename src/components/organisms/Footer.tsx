import logo from '../../assets/imss-bienestar-logo.png';

export default function Footer() {
  return (
    <footer className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-[28px] items-center px-[clamp(20px,5vw,84px)] py-[40px] text-white/80 bg-sums-green-dark">
      <img src={logo} alt="IMSS Bienestar Servicios Publicos de Salud" className="w-[220px] p-[10px] bg-sums-white rounded-[8px] mx-auto sm:mx-0" />
      <p className="m-0 max-w-[720px] text-center sm:text-left">SUMS | Sistema Unidad Medica Suchiapa. Propuesta academica para captura, seguridad y analisis de salud comunitaria.</p>
    </footer>
  );
}
