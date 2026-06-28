export default function Subjects() {
  return (
    <section className="px-[clamp(20px,5vw,84px)] py-[clamp(68px,8vw,116px)] bg-sums-paper" id="materias">
      <div className="max-w-[900px] mx-auto mb-[42px] text-center">
        <p className="m-0 mb-[12px] text-sums-gold text-[12px] font-black uppercase tracking-normal">Integracion academica</p>
        <h2 className="mt-0 text-sums-burgundy text-[clamp(30px,4vw,54px)] leading-[1.08] tracking-normal font-bold">Que aporta cada materia</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px] max-w-[1220px] mx-auto">
        <article className="min-h-[248px] p-[28px] bg-sums-white border border-sums-line rounded-[8px] shadow-sums-sm border-t-[5px] border-t-sums-green">
          <h3 className="mt-0 text-sums-green-dark text-[20px] leading-[1.2] font-bold">Programacion para moviles 2</h3>
          <p className="mb-0 text-sums-muted">App Flutter offline-first, captura por modulos, validacion local, cifrado, sincronizacion diferida y manejo de conflictos.</p>
        </article>
        <article className="min-h-[248px] p-[28px] bg-sums-white border border-sums-line rounded-[8px] shadow-sums-sm border-t-[5px] border-t-sums-gold">
          <h3 className="mt-0 text-sums-green-dark text-[20px] leading-[1.2] font-bold">Administracion de proyectos de software</h3>
          <p className="mb-0 text-sums-muted">Planificacion, organizacion, control de recursos y tiempo, protocolos, procedimientos, backlog, cronograma, riesgos y seguimiento.</p>
        </article>
        <article className="min-h-[248px] p-[28px] bg-sums-white border border-sums-line rounded-[8px] shadow-sums-sm border-t-[5px] border-t-sums-burgundy">
          <h3 className="mt-0 text-sums-green-dark text-[20px] leading-[1.2] font-bold">Arquitectura orientada a servicios</h3>
          <p className="mb-0 text-sums-muted">Docker, balanceador, API modular, contratos REST, orquestacion estructurada, healthchecks y separacion de BD operativa/analitica.</p>
        </article>
        <article className="min-h-[248px] p-[28px] bg-sums-white border border-sums-line rounded-[8px] shadow-sums-sm border-t-[5px] border-t-sums-green">
          <h3 className="mt-0 text-sums-green-dark text-[20px] leading-[1.2] font-bold">Mineria de datos</h3>
          <p className="mb-0 text-sums-muted">Limpieza, preprocesamiento, EDA, estadisticas, graficas, entrenamiento y validacion del modelo predictivo.</p>
        </article>
        <article className="min-h-[248px] p-[28px] bg-sums-white border border-sums-line rounded-[8px] shadow-sums-sm border-t-[5px] border-t-sums-gold">
          <h3 className="mt-0 text-sums-green-dark text-[20px] leading-[1.2] font-bold">Seguridad de la informacion</h3>
          <p className="mb-0 text-sums-muted">Cifrado offline, roles, JWT, hash de contrasenas, OWASP, auditoria, anonimizacion y proteccion de datos sensibles.</p>
        </article>
        <article className="min-h-[248px] p-[28px] bg-sums-white border border-sums-line rounded-[8px] shadow-sums-sm border-t-[5px] border-t-sums-burgundy">
          <h3 className="mt-0 text-sums-green-dark text-[20px] leading-[1.2] font-bold">Expresion oral y escrita</h3>
          <p className="mb-0 text-sums-muted">Problematica, justificacion, objetivos, alcance, manual tecnico, manual de usuario, guion de exposicion y presentacion final.</p>
        </article>
      </div>
    </section>
  );
}
