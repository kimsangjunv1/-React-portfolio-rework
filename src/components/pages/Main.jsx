import { useState, useEffect, Fragment } from "react";
import { AnimatePresence } from "framer-motion";

import imagesLoaded from "imagesloaded";

import Header from "../layout/Header";
import Footer from "./../layout/Footer";
import Loading from "../layout/Loading";
import Contact from "../layout/Contact";
import InformationComponents from "../common/InformationComponents";

import MouseSection from "../include/Mouse_section";

import LandingComponents from "../common/LandingComponents";
import SkillComponents from "../common/SkillComponents";
import WorklistComponents from "../common/WorklistComponents";
import StudyComponents from "../common/StudyComponents";

import ScrollNavComponents from "../common/ScrollNavComponents";

const Main = () => {
  const [toyProjectsInfo, setToyProjectsInfo] = useState([]);
  const [skillInfo, setSkillInfo] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrolled, setScrolled] = useState(0);
  const [mobile, setMobile] = useState(false);

  const pageType = location.hash.replace("#", "");

  useEffect(() => {
    // github에 저장된 포트폴리오 내용 담긴 json 가져오기
    fetch(
      "https://raw.githubusercontent.com/kimsangjunv1/-React-portfolio-rework/main/src/components/utils/data.json",
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((res) => {
        setSkillInfo(res.usedskill);
        setToyProjectsInfo(res.toyproject);
      });

    // 이미지 로딩
    imagesLoaded(document.querySelector("body"), function () {
      setIsLoaded(true);
    });

    // 스크롤
    window.onscroll = function () {
      let winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setScrolled((winScroll / height) * 100);
    };

    // 화면 사이즈 체크
    window.matchMedia("screen and (max-width: 1024px)").matches
      ? setMobile(true)
      : setMobile(false);
    window.addEventListener("resize", () => {
      window.matchMedia("screen and (max-width: 1024px)").matches
        ? setMobile(true)
        : setMobile(false);
    });
  }, []);

  return (
    <Fragment>
      <Header scrolled={scrolled} mobile={mobile} />
      <main>
        <AnimatePresence>{isLoaded ? "" : <Loading />}</AnimatePresence>
        <LandingComponents scrolled={scrolled} pageType={pageType} />
        <InformationComponents
          title={"테스트"}
          scrolled={scrolled}
          pageType={pageType}
        />
        <SkillComponents information={skillInfo} />
        <WorklistComponents information={toyProjectsInfo} mobile={mobile} />
        {/* <StudyComponents /> */}
        <Contact />
        <section className="function_box" id="function">
          <MouseSection />
          <ScrollNavComponents />
        </section>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Main;

//
