

import { GitHub, Linkedin, Twitter, Instagram } from 'react-feather';
import { Fade } from "react-awesome-reveal";

const LeftContent = (props) => {
    return (
        <div className="content_left">
            <Fade direction="bottom" triggerOnce={true} delay={4000}>
                <ul className='social-media'>
                    <li>
                        <a href="http://github.com/raaajrathod" target="_blank" rel="noreferrer" > <GitHub /></a></li>
                    <li>
                        <a href="http://linkedin.com/in/raaajrathod" target="_blank" rel="noreferrer" > <Linkedin /></a></li>
                    <li>
                        <a href="http://twitter.com/raaajrathod" target="_blank" rel="noreferrer" > <Twitter /></a></li>
                    <li>
                        <a href="http://instagram.com/raaajrathod" target="_blank" rel="noreferrer" > <Instagram /></a></li>
                </ul>
                <div className="vl"></div>
            </Fade>
        </div >
    )
}

export default LeftContent;