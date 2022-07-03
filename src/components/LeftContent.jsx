

import { GitHub, Linkedin, Twitter, Instagram } from 'react-feather';

const LeftContent = (props) => {
    return (
        <div className="content_left">
            <ul className='social-media'>
                <li><GitHub /></li>
                <li><Linkedin /></li>
                <li>< Twitter /></li>
                <li><Instagram /></li>
            </ul>
            <div className="vl"></div>
        </div>
    )
}

export default LeftContent;