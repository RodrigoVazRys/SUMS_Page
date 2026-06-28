import Header from '../components/organisms/Header';
import Hero from '../components/organisms/Hero';
import Problem from '../components/organisms/Problem';
import Context from '../components/organisms/Context';
import Flow from '../components/organisms/Flow';
import Intelligence from '../components/organisms/Intelligence';
import PrivacyShort from '../components/organisms/PrivacyShort';
import Footer from '../components/organisms/Footer';

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
