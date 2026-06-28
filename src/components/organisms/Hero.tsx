import heroBg from '../../assets/hero-sums-system.png';
import Button from '../atoms/Button';
import FeatureCard from '../molecules/FeatureCard';

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
          <Button href="#sistema">Ver funcionamiento</Button>
          <Button variant="outline" to="/stack">Descubrir Arquitectura y Stack Técnico</Button>
        </div>
        <div className="grid grid-cols-[repeat(3,minmax(0,1fr))] gap-[12px] w-[min(760px,100%)]" aria-label="Resumen del proyecto">
          <FeatureCard title="Sin Internet" description="Captura en campo con sincronización automática" />
          <FeatureCard title="Datos Seguros" description="Información protegida y privada en todo momento" />
          <FeatureCard title="Decisiones Claras" description="Visualiza indicadores para prevención comunitaria" />
        </div>
      </div>
    </section>
  );
}
