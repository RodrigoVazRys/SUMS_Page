export default function Security() {
  return (
    <section className="px-[clamp(20px,5vw,84px)] py-[clamp(68px,8vw,116px)]" id="seguridad">
      <div className="max-w-[900px] mx-auto mb-[42px] text-center">
        <p className="m-0 mb-[12px] text-sums-gold text-[12px] font-black uppercase tracking-normal">Seguridad de la informacion</p>
        <h2 className="mt-0 text-sums-burgundy text-[clamp(30px,4vw,54px)] leading-[1.08] tracking-normal font-bold">Datos sensibles protegidos desde el dispositivo</h2>
        <p className="max-w-[760px] mx-auto text-sums-muted text-[18px]">El riesgo principal no es tecnico solamente: son datos de salud y domicilio. La seguridad debe aplicarse en movil, API, bases de datos y dashboard.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[18px] max-w-[1220px] mx-auto">
        <article className="min-h-[250px] p-[28px] bg-sums-white border border-sums-line rounded-[8px] shadow-sums-sm border-t-[5px] border-t-sums-green">
          <h3 className="mt-0 text-sums-green-dark text-[20px] leading-[1.2] font-bold">Offline seguro</h3>
          <p className="mb-0 text-sums-muted">Base local cifrada, tokens en almacenamiento seguro, bloqueo por inactividad y borrado controlado si el usuario pierde acceso.</p>
        </article>
        <article className="min-h-[250px] p-[28px] bg-sums-white border border-sums-line rounded-[8px] shadow-sums-sm border-t-[5px] border-t-sums-green">
          <h3 className="mt-0 text-sums-green-dark text-[20px] leading-[1.2] font-bold">OWASP aplicado</h3>
          <p className="mb-0 text-sums-muted">Control de acceso, HTTPS, validacion de entradas, queries parametrizadas, CORS restringido y secretos fuera del repositorio.</p>
        </article>
        <article className="min-h-[250px] p-[28px] bg-sums-white border border-sums-line rounded-[8px] shadow-sums-sm border-t-[5px] border-t-sums-green">
          <h3 className="mt-0 text-sums-green-dark text-[20px] leading-[1.2] font-bold">Perfiles de usuario</h3>
          <p className="mb-0 text-sums-muted">Administrador, encuestador, supervisor y analista con permisos distintos para captura, consulta, reportes y gestion.</p>
        </article>
        <article className="min-h-[250px] p-[28px] bg-sums-white border border-sums-line rounded-[8px] shadow-sums-sm border-t-[5px] border-t-sums-green">
          <h3 className="mt-0 text-sums-green-dark text-[20px] leading-[1.2] font-bold">Analitica con privacidad</h3>
          <p className="mb-0 text-sums-muted">La base analitica debe usar datos anonimizados o agregados para reducir exposicion de nombres, domicilios y detalles clinicos.</p>
        </article>
      </div>
    </section>
  );
}
