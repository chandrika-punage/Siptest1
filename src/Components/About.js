import React from "react";
import "./about.css"

const About =() =>{
  return(
    <div className="d-flex justify-content-center bg-primary align-items-center vh-100" id="b-img">
        <div className="border border-3 border-dark p-4 bg-white"> 
            <form>
                <h3 className="text-center">About</h3>
               <div className="mb-3">
                <div>
                    <label htmlFor="text">Any Querries</label>
                    <input type="text" placeholder="Name"
                    className="form-control"
                    name="text"/> 
                </div>
                <div className="mb-3">
                    <label htmlFor="signup">your Concern</label>
                    <input type="signup" placeholder="Enter your Concern"
                    className="form-control"
                    name="Password"/>
                </div>
                <div>
                   
                    <input type="checkbox" className="custom-control custom-checkbox mb-1"/>
                    <label htmlFor="checkbox" className="ms-1">Remember Me</label>
                </div>
                <div className="d-grid">
                    <button className="btn btn-secondary" type="submit">Sumbit</button>
                </div>
                </div>
            </form>
        </div>
    </div>
        
    
    );
};
export default About