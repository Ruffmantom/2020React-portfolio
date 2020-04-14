import React from "react";
import Card from "../../components/Card";
import ProList from "../../assets/ProList.json";
import logo from "../../assets/images/main-logo-min.png";

console.log(ProList);
{ProList.map(res => {
    console.log(res.image);
})}


function Projects() {
    return (
        <div className="mainDiv">
            {/* this will be for the left side */}
            <div className="left">
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
    )
}
export default Projects;