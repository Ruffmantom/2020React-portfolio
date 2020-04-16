import React from "react";
import Card from "../../components/Card";
import ProList from "../../assets/ProList.json";
import logo from "../../assets/images/main-logo-min.png";
import video from "./codingBkg.mp4";

console.log(ProList);
{
    ProList.map(res => {
        console.log(res.image);
    })
}



function Projects() {
    return (
        <div>
            <div className="projectLanding">
                <video autoPlay muted loop className="videoBkg">
                    <source src={video} type="video/mp4"></source>
                </video>
                
            </div>

                {/* projects slide effect */}
                <div className="mainDiv">

                    {/* this will be for the left side */}
                    <div className="leftScroll">
                        <img className="leftLogo" src={logo} alt="Website logo"></img>
                        <h1>Projects</h1>
                        <p>Below you will see my personal projects and projects I have collaborated on.</p>
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

var leftDiv = document.getElementsByClassName("left");
document.addEventListener("scroll", function(){

            })
export default Projects;