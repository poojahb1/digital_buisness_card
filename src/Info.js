import React from "react";

export default function Info() {
  return (
    <div className="info-container">
      <img src="./images/pic.jpg" />
      <h1 className="full-name">Pooja Maheshwari</h1>
      <p className="job-title">Frontend Developer</p>
      <a className="website-name" href="#">
        poojamaheshwari.website
      </a>
      <div className="btn-container">
        <button className="email-btn btn">Email</button>
        <button className="linkedin-btn btn">LinkedIn</button>
      </div>
    </div>
  );
}
