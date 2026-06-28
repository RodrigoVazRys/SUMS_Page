import { Link } from 'react-router-dom';

export default function PrivacyShort() {
  return (
    <section className="px-[clamp(20px,5vw,84px)] py-[clamp(68px,8vw,116px)] bg-sums-mist border-t border-sums-line">
      <div className="max-w-[900px] mx-auto text-center">
        <h2 className="mt-0 mb-[22px] text-sums-burgundy text-[clamp(26px,3.5vw,42px)] leading-[1.08] font-bold">Aviso de Privacidad</h2>
        <p className="max-w-[760px] mx-auto text-sums-muted text-[17px] mb-[28px] text-justify sm:text-center">
          <strong>La Coordinación Titular del Proyecto SUMS</strong>, con domicilio operativo en Tuxtla Gutiérrez, Chiapas, C.P. 29010, es responsable del uso y protección de sus datos personales. Su información será utilizada de manera estrictamente confidencial para: integrar bases de datos con fines de análisis epidemiológico, desarrollar y entrenar modelos de Inteligencia Artificial para predecir riesgos de salud geográfica, y elaborar estadísticas de salud pública.
        </p>
        <p className="max-w-[760px] mx-auto text-sums-muted text-[17px] mb-[34px]">
          Si desea conocer qué datos específicos recabamos, el tratamiento de datos sensibles y cómo ejercer sus derechos ARCO, puede consultar nuestro Aviso de Privacidad Integral.
        </p>
        <Link 
          to="/privacidad" 
          className="inline-flex items-center justify-center min-h-[48px] px-[28px] py-[12px] border-2 border-sums-gold rounded-[8px] font-black no-underline text-sums-burgundy bg-transparent hover:bg-sums-gold/10 transition-colors"
        >
          Ver Aviso de Privacidad Integral aquí
        </Link>
      </div>
    </section>
  );
}
