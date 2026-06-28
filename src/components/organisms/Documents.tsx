export default function Documents() {
  return (
    <section className="px-[clamp(20px,5vw,84px)] py-[clamp(68px,8vw,116px)] bg-sums-white border-t border-sums-line">
      <div className="grid grid-cols-1 md:grid-cols-[minmax(260px,0.8fr)_minmax(300px,1.2fr)] gap-[28px] items-center max-w-[1220px] mx-auto">
        <div>
          <p className="m-0 mb-[12px] text-sums-gold text-[12px] font-black uppercase tracking-normal">Documentos base</p>
          <h2 className="m-0 text-sums-burgundy text-[clamp(30px,4vw,54px)] leading-[1.08] tracking-normal font-bold">Fundamento institucional y operativo</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[12px]">
          <a href="/GRAN%20MANUAL%20IMSS%20BIENESTAR%2009Enero25.pdf" target="_blank" rel="noopener" className="flex items-center min-h-[76px] p-[16px] text-sums-green-dark no-underline font-black bg-sums-paper border border-sums-line rounded-[8px] hover:border-sums-gold transition-colors">Manual de identidad</a>
          <a href="/Guia-para-el-registro-de-Cedula-de-Microdiagnostico-Familiar.pdf" target="_blank" rel="noopener" className="flex items-center min-h-[76px] p-[16px] text-sums-green-dark no-underline font-black bg-sums-paper border border-sums-line rounded-[8px] hover:border-sums-gold transition-colors">Guia de registro</a>
          <a href="/CEDULA-MICRODIAGNOSTICO-FAMILIAR-IMSS-BIENESTAR.pdf" target="_blank" rel="noopener" className="flex items-center min-h-[76px] p-[16px] text-sums-green-dark no-underline font-black bg-sums-paper border border-sums-line rounded-[8px] hover:border-sums-gold transition-colors">Cedula oficial</a>
        </div>
      </div>
    </section>
  );
}
