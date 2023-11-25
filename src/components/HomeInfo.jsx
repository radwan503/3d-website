import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link className="neo-brutalism-white neo-btn" to={link}>
      {btnText}
      <img className="w-4 h-4 object-contain" src={arrow} alt="icon" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi,I am <span className="font-semibold">Radwan</span>
      <br />A Front-End Engineer From Bangladesh
    </h1>
  ),
  2: (
    <InfoBox
      text="Worked with multiple companies and picked up many skills along the way"
      link="/about"
      btnText="Learn more about me"
    />
  ),
  3: (
    <InfoBox
      text="Let multiple projects to success over the yrars.curious about impact?"
      link="/projects"
      btnText="Visit my protfolio"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for a dev? I am few keystroke away"
      link="/contact"
      btnText="Learn more"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
