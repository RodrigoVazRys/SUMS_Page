export default function Problem() {
  return (
    <section className="px-[clamp(20px,5vw,84px)] py-[clamp(68px,8vw,116px)] bg-sums-white border-y border-sums-line" id="sistema">
      <div className="grid grid-cols-1 md:grid-cols-[minmax(240px,0.8fr)_minmax(280px,1.2fr)] gap-[clamp(24px,5vw,72px)] max-w-[1180px] mx-auto items-center">
        <div>
          <p className="m-0 mb-[12px] text-sums-gold text-[12px] font-black tracking-normal uppercase">Problema real</p>
          <h2 className="m-0 text-sums-burgundy text-[clamp(30px,4vw,54px)] leading-[1.08] tracking-normal font-bold">La cedula en papel retrasa la prevencion.</h2>
        </div>
        <p className="m-0 text-sums-muted text-[20px]">
          En campo puede no haber internet, los datos se consolidan tarde y el personal de salud pierde visibilidad sobre riesgos familiares, vivienda, vacunacion, enfermedades cronicas y uso de servicios. SUMS no es un expediente clinico ni una agenda de citas: es una herramienta para convertir informacion familiar en decisiones preventivas.
        </p>
      </div>
    </section>
  );
}
