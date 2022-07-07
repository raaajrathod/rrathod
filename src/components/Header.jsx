import { X, AlignRight } from "react-feather";
import { Fragment, useState } from "react";

const Header = () => {

    const [isOpen, setIsOpen] = useState(null);

    const toggleMenu = () => {

        setIsOpen(isOpen === null ? true : isOpen === true ? false : true);
    }

    return (
        <Fragment>
            <header className='header'>
                <nav className="desktop-navigation">
                    <div className="logo">

                        <a href="#home"><img src="/img/logo.png" alt="Raj Rathod" /></a>
                    </div>
                    <div className="navigations">
                        <div className="nav-links desktop-nav">
                            <ol>
                                <li>
                                    <a href="#about">About</a>
                                </li>
                                <li>
                                    <a href="#jobs">Experience</a>
                                </li>
                                <li>
                                    <a href="#projects">Projects</a>
                                </li>
                                <li>
                                    <a href="#contact">Contact</a>
                                </li>
                            </ol>
                        </div>
                        <div className="resume-btn-container">
                            <a href="/resume.pdf" className='resume-button outline-btn' target="_blank" rel="noopener norefferer">Resume</a>
                        </div>
                        <div className="mobile-nav-toggle-btn">
                            <AlignRight onClick={toggleMenu} />
                        </div>

                    </div>
                </nav>
            </header >
            <div className={`mobile-navigation-menu ${isOpen === true ? "slide-in" : isOpen === false ? "slide-out" : ""} `}>



                <div className="close-button-container">
                    <X onClick={toggleMenu} />
                </div>
                <div className="nav-links">
                    <ol>
                        <li>
                            <a href="#about" onClick={toggleMenu}>About</a>
                        </li>
                        <li>
                            <a href="#jobs" onClick={toggleMenu}>Experience</a>
                        </li>
                        <li>
                            <a href="#projects" onClick={toggleMenu}>Projects</a>
                        </li>
                        <li>
                            <a href="#contact" onClick={toggleMenu}>Contact</a>
                        </li>
                    </ol>
                </div>
                <div className="resume-btn-container-mobile">
                    <a href="/resume.pdf" className='resume-button outline-btn' target="_blank" rel="noopener norefferer">Resume</a>
                </div>

            </div>
        </Fragment>
    )
}

export default Header;