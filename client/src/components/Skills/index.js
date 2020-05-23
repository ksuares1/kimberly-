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
                    {/* <div className="text-center alert alert-success bg-transparent" role="alert"> */}
                         <img src={require("../../assets/img/html-icon.png")} alt="HTML5-icon" width="65" height="65" />
                 <img src={require("../../assets/img/node-icon.png")} alt="Node-icon" width="100" height="100" />
                {/* <img src="img/abc-7-logo.png" alt="nyt-logo" width="100" height=100 />
                <img src="img/the-view-logo.png" alt="nyt-logo" width="100" height=100 /> */}
                    {/* </div> */}
                </div> 
                </div>
                </main>
    )
}

export default SkillCompnent;