import React from "react";
import { useState, useEffect } from "react";

// 재사용 컴포넌트
import DividerComponents from "../common/DividerComponents";
import TitleComponents from "../common/TitleComponents";

// 섹션별
import Information from "../common/Information";
import SkillContainer from "../common/SkillContainer";
import WorklistComponents from "../common/WorklistComponents";

const Navigate_section = () => {
  const [workInfo, setWorkInfo] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/kimsangjunv1/-React-portfolio-rework/main/src/components/utils/data.json",
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((res) => {
        setWorkInfo(res.webstandards);
      });
    // .catch((error) => console.log("error", error));
  }, []);
  return (
    <div className="nav_section">
      <Information title={"테스트"} />
      <DividerComponents />
      <TitleComponents title={"skill"} subTitle={"사용가능 기술"} />
      <SkillContainer />
      <DividerComponents />
      <TitleComponents title={"web standards"} subTitle={"웹표준공부"} />
      <WorklistComponents />
      <DividerComponents />
      <TitleComponents title={"Toy Project"} subTitle={"토이프로젝트"} />
      <WorklistComponents information={workInfo} />
    </div>
  );
};

export default Navigate_section;
