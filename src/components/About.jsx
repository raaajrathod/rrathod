
import { Fade } from "react-awesome-reveal";

const About = () => {
    return (
        <section className="about" id="about">
            <Fade direction="bottom" triggerOnce={true}>
                <div className="about_content">
                    <h2 className="numbered-heading">About Me.</h2>
                </div>
                <div className="about_content">
                    <div className="content">
                        <p>Hello! My name is Raj. I love to work with modern web technologies. My interest in programming started back when I was in my Bachelor's. I completed my Degree and started to learn programming by various online course and youtube. After couple of weeks, I figured my interest in Frontend Development. With that, I started learning more about Website and How does it functions and How to develop one. </p>
                        <p>
                            After learning and practicing multiple small projects with HTML, CSS & Javascript, I landed my first Job as a Frontend Developer at <a href="http://vaisansar.com" target="_blank" rel="noreferrer"> Vaisansar Technologies</a>. Apart from technologies, I also have keen interst in Sports and also I am a fan of Football. To combine both my interest, I received an offer from <a href="http://sportzinteractive.net" target="_blank" rel="noreferrer"> Sportz Interactive</a> which I happily accepted and joined them as Javascript Developer.</p>
                        <p>In September 2021, I started pursuing Master's in Computer Forensics and Cyber Security at <a href="http://gre.ac.uk" target="_blank" rel="noreferrer"> University of Greenwich</a>, London. My focus right now is to complete my dissertation in which I am building a Smart Contract based application and also to land a full-time job for my future. </p>
                        <p>Here are few technologies I worked with: </p>
                        <ul>
                            <li>Javscript</li>
                            <li>React</li>
                            <li>Node JS</li>
                            <li>WordPress</li>
                            <li>Socket IO</li>
                            <li>Jquery</li>

                        </ul>
                    </div>
                    <div className="profile-photo">
                        <div className="wrapper">
                            <div className="inner-wrapper"></div>
                            <div className="img-container">
                                <img src="../img/profile_img.jpg" alt="profile" />
                            </div>
                            <div className="profile-photo-overlay"></div>
                        </div>
                    </div>
                </div>

            </Fade>
        </section>
    )
}

export default About;