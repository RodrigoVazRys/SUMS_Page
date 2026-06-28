export default function Roles() {
  return (
    <section className="px-[clamp(20px,5vw,84px)] py-[clamp(68px,8vw,116px)] bg-sums-white" id="roles">
      <div className="max-w-[900px] mx-auto mb-[42px] text-center">
        <p className="m-0 mb-[12px] text-sums-gold text-[12px] font-black uppercase tracking-normal">Usuarios y plataforma</p>
        <h2 className="mt-0 text-sums-burgundy text-[clamp(30px,4vw,54px)] leading-[1.08] tracking-normal font-bold">Interfaces por rol y tablero de analisis</h2>
        <p className="max-w-[760px] mx-auto text-sums-muted text-[18px]">La informacion capturada en campo se consume desde una plataforma web para monitoreo, estadisticas, reportes y seguimiento de zonas o familias con mayor vulnerabilidad.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1.1fr_1fr] gap-[18px] max-w-[1220px] mx-auto">
        <article className="min-h-[300px] p-[28px] bg-sums-paper border border-sums-line rounded-[8px] shadow-sums-sm border-t-[5px] border-t-sums-green">
          <h3 className="mt-0 text-sums-green-dark text-[20px] leading-[1.2] font-bold">Encuestadores de campo</h3>
          <p className="mb-0 text-sums-muted">Usan la app movil para capturar cedulas aun sin internet, revisar pendientes, validar datos y sincronizar cuando recuperan conexion.</p>
        </article>
        <article className="min-h-[300px] p-[28px] bg-sums-paper border border-sums-line rounded-[8px] shadow-sums-sm border-t-[5px] border-t-sums-green">
          <h3 className="mt-0 text-sums-green-dark text-[20px] leading-[1.2] font-bold">Autoridades de salud</h3>
          <p className="mb-0 text-sums-muted">Consultan dashboards, reportes predictivos, estadisticas por zona y seguimiento de familias con prioridad preventiva.</p>
        </article>
        <article className="min-h-[300px] p-[28px] bg-sums-paper border border-sums-line rounded-[8px] shadow-sums-sm border-t-[5px] border-t-sums-burgundy">
          <h3 className="mt-0 text-sums-green-dark text-[20px] leading-[1.2] font-bold">Dashboard web</h3>
          <ul className="mt-[18px] pl-[20px] text-sums-muted list-disc">
            <li className="mb-[10px]">Piramide poblacional por edad y sexo.</li>
            <li className="mb-[10px]">Distribucion de enfermedades cronicas.</li>
            <li className="mb-[10px]">Calidad de vivienda y servicios basicos.</li>
            <li className="mb-[10px]">Reportes de vulnerabilidad familiar.</li>
          </ul>
        </article>
        <article className="min-h-[300px] p-[28px] bg-sums-paper border border-sums-line rounded-[8px] shadow-sums-sm border-t-[5px] border-t-sums-gold">
          <h3 className="mt-0 text-sums-green-dark text-[20px] leading-[1.2] font-bold">Stack propuesto</h3>
          <div className="flex flex-wrap gap-[9px] mt-[20px]">
            <span className="px-[11px] py-[8px] text-sums-green-dark bg-sums-white border border-sums-gold/40 rounded-[6px] text-[13px] font-black">Flutter</span>
            <span className="px-[11px] py-[8px] text-sums-green-dark bg-sums-white border border-sums-gold/40 rounded-[6px] text-[13px] font-black">Node.js</span>
            <span className="px-[11px] py-[8px] text-sums-green-dark bg-sums-white border border-sums-gold/40 rounded-[6px] text-[13px] font-black">TypeScript</span>
            <span className="px-[11px] py-[8px] text-sums-green-dark bg-sums-white border border-sums-gold/40 rounded-[6px] text-[13px] font-black">PostgreSQL</span>
            <span className="px-[11px] py-[8px] text-sums-green-dark bg-sums-white border border-sums-gold/40 rounded-[6px] text-[13px] font-black">Docker</span>
            <span className="px-[11px] py-[8px] text-sums-green-dark bg-sums-white border border-sums-gold/40 rounded-[6px] text-[13px] font-black">React</span>
            <span className="px-[11px] py-[8px] text-sums-green-dark bg-sums-white border border-sums-gold/40 rounded-[6px] text-[13px] font-black">Python</span>
            <span className="px-[11px] py-[8px] text-sums-green-dark bg-sums-white border border-sums-gold/40 rounded-[6px] text-[13px] font-black">FastAPI</span>
          </div>
        </article>
      </div>
    </section>
  );
}
