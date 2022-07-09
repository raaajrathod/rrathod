import { GitHub, Linkedin, Twitter, Instagram } from 'react-feather';

import { Fade } from "react-awesome-reveal";


const RightContent = () => {
    return (
        <div className="content_right">
            <Fade direction="bottom" triggerOnce={true} delay={4000}>
                <ul className='email-link'>
                    <li><a href="mailto:raaajrathod@gmail.com">raaajrathod@gmail.com</a></li>
                </ul>
            </Fade>
        </div >
    )
}

export default RightContent;