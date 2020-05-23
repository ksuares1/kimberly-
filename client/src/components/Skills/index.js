import React from "react";


function SkillCompnent() {
    return (
        <main>
            <h1>Technologies</h1>
            <br>
            </br>
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
                    <img src={require("../../assets/img/firebase-icon.png")} alt="firebase-icon" width="75" height="75" /> 
                    <img src={require("../../assets/img/mysql-icon.png")} alt="Mysql-icon" width="75" height="75" /> 
                    <img src={require("../../assets/img/mongodb-icon.png")} alt="Jquery-icon" width="85" height="85" /> 
                    <img src={require("../../assets/img/bootstrap-icon.png")} alt="Bootstrap-icon" width="75" height="75" /> 
                    <img src={require("../../assets/img/react.png")} alt="React-icon" width="75" height="75" /> 

                   
                </div>
            </div>
        </main>
    )
}

export default SkillCompnent;