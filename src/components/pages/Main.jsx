import Header from "./../layout/Header";
import Contents from "../layout/Contents";
import Footer from "./../layout/Footer";
import Landing from "../layout/Landing";
import Contact from "../layout/Contact";
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

  const [scrolled, setScrolled] = useState(0);
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

    // 스크롤
    window.onscroll = function () {
      console.log("실행1");
      let winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      console.log((winScroll / height) * 100);
      setScrolled((winScroll / height) * 100);
    };
  }, []);
  return (
    <div>
      <Landing scrolled={scrolled} />
      <Header scrolled={scrolled} />
      <Information title={"테스트"} scrolled={scrolled} />
      <TitleComponents
        title={"web standards"}
        subTitle={"Technics"}
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
      <Contact />
      <Scroll_up />
      <Footer />
    </div>
  );
};

export default Main;

//
