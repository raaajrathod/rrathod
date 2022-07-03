
const Header = () => {

    return (
        <header className='header'>
            <nav>
                <div className="logo">
                    <a href="/">R</a>
                </div>
                <div className="navigations">
                    <div className="nav-links">
                        <ol>
                            <li>
                                <a href="/home">Home</a>
                            </li>
                            <li>
                                <a href="/about">About</a>
                            </li>
                            <li>
                                <a href="/contact">Contact</a>
                            </li>
                        </ol>
                    </div>
                    <div className="resume-btn-container">
                        <a href="/resume.pdf" className='resume-button outline-btn' target="_blank" rel="noopener norefferer">Resume</a>
                    </div>

                </div>
            </nav>
        </header>
    )
}

export default Header;