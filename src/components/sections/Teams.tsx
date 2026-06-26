export default function Teams() {
  return (
    <section className="px-[clamp(20px,5vw,84px)] py-[clamp(68px,8vw,116px)] bg-sums-mist">
      <div className="max-w-[900px] mx-auto mb-[42px] text-center">
        <p className="m-0 mb-[12px] text-sums-gold text-[12px] font-black uppercase tracking-normal">Division tecnica</p>
        <h2 className="mt-0 text-sums-burgundy text-[clamp(30px,4vw,54px)] leading-[1.08] tracking-normal font-bold">Dos equipos, responsabilidades separadas</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px] max-w-[1220px] mx-auto">
        <article className="p-[28px] bg-sums-white border border-sums-line rounded-[8px] shadow-sums-sm">
          <h3 className="mt-0 text-sums-green-dark text-[20px] leading-[1.2] font-bold">Equipo 1: Infraestructura, Control y Entorno</h3>
          <p className="mb-0 text-sums-muted">Construye la base de seguridad, levantamientos, cedulas y contexto fisico de las familias.</p>
          <div className="flex flex-wrap gap-[8px] mt-[22px]">
            <span className="px-[10px] py-[7px] text-sums-green-dark bg-[#f1eadb] border border-sums-gold/36 rounded-[6px] text-[12px] font-extrabold">User</span>
            <span className="px-[10px] py-[7px] text-sums-green-dark bg-[#f1eadb] border border-sums-gold/36 rounded-[6px] text-[12px] font-extrabold">UnidadSalud</span>
            <span className="px-[10px] py-[7px] text-sums-green-dark bg-[#f1eadb] border border-sums-gold/36 rounded-[6px] text-[12px] font-extrabold">Levantamiento</span>
            <span className="px-[10px] py-[7px] text-sums-green-dark bg-[#f1eadb] border border-sums-gold/36 rounded-[6px] text-[12px] font-extrabold">Entrevistador</span>
            <span className="px-[10px] py-[7px] text-sums-green-dark bg-[#f1eadb] border border-sums-gold/36 rounded-[6px] text-[12px] font-extrabold">Cedula</span>
            <span className="px-[10px] py-[7px] text-sums-green-dark bg-[#f1eadb] border border-sums-gold/36 rounded-[6px] text-[12px] font-extrabold">Vivienda</span>
            <span className="px-[10px] py-[7px] text-sums-green-dark bg-[#f1eadb] border border-sums-gold/36 rounded-[6px] text-[12px] font-extrabold">Direccion</span>
            <span className="px-[10px] py-[7px] text-sums-green-dark bg-[#f1eadb] border border-sums-gold/36 rounded-[6px] text-[12px] font-extrabold">ServiciosBasicos</span>
            <span className="px-[10px] py-[7px] text-sums-green-dark bg-[#f1eadb] border border-sums-gold/36 rounded-[6px] text-[12px] font-extrabold">Materiales</span>
            <span className="px-[10px] py-[7px] text-sums-green-dark bg-[#f1eadb] border border-sums-gold/36 rounded-[6px] text-[12px] font-extrabold">Animales</span>
          </div>
        </article>
        <article className="p-[28px] bg-sums-white border border-sums-line rounded-[8px] shadow-sums-sm">
          <h3 className="mt-0 text-sums-green-dark text-[20px] leading-[1.2] font-bold">Equipo 2: Perfil Clinico y Sociodemografico</h3>
          <p className="mb-0 text-sums-muted">Construye el nucleo de personas y el historial necesario para estadisticas, salud y vacunacion.</p>
          <div className="flex flex-wrap gap-[8px] mt-[22px]">
            <span className="px-[10px] py-[7px] text-sums-green-dark bg-[#f1eadb] border border-sums-gold/36 rounded-[6px] text-[12px] font-extrabold">Persona</span>
            <span className="px-[10px] py-[7px] text-sums-green-dark bg-[#f1eadb] border border-sums-gold/36 rounded-[6px] text-[12px] font-extrabold">Familia</span>
            <span className="px-[10px] py-[7px] text-sums-green-dark bg-[#f1eadb] border border-sums-gold/36 rounded-[6px] text-[12px] font-extrabold">Educacion</span>
            <span className="px-[10px] py-[7px] text-sums-green-dark bg-[#f1eadb] border border-sums-gold/36 rounded-[6px] text-[12px] font-extrabold">DatosLaborales</span>
            <span className="px-[10px] py-[7px] text-sums-green-dark bg-[#f1eadb] border border-sums-gold/36 rounded-[6px] text-[12px] font-extrabold">SaludFamiliar</span>
            <span className="px-[10px] py-[7px] text-sums-green-dark bg-[#f1eadb] border border-sums-gold/36 rounded-[6px] text-[12px] font-extrabold">EstiloVida</span>
            <span className="px-[10px] py-[7px] text-sums-green-dark bg-[#f1eadb] border border-sums-gold/36 rounded-[6px] text-[12px] font-extrabold">ServiciosSalud</span>
            <span className="px-[10px] py-[7px] text-sums-green-dark bg-[#f1eadb] border border-sums-gold/36 rounded-[6px] text-[12px] font-extrabold">Vacunas</span>
            <span className="px-[10px] py-[7px] text-sums-green-dark bg-[#f1eadb] border border-sums-gold/36 rounded-[6px] text-[12px] font-extrabold">Vacunacion</span>
            <span className="px-[10px] py-[7px] text-sums-green-dark bg-[#f1eadb] border border-sums-gold/36 rounded-[6px] text-[12px] font-extrabold">Dosis</span>
          </div>
        </article>
      </div>
    </section>
  );
}
