// 재사용 컴포넌트
import DividerComponents from "../common/DividerComponents";
import TitleComponents from "../common/TitleComponents";

// 섹션별

import SkillComponents from "../common/SkillComponents";
import WorklistComponents from "../common/WorklistComponents";

const Navigate_section = ({ skillInfo, webstandardsInfo, toyProjectsInfo }) => {
  return (
    <div className="nav_section">
      {/* <TitleComponents title={"skill"} subTitle={"사용가능 기술"} />
      <SkillComponents information={skillInfo} />
      <DividerComponents /> */}
      <TitleComponents title={"web standards"} subTitle={"웹표준공부"} />
      <WorklistComponents information={webstandardsInfo} />
      <DividerComponents />
      <TitleComponents title={"Toy Project"} subTitle={"토이프로젝트"} />
      <WorklistComponents information={toyProjectsInfo} />
    </div>
  );
};

export default Navigate_section;
