export default function Intelligence() {
  return (
    <section className="px-[clamp(20px,5vw,84px)] py-[clamp(68px,8vw,116px)] text-sums-white bg-sums-green" id="inteligencia">
      <div className="max-w-[900px] mx-auto mb-[42px] text-center">
        <p className="m-0 mb-[12px] text-sums-gold text-[12px] font-black uppercase tracking-normal">Inteligencia y Análisis</p>
        <h2 className="mt-0 text-sums-white text-[clamp(30px,4vw,54px)] leading-[1.08] tracking-normal font-bold">Análisis epidemiológico</h2>
        <p className="max-w-[760px] mx-auto text-sums-white text-[18px]">No es un simple registro. Es un sistema inteligente que convierte la información familiar en patrones, alertas e indicadores de salud comunitaria.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_0.8fr] gap-[18px] max-w-[1220px] mx-auto">
        <article className="min-h-[330px] p-[28px] bg-white/10 border border-white/20 rounded-[8px]">
          <h3 className="mt-0 text-sums-white text-[20px] leading-[1.2] font-bold">Primero: Preparación de la información</h3>
          <ul className="mt-[18px] p-0 list-none">
            <li className="relative pl-[22px] mb-[14px] text-white/85 before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-[8px] before:h-[8px] before:bg-sums-gold before:rounded-full">El sistema identifica y corrige automáticamente errores de captura, duplicados o información faltante.</li>
            <li className="relative pl-[22px] mb-[14px] text-white/85 before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-[8px] before:h-[8px] before:bg-sums-gold before:rounded-full">Revisa las condiciones generales como edad, vivienda, enfermedades detectadas y servicios de salud usados.</li>
            <li className="relative pl-[22px] mb-[14px] text-white/85 before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-[8px] before:h-[8px] before:bg-sums-gold before:rounded-full">Construye gráficos fáciles de leer sobre la población, como pirámides de edades y distribución de zonas de riesgo.</li>
          </ul>
        </article>
        <article className="min-h-[330px] p-[28px] bg-white/10 border border-white/20 rounded-[8px]">
          <h3 className="mt-0 text-sums-white text-[20px] leading-[1.2] font-bold">Después: Predicción de riesgos</h3>
          <ul className="mt-[18px] p-0 list-none">
            <li className="relative pl-[22px] mb-[14px] text-white/85 before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-[8px] before:h-[8px] before:bg-sums-gold before:rounded-full">Utilizando los datos históricos, el sistema aprende a identificar qué familias o zonas tienen mayor grado de vulnerabilidad.</li>
            <li className="relative pl-[22px] mb-[14px] text-white/85 before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-[8px] before:h-[8px] before:bg-sums-gold before:rounded-full">Genera puntuaciones de alerta para que los profesionales de salud sepan dónde deben priorizar las brigadas y los recursos médicos.</li>
          </ul>
        </article>
        <article className="min-h-[330px] p-[28px] bg-sums-burgundy border border-white/20 rounded-[8px]" aria-label="Ejemplo de indicador">
          <span className="text-white/70 text-[13px] font-extrabold uppercase">Indicador ejemplo</span>
          <strong className="block my-[16px] text-sums-white text-[clamp(28px,4vw,42px)] leading-[1.05] font-bold">Riesgo familiar alto</strong>
          <div className="h-[14px] mb-[18px] bg-white/20 rounded-full overflow-hidden">
            <i className="block h-full bg-sums-gold w-[72%]"></i>
          </div>
          <p className="mb-0 text-white/80">Condiciones de vivienda, enfermedades cronicas, vacunacion incompleta, edad y uso de servicios pueden alimentar un puntaje explicable.</p>
        </article>
      </div>
    </section>
  );
}
