import React from "react";

const url = "https://drive.google.com/uc?id=";

function Card(props) {
    return (
        <div className="rightCard">
            <img className="card-img" src={url + props.image} alt="Project Screen shot"></img>
            <h3 className="card-title">{props.name}</h3>
            <p className="card-snippet">{props.info}</p>
            <a href={props.link} class="connect-btn btn btn-primary">Check it Out!</a>
            <a href={props.gitLink} class="connect-btn btn btn-primary">Github Repo</a>
        </div>
    )
}

export default Card;
