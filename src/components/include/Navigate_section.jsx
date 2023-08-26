import React from "react";
import { useState, useEffect } from "react";

// 재사용 컴포넌트
import DividerComponents from "../common/DividerComponents";
import TitleComponents from "../common/TitleComponents";

// 섹션별

import SkillComponents from "../common/SkillComponents";
import WorklistComponents from "../common/WorklistComponents";

const Navigate_section = () => {
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
    <div className="nav_section">
      <TitleComponents title={"skill"} subTitle={"사용가능 기술"} />
      <SkillComponents information={skillInfo} />
      <DividerComponents />
      <TitleComponents title={"web standards"} subTitle={"웹표준공부"} />
      <WorklistComponents information={webstandardsInfo} />
      <DividerComponents />
      <TitleComponents title={"Toy Project"} subTitle={"토이프로젝트"} />
      <WorklistComponents information={toyProjectsInfo} />
    </div>
  );
};

export default Navigate_section;
