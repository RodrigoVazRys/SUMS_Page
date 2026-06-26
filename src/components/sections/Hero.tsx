import { Link } from 'react-router-dom';
import heroBg from '../../assets/hero-sums-system.png';

export default function Hero() {
  return (
    <section className="relative min-h-[94vh] flex items-center pt-[132px] px-[clamp(20px,5vw,84px)] pb-[64px] overflow-hidden isolate" id="inicio" aria-label="Presentacion SUMS">
      <img className="absolute inset-0 w-full h-full object-cover object-center -z-20" src={heroBg} alt="" />
      <div className="absolute inset-0 -z-10" style={{
        background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.92) 0%, rgba(255, 255, 255, 0.8) 42%, rgba(255, 255, 255, 0.08) 72%)'
      }}></div>
      <div className="w-[min(760px,100%)] min-w-0">
        <p className="m-0 mb-3 text-sums-gold text-[12px] font-black uppercase tracking-normal">Proyecto Integrador | Ingenieria en Software</p>
        <h1 className="max-w-[760px] mb-[22px] text-sums-green-dark text-[clamp(40px,5.4vw,72px)] font-bold leading-[0.98] tracking-normal">
          SUMS: Sistema Unidad Medica Suchiapa
        </h1>
        <p className="w-[min(660px,100%)] break-words mb-[30px] text-[#34423b] text-[clamp(17px,1.8vw,22px)]">
          Plataforma para digitalizar la Cedula de Microdiagnostico Familiar de IMSS-BIENESTAR, capturar datos en campo sin internet, sincronizarlos de forma segura y convertirlos en indicadores utiles para salud comunitaria.
        </p>
        <div className="flex flex-wrap gap-[14px] mb-[34px]">
          <a className="inline-flex items-center justify-center min-h-[48px] px-[22px] py-[12px] border border-transparent rounded-[8px] font-black no-underline text-sums-white bg-sums-green hover:bg-sums-green-dark transition-colors" href="#sistema">Ver funcionamiento</a>
          <Link className="inline-flex items-center justify-center min-h-[48px] px-[22px] py-[12px] border border-sums-gold rounded-[8px] font-black no-underline text-sums-burgundy bg-white/75 hover:bg-white transition-colors" to="/stack">Descubrir Arquitectura y Stack Técnico</Link>
        </div>
        <div className="grid grid-cols-[repeat(3,minmax(0,1fr))] gap-[12px] w-[min(760px,100%)]" aria-label="Resumen del proyecto">
          <div className="min-h-[112px] p-[18px] bg-white/82 border border-sums-gold/35 rounded-[8px] shadow-sums-lg">
            <strong className="block text-sums-burgundy text-[18px] leading-[1.1] mb-[8px]">Sin Internet</strong>
            <span className="text-sums-muted text-[13px] font-bold">Captura en campo con sincronización automática</span>
          </div>
          <div className="min-h-[112px] p-[18px] bg-white/82 border border-sums-gold/35 rounded-[8px] shadow-sums-lg">
            <strong className="block text-sums-burgundy text-[18px] leading-[1.1] mb-[8px]">Datos Seguros</strong>
            <span className="text-sums-muted text-[13px] font-bold">Información protegida y privada en todo momento</span>
          </div>
          <div className="min-h-[112px] p-[18px] bg-white/82 border border-sums-gold/35 rounded-[8px] shadow-sums-lg">
            <strong className="block text-sums-burgundy text-[18px] leading-[1.1] mb-[8px]">Decisiones Claras</strong>
            <span className="text-sums-muted text-[13px] font-bold">Visualiza indicadores para prevención comunitaria</span>
          </div>
        </div>
      </div>
    </section>
  );
}
