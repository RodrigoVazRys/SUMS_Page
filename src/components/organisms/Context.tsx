export default function Context() {
  return (
    <section className="px-[clamp(20px,5vw,84px)] py-[clamp(68px,8vw,116px)] bg-gradient-to-b from-sums-paper to-sums-white" id="contexto">
      <div className="max-w-[900px] mx-auto mb-[42px] text-center">
        <p className="m-0 mb-[12px] text-sums-gold text-[12px] font-black uppercase tracking-normal">Contexto institucional</p>
        <h2 className="mt-0 text-sums-burgundy text-[clamp(30px,4vw,54px)] leading-[1.08] tracking-normal font-bold">Cedula de Microdiagnostico Familiar</h2>
        <p className="max-w-[760px] mx-auto text-sums-muted text-[18px]">La cedula permite conocer la situacion actual de las familias atendidas por la unidad de salud, identificar areas de oportunidad y disenar estrategias de promocion, prevencion y atencion integral.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px] max-w-[1120px] mx-auto mb-[18px]">
        <article className="p-[28px] bg-sums-white border border-sums-line rounded-[8px] shadow-sums-sm">
          <h3 className="mt-0 text-sums-green-dark text-[20px] leading-[1.2] font-bold">Documento rector</h3>
          <p className="mb-0 text-sums-muted">El manual de identidad define colores, tipografia y uso correcto del logosimbolo IMSS-BIENESTAR. La guia de registro explica como llenar la cedula con criterios uniformes para que la informacion sea comparable.</p>
        </article>
        <article className="p-[28px] bg-sums-white border border-sums-line rounded-[8px] shadow-sums-sm">
          <h3 className="mt-0 text-sums-green-dark text-[20px] leading-[1.2] font-bold">Problema operativo</h3>
          <p className="mb-0 text-sums-muted">Cuando los datos familiares se capturan en papel o sin estructura digital, se dificulta detectar riesgos, dar seguimiento y planear acciones alineadas al modelo de atencion primaria.</p>
        </article>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px] max-w-[1120px] mx-auto">
        <article className="p-[28px] bg-sums-white border border-sums-line rounded-[8px] shadow-sums-sm">
          <span className="inline-flex items-center justify-center w-[42px] h-[42px] mb-[18px] text-sums-white bg-sums-gold rounded-full font-black">01</span>
          <h3 className="mt-0 text-sums-green-dark text-[20px] leading-[1.2] font-bold">Identificar necesidades</h3>
          <p className="mb-0 text-sums-muted">Detectar condiciones sociales, clinicas y de vivienda que influyen en la salud familiar.</p>
        </article>
        <article className="p-[28px] bg-sums-white border border-sums-line rounded-[8px] shadow-sums-sm">
          <span className="inline-flex items-center justify-center w-[42px] h-[42px] mb-[18px] text-sums-white bg-sums-gold rounded-full font-black">02</span>
          <h3 className="mt-0 text-sums-green-dark text-[20px] leading-[1.2] font-bold">Fortalecer atencion primaria</h3>
          <p className="mb-0 text-sums-muted">Apoyar al personal de salud con informacion util para intervenciones preventivas.</p>
        </article>
        <article className="p-[28px] bg-sums-white border border-sums-line rounded-[8px] shadow-sums-sm">
          <span className="inline-flex items-center justify-center w-[42px] h-[42px] mb-[18px] text-sums-white bg-sums-gold rounded-full font-black">03</span>
          <h3 className="mt-0 text-sums-green-dark text-[20px] leading-[1.2] font-bold">Uniformar criterios</h3>
          <p className="mb-0 text-sums-muted">Registrar datos de unidad, entrevistador, familia, vivienda y salud con un formato comun.</p>
        </article>
      </div>
    </section>
  );
}
