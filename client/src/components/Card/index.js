import React from "react";

const url = "https://drive.google.com/uc?id=";

function Card(props) {
    return (
        <div className="rightCard">
            <img className="card-img" src={url + props.image} alt="Project Screen shot"></img>
            <h3 className="card-title">{props.name}</h3>
            <p className="card-snippet">{props.info}</p>
            <a href={props.link} className="dep-btn btn btn-primary">Check it Out!</a> <br></br>
            <a href={props.gitLink} className="git-btn btn btn-primary">Github Repo</a>
        </div>
    )
}

export default Card;
