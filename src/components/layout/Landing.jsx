import React from "react";
import Landing_glow from "./../../assets/img/landing_bg_glow.svg";

import Landing_fur_001 from "./../../assets/img/landing_fur_001.svg";
import Landing_fur_002 from "./../../assets/img/landing_fur_002.svg";
import Landing_fur_003 from "./../../assets/img/landing_fur_003.svg";
import Landing_fur_004 from "./../../assets/img/landing_fur_004.svg";
import Landing_fur_005 from "./../../assets/img/landing_fur_005.svg";
import Landing_fur_006 from "./../../assets/img/landing_fur_006.svg";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing_inner">
        <div className="fur_container">
          <img src={Landing_fur_001} alt="솜뭉치 캐릭터 001" />
          <img src={Landing_fur_002} alt="솜뭉치 캐릭터 001" />
          <img src={Landing_fur_003} alt="솜뭉치 캐릭터 001" />
          <img src={Landing_fur_004} alt="솜뭉치 캐릭터 001" />
          <img src={Landing_fur_005} alt="솜뭉치 캐릭터 001" />
          <img src={Landing_fur_006} alt="솜뭉치 캐릭터 001" />
        </div>
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
