import React from "react";

function Contact() {
    return (
        <div className="container">
             
            <form id="form" method="POST" className="" data-email="" action="https://script.google.com/macros/s/AKfycbwSikv2SkYmnRr34II78xPLK3iKhCbvM-gX2Qy7cw/exec">
​               <div className="form-elements">
                    
                    <div className="pure-group">
                        <label for="name">Name: </label>
                        <input id="name" name="name" placeholder="What your Mom calls you" ></input>
                    </div>      
                    
                    <div className="pure-group">
                        <label for="email"><em>Your</em> Email Address:</label>
                        <input id="email" name="email" type="email" value=""></input>
                        
                    </div>

                    ​<div className="pure-group">
                        <label for="message">Message: </label>
                        <textarea id="message" name="message" rows="10"placeholder="Tell us what's on your mind..."></textarea>
                        <button type="submit" class="button-success pure-button button-xlarge">Send it!</button>
                    </div>
                                 
                </div>
                
            </form>
            <div  className="thankyou_message">
                <h2>
                    <em>Thanks</em> for contacting us!
                    We will get back to you soon!
                </h2>
            </div>
        </div>
    )
}
export default Contact;