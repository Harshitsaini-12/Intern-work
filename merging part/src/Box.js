import React from "react";
import "./App.css";

function box() {
  return (
    <div className="parent">
      <div className="child child1">
        <div className="half"></div>
        <div className="down-half">
          <h3>Meet our Sara Khan</h3>
          <p>
            “ As a UX designer, I want to help makethe user experience of Neyx
            even more intuitive and seamless than it already is”
          </p>
          <a href="">Read more</a>
        </div>
      </div>
      <div className="child child2">
        <h3>Stay up-to-date on our success</h3>
        <h4>NeyX Profile</h4>
        <div className="bg-color"></div>
      </div>
      <div className="child3 child">
        <p>
          “ The people here are some of the most smartest, most creative, nicest
          and hard working I have ever has a pleasure of working with.”
        </p>
        <span>Times of India</span>
      </div>
      <div className="child child2">
        <h3>Stay up-to-date on our success</h3>
        <h4>NeyX Profile</h4>
        <div className="bg-color"></div>
      </div>
      <div className="child">
        <div className="down-half1">
          <h3>Meet our Sara Khan</h3>
          <div className="bg-color"></div>
        </div>
      </div>
      <div className="child child2">
        <h3>Stay up-to-date on our success</h3>
        <h4>NeyX Profile</h4>
        <div className="bg-color"></div>
      </div>
    </div>
  );
}

export default box;
