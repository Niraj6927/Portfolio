import React from 'react'
import "./About.css"

const About = () => {
  return (
    <div
      className="container mb-3 about_container"
      style={{ minHeight: "100%" }}
    >
      <div className="container main_container d-flex justify-content-around flex-wrap">
        <div className="left_container mt-5" style={{ width: 500 }}>
          <h2>
            I'm Niraj and I'm a{" "}
            <span style={{ color: "#6c63ff" }}>Developer</span>
          </h2>
          <p
            style={{
              color: "#666",
              letterSpacing: ".5px",
              marginTop: 2,
              lineHeight: 2,
            }}
          >
            I have 6 Months of experience in developing full stack MERN
            applications. <br />
            <b>Frontend Skills </b> : JavaScript, ReactJs, CSS, Html, Material
            Ui, Bootstrap, Styled Components and SASS.
            <br />
            <b>Backend Skills</b> :Node Js, Express Js, MongoDb.
          </p>
        </div>
        <div className="right_container mt-3">
          <img src="profile_img.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default About