import Header from '../components/layout/Header';
import Roles from '../components/sections/Roles';
import Teams from '../components/sections/Teams';
import Security from '../components/sections/Security';
import Soa from '../components/sections/Soa';
import Subjects from '../components/sections/Subjects';
import Documents from '../components/sections/Documents';
import Footer from '../components/layout/Footer';

export default function Stack() {
  return (
    <>
      <Header />
      <main className="pt-[82px]">
        <div className="bg-sums-mist px-[clamp(20px,5vw,84px)] py-[42px] border-b border-sums-line text-center">
          <h1 className="text-sums-burgundy text-[clamp(24px,3.5vw,40px)] font-bold m-0 leading-tight">Arquitectura y Organización Académica</h1>
          <p className="text-sums-muted mt-2 mb-0 max-w-[600px] mx-auto">Conoce cómo se dividió el desarrollo del proyecto SUMS y el ecosistema tecnológico implementado.</p>
        </div>
        <Roles />
        <Teams />
        <Security />
        <Soa />
        <Subjects />
        <Documents />
      </main>
      <Footer />
    </>
  );
}
