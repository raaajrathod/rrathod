import Tabs from "./Tabs";

const Jobs = () => {

    return (
        <section className="jobs" id="/jobs">
            <div className="jobs_content">
                <h2 className="numbered-heading">My Work Experience.</h2>
            </div>
            <div className="jobs_content">
                <Tabs />
            </div>
        </section>
    )
}

export default Jobs;