import { Heart } from 'react-feather';
import { GitHub, Linkedin, Twitter, Instagram, Facebook } from 'react-feather';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <ul className='social-media-footer'>
                    <li>
                        <a href="http://github.com/raaajrathod" target="_blank" rel="noreferrer" > <GitHub /></a></li>
                    <li>
                        <a href="http://linkedin.com/in/raaajrathod" target="_blank" rel="noreferrer" > <Linkedin /></a></li>
                    <li>
                        <a href="http://twitter.com/raaajrathod" target="_blank" rel="noreferrer" > <Twitter /></a></li>
                    <li>
                        <a href="http://instagram.com/raaajrathod" target="_blank" rel="noreferrer" > <Instagram /></a></li>

                    <li>  <a href="http://facebook.com/raaajrathod" target="_blank" rel="noreferrer" > <Facebook /></a></li>
                </ul>
                <p>Built with <i><Heart /></i> by Raj Rathod</p>
            </div>
        </footer>
    )
}

export default Footer;