
import React, { useState } from 'react';

import { Fade } from "react-awesome-reveal";
const Tabs = () => {

    const [currentTab, setCurrentTab] = useState(1);
    const tabs = [
        {
            id: 1,
            tabTitle: 'Wordpress Developer',
            company: '31 Media',
            comapanyURL: "https://31media.com/",
            location: 'London',
            range: "April 2022 - Present",
            content: [
                "Analysed the company's website and identified the issues with the current website and identified the best solution for the issues.",
                "Developed the new website using the WordPress CMS and oversaw the migration of the company's content to the new website.",
                "Proposed and implemented solutions to the issues identified in the website related to design and Marketing.",
            ]
        },
        {
            id: 2,
            tabTitle: 'Javascript Developer',
            company: 'Sportz Interactive',
            comapanyURL: "https://sportzinteractive.net/",
            location: "Mumbai",
            range: "September 2019 - July, 2021",
            content: [
                "Built and shipped Web application which provides the user with the ability to create and manage their own team.",
                "Developed a Web application which generates infographics of the various sports in PDF, PNG and Word format.",
                "Worked with multiple teams on projects such as the Graphics Broadcasting Tool which was used to broadcast Cricket Graphics on live stream for ECN and Fan Code.",
                "Mentored and coached freshers on the best way to develop the application.",
                "Proposed and Engineered various projects for in-house and client related to Football Analytics.",
            ]
        },
        {
            id: 3,
            tabTitle: 'Frontend Developer',
            company: 'Vaisansar Technologies',
            comapanyURL: "https://vaisansar.com/",
            location: 'Mumbai',
            range: "September 2018 - July, 2019",
            content: [
                "Developed and maintained code client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery",
                "Architected and Implemented Front-end of Company's ERP Portal using RequiresJS, NodeJS and  MaterializeCSS, which reduced the load time by 50%",
                "Worked closely with CEO and CTO to develop, document and manage ERP portal using NodeJS, SASS, Jquery, and MaterializeCSS",
            ]
        }
    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }

    return (
        <div className='container'>
            <Fade direction="bottom" triggerOnce={true}>
                <div className="tab-container">
                    <div className='tabs'>
                        {tabs.map((tab, i) =>
                            <button key={i} id={tab.id} disabled={currentTab == `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</button>
                        )}
                    </div>
                    <div className='content'>
                        {tabs.map((tab, i) => {
                            return (
                                <Fade direction="bottom">
                                    <div key={i} className={`tab-content ${currentTab == tab.id ? "fadeIn" : "fadeOut"}`}>
                                        <h3>
                                            <span>{tab.tabTitle}</span>
                                            <span className='company'>
                                                {" "}@{" "}
                                                <a href={tab.comapanyURL} className='inline-link'>{tab.company}</a>
                                            </span>
                                        </h3>
                                        <p className="range">
                                            {tab.range}
                                        </p>
                                        <div>
                                            <ul>
                                                {tab.content.map((content, i) => {
                                                    return <li key={i}><p>{content}</p></li>
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </Fade>)
                        }
                        )}
                    </div>
                </div>
            </Fade >
        </div >
    );
}

export default Tabs;
