import React from "react";

function About() {
    return (
        <div className="about">
            <div class="container">
                <div class="row align-items-center my-5">
                    <div class="col-lg-7">
                        <img
                            class="img-fluid rounded mb-4 mb-lg-0"
                            src="img/Tech.jpg"
                            alt=""
                        />
                    </div>
                    <div class="col-lg-5">
                        <h1 class="font-weight-light">About</h1>
                        <p>
                            We provide extraordinary services and solutions to government agengies. Our areas of expertise include HL7, Rhapsody, vocabulary,..., and cloud-based technologies.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;