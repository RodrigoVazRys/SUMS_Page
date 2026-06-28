export default function Soa() {
  return (
    <section className="px-[clamp(20px,5vw,84px)] py-[clamp(68px,8vw,116px)] text-sums-white bg-sums-burgundy" id="soa">
      <div className="max-w-[900px] mx-auto mb-[42px] text-center">
        <p className="m-0 mb-[12px] text-sums-gold text-[12px] font-black uppercase tracking-normal">Arquitectura orientada a servicios</p>
        <h2 className="mt-0 text-sums-white text-[clamp(30px,4vw,54px)] leading-[1.08] tracking-normal font-bold">Contenedores, escalabilidad y separacion de cargas</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[14px] max-w-[1140px] mx-auto" aria-label="Diagrama de arquitectura">
        <div className="flex items-center justify-center min-h-[118px] p-[18px] text-center font-black bg-white/10 border border-white/20 rounded-[8px]">Flutter offline</div>
        <div className="flex items-center justify-center min-h-[118px] p-[18px] text-center font-black bg-sums-gold/30 border border-white/20 rounded-[8px]">API Gateway / balanceador</div>
        <div className="flex items-center justify-center min-h-[118px] p-[18px] text-center font-black bg-white/10 border border-white/20 rounded-[8px]">Servicios Node.js</div>
        <div className="flex items-center justify-center min-h-[118px] p-[18px] text-center font-black bg-sums-gold/30 border border-white/20 rounded-[8px]">PostgreSQL operativa</div>
        <div className="flex items-center justify-center min-h-[118px] p-[18px] text-center font-black bg-white/10 border border-white/20 rounded-[8px]">Worker ETL Python</div>
        <div className="flex items-center justify-center min-h-[118px] p-[18px] text-center font-black bg-sums-gold/30 border border-white/20 rounded-[8px]">PostgreSQL analitica</div>
        <div className="flex items-center justify-center min-h-[118px] p-[18px] text-center font-black bg-white/10 border border-white/20 rounded-[8px]">FastAPI modelo</div>
        <div className="flex items-center justify-center min-h-[118px] p-[18px] text-center font-black bg-sums-gold/30 border border-white/20 rounded-[8px]">Dashboard web</div>
      </div>
    </section>
  );
}
