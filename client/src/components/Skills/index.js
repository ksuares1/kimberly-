import React from "react";


function SkillCompnent() {
    return (
        <main>
            <h1>Skills</h1>
            <br>
            </br>
            <div className="skills-conatainer">
                {/* style="margin: 0 auto;" */}
                <div className="featured-on-alerts">
                   
                    <img src={require("../../assets/img/html-icon.png")} alt="HTML5-icon" width="85" height="85" />
                    <img src={require("../../assets/img/node-icon.png")} alt="Node-icon" width="100" height="100" />
                    <img src={require("../../assets/img/expressjs-icon.jpg")} alt="express-icon" width="120" height="120" />
                    <img src={require("../../assets/img/javascript-icon.png")} alt="JavaScript-logo" width="75" height="75" /> 
                    <img src={require("../../assets/img/jquery-icon.png")} alt="Jquery-icon" width="75" height="75" /> 

                   
                </div>
            </div>
        </main>
    )
}

export default SkillCompnent;