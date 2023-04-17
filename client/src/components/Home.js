import React from "react";
import Button from "react-bootstrap/Button";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="container home_container">
        <div className="home_innerdiv">
          <div className="left_div">
            <h2>
              Welcome to{" "}
              <span style={{ color: "#6c63ff" }}>Niraj Kumar Sharma</span>
            </h2>
            <p style={{ color: "#666", letterSpacing: ".5px", marginTop: 2 }}>
              I am a Front-end Developer with comprehensive knowledge of
              technologies including Reactjs, Javascript, CSS, HTML, jQuery, Git
              & Github. Strong engineering professional with a Bachelor's degree
              focused in Information Technology. My strengths are Willingness to
              learn, Dedicated towards my work, Always ready for a new challenge
              with a positive attitude.
            </p>
            <div className="btn_div mt-4">
              <Button
                variant="danger"
                style={{
                  letterSpacing: "1px",
                  border: "none",
                  borderRadius: 4,
                  background: "#2f2d69",
                  marginRight: 24,
                }}
              >
                YouTube
              </Button>
              <Button
                variant="danger"
                style={{
                  letterSpacing: "1px",
                  border: "none",
                  borderRadius: 4,
                  background: "#6c63ff",
                }}
              >
                YouTube
              </Button>
            </div>
          </div>
          <div className="right_div">
            <img src="front-end.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
