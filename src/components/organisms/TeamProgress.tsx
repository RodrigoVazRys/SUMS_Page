interface SubteamCard {
  team: '1' | '2';
  title: string;
  description: string;
  tags?: string[];
  owasp?: string[];
}

interface AreaBlock {
  area: string;
  label: string;
  color: 'green' | 'burgundy' | 'gold' | 'muted';
  cards: SubteamCard[];
}

const AREAS: AreaBlock[] = [
  {
    area: 'Minería de Datos',
    label: 'Python · sklearn · FastAPI · OpenCV',
    color: 'green',
    cards: [
      {
        team: '1',
        title: 'Subcomponente A — OCR',
        description:
          'Pipeline de visión computacional que recibe un PDF de cédula, lo renderiza página por página, detecta el área del formulario y clasifica campo por campo. Para checkboxes usa un modelo propio con OpenCV (ink ratio + trazos diagonales). Los campos de texto se recortan y marcan para revisión humana.',
        tags: ['PDF Render', 'OpenCV', 'Ink Ratio', 'Clasificación'],
      },
      {
        team: '2',
        title: 'Subcomponente B — ETL y modelo de riesgo',
        description:
          'ETL que limpia y transforma datos de cédulas en variables numéricas, entrena un modelo de riesgo familiar (sklearn) y genera un reporte por familia con nivel de riesgo. Incluye synthetic_generator.py que crea los ~4,000 registros de prueba.',
        tags: ['ETL', 'sklearn', 'Riesgo Familiar', 'Datos Sintéticos'],
      },
      {
        team: '2',
        title: 'Subcomponente C — Búsqueda clínica',
        description:
          'Motor de búsqueda de casos clínicos usando TF-IDF y BM25 con métricas IR (precision, recall, MAP). Tiene notebook de evaluación y se expone como API FastAPI.',
        tags: ['TF-IDF', 'BM25', 'FastAPI', 'Métricas IR'],
      },
      /*
      {
        team: '2',
        title: 'Integración con la API principal',
        description:
          'api_mineria.py conecta los subcomponentes con la API REST principal. BuscadorCasos.tsx es el componente React listo para incrustarse en el web dashboard.',
        tags: ['api_mineria.py', 'BuscadorCasos.tsx', 'REST'],
      },*/
    ],
  },
  {
    area: 'Móviles',
    label: 'Flutter · SQLite · WorkManager',
    color: 'gold',
    cards: [
      {
        team: '1',
        title: 'Cédula digitalizada',
        description:
          'App Flutter con formulario multi-paso que digitaliza la cédula IMSS Bienestar: datos de familia, integrantes, vivienda, vacunación. Validación local antes de enviar a la API.',
        tags: ['Flutter', 'Formulario multi-paso', 'Validación local'],
      },
      {
        team: '2',
        title: 'Offline first',
        description:
          'Base de datos SQLite local con drift. Los registros se guardan en el dispositivo primero, con sync_status que indica si ya subieron al servidor. La app funciona completamente sin internet.',
        tags: ['SQLite', 'drift', 'sync_status', 'Offline'],
      },
      {
        team: '2',
        title: 'Sincronización en background',
        description:
          'SyncEngine que detecta conectividad con connectivity_plus y sube los registros pendientes en background con WorkManager. Se ejecuta en segundo plano aunque la app esté cerrada.',
        tags: ['SyncEngine', 'WorkManager', 'connectivity_plus'],
      },
      {
        team: '1',
        title: 'Despliegue Play Store beta cerrada',
        description:
          'Script build_obfuscated_apk.sh que compila el APK en modo release con --obfuscate --split-debug-info para dificultar ingeniería inversa. Los símbolos de debug se guardan aparte para leer crash logs.',
        tags: ['APK obfuscado', '--split-debug-info', 'Play Store'],
      },
    ],
  },
  {
    area: 'SOA',
    label: 'Docker · Nginx · Node.js · React',
    color: 'burgundy',
    cards: [
      {
        team: '2',
        title: 'Cifrado AES-256-GCM',
        description:
          'Cifrado en reposo de datos personales sensibles (nombres y dirección). Clave derivada por tabla con scrypt. Cifrado aleatorio para nombres, determinista para colonia (permite GROUP BY sin romper agrupamiento). Idempotente: no doble-cifra datos ya protegidos.',
        tags: ['AES-256-GCM', 'scrypt', 'Cifrado determinista', 'Idempotente'],
      },
      {
        team: '2',
        title: 'Clean Architecture + 6 diagramas',
        description:
          'Toda la API organizada en capas domain → application → infrastructure por módulo independiente. 40 ADRs documentados y validados contra el código real (8 cumplidos, 10 en proceso, 22 pendientes). 6 diagramas PlantUML: componentes, clases, ER, despliegue Docker, secuencia de captura y componentes de cifrado.',
        tags: ['Clean Architecture', '40 ADRs', 'PlantUML', '6 diagramas'],
      },
      {
        team: '1',
        title: 'Web dashboard completo',
        description:
          'SPA en React + Vite + TypeScript con dashboard de estadísticas (demografía, operación, salud, vivienda), gestión de usuarios, captura OCR con validación en dos pasos (dropzone → formulario de confirmación), login con rutas protegidas por rol.',
        tags: ['React + Vite', 'Dashboard estadístico', 'OCR Dropzone', 'Auth por rol'],
      },
      {
        team: '1',
        title: 'Balanceador de carga Nginx',
        description:
          'Nginx como único punto de entrada público al stack Docker. Distribuye con algoritmo least_conn entre api_1 y api_2. Las APIs no exponen puertos directamente — solo nginx es accesible desde fuera.',
        tags: ['Nginx', 'least_conn', 'Docker', 'Reverse Proxy'],
      },
    ],
  },
  {
    area: 'Seguridad',
    label: 'OWASP · JWT · Zod · bcrypt',
    color: 'muted',
    cards: [
      {
        team: '2',
        title: 'Cifrado de datos (A02)',
        description:
          'AES-256-GCM con autenticación integrada: el auth tag detecta cualquier modificación del ciphertext (tampering). Clave maestra desde variable de entorno, nunca en código.',
        tags: ['AES-256-GCM', 'Auth Tag', 'A02'],
        owasp: ['A02'],
      },
      {
        team: '2',
        title: 'Bcrypt + Zod (A02 · A03)',
        description:
          'Contraseñas almacenadas como hash bcrypt con salt=10. Nunca se devuelve la contraseña en ningún response. validateMiddleware valida body, query y params con schemas Zod antes de tocar el controlador. Todo acceso a BD usa $1, $2... — nunca concatenación — previniendo SQL Injection en toda la API.',
        tags: ['bcrypt salt=10', 'Zod validateMiddleware', 'Queries parametrizadas', 'A03'],
        owasp: ['A02', 'A03'],
      },
      {
        team: '1',
        title: 'Acceso por roles (A01)',
        description:
          'roleMiddleware verifica el JWT y el rol_id del token contra los roles permitidos por ruta. 4 roles: superadmin (1), admin (2), analista (3), encuestador (4). Crear usuarios y cambiar roles solo disponible para roles 1 y 2.',
        tags: ['roleMiddleware', '4 Roles', 'rol_id en JWT', 'A01'],
        owasp: ['A01'],
      },
      {
        team: '1',
        title: 'JWT + CORS + Play Store (A05 · A07)',
        description:
          'Tokens firmados con expiración de 7 días. authMiddleware en todas las rutas protegidas incluyendo estadísticas. CORS configurado desde .env con orígenes explícitos en producción. JWT_SECRET y ENCRYPTION_MASTER_KEY únicamente desde variables de entorno. APK con --obfuscate para cumplir requisitos de Play Store beta cerrada.',
        tags: ['JWT 7 días', 'CORS desde .env', 'APK obfuscado', 'A05', 'A07'],
        owasp: ['A05', 'A07'],
      },
    ],
  },
];

const AREA_COLORS = {
  green: {
    header: 'bg-sums-green',
    badge1: 'bg-sums-green text-white border-sums-green',
    badge2: 'bg-emerald-700 text-white border-emerald-700',
    accent: 'border-t-sums-green',
    label: 'text-white/75',
    dot: 'bg-sums-green',
  },
  gold: {
    header: 'bg-sums-gold',
    badge1: 'bg-sums-gold text-white border-sums-gold',
    badge2: 'bg-amber-600 text-white border-amber-600',
    accent: 'border-t-sums-gold',
    label: 'text-white/75',
    dot: 'bg-sums-gold',
  },
  burgundy: {
    header: 'bg-sums-burgundy',
    badge1: 'bg-sums-burgundy text-white border-sums-burgundy',
    badge2: 'bg-rose-800 text-white border-rose-800',
    accent: 'border-t-sums-burgundy',
    label: 'text-white/75',
    dot: 'bg-sums-burgundy',
  },
  muted: {
    header: 'bg-sums-green-dark',
    badge1: 'bg-sums-green-dark text-white border-sums-green-dark',
    badge2: 'bg-teal-900 text-white border-teal-900',
    accent: 'border-t-sums-green-dark',
    label: 'text-white/75',
    dot: 'bg-sums-green-dark',
  },
};

function TeamBadge({ team, color }: { team: '1' | '2'; color: keyof typeof AREA_COLORS }) {
  const c = AREA_COLORS[color];
  return (
    <span
      className={`inline-flex items-center gap-[5px] px-[10px] py-[4px] rounded-full text-[11px] font-black uppercase tracking-wide border ${team === '1' ? c.badge1 : c.badge2}`}
    >
      <span className="w-[6px] h-[6px] rounded-full bg-white/70 inline-block" />
      Equipo {team}
    </span>
  );
}

function OWASPBadge({ code }: { code: string }) {
  return (
    <span className="inline-flex items-center px-[8px] py-[3px] rounded-[4px] text-[10px] font-black bg-red-50 text-red-700 border border-red-200">
      {code}
    </span>
  );
}

export default function TeamProgress() {
  return (
    <section
      id="avance-equipos"
      className="px-[clamp(20px,5vw,84px)] py-[clamp(68px,8vw,116px)] bg-sums-paper"
    >
      <div className="max-w-[900px] mx-auto mb-[56px] text-center">
        <p className="m-0 mb-[12px] text-sums-gold text-[12px] font-black uppercase tracking-normal">
          Avance por equipo
        </p>
        <h2 className="mt-0 text-sums-burgundy text-[clamp(30px,4vw,54px)] leading-[1.08] tracking-normal font-bold">
          Qué entregó cada equipo
        </h2>
        <p className="max-w-[720px] mx-auto text-sums-muted text-[18px] mt-3 mb-0">
          Cada área académica se dividió en dos equipos con responsabilidades técnicas específicas.
          Aquí el detalle de lo que construyó cada uno.
        </p>
      </div>

      <div className="flex flex-col gap-[56px] max-w-[1220px] mx-auto">
        {AREAS.map((area) => {
          const c = AREA_COLORS[area.color];
          return (
            <div key={area.area} className="rounded-[12px] overflow-hidden border border-sums-line shadow-sums-sm">
              {/* Area header */}
              <div className={`${c.header} px-[28px] py-[22px] flex flex-wrap items-center justify-between gap-[12px]`}>
                <div>
                  <h3 className="m-0 text-white text-[clamp(20px,2.5vw,28px)] font-bold leading-tight">
                    {area.area}
                  </h3>
                  <p className={`m-0 mt-[4px] text-[13px] font-semibold ${c.label}`}>
                    {area.label}
                  </p>
                </div>
                <div className="flex gap-[8px]">
                  <TeamBadge team="1" color={area.color} />
                  <TeamBadge team="2" color={area.color} />
                </div>
              </div>

              {/* Cards grid */}
              <div className={`grid grid-cols-1 gap-0 bg-sums-white divide-y divide-sums-line ${area.cards.length === 3 ? 'sm:grid-cols-3 sm:divide-x sm:divide-y-0' : 'sm:grid-cols-2 sm:divide-x'}`}>
                {area.cards.map((card) => (
                  <article
                    key={card.title}
                    className={`p-[24px] bg-sums-white border-t-[4px] ${c.accent} flex flex-col gap-[12px]`}
                  >
                    <div className="flex items-start justify-between gap-[10px] flex-wrap">
                      <h4 className="m-0 text-sums-green-dark text-[16px] font-bold leading-snug flex-1">
                        {card.title}
                      </h4>
                      <TeamBadge team={card.team} color={area.color} />
                    </div>
                    <p className="m-0 text-sums-muted text-[14px] leading-relaxed flex-1">
                      {card.description}
                    </p>
                    {(card.tags || card.owasp) && (
                      <div className="flex flex-wrap gap-[6px] mt-auto pt-[4px]">
                        {card.tags?.map((tag) => (
                          <span
                            key={tag}
                            className="px-[9px] py-[4px] text-[11px] font-extrabold text-sums-green-dark bg-sums-paper border border-sums-line rounded-[5px]"
                          >
                            {tag}
                          </span>
                        ))}
                        {card.owasp?.map((code) => (
                          <OWASPBadge key={code} code={code} />
                        ))}
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
