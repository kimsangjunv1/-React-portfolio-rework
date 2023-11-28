import { useState, useEffect, Fragment, useRef } from "react";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

import imagesLoaded from "imagesloaded";

import Navigation from "../layout/Navigation";
import Contents from "../layout/Contents";
import Footer from "./../layout/Footer";
import Landing from "../layout/Landing";
import Loading from "../layout/Loading";
import Contact from "../layout/Contact";
import Information from "../common/Information";

import MouseSection from "../include/Mouse_section";

import SkillComponents from "../common/SkillComponents";
import TitleComponents from "../common/TitleComponents";
import WorklistComponents from "../common/WorklistComponents";
import SectionSpace from "../common/SpaceComponents";
import StudyComponents from "../common/StudyComponents";
import ScrollComponents from "./../common/ScrollComponents";

import Navigate_section from "./../include/Navigate_section";
import Desc_section from "./../include/Desc_section";

import Scroll_up from "../common/Scroll_up";

import Test from "../common/Test";

const Main = () => {
  const [toyProjectsInfo, setToyProjectsInfo] = useState([]);
  const [webstandardsInfo, setWebstandardsInfo] = useState([]);
  const [skillInfo, setSkillInfo] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrolled, setScrolled] = useState(0);
  const [mobile, setMobile] = useState(false);

  // console.log("?? : ", location.pathname.replace("/", ""));
  const pageType = location.pathname.replace("/", "");

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
        setWebstandardsInfo(res.webstandards);
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
      {/* <Header scrolled={scrolled} /> */}
      <Navigation scrolled={scrolled} mobile={mobile} />
      <main>
        <AnimatePresence>{isLoaded ? "" : <Loading />}</AnimatePresence>
        {/* 시작 */}
        <Landing scrolled={scrolled} pageType={pageType} />
        {/* 정보 */}
        <Information title={"테스트"} scrolled={scrolled} pageType={pageType} />
        {/* 사용 스택 */}
        <SkillComponents information={skillInfo} />
        {/* 작업물 */}
        <WorklistComponents information={toyProjectsInfo} mobile={mobile} />
        {/* <Navigate_section
        toyProjectsInfo={toyProjectsInfo}
        webstandardsInfo={webstandardsInfo}
        skillInfo={skillInfo}
      /> */}
        {/* <StudyComponents /> */}
        <Contact />
        <section className="function_box" id="function">
          <MouseSection />
          <Scroll_up />
        </section>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Main;

//
