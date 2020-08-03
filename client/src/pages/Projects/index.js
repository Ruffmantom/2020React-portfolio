import React from "react";
import Card from "../../components/Card";
import ProList from "../../assets/ProList.json";
import logo from "../../assets/images/main-w-logo-min.png";
import "./style.css";
import youVid from "../../assets/images/codingBkg.mp4";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


console.log(ProList);

function Projects() {
    return (
        <div>
            <div className="projectLanding">

                <div className="videoOverlay">
                    <div className="overlayDiv">
                        <img className="videoLogo" src={logo} alt="logo" />
                        <p className="videoText">Most Recent Projects</p>
                        <a className="callToAction" href="#projects" ><ExpandMoreIcon  fontSize="large"/></a>
                    </div>
                </div>

                <video autoPlay muted loop className="videoBkg">
                    <source src={youVid} type="video/mp4"></source>
                </video>

                <div className="overlay">
                    <img className="projectLogo" src={logo} alt="logo" />
                    
                </div>
            </div>

            {/* projects slide effect */}
            <div className="mainDiv" id="projects">

                {/* this will be for the left side */}
                <div className="leftScroll">
                    <h1>Projects</h1>
                    <p>Here you will see my personal projects and projects I have collaborated on. The layout and design for this page will continue to evolve with the continuation of projects.</p>
                </div>
                {/* this div will be for the right side */}
                <div className="right">
                    {/* in here will be all the projects mapped */}
                    {ProList.map(res => (
                        <Card
                            image={res.image}
                            name={res.name}
                            info={res.info}
                            link={res.link}
                            gitLink={res.gitLink}
                        />
                    ))}

                </div>
            </div>
            <h1 className="currentStack">My Current Stack</h1>
            <div className="myStack">
                <div className="listSide">

                    <ul className="list">
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>jQuery</li>
                        <li>Javascript</li>
                        <li>Handlebars</li>
                        <li>React</li>

                    </ul>

                    <ul className="list">
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                        <li>MySql</li>
                        <li>Heroku</li>
                        <li>MVC Model</li>
                    </ul>


                </div>
                <div className="iconSide">

                    <i className="fab fa-html5"></i>

                    <i className="fab fa-css3-alt"></i>

                    <i className="fab fa-js"></i>

                    <i className="fab fa-node-js"></i>

                    <i className="fab fa-react"></i>

                    <i className="fas fa-database"></i>

                </div>
            </div>
        </div>
    )
}

export default Projects;