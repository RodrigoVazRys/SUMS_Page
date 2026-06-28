export default function Flow() {
  return (
    <section className="px-[clamp(20px,5vw,84px)] py-[clamp(68px,8vw,116px)]">
      <div className="max-w-[900px] mx-auto mb-[42px] text-center">
        <p className="m-0 mb-[12px] text-sums-gold text-[12px] font-black uppercase tracking-normal">Funcionamiento</p>
        <h2 className="mt-0 text-sums-burgundy text-[clamp(30px,4vw,54px)] leading-[1.08] tracking-normal font-bold">Del levantamiento offline al tablero de decision</h2>
        <p className="max-w-[760px] mx-auto text-sums-muted text-[18px]">El sistema separa la captura operativa del analisis para proteger datos sensibles y mantener rendimiento en las consultas estadisticas.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-[14px] max-w-[1280px] mx-auto">
        {/* Step 01 */}
        <article className="relative min-h-[286px] p-[24px_18px] bg-sums-white border border-sums-line rounded-[8px] shadow-sums lg:after:content-[''] lg:after:absolute lg:after:top-[38px] lg:after:-right-[15px] lg:after:w-[15px] lg:after:h-[2px] lg:after:bg-sums-gold">
          <span className="inline-flex items-center justify-center w-[38px] h-[38px] mb-[20px] text-sums-white bg-sums-burgundy rounded-full text-[13px] font-black">01</span>
          <h3 className="mt-0 text-sums-green-dark text-[20px] leading-[1.2] font-bold">Captura Móvil</h3>
          <p className="mb-0 text-sums-muted text-[14px]">El personal utiliza una aplicación diseñada para ser amigable y eficiente en comunidades, acelerando el levantamiento de información.</p>
        </article>
        {/* Step 02 */}
        <article className="relative min-h-[286px] p-[24px_18px] bg-sums-white border border-sums-line rounded-[8px] shadow-sums lg:after:content-[''] lg:after:absolute lg:after:top-[38px] lg:after:-right-[15px] lg:after:w-[15px] lg:after:h-[2px] lg:after:bg-sums-gold">
          <span className="inline-flex items-center justify-center w-[38px] h-[38px] mb-[20px] text-sums-white bg-sums-burgundy rounded-full text-[13px] font-black">02</span>
          <h3 className="mt-0 text-sums-green-dark text-[20px] leading-[1.2] font-bold">Modo sin conexión</h3>
          <p className="mb-0 text-sums-muted text-[14px]">Los datos se guardan de manera segura en el dispositivo móvil incluso si no hay internet en la zona de trabajo.</p>
        </article>
        {/* Step 03 */}
        <article className="relative min-h-[286px] p-[24px_18px] bg-sums-white border border-sums-line rounded-[8px] shadow-sums lg:after:content-[''] lg:after:absolute lg:after:top-[38px] lg:after:-right-[15px] lg:after:w-[15px] lg:after:h-[2px] lg:after:bg-sums-gold">
          <span className="inline-flex items-center justify-center w-[38px] h-[38px] mb-[20px] text-sums-white bg-sums-burgundy rounded-full text-[13px] font-black">03</span>
          <h3 className="mt-0 text-sums-green-dark text-[20px] leading-[1.2] font-bold">Validación Automática</h3>
          <p className="mb-0 text-sums-muted text-[14px]">El sistema revisa que la información ingresada sea coherente y correcta, reduciendo drásticamente los errores humanos.</p>
        </article>
        {/* Step 04 */}
        <article className="relative min-h-[286px] p-[24px_18px] bg-sums-white border border-sums-line rounded-[8px] shadow-sums lg:after:content-[''] lg:after:absolute lg:after:top-[38px] lg:after:-right-[15px] lg:after:w-[15px] lg:after:h-[2px] lg:after:bg-sums-gold">
          <span className="inline-flex items-center justify-center w-[38px] h-[38px] mb-[20px] text-sums-white bg-sums-burgundy rounded-full text-[13px] font-black">04</span>
          <h3 className="mt-0 text-sums-green-dark text-[20px] leading-[1.2] font-bold">Sincronización Segura</h3>
          <p className="mb-0 text-sums-muted text-[14px]">Al recuperar la conexión a internet, la información de todos los encuestadores se unifica en una plataforma central protegida.</p>
        </article>
        {/* Step 05 */}
        <article className="relative min-h-[286px] p-[24px_18px] bg-sums-white border border-sums-line rounded-[8px] shadow-sums lg:after:content-[''] lg:after:absolute lg:after:top-[38px] lg:after:-right-[15px] lg:after:w-[15px] lg:after:h-[2px] lg:after:bg-sums-gold">
          <span className="inline-flex items-center justify-center w-[38px] h-[38px] mb-[20px] text-sums-white bg-sums-burgundy rounded-full text-[13px] font-black">05</span>
          <h3 className="mt-0 text-sums-green-dark text-[20px] leading-[1.2] font-bold">Procesamiento Inteligente</h3>
          <p className="mb-0 text-sums-muted text-[14px]">La información recolectada se organiza, se protege y se transforma automáticamente para descubrir áreas de oportunidad.</p>
        </article>
        {/* Step 06 */}
        <article className="relative min-h-[286px] p-[24px_18px] bg-sums-white border border-sums-line rounded-[8px] shadow-sums">
          <span className="inline-flex items-center justify-center w-[38px] h-[38px] mb-[20px] text-sums-white bg-sums-burgundy rounded-full text-[13px] font-black">06</span>
          <h3 className="mt-0 text-sums-green-dark text-[20px] leading-[1.2] font-bold">Tablero de Control</h3>
          <p className="mb-0 text-sums-muted text-[14px]">Las autoridades de salud pueden visualizar mapas y estadísticas claras para priorizar recursos y esfuerzos de prevención.</p>
        </article>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[14px] max-w-[1280px] mx-auto mt-[18px]" aria-label="Proceso de registro de la cedula">
        <article className="min-h-[142px] p-[20px] bg-sums-green-dark border border-sums-gold/40 rounded-[8px]">
          <strong className="block mb-[8px] text-sums-white text-[16px] font-bold">Unidad de salud</strong>
          <span className="text-white/75 text-[14px]">CLUES, municipio, distrito, entidad y datos de la unidad.</span>
        </article>
        <article className="min-h-[142px] p-[20px] bg-sums-green-dark border border-sums-gold/40 rounded-[8px]">
          <strong className="block mb-[8px] text-sums-white text-[16px] font-bold">Entrevistador</strong>
          <span className="text-white/75 text-[14px]">Nombre, cargo, turno, horario y responsable del levantamiento.</span>
        </article>
        <article className="min-h-[142px] p-[20px] bg-sums-green-dark border border-sums-gold/40 rounded-[8px]">
          <strong className="block mb-[8px] text-sums-white text-[16px] font-bold">Familia y vivienda</strong>
          <span className="text-white/75 text-[14px]">Domicilio, materiales, servicios, habitantes y convivencia con animales.</span>
        </article>
        <article className="min-h-[142px] p-[20px] bg-sums-green-dark border border-sums-gold/40 rounded-[8px]">
          <strong className="block mb-[8px] text-sums-white text-[16px] font-bold">Situacion de salud</strong>
          <span className="text-white/75 text-[14px]">Vacunacion, estilo de vida, enfermedades, tamizajes y servicios de salud.</span>
        </article>
      </div>
    </section>
  );
}
