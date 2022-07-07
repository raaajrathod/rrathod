

import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero_content">
                <p className="greeting-text">
                    Hi, my name is
                </p>
                <div>
                    <h2 className="big-heading">
                        Raj Rathod.
                    </h2>
                </div>
                <div>
                    <h3 className="big-heading">I Love to put life to Web App.</h3>
                </div>
                <div>
                    <p> I'm a Electronics and Telecommunication Engineer, building my career as a passionate and self-taught Frontend Developer. I am currently focused on completing my Cyber Security Masters in September 2022 and also actively looking for full-time Job.</p>
                </div>
                <div>
                    <a href="mailto:'raaajrathod@gmail.com'" target="_blank" rel="noreferrer" className="get-in-touch outline-btn">Get in Touch for Job!</a>
                </div>
            </div>
        </section>
    )
}

export default Hero;