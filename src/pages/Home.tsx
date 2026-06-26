import Header from '../components/layout/Header';
import Hero from '../components/sections/Hero';
import Problem from '../components/sections/Problem';
import Context from '../components/sections/Context';
import Flow from '../components/sections/Flow';
import Intelligence from '../components/sections/Intelligence';
import PrivacyShort from '../components/sections/PrivacyShort';
import Footer from '../components/layout/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Context />
        <Flow />
        <Intelligence />
        <PrivacyShort />
      </main>
      <Footer />
    </>
  );
}
