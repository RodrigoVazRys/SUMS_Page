import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';

export default function Privacy() {
  return (
    <>
      <Header />
      <main className="pt-[132px] pb-[84px] px-[clamp(20px,5vw,84px)] bg-sums-white min-h-[80vh]">
        <div className="max-w-[860px] mx-auto bg-sums-paper p-[clamp(24px,5vw,54px)] rounded-[12px] border border-sums-line shadow-sums-sm">
          <p className="text-sums-gold text-[12px] font-black uppercase tracking-normal mb-[12px]">Legal</p>
          <h1 className="text-sums-burgundy text-[clamp(28px,4vw,48px)] leading-[1.08] font-bold mb-[32px] pb-[24px] border-b border-sums-line">
            AVISO DE PRIVACIDAD INTEGRAL <br/>
            <span className="text-[65%] text-sums-green-dark">PROYECTO SUMS</span>
          </h1>

          <div className="text-sums-muted text-[16px] leading-[1.7] space-y-[24px]">
            <section>
              <h2 className="text-sums-green-dark text-[18px] font-bold mb-[12px]">I. IDENTIDAD Y DOMICILIO DEL RESPONSABLE</h2>
              <p>
                <strong>La Coordinación Titular del Proyecto SUMS (Sistema Unidad Médica Suchiapa)</strong>, con domicilio operativo en Tuxtla Gutiérrez, Chiapas, C.P. 29010, es responsable de recabar, usar y proteger sus datos personales bajo estrictos estándares de seguridad y confidencialidad.
              </p>
            </section>

            <section>
              <h2 className="text-sums-green-dark text-[18px] font-bold mb-[12px]">II. DATOS PERSONALES Y SENSIBLES RECABADOS</h2>
              <p className="mb-[12px]">Para los fines descritos, recabaremos:</p>
              <ul className="list-disc pl-[24px] space-y-[8px]">
                <li><strong>Datos de identificación y contacto:</strong> nombre, edad, sexo, domicilio, teléfono, geolocalización de vivienda.</li>
                <li><strong>Datos sociodemográficos:</strong> materiales de vivienda, acceso a servicios básicos.</li>
                <li><strong>Datos Sensibles:</strong> Estado de salud clínico y físico, antecedentes médicos, discapacidades, esquema de vacunación, hábitos de higiene/alimentación y origen étnico.</li>
              </ul>
              <p className="mt-[12px] font-bold text-sums-burgundy">
                Al ser datos sensibles, garantizamos su cifrado y especial protección.
              </p>
            </section>

            <section>
              <h2 className="text-sums-green-dark text-[18px] font-bold mb-[12px]">III. FINALIDADES DEL TRATAMIENTO</h2>
              <p className="font-bold text-sums-ink mb-[8px]">Primarias (Necesarias para el servicio):</p>
              <ol className="list-decimal pl-[24px] mb-[16px] space-y-[6px]">
                <li>Integrar una base de datos para el análisis epidemiológico y de salud pública.</li>
                <li>Desarrollar y entrenar modelos de Inteligencia Artificial (IA) para predecir zonas con factores de riesgo sanitario.</li>
                <li>Generar estadísticas e indicadores de apoyo para programas de prevención en salud.</li>
              </ol>
              <p className="font-bold text-sums-ink mb-[8px]">Secundarias:</p>
              <ol className="list-decimal pl-[24px] mb-[16px] space-y-[6px]">
                <li>Investigación científica y académica (utilizando datos estrictamente anonimizados).</li>
                <li>Mejora de algoritmos de software (ej. captura OCR).</li>
              </ol>
              <p>
                Si no desea el uso de sus datos para fines secundarios, puede notificarlo a nuestro correo de contacto.
              </p>
            </section>

            <section>
              <h2 className="text-sums-green-dark text-[18px] font-bold mb-[12px]">IV. TRANSFERENCIA DE DATOS</h2>
              <p>
                Sus datos no serán comercializados. Únicamente podrán transferirse a autoridades sanitarias (ej. IMSS Bienestar) cuando exista un requerimiento legal o epidemiológico, o a instituciones académicas bajo protocolos de anonimización absoluta (sin posibilidad de identificación personal) para fines de investigación estadística.
              </p>
            </section>

            <section>
              <h2 className="text-sums-green-dark text-[18px] font-bold mb-[12px]">V. DERECHOS ARCO Y EXCEPCIONES LEGALES (NOM-004)</h2>
              <p className="mb-[12px]">
                Usted tiene derecho a conocer, rectificar, cancelar u oponerse (Derechos ARCO) al uso de sus datos mediante solicitud vía correo electrónico.
              </p>
              <p>
                <strong>Excepción de Cancelación:</strong> Conforme a la Ley (LGPDPPSO) y a la NOM-004-SSA3-2012 (Del Expediente Clínico), el derecho a la eliminación de datos médicos podrá ser denegado debido a que el tratamiento responde a obligaciones de salud pública, control epidemiológico y resguardo legal de historiales. En estos casos, se aplicarán métodos de eliminación lógica ("Soft-Delete") para mantener la trazabilidad e integridad de la base de datos oficial.
              </p>
            </section>

            <section>
              <h2 className="text-sums-green-dark text-[18px] font-bold mb-[12px]">VI. COOKIES Y ACTUALIZACIONES</h2>
              <p>
                Nuestro portal emplea cookies para mejorar la experiencia de sesión técnica, sin vincularlas a su expediente clínico. Cualquier modificación a este aviso de privacidad será notificada a través del portal web oficial del sistema SUMS.
              </p>
            </section>

            <div className="pt-[24px] mt-[32px] border-t border-sums-line text-[14px] text-sums-muted text-right">
              Última actualización: Junio de 2026.
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
