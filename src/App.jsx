import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Research from './components/Research';
import About from './components/About';
import Publications from './components/Publications';
import People from './components/People';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Research />
        <About />
        <Publications />
        <People />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
