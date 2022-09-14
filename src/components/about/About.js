import React from "react";
import "./About.css";

function About() {
  return (
    <>
      <div className="aboutContainer" id="about">
        <div className="aboutData">
          <img src="images/p2.jpg" alt="" className="aboutImg" />
          <div className="aboutText">
            <h2 style={{ fontSize: "2vw", padding: "10px" }}>
              What Makes Our Coffee Special?
            </h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam facere expedita minima. Eaque tempora laboriosam dolores repudiandae at. Reprehenderit temporibus, repellat illo doloremque optio molestias vitae sunt quos vero error.lorem ipsum dolor sit amet consectetur adipis
            </p>
            <div>
              <h3>Timining</h3>

              <p><span>open :- </span> mon-sat: 9:00 PM to 10:00 AM</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
