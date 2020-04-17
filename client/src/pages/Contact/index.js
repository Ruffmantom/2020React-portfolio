import React from "react";
import "./style.css";

function Contact() {
    return (
        <div>
            <div className="form-container">
                <h1 className="heading">Contact Me</h1>
                <form id="form">
                    <p>Please Enter Full Name</p>
                    <input className="form-items" type="text" id="name" placeholder="John Doe"/>
                    <p>Please Enter Email</p>
                    <input className="form-items" type="email" id="email" placeholder="Email"/>
                    <p>Message:</p>
                    <textarea className="form-items" name="text" id="text" cols="30" rows="10"></textarea>
                    <input className="form-items btn btn-primary" type="submit" id="submit-btn" value="Submit" />
                </form>
            </div>
        </div>
    )
}
export default Contact;