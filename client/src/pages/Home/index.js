import React from "react";
import iconConnect from "../../assets/images/connecting-icon-min.png";
import iconPencil from "../../assets/images/pencil-icon-min.png";
import iconComputer from "../../assets/images/computer-icon-min.png";
import resume from "../../assets/TomRuff-2020Resume.pdf";
import "./style.css";
function Home() {
    return (
        <div className="contain">

            <div className="row landing">

                <div className="col-md-6  welcome">
                    <h1 className="title">Ruff Web Development</h1>
                    <p className="snippet">Welcome to Tom Ruff Web Development. Please have a look around and check out my resume
                        below.</p>
                        {/* need to add the link to the resume */}
                    <a href={resume} target="_blank" className="btn btn-primary resume">Resume</a>
                </div>

                <dvi className="col-md-6 hide-small">

                </dvi>


            </div>

            <section className="about row">
                <div className="about-me">
                    <h2 className="title">About Me</h2>
                    <p className="snippet">My name is Tom Ruff. I am a Front-End Web Developer and am currently in school
                        for Full-Stack web development at the University of Utah in Salt lake City. I am from Chicago
                        and moved to SLC in 2018 when I started working as a graphic designer for Hightech Signs. I
                        have a passion for building things; from working with wood or metal to designing software and
                        content on a computer. I love that I can use my creativity to design what I or another would
                        like to see come to life.
                        Full-Stack web development is where I want to be. I am constantly learning new material and
                        love challenging myself in new ways of building with code. Please have a look around and
                        connect with me if you are interested in my work! </p>
                </div>
            </section>

            <section className="w-i-d row">
                <h2 className="title">What I do</h2>

                <div className="card-container row">
                    <div className="card">
                        <img className="card-img" src={iconConnect} alt="connect"></img>
                        <h3 className="card-title">Connect</h3>
                        <p className="card-snippet">If you are interested in my work click the "Connect" button to send me
                            an email</p>
                        <a href="/Contact" class="connect-btn btn btn-primary">Connect</a>
                    </div>
                    <div className="card">
                        <img className="card-img" src={iconPencil} alt="Planning"></img>
                        <h3 className="card-title">Design</h3>
                        <p className="card-snippet">Once we have connected we will collaborate on a proof of concept</p>

                    </div>
                    <div className="card">
                        <img className="card-img" src={iconComputer} alt="Computer Icon"></img>
                        <h3 className="card-title">Develop</h3>
                        <p className="card-snippet">Once we have a proof of concept, I will begin bringing your vision to
                            life</p>

                    </div>
                </div>
            </section>
        </div>
    )
}
export default Home;