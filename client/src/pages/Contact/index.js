import React, { Component } from "react";
import API from "../../util/API";
import "./style.css";

class Contact extends Component {
    // use state for all imputs
    state = {
        fullName: "",
        email:"",
        message: "",
        result:{}
    };

    // add handleInput change function
    handleInputChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name);
        this.setState({
            [name]:value
        });
    };


    handleFormSubmit = e => {
        console.log("form submitted!")
        e.preventDefault();
        API.saveContact(this.state)
            .then(res => ({
                result: res.data
            }))
            .catch(err => console.log(err))
            this.setState({
                fullName:"", 
                email:"",
                message:""
            });
    };
    render() {
        return (
            <div>
                <div className="form-container">
                    <h1 className="heading">Connect with Me</h1>
                    <form id="form">
                        <p>Please Enter Full Name</p>
                        <input className="form-items" type="text" id="name" name="fullName" placeholder="John Doe" value={this.state.fullName} onChange={this.handleInputChange} />
                        <p>Please Enter Email</p>
                        <input className="form-items" type="email" id="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleInputChange} />
                        <p>Message:</p>
                        <textarea className="form-items" name="text" id="text" name="message" cols="30" rows="10" value={this.state.message} onChange={this.handleInputChange} ></textarea>
                        <button className="form-items btn btn-primary" id="submit-btn" onClick={this.handleFormSubmit}>Submit</button>
                    </form>
                </div>
            </div >
        )
    }
}

export default Contact;