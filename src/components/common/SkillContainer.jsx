import React from "react";

import Icon_Gitlab from "./../../assets/img/skill_gitlab.png";

const SkillContainer = () => {
  return (
    <div className="skill_container">
      <div className="skill_section">
        <p className="skill_category">라이브러리</p>
        <div className="skill_icon_container">
          <img className="skill_item" src={Icon_Gitlab} alt="Gitlab 아이콘" />
          <img className="skill_item" src={Icon_Gitlab} alt="Gitlab 아이콘" />
          <img className="skill_item" src={Icon_Gitlab} alt="Gitlab 아이콘" />
          <img className="skill_item" src={Icon_Gitlab} alt="Gitlab 아이콘" />
        </div>
      </div>

      <div className="skill_section">
        <p className="skill_category">프론트엔드</p>
        <div className="skill_icon_container">
          <img className="skill_item" src={Icon_Gitlab} alt="Gitlab 아이콘" />
          <img className="skill_item" src={Icon_Gitlab} alt="Gitlab 아이콘" />
          <img className="skill_item" src={Icon_Gitlab} alt="Gitlab 아이콘" />
          <img className="skill_item" src={Icon_Gitlab} alt="Gitlab 아이콘" />
        </div>
      </div>
      <div className="skill_section">
        <p className="skill_category">백엔드</p>
        <div className="skill_icon_container">
          <img className="skill_item" src={Icon_Gitlab} alt="Gitlab 아이콘" />
          <img className="skill_item" src={Icon_Gitlab} alt="Gitlab 아이콘" />
          <img className="skill_item" src={Icon_Gitlab} alt="Gitlab 아이콘" />
          <img className="skill_item" src={Icon_Gitlab} alt="Gitlab 아이콘" />
        </div>
      </div>
      <div className="skill_section">
        <p className="skill_category">기타</p>
        <div className="skill_icon_container">
          <img className="skill_item" src={Icon_Gitlab} alt="Gitlab 아이콘" />
          <img className="skill_item" src={Icon_Gitlab} alt="Gitlab 아이콘" />
          <img className="skill_item" src={Icon_Gitlab} alt="Gitlab 아이콘" />
          <img className="skill_item" src={Icon_Gitlab} alt="Gitlab 아이콘" />
        </div>
      </div>
    </div>
  );
};

export default SkillContainer;
