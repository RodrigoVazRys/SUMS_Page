export default function Documents() {
  return (
    <section className="px-[clamp(20px,5vw,84px)] py-[clamp(68px,8vw,116px)] bg-sums-white border-t border-sums-line">
      <div className="grid grid-cols-1 md:grid-cols-[minmax(260px,0.8fr)_minmax(300px,1.2fr)] gap-[28px] items-center max-w-[1220px] mx-auto">
        <div>
          <p className="m-0 mb-[12px] text-sums-gold text-[12px] font-black uppercase tracking-normal">Documentos base</p>
          <h2 className="m-0 text-sums-burgundy text-[clamp(30px,4vw,54px)] leading-[1.08] tracking-normal font-bold">Fundamento institucional y operativo</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[12px]">
          <a href="/GRAN%20MANUAL%20IMSS%20BIENESTAR%2009Enero25.pdf" target="_blank" rel="noopener" className="flex items-center min-h-[76px] p-[16px] text-sums-green-dark no-underline font-black bg-sums-paper border border-sums-line rounded-[8px] hover:border-sums-gold transition-colors">Manual de identidad</a>
          <a href="/Guia-para-el-registro-de-Cedula-de-Microdiagnostico-Familiar.pdf" target="_blank" rel="noopener" className="flex items-center min-h-[76px] p-[16px] text-sums-green-dark no-underline font-black bg-sums-paper border border-sums-line rounded-[8px] hover:border-sums-gold transition-colors">Guia de registro</a>
          <a href="/CEDULA-MICRODIAGNOSTICO-FAMILIAR-IMSS-BIENESTAR.pdf" target="_blank" rel="noopener" className="flex items-center min-h-[76px] p-[16px] text-sums-green-dark no-underline font-black bg-sums-paper border border-sums-line rounded-[8px] hover:border-sums-gold transition-colors">Cédula oficial</a>
          <a href="/DiagramasSOA.pdf" target="_blank" rel="noopener" className="flex items-center gap-[10px] min-h-[76px] p-[16px] no-underline font-black bg-sums-burgundy text-white border border-sums-burgundy rounded-[8px] hover:bg-sums-green-dark hover:border-sums-green-dark transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-[20px] h-[20px] shrink-0 opacity-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>
            Diagramas SOA
          </a>
        </div>
      </div>
    </section>
  );
}
