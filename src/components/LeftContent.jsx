

import { GitHub, Linkedin, Twitter, Instagram } from 'react-feather';

const LeftContent = (props) => {
    return (
        <div className="content_left">
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
        </div >
    )
}

export default LeftContent;