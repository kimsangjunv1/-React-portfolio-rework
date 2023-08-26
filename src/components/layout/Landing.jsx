import React from "react";
import Landing_glow from "./../../assets/img/landing_bg_glow.svg";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing_inner">
        <h2 className="main_text">
          <em>즐기며</em> 개발하는
          <br />
          개발자 김상준 입니다 ;)
        </h2>
        <img src={Landing_glow} alt="" />
      </div>
    </div>
  );
};

export default Landing;
