import React from "react";
import Card from "../../components/Card";
import ProList from "../../assets/ProList.json";
import logo from "../../assets/images/main-w-logo-min.png";
import "./style.css";
import youVid from "../../assets/images/codingBkg.mp4";


console.log(ProList);

function Projects() {
    return (
        <div>
            <div className="projectLanding">

                <div className="videoOverlay">
                    <div className="overlayDiv">
                        <img className="videoLogo" src={logo} alt="logo"/>
                        <p className="videoText">Connect, Design, Develop</p>
                    </div> 
                </div>
                
                <video autoPlay muted loop className="videoBkg">
                    <source src={youVid} type="video/mp4"></source>
                </video>
                
                <div className="overlay">
                    <img className="projectLogo" src={logo} alt="logo"/>
                </div>
            </div>

            {/* projects slide effect */}
            <div className="mainDiv">

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
        </div>
    )
}

export default Projects;