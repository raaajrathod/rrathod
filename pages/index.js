import { Fragment } from 'react';
import Header from '../src/components/Header';
import LeftContent from '../src/components/LeftContent';
import RightContent from '../src/components/RightContent';
import Hero from '../src/components/Hero';
import About from '../src/components/About';
import Jobs from '../src/components/Jobs';
import Projects from '../src/components/Projects';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';


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