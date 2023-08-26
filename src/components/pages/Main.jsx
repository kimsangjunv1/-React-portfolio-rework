import Header from "./../layout/Header";
import Contents from "../layout/Contents";
import Footer from "./../layout/Footer";
import Landing from "../layout/Landing";
import Information from "../common/Information";

import SkillComponents from "../common/SkillComponents";
import TitleComponents from "../common/TitleComponents";

import Navigate_section from "./../include/Navigate_section";
import Desc_section from "./../include/Desc_section";

import Scroll_up from "../common/Scroll_up";

// import loading from ''
import { useState, useEffect } from "react";

const Main = () => {
  const [toyProjectsInfo, setToyProjectsInfo] = useState([]);
  const [webstandardsInfo, setWebstandardsInfo] = useState([]);
  const [skillInfo, setSkillInfo] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/kimsangjunv1/-React-portfolio-rework/main/src/components/utils/data.json",
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((res) => {
        setWebstandardsInfo(res.webstandards);
        setSkillInfo(res.usedskill);
        setToyProjectsInfo(res.toyproject);
      });
    // .catch((error) => console.log("error", error));
  }, []);
  return (
    <div>
      <Landing />
      <Header />
      <Information title={"테스트"} />
      <TitleComponents
        title={"web standards"}
        subTitle={"웹표준공부"}
        setInner={true}
      />
      <SkillComponents information={skillInfo} />
      <Contents>
        <Navigate_section
          toyProjectsInfo={toyProjectsInfo}
          webstandardsInfo={webstandardsInfo}
          skillInfo={skillInfo}
        />
        <Desc_section />
        {/* <Loading /> */}
      </Contents>
      <Scroll_up />
      <Footer />
    </div>
  );
};

export default Main;

//
