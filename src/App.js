import { Fragment } from 'react';
import './App.scss';


import Header from './components/Header';
import LeftContent from './components/LeftContent';
import RightContent from './components/RightContent';
import Hero from './components/Hero';
import About from './components/About';
import Jobs from './components/Jobs';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {


  return (
    <Fragment>
      <Header />
      <main>
        <div className="layout">
          <LeftContent />
          <div className="main_content">
            <Hero />
            <About />
            <Jobs />
            <Projects />
            <Contact />
          </div>

          <RightContent />
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
