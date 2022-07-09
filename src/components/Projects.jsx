
import { GitHub, Folder } from "react-feather";


import { Fade } from "react-awesome-reveal";


const Projects = () => {

    const featuredProjects = [{
        title: "Tours",
        description: "A tour booking website allows users to book tours and view tour details and also gives the user the ability to review their tour booking. There are different roles for Users, Tour Guides and Administrators.",
        tech: ["Node JS", "Mongoose", "Express"],
        gitHub: "https://github.com/raaajrathod/tours-ecomm-node-js",
        image: "./../img/tours.webp"
    },
    {
        title: "Crown Store",
        description: "An e-commerce application built on ReactJS. It allows the user to view the products, add to cart, checkout and view the cart & modify the cart. Stripe is used for payment processing. Backend is built on Firebase. User can also login with their Google account.",
        tech: ["ReactJS", "Firebase", "Redux", "SASS"],
        gitHub: "https://github.com/raaajrathod/e-commerce-udemy-v2",
        image: "./../img/crown-store.webp"
    }, {
        title: "Dev Connector",
        description: "A Social Networking website for Developer which allows devs to connect with other users and share their knowledge. It also allows user to create their own profile based on their Education, Work Experience, Skills and Social Links. Users can also comment on other users' posts and also like other users' posts.",
        tech: ["ReactJS", "NodeJS", "Express", "MongoDB", "JWT"],
        gitHub: "https://github.com/raaajrathod/dev-social-connector",
        image: "./../img/dev-connector.webp"
    }];

    const noteworthyProjects = [
        {
            title: "React Github Finder",
            description: "A Small Tool to search Github users and display their profile details. It also displays the user's repositories and the user's followers and following.",
            tech: ["ReactJS", "Axios"],
            gitHub: "https://github.com/raaajrathod/react-github-finder",
        }, {
            title: "Express Boilerplate",
            description: "A boilerplate for ExpressJS which includes all the necessary files and folders to get started with ExpressJS. It also includes a basic express Server and routes for Registration and Login.",
            tech: ["NodeJS", "Express", "JWT"],
            gitHub: "https://github.com/raaajrathod/express-boiler-plate",
        },
        {
            title: "Color Pallete Generator",
            description: "A small tool to generate a random color pallete. It also allows the user to generate a random color pallete with a specific number of colors.",
            tech: ["Jquery", "SCSS", "HTML"],
            gitHub: "https://github.com/raaajrathod/color-pallete-generator",
        },
        {
            title: "M Tracker",
            description: "A Small Android Application built on Java to track expense of the employees while on business trip.",
            tech: ["Android Java"],
            gitHub: "https://github.com/raaajrathod/m-tracker",
        },
        {
            title: "Recipe Search App",
            description: "A small app to search recipes from the internet using Food2Fork API. Users can also like recipes and build shopping cart for their recipes.",
            tech: ["Vanilla Javascript", "Axios", "MVC"],
            gitHub: "https://github.com/raaajrathod/recipe-search-app",
        },
        {
            title: "React & Redux boilerplate",
            description: "A Create React App boilerplate which includes all the necessary files and folders to get started with ReactJS and Redux, configured with store, redux-thunk and redux-devtools-extension.",
            tech: ["ReactJS", "Redux"],
            gitHub: "https://github.com/raaajrathod/react-redux-boilerplate",
        }];

    return (
        <section className="projects" id="projects">
            <Fade direction="bottom" triggerOnce={true} delay={200}>
                <div className="projects_content">
                    <h2 className="numbered-heading">Some of my Projects.</h2>
                </div>
            </Fade>
            <ul className="project-list">
                {featuredProjects.map((project, index) => {

                    return (
                        <Fade direction="bottom" triggerOnce={true} delay={200}>
                            <li className="project-list-item" key={index}>
                                <div className="project-content">
                                    <h3 className="project-title">{project.title}</h3>
                                    <div className="project-description">
                                        <p>{project.description}</p>
                                    </div>
                                    <ul className="project-techlist">
                                        {project.tech.map((tech, i) =>
                                            <li className="project-techlist-item" key={i}>{tech}</li>
                                        )}
                                    </ul>
                                    <div className="links">
                                        <a href={project.gitHub}><GitHub /></a>
                                    </div>
                                </div>
                                <div className="project-image">
                                    <div className="image-wrapper">
                                        <img src={project.image} alt={project.title} />
                                    </div>
                                </div>

                            </li>
                        </Fade>)
                })}
            </ul>
            <Fade direction="bottom" triggerOnce={true} delay={200}>
                <h2 className="subsection-header">Other Noteworthy Projects</h2>
                <ul className="project-card-container">
                    {noteworthyProjects.map((project, index) => {
                        return (<li className="project-card" key={index}>
                            <div className="project-card-content">
                                <div className="project-card_top"> <div className="folder-icon"><Folder /></div>
                                    <div className="project-card-links">
                                        <a href={project.gitHub}><GitHub /></a>
                                    </div></div>
                                <div className="project-card-header">
                                    <h3 className="project-card-title"> <a href={project.gitHub}>{project.title}</a></h3>

                                </div>
                                <p className="project-card-description">{project.description}</p>
                                <ul className="project-techlist">
                                    {project.tech.map((tech, i) =>
                                        <li className="project-techlist-item" key={i}>{tech}</li>
                                    )}
                                </ul>
                            </div>
                        </li>)
                    })}
                </ul>
            </Fade>
        </section >
    )
}

export default Projects;