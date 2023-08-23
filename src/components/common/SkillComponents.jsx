import React from "react";

const SkillComponents = ({ information }) => {
  console.log("스킬 : ", information);
  const skillInfo = information;
  return (
    <div className="skill_container">
      {skillInfo.map((item, key) => {
        return (
          <div className="skill_section" key={key}>
            {item.list.map((item, key) => {
              return <p key={key}>{item.name}</p>;
            })}
            {/* <p className="skill_category">라이브러리</p>
        <div className="skill_icon_container">
          <img className="skill_item" src={Icon_Gitlab} alt="Gitlab 아이콘" />
          <img className="skill_item" src={Icon_Gitlab} alt="Gitlab 아이콘" />
          <img className="skill_item" src={Icon_Gitlab} alt="Gitlab 아이콘" />
          <img className="skill_item" src={Icon_Gitlab} alt="Gitlab 아이콘" />
        </div> */}
          </div>
        );
      })}

      {/* <div className="skill_section">
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
      </div> */}
    </div>
  );
};

export default SkillComponents;
