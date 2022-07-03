import { Fragment } from 'react';
import './App.scss';


import Header from './components/Header';
import LeftContent from './components/LeftContent';
import RightContent from './components/RightContent';
import Hero from './components/Hero';
import About from './components/About';
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
          </div>

          <RightContent />
        </div>
      </main>
    </Fragment>
  );
}

export default App;
