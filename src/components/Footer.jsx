import { Heart } from 'react-feather';
import { GitHub, Linkedin, Twitter, Instagram, Facebook } from 'react-feather';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <ul className='social-media-footer'>
                    <li><GitHub /></li>
                    <li><Linkedin /></li>
                    <li>< Twitter /></li>
                    <li><Instagram /></li>
                    <li><Facebook /></li>
                </ul>
                <p>Built with <i><Heart /></i> by Raj Rathod</p>
            </div>
        </footer>
    )
}

export default Footer;