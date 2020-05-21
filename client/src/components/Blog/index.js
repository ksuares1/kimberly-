import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";



function BlogComponent() {
    return (
        <Jumbotron className="blog">
            <h1>ShesoTechy</h1>
            <h2> A chronicle of my coding journey!</h2>
            <p>
                <Button className="blog-btn" variant="primary">Coming Soon</Button>
            </p>
        </Jumbotron>
    )
}

export default BlogComponent;