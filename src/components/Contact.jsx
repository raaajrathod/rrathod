
import { Fade } from "react-awesome-reveal";

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <Fade direction="bottom" triggerOnce={true} delay={200}>
                <div className="contact-content">
                    <h2 className="numbered-heading">Get in touch.</h2>
                </div>
                <div className="contact-content">
                    <p>Please feel free to reach out to me via email, phone, or social media, regarding job opportunity. I am open to remote work or hybrid opportunities. Also please inbox is open for any new exciting project ideas, or just a casual 'Hi'. I'd love to hear from you!. Just shoot me an email and I'll get back to you as soon as possible.
                    </p>
                    <div>
                        <a href="mailto:raaajrathod@gmail.com" target="_blank" rel="noreferrer" className="say-hello outline-btn">Say Hello</a>
                    </div>
                </div>
            </Fade>
        </section>
    )
}

export default Contact;