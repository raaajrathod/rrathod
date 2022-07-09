import Tabs from "./Tabs";
import { Fade } from "react-awesome-reveal";

const Jobs = () => {

    return (
        <section className="jobs" id="jobs">
            <Fade direction="bottom" triggerOnce={true}>
                <div className="jobs_content">
                    <h2 className="numbered-heading">My Work Experience.</h2>
                </div>
                <div className="jobs_content">
                    <Tabs />
                </div>
            </Fade>
        </section>
    )
}

export default Jobs;