
import { GitHub } from "react-feather";

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <div className="projects_content">
                <h2 className="numbered-heading">Some of my Projects.</h2>
            </div>
            <ul className="project-list">
                <li className="project-list-item">
                    <div className="project-content">
                        <h3 className="project-title">Tours</h3>
                        <div className="project-description">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, debitis voluptates veniam soluta neque architecto.</p>
                        </div>
                        <ul className="project-techlist">
                            <li>JS</li>
                            <li>TS</li>
                        </ul>
                        <div className="links">
                            <a href="#"><GitHub /></a>
                        </div>
                    </div>
                    <div className="project-image">
                        <div className="image-wrapper">
                            <img src="./../img/tours.png" alt="project-image" />
                        </div>
                    </div>

                </li>

                <li className="project-list-item">
                    <div className="project-content">
                        <h3 className="project-title">Tours</h3>
                        <div className="project-description">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, debitis voluptates veniam soluta neque architecto.</p>
                        </div>
                        <ul className="project-techlist">
                            <li>JS</li>
                            <li>TS</li>
                        </ul>
                        <div className="links">
                            <a href="#"><GitHub /></a>
                        </div>
                    </div>
                    <div className="project-image">
                        <div className="image-wrapper">
                            <img src="./../img/tours.png" alt="project-image" />
                        </div>
                    </div>

                </li>

                <li className="project-list-item">
                    <div className="project-content">
                        <h3 className="project-title">Tours</h3>
                        <div className="project-description">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, debitis voluptates veniam soluta neque architecto.</p>
                        </div>
                        <ul className="project-techlist">
                            <li>JS</li>
                            <li>TS</li>
                        </ul>
                        <div className="links">
                            <a href="#"><GitHub /></a>
                        </div>
                    </div>
                    <div className="project-image">
                        <div className="image-wrapper">
                            <img src="./../img/tours.png" alt="project-image" />
                        </div>
                    </div>

                </li>
            </ul>
        </section>
    )
}

export default Projects;