// 재사용 컴포넌트
import DividerComponents from "../common/DividerComponents";
import TitleComponents from "../common/TitleComponents";

// 섹션별

import WorklistComponents from "../common/WorklistComponents";

const Navigate_section = ({ webstandardsInfo, toyProjectsInfo }) => {
  return (
    <div className="nav_section">
      <WorklistComponents information={toyProjectsInfo} />
      {/* <DividerComponents /> */}
      {/* <TitleComponents title={""} subTitle={""} /> */}
      {/* <WorklistComponents information={webstandardsInfo} /> */}
    </div>
  );
};

export default Navigate_section;
