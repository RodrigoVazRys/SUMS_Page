import Header from '../components/organisms/Header';
import Roles from '../components/organisms/Roles';
import Teams from '../components/organisms/Teams';
import Security from '../components/organisms/Security';
import Soa from '../components/organisms/Soa';
import Subjects from '../components/organisms/Subjects';
import Documents from '../components/organisms/Documents';
import Footer from '../components/organisms/Footer';

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
